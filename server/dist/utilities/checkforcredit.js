import creditService from "../service/creditpurchase.service.js";
import organizationService from "../service/organization.service.js";
export async function checkForCredit(organizationId) {
    try {
        const organizationDetails = await organizationService.getOrganizationByFilter({
            filter: { id: organizationId },
            include: {}
        });
        const now = new Date();
        const lastReset = organizationDetails.lastCreditReset;
        const oneMonthPassed = (now.getTime() - lastReset.getTime()) >= 30 * 24 * 60 * 60 * 1000;
        let credits = organizationDetails.credits;
        let isPremium = organizationDetails.isPremium;
        if (!isPremium && oneMonthPassed) {
            const updatedOrg = await creditService.updateCredit({
                filter: { id: organizationId },
                data: {
                    credits: 20,
                    lastCreditReset: now
                }
            });
            credits = updatedOrg.credits;
        }
        if (isPremium && credits < 20) {
            await creditService.updateCredit({
                filter: { id: organizationId },
                data: { isPremium: false }
            });
            isPremium = false;
        }
        return { credits, isPremium };
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=checkforcredit.js.map