import authService from "../service/auth.service.js";

interface IUserScore {
  userId: string,
  previousScore: number,
  previosClickedEventsCount: number,
  currentClickedEventScore: number
}

export default async function averageUserScore(data: IUserScore) {
  const newAverageScore = 
    (data.previousScore * data.previosClickedEventsCount + data.currentClickedEventScore) /
    (data.previosClickedEventsCount + 1);

  await authService.updateUser({
    filter: { id: data.userId },
    data: {
      userScore: newAverageScore,
      clickedEventsCount: data.previosClickedEventsCount + 1
    }
  })
  return;
}
