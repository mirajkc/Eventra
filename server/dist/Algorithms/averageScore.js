import authService from "../service/auth.service.js";
export default async function averageUserScore(data) {
    const newAverageScore = (data.previousScore * data.previosClickedEventsCount + data.currentClickedEventScore) /
        (data.previosClickedEventsCount + 1);
    await authService.updateUser({
        filter: { id: data.userId },
        data: {
            userScore: newAverageScore,
            clickedEventsCount: data.previosClickedEventsCount + 1
        }
    });
    return;
}
//# sourceMappingURL=averageScore.js.map