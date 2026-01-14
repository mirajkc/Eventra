import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"

class OrganizationMember {
  async getMemberCount({filter} : {filter : {organizationId? : string}}){
    return prisma.organizationMember.count({
      where : filter
    })
  }
  async getMemberByFilter({filter} : {filter : any}){
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

  async deleteMember ({filter} : {filter : {id : string, organizationId? : string}}){
    const result = await prisma.organizationMember.delete({
      where : filter,
    })
    if(!result){
      throw {
        code : 500,
        message : "Error cant leave the organization at the momment please try again. ",
        status : "LEAVE_ORGANIZATION_ERR"
      } as IErrorTypes
    }
    return result
  }

  async updateMember({filter , data} : {
    filter : {id : string, organizationId : string},
    data : {role : "OWNER" |"ADMIN"| "MEMBER" |"CREATOR"}
  }){
    const result = await prisma.organizationMember.update({
      where : filter,
      data : data
    })
    if(!result) {
      throw {
        code : 500, 
        message : "Error while updating the user role please try again. ",
        status : "MEMBER_UPDATE_ERR"
      } as IErrorTypes
    }
    return result
  }
}
const organizationMemberService = new OrganizationMember()
export default organizationMemberService