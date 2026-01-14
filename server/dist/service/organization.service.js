import { prisma } from "../config/prisma.config.js";
class OrganizationService {
    async getOrganizationCount(filter) {
        return await prisma.organization.count({
            where: filter
        });
    }
    async getOrganizationByOwner(id) {
        return await prisma.organization.findFirst({
            where: {
                members: {
                    some: {
                        role: "OWNER",
                        userId: id
                    }
                }
            }
        });
    }
    async addNewMember({ data }) {
        const newMember = await prisma.organizationMember.create({
            data: data
        });
        if (!newMember) {
            throw {
                code: 500,
                message: "Error while adding the organization member please try again",
                status: "ORGANIZATION_MEMBER_CREATION_ERR"
            };
        }
    }
    async createNewOrganization({ data, userId }) {
        const newOrganization = await prisma.$transaction(async (tx) => {
            const organization = await tx.organization.create({ data: data });
            await tx.organizationMember.create({
                data: {
                    userId: userId,
                    organizationId: organization.id,
                    role: "OWNER"
                }
            });
            return organization;
        });
        if (!newOrganization) {
            throw {
                code: 500,
                message: "Error occured while creating the organization please try again. ",
                status: "ORGANIZATION_CREATION_ERR"
            };
        }
        return newOrganization;
    }
    async getOrganizationByFilter({ filter, include }) {
        const result = await prisma.organization.findUnique({
            where: filter,
            include: include
        });
        if (!result) {
            throw {
                code: 404,
                message: "Organization not found please try again. ",
                status: "ORGANIZATIOM_NOT_FOUND_ERR"
            };
        }
        return result;
    }
    async getAllOrganizationByFilter({ filter, orderBy, take = 10, skip = 0 }) {
        const oraganizationArray = await prisma.organization.findMany({
            take: take,
            skip: skip,
            where: filter,
            orderBy: orderBy
        });
        if (!oraganizationArray) {
            throw {
                code: 500,
                message: "Error while fetching the organizations",
                status: "GET_ORGANIZATIONS_ERR"
            };
        }
        return oraganizationArray;
    }
    async updateOrganization({ filter, data }) {
        const result = await prisma.organization.update({
            where: filter,
            data: data
        });
        if (!result) {
            throw {
                code: 500,
                message: "Error while updating the organization please try again",
                status: "ORGANIZATION_UPLOAD_ERR"
            };
        }
        return result;
    }
    async deleteOrganization(id) {
        const result = await prisma.organization.delete({
            where: {
                id: id
            }
        });
        if (!result) {
            throw {
                code: 500,
                message: "Error while deleting the organization please try again",
                status: "ORGANIZATION_DELETE_ERR"
            };
        }
        return result;
    }
}
const organizationService = new OrganizationService();
export default organizationService;
//# sourceMappingURL=organization.service.js.map