import type { NextFunction, Request, Response } from "express"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import organizationService from "../service/organization.service.js"
import creditService from "../service/creditpurchase.service.js"
import type { IUserDetails } from "../lib/types/user.types.js"
import notificationService from "../service/notification.service.js"
import emailService from "../service/email.service.js"
import type { ICreateNotificaion } from "../lib/types/notification.types.js"
import { thanksForCreditPurchase } from "../emailtemplates/creditPurchaseTemplate.js"
import Stripe from "stripe"
import enviroment from "../config/enviroment.config.js"
import userService from "../service/user.service.js"

class CreditController {
  async getCredit(req: Request, res: Response, next: NextFunction) {
    try {
      const organizationId = String(req.params.organizationId)
      if (!organizationId) {
        throw {
          code: 404,
          message: "Please enter a valid organization details. ",
          status: "ORGANIZATION_ID_NOT_FOUND_ERR"
        } as IErrorTypes
      }

      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {}
      }) // service handles !result
      const now = new Date()
      const lastReset = organizationDetails.lastCreditReset
      const oneMonthPassed = (now.getTime() - lastReset.getTime()) >= 30 * 24 * 60 * 60 * 1000;
      let credits = organizationDetails.credits
      let isPremium = organizationDetails.isPremium
      if (!isPremium && oneMonthPassed) {
        const updatedOrg = await creditService.updateCredit({
          filter: { id: organizationId },
          data: {
            credits: 20,
            lastCreditReset: now
          }
        });
        credits = updatedOrg.credits;
      }

      if (isPremium && credits < 20) {
        await creditService.updateCredit({
          filter: { id: organizationId },
          data: { isPremium: false }
        });
        isPremium = false;
      }
      return res.json({
        message: "Organiation credits successfully fetched. ",
        data: {
          credits: credits,
          isPremium: isPremium
        }
      })

    } catch (error) {
      next(error)
    }
  }

  async getStripeURI(req: Request, res: Response, next: NextFunction) {
    try {
      //package, 50, 100, 200, 
      const userDetails: IUserDetails = req.userDetails
      const organizationId: string = String(req.params.organizationId)      
      const data: { package: "SMALL" | "MEDIUM" | "LARGE" } = req.body
      let credits
      let amount
      data.package === "SMALL" ? (credits = 50, amount = 20) : data.package === "MEDIUM" ? (credits = 100, amount = 35) : (credits = 200, amount = 75)

      console.log("Api hit", userDetails, organizationId, credits, amount);
      
      const stripe = new Stripe(enviroment.stripeKey || "")
      const session = await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items : [
          {
            price_data :{
              currency : "usd",
              product_data : {
                name : data.package,
              },
              unit_amount :  amount * 100,
            },
            quantity : 1
          }
        ],
        mode : "payment", 
        metadata : {
          userId : userDetails.id, 
          organizationId : organizationId, 
          package : data.package, 
          credits : String(credits)
        },
        success_url : `${enviroment.clientURL}/organization/${organizationId}`,
        cancel_url  : `${enviroment.clientURL}/payment-unsuccessfull/${organizationId}`,
      })

      console.log(session.url);
      

      return res.json({
        message: "Successfully got stripe url",
        data : session.url
      })

    } catch (error) {
      next(error)
    }
  }


  // webhook logic 
  async purchaseCredit(req: Request, res: Response, next: NextFunction) {
    try {
      //package, 50, 100, 200, 
      const userDetails: IUserDetails = req.userDetails
      const organizationId: string = String(req.params.organizationId)
      const data: { package: "SMALL" | "MEDIUM" | "LARGE" } = req.body
      let credits
      let amount
      data.package === "SMALL" ? (credits = 50, amount = 20) : data.package === "MEDIUM" ? (credits = 100, amount = 35) : (credits = 200, amount = 75)

      // direclty implementing it as no any payment gateway has been decided yet 
      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {
          members: {
            select: {
              userId: true
            }
          }
        }
      })
      // creating an transaction that first updates the credit in the organization and also created a new entry
      const updateData = {
        userId: userDetails.id,
        organizationId: organizationDetails.id,
        isPremium: true,
        now: new Date(),
        credits: credits,
        amount: amount,
        package: data.package
      }
      const creditPurchase = await creditService.purchaseCredit(updateData)

      await notificationService.sendNotificaion({
        type: "PAYMENT_SUCCESS",
        userId: updateData.userId,
        title: "You purchased the credits for the organization" + organizationDetails.name,
        message: `Hello, ${userDetails.name} you have purchased the credits for the organization ${organizationDetails.id}. The credits purchased was ${credits}. Thanks for your contribution. `,
        entityType: "ORGANIZATION",
        entityId: organizationDetails.id
      })

      await emailService.sendEmail({
        to: userDetails.email,
        subject: "Thank you for the credit purchased for the orgnization" + organizationDetails.name,
        message: thanksForCreditPurchase(userDetails.name, organizationDetails.name, updateData.credits)
      })

      const groupNotification: Array<ICreateNotificaion> =
        organizationDetails.members?.map((m: any) => ({
          userId: (m as { userId: string }).userId,
          title: "Credit purcahsed for the organization.",
          message: `${userDetails.name} has purchased the organization credits for ${organizationDetails.name}`,
          type: 'ORG_APPROVED',
          entityType: "ORGANIZATION",
          entityId: organizationDetails.id
        })) ?? []
      await notificationService.sendManyNotification(groupNotification)
      return res.json({
        message: "Credits purchased successfully. ",
      })

    } catch (error) {
      next(error)
    }
  }


  async handleWebhook(req: any, res: any) {
  try {
    const stripe = new Stripe(enviroment.stripeKey || '');
    const sig = req.headers['stripe-signature'] as string;

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        enviroment.stripeWebHookSigningSecret || ''
      );
    } catch (err: any) {
      console.log('Webhook signature verification failed.', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log("EVENT TYPE:", event.type);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      if (!session.metadata) {
        return res.status(400).send("No metadata found");
      }

      const { userId, organizationId, package: pkg, credits } = session.metadata as any;

      const amount = (session.amount_total ?? 0) / 100;

      const organizationDetails = await organizationService.getOrganizationByFilter({
        filter: { id: organizationId },
        include: {
          members: {
            select: { userId: true }
          }
        }
      });

      const userDetails = await userService.getUserDetails({ id: userId }, {});

      const updateData : any = {
        userId: userDetails.id,
        organizationId: organizationDetails.id,
        isPremium: true,
        now: new Date(),
        credits: Number(credits),
        amount: amount,
        package: pkg
      };

      await creditService.purchaseCredit(updateData);

      await notificationService.sendNotificaion({
        type: "PAYMENT_SUCCESS",
        userId: updateData.userId,
        title: "You purchased credits for " + organizationDetails.name,
        message: `Hello ${userDetails.name}, you purchased ${credits} credits for ${organizationDetails.name}.`,
        entityType: "ORGANIZATION",
        entityId: organizationDetails.id
      });

      await emailService.sendEmail({
        to: userDetails.email,
        subject: "Credit purchase successful - " + organizationDetails.name,
        message: thanksForCreditPurchase(
          userDetails.name,
          organizationDetails.name,
          Number(credits)
        )
      });

      const groupNotification : any =
        organizationDetails.members?.map((m: any) => ({
          userId: m.userId,
          title: "Credits purchased",
          message: `${userDetails.name} purchased credits for ${organizationDetails.name}`,
          type: 'ORG_APPROVED',
          entityType: "ORGANIZATION",
          entityId: organizationDetails.id
        })) ?? [];

      await notificationService.sendManyNotification(groupNotification);
    }

    res.json({ received: true });

  } catch (error) {
    console.log('Webhook error:', error);
    res.status(500).send('Internal Server Error');
  }
}

}



const creditController = new CreditController
export default creditController