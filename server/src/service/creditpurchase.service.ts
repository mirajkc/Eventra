import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"

class CreditPurchaseService{
  async getCreditPurchaseCount(filter: {purchasedBy? : string,organizationId? : string }){
    return prisma.creditPurchase.count({
      where :filter
    })
  }
  async updateCredit({filter, data}:{filter : {id : string}, data :{credits? : number,lastCreditReset? : Date,isPremium?:boolean  }  }){
    const updatedOrganization = await prisma.organization.update({
      where : filter, 
      data : data
    })
    if(!updatedOrganization){
      throw {
        code : 500, 
        message : "Error while updating the organization's credit please try again later. ",
        status : "ORGANIZATION_CREDIT_UPDATE_ERR"
      } as IErrorTypes
    }
    return updatedOrganization
  }

async purchaseCredit(data: {
  userId: string
  organizationId: string
  isPremium: boolean
  now: Date
  credits: number
  amount: number
  package: "SMALL" | "MEDIUM" | "LARGE"
}) {
  return prisma.$transaction(async (tx) => {
    const updatedOrganization = await tx.organization.update({
      where: { id: data.organizationId },
      data: {
        lastCreditReset: data.now,
        isPremium: data.isPremium,
        credits: { increment: data.credits },
      },
    })

    const newCreditEntry = await tx.creditPurchase.create({
      data: {
        organizationId: updatedOrganization.id,
        purchasedBy: data.userId,
        package: data.package,
        credits: data.credits,
        amount: data.amount,
      },
    })

    return {
      organization: updatedOrganization,
      creditPurchase: newCreditEntry,
    }
  })
}

}
const creditService = new CreditPurchaseService()
export default creditService