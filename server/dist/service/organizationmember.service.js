import { prisma } from "../config/prisma.config.js";
class OrganizationMember {
    async getMemberCount({ filter }) {
        return prisma.organizationMember.count({
            where: filter
        });
    }
    async getMemberByFilter({ filter }) {
        return await prisma.organizationMember.findFirst({
            where: filter
        });
    }
    async createNewMember(data) {
        const result = await prisma.organizationMember.create({
            data: data
        });
        if (!result) {
            throw {
                code: 500,
                message: "Error while joiing the organization please try again. ",
                status: "ORGANIZATION_JOIN_ERR"
            };
        }
        return result;
    }
    async deleteMember({ filter }) {
        const result = await prisma.organizationMember.delete({
            where: filter,
        });
        if (!result) {
            throw {
                code: 500,
                message: "Error cant leave the organization at the momment please try again. ",
                status: "LEAVE_ORGANIZATION_ERR"
            };
        }
        return result;
    }
    async updateMember({ filter, data }) {
        const result = await prisma.organizationMember.update({
            where: filter,
            data: data
        });
        if (!result) {
            throw {
                code: 500,
                message: "Error while updating the user role please try again. ",
                status: "MEMBER_UPDATE_ERR"
            };
        }
        return result;
    }
}
const organizationMemberService = new OrganizationMember();
export default organizationMemberService;
//# sourceMappingURL=organizationmember.service.js.map