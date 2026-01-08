import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"

class OrganizationMember {
  async getMemberCount({filter} : {filter : {organizationId? : string}}){
    return prisma.organizationMember.count({
      where : filter
    })
  }
  async getMemberByFilter(filter : any){
    return await prisma.organizationMember.findFirst({
      where : filter
    })
  }

  async createNewMember(data :any){
    const result = await prisma.organizationMember.create({
      data : data
    })
    if(!result){
      throw {
        code : 500,
        message : "Error while joiing the organization please try again. ",
        status : "ORGANIZATION_JOIN_ERR"
      } as IErrorTypes
    }
    return result
  }
}
const organizationMemberService = new OrganizationMember()
export default organizationMemberService