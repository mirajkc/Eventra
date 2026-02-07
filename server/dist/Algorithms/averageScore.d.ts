interface IUserScore {
    userId: string;
    previousScore: number;
    previosClickedEventsCount: number;
    currentClickedEventScore: number;
}
export default function averageUserScore(data: IUserScore): Promise<void>;
export {};
//# sourceMappingURL=averageScore.d.ts.map