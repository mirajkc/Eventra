import { prisma } from "../config/prisma.config.ts"

class OrganizationMember {
  async getMemberCount({filter} : {filter : {organizationId? : string}}){
    return prisma.organizationMember.count({
      where : filter
    })
  }
}
const organizationMemberService = new OrganizationMember()
export default organizationMemberService