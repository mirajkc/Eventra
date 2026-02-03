import eventParticipantService from "../service/eventParticipants.service.js";
export const totalRegistrationsPerMonth = async () => {
    const year = new Date().getFullYear();
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year + 1, 0, 1);
    const records = await eventParticipantService.getCountsPerMonth({
        where: {
            registeredAt: {
                gte: startDate,
                lt: endDate,
            },
        },
        select: {
            registeredAt: true,
        },
    });
    const monthCounts = Array(12).fill(0);
    records.forEach(r => {
        monthCounts[r.registeredAt.getMonth()]++;
    });
    return monthCounts.map((count, index) => ({
        year,
        month: index + 1,
        count,
    }));
};
export const totalAttendeesPerMonth = async () => {
    const year = new Date().getFullYear();
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year + 1, 0, 1);
    const records = await eventParticipantService.getCountsPerMonth({
        where: {
            checkedInAt: {
                gte: startDate,
                lt: endDate,
            },
        },
        select: {
            checkedInAt: true,
        },
    });
    const monthCounts = Array(12).fill(0);
    records.forEach(r => {
        if (!r.checkedInAt)
            return;
        monthCounts[r.checkedInAt.getMonth()]++;
    });
    return monthCounts.map((count, index) => ({
        year,
        month: index + 1,
        count,
    }));
};
//# sourceMappingURL=webdata.js.map