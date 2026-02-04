import { prisma } from "../config/prisma.config.js";
class CreditPurchaseService {
    async getCreditPurchaseCount(filter) {
        return prisma.creditPurchase.count({
            where: filter
        });
    }
    async updateCredit({ filter, data }) {
        const updatedOrganization = await prisma.organization.update({
            where: filter,
            data: data
        });
        if (!updatedOrganization) {
            throw {
                code: 500,
                message: "Error while updating the organization's credit please try again later. ",
                status: "ORGANIZATION_CREDIT_UPDATE_ERR"
            };
        }
        return updatedOrganization;
    }
    async purchaseCredit(data) {
        return prisma.$transaction(async (tx) => {
            const updatedOrganization = await tx.organization.update({
                where: { id: data.organizationId },
                data: {
                    lastCreditReset: data.now,
                    isPremium: data.isPremium,
                    credits: { increment: data.credits },
                },
            });
            const newCreditEntry = await tx.creditPurchase.create({
                data: {
                    organizationId: updatedOrganization.id,
                    purchasedBy: data.userId,
                    package: data.package,
                    credits: data.credits,
                    amount: data.amount,
                },
            });
            return {
                organization: updatedOrganization,
                creditPurchase: newCreditEntry,
            };
        });
    }
    async getRevenue() {
        const month = new Date().getMonth() + 1;
        const monthlyRevenue = await prisma.creditPurchase.aggregate({
            _sum: {
                amount: true
            },
            where: {
                purchasedAt: {
                    gte: new Date(new Date().getFullYear(), month - 1, 1),
                    lt: new Date(new Date().getFullYear(), month, 1)
                }
            }
        });
        const totalRevenue = await prisma.creditPurchase.aggregate({
            _sum: {
                amount: true
            }
        });
        return { monthlyRevenue: monthlyRevenue._sum.amount, totalRevenue: totalRevenue._sum.amount };
    }
    async getCreditPurchases() {
        const month = new Date().getMonth() + 1;
        const monthlyCreditPurchases = await prisma.creditPurchase.aggregate({
            _sum: {
                credits: true
            },
            where: {
                purchasedAt: {
                    gte: new Date(new Date().getFullYear(), month - 1, 1),
                    lt: new Date(new Date().getFullYear(), month, 1)
                }
            }
        });
        const totalCreditPurchases = await prisma.creditPurchase.aggregate({
            _sum: {
                credits: true
            }
        });
        return { monthlyCreditPurchases: monthlyCreditPurchases._sum.credits, totalCreditPurchases: totalCreditPurchases._sum.credits };
    }
    async getCreditPurchase(filter, skip, take, include) {
        const creditPurchases = await prisma.creditPurchase.findMany({
            where: filter,
            skip: skip,
            take: take,
            include: include
        });
        return creditPurchases;
    }
}
const creditService = new CreditPurchaseService();
export default creditService;
//# sourceMappingURL=creditpurchase.service.js.map