import { prisma } from "../config/prisma.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type { ICreateOrganization, IUploadOrganizationData } from "../lib/types/organization.types.js"

class OrganizationService {
  async getOrganizationCount(filter: any) {
    return await prisma.organization.count({
      where: filter
    })
  }
  async getOrganizationByOwner(id: string) {
    return await prisma.organization.findFirst({
      where: {
        members: {
          some: {
            role: "OWNER",
            userId: id
          }
        }
      }
    })
  }
  async addNewMember({ data }: {
    data: {
      userId: string,
      organizationId: string,
      role: "OWNER" | "ADMIN" | "MEMBER" | "CREATOR",

    }
  }) {
    const newMember = await prisma.organizationMember.create({
      data: data
    })
    if (!newMember) {
      throw {
        code: 500,
        message: "Error while adding the organization member please try again",
        status: "ORGANIZATION_MEMBER_CREATION_ERR"
      } as IErrorTypes
    }
  }
  async createNewOrganization({ data, userId }: { data: ICreateOrganization, userId: string }) {
    const newOrganization = await prisma.$transaction(async (tx) => {
      const organization = await tx.organization.create({ data: data })
      await tx.organizationMember.create({
        data: {
          userId: userId,
          organizationId: organization.id,
          role: "OWNER"
        }
      })
      return organization
    })
    if (!newOrganization) {
      throw {
        code: 500,
        message: "Error occured while creating the organization please try again. ",
        status: "ORGANIZATION_CREATION_ERR"
      } as IErrorTypes
    }
    return newOrganization
  }
  async getOrganizationByFilter({ filter, include }: { filter: { id: string }, include: any }) {
    const result = await prisma.organization.findUnique({
      where: filter,
      include: include
    }
    )
    if (!result) {
      throw {
        code: 404,
        message: "Organization not found please try again. ",
        status: "ORGANIZATIOM_NOT_FOUND_ERR"
      } as IErrorTypes
    }
    return result
  }

  async getAllOrganizationByFilter({ filter, orderBy, take = 10, skip = 0 }: { filter: any, orderBy: any, take: number, skip: number }) {
    const oraganizationArray = await prisma.organization.findMany({
      take: take,
      skip: skip,
      where: filter,
      orderBy: orderBy
    })
    if (!oraganizationArray) {
      throw {
        code: 500,
        message: "Error while fetching the organizations",
        status: "GET_ORGANIZATIONS_ERR"
      } as IErrorTypes
    }
    return oraganizationArray
  }
  async updateOrganization({ filter, data }: {
    filter: { id: string },
    data: IUploadOrganizationData
  }) {
    const result = await prisma.organization.update({
      where: filter,
      data: data
    })
    if (!result) {
      throw {
        code: 500,
        message: "Error while updating the organization please try again",
        status: "ORGANIZATION_UPLOAD_ERR"
      } as IErrorTypes
    }
    return result
  }

  async deleteOrganization(id: string) {
    const result = await prisma.organization.delete({
      where: {
        id: id
      }
    })
    if (!result) {
      throw {
        code: 500,
        message: "Error while deleting the organization please try again",
        status: "ORGANIZATION_DELETE_ERR"
      } as IErrorTypes
    }
    return result
  }

}
const organizationService = new OrganizationService()
export default organizationService