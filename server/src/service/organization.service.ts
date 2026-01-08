import { prisma } from "../config/prisma.config.ts"
import type { IErrorTypes } from "../lib/types/errorhandler.types.ts"
import type { ICreateOrganization } from "../lib/types/organization.types.ts"

class OrganizationService {
   async getOrganizationCount(filter : {userId :string}){
    return await prisma.organizationMember.count({
      where : filter
    })
  }
  async getOrganizationByOwner(id : string){
    return await prisma.organization.findFirst({
      where : {
        members : {
          some : {
            role : "ADMIN",
            userId : id
          }
        }
      }
    })
  }
  async addNewMember({data}:{
    data : {
      userId : string,
      organizationId : string,
      role :"OWNER"| "ADMIN"| "MEMBER" | "CREATOR",

    }
  }){
    const newMember = await prisma.organizationMember.create({
      data : data 
    })
    if(!newMember){
      throw {
        code : 500,
        message : "Error while adding the organization member please try again",
        status : "ORGANIZATION_MEMBER_CREATION_ERR"
      } as IErrorTypes
    }
  }
  async createNewOrganization({data,userId}:{data : ICreateOrganization, userId : string}){
    const newOrganization = await prisma.$transaction(async(tx) =>{
      const organization = await tx.organization.create({data : data})
      await tx.organizationMember.create({data : {
        userId : userId,
        organizationId : organization.id,
        role : "OWNER"
      }})
      return organization
    })
    if(!newOrganization) {
      throw {
        code : 500, 
        message : "Error occured while creating the organization please try again. ",
        status : "ORGANIZATION_CREATION_ERR"
      } as IErrorTypes
    }
    return newOrganization
  }
  async getOrganizationByFilter({filter, include} : {filter : {id : string}, include : any}){
    const result = await prisma.organization.findUnique({
      where : filter,
      include : include}
    )
    if(!result){
      throw {
        code : 404, 
        message : "Organization not found please try again. ",
        status : "ORGANIZATIOM_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    return result
  }
}
const organizationService = new OrganizationService()
export default organizationService