import { prisma } from "../config/prisma.config.ts"

class OrganizationService {
   async getOrganizationCount(filter : {userId :string}){
    return await prisma.organizationMember.count({
      where : filter
    })
  }
}
const organizationService = new OrganizationService()
export default organizationService