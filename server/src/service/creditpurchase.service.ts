import { prisma } from "../config/prisma.config.ts"

class CreditPurchaseService{
  async getCreditPurchaseCount(filter: {purchasedBy? : string,organizationId? : string }){
    return prisma.creditPurchase.count({
      where :filter
    })
  }
}
const creditService = new CreditPurchaseService()
export default creditService