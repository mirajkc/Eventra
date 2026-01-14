import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AdminPrediction
 *
 */
export type AdminPredictionModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminPredictionPayload>;
export type AggregateAdminPrediction = {
    _count: AdminPredictionCountAggregateOutputType | null;
    _avg: AdminPredictionAvgAggregateOutputType | null;
    _sum: AdminPredictionSumAggregateOutputType | null;
    _min: AdminPredictionMinAggregateOutputType | null;
    _max: AdminPredictionMaxAggregateOutputType | null;
};
export type AdminPredictionAvgAggregateOutputType = {
    predictedEventCount: number | null;
    predictedTotalParticipants: number | null;
    predictedAverageAttendance: number | null;
    confidence: number | null;
};
export type AdminPredictionSumAggregateOutputType = {
    predictedEventCount: number | null;
    predictedTotalParticipants: number | null;
    predictedAverageAttendance: number | null;
    confidence: number | null;
};
export type AdminPredictionMinAggregateOutputType = {
    id: string | null;
    predictedEventCount: number | null;
    predictedTotalParticipants: number | null;
    predictedAverageAttendance: number | null;
    predictedPopularCategory: string | null;
    predictionMonth: string | null;
    confidence: number | null;
    generatedAt: Date | null;
};
export type AdminPredictionMaxAggregateOutputType = {
    id: string | null;
    predictedEventCount: number | null;
    predictedTotalParticipants: number | null;
    predictedAverageAttendance: number | null;
    predictedPopularCategory: string | null;
    predictionMonth: string | null;
    confidence: number | null;
    generatedAt: Date | null;
};
export type AdminPredictionCountAggregateOutputType = {
    id: number;
    predictedEventCount: number;
    predictedTotalParticipants: number;
    predictedAverageAttendance: number;
    predictedPopularCategory: number;
    predictionMonth: number;
    confidence: number;
    generatedAt: number;
    _all: number;
};
export type AdminPredictionAvgAggregateInputType = {
    predictedEventCount?: true;
    predictedTotalParticipants?: true;
    predictedAverageAttendance?: true;
    confidence?: true;
};
export type AdminPredictionSumAggregateInputType = {
    predictedEventCount?: true;
    predictedTotalParticipants?: true;
    predictedAverageAttendance?: true;
    confidence?: true;
};
export type AdminPredictionMinAggregateInputType = {
    id?: true;
    predictedEventCount?: true;
    predictedTotalParticipants?: true;
    predictedAverageAttendance?: true;
    predictedPopularCategory?: true;
    predictionMonth?: true;
    confidence?: true;
    generatedAt?: true;
};
export type AdminPredictionMaxAggregateInputType = {
    id?: true;
    predictedEventCount?: true;
    predictedTotalParticipants?: true;
    predictedAverageAttendance?: true;
    predictedPopularCategory?: true;
    predictionMonth?: true;
    confidence?: true;
    generatedAt?: true;
};
export type AdminPredictionCountAggregateInputType = {
    id?: true;
    predictedEventCount?: true;
    predictedTotalParticipants?: true;
    predictedAverageAttendance?: true;
    predictedPopularCategory?: true;
    predictionMonth?: true;
    confidence?: true;
    generatedAt?: true;
    _all?: true;
};
export type AdminPredictionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPrediction to aggregate.
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminPredictions to fetch.
     */
    orderBy?: Prisma.AdminPredictionOrderByWithRelationInput | Prisma.AdminPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdminPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdminPredictions
    **/
    _count?: true | AdminPredictionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdminPredictionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdminPredictionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdminPredictionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdminPredictionMaxAggregateInputType;
};
export type GetAdminPredictionAggregateType<T extends AdminPredictionAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminPrediction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminPrediction[P]> : Prisma.GetScalarType<T[P], AggregateAdminPrediction[P]>;
};
export type AdminPredictionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminPredictionWhereInput;
    orderBy?: Prisma.AdminPredictionOrderByWithAggregationInput | Prisma.AdminPredictionOrderByWithAggregationInput[];
    by: Prisma.AdminPredictionScalarFieldEnum[] | Prisma.AdminPredictionScalarFieldEnum;
    having?: Prisma.AdminPredictionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminPredictionCountAggregateInputType | true;
    _avg?: AdminPredictionAvgAggregateInputType;
    _sum?: AdminPredictionSumAggregateInputType;
    _min?: AdminPredictionMinAggregateInputType;
    _max?: AdminPredictionMaxAggregateInputType;
};
export type AdminPredictionGroupByOutputType = {
    id: string;
    predictedEventCount: number;
    predictedTotalParticipants: number;
    predictedAverageAttendance: number;
    predictedPopularCategory: string;
    predictionMonth: string;
    confidence: number;
    generatedAt: Date;
    _count: AdminPredictionCountAggregateOutputType | null;
    _avg: AdminPredictionAvgAggregateOutputType | null;
    _sum: AdminPredictionSumAggregateOutputType | null;
    _min: AdminPredictionMinAggregateOutputType | null;
    _max: AdminPredictionMaxAggregateOutputType | null;
};
type GetAdminPredictionGroupByPayload<T extends AdminPredictionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminPredictionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminPredictionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminPredictionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminPredictionGroupByOutputType[P]>;
}>>;
export type AdminPredictionWhereInput = {
    AND?: Prisma.AdminPredictionWhereInput | Prisma.AdminPredictionWhereInput[];
    OR?: Prisma.AdminPredictionWhereInput[];
    NOT?: Prisma.AdminPredictionWhereInput | Prisma.AdminPredictionWhereInput[];
    id?: Prisma.StringFilter<"AdminPrediction"> | string;
    predictedEventCount?: Prisma.IntFilter<"AdminPrediction"> | number;
    predictedTotalParticipants?: Prisma.IntFilter<"AdminPrediction"> | number;
    predictedAverageAttendance?: Prisma.FloatFilter<"AdminPrediction"> | number;
    predictedPopularCategory?: Prisma.StringFilter<"AdminPrediction"> | string;
    predictionMonth?: Prisma.StringFilter<"AdminPrediction"> | string;
    confidence?: Prisma.FloatFilter<"AdminPrediction"> | number;
    generatedAt?: Prisma.DateTimeFilter<"AdminPrediction"> | Date | string;
};
export type AdminPredictionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    predictedPopularCategory?: Prisma.SortOrder;
    predictionMonth?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type AdminPredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AdminPredictionWhereInput | Prisma.AdminPredictionWhereInput[];
    OR?: Prisma.AdminPredictionWhereInput[];
    NOT?: Prisma.AdminPredictionWhereInput | Prisma.AdminPredictionWhereInput[];
    predictedEventCount?: Prisma.IntFilter<"AdminPrediction"> | number;
    predictedTotalParticipants?: Prisma.IntFilter<"AdminPrediction"> | number;
    predictedAverageAttendance?: Prisma.FloatFilter<"AdminPrediction"> | number;
    predictedPopularCategory?: Prisma.StringFilter<"AdminPrediction"> | string;
    predictionMonth?: Prisma.StringFilter<"AdminPrediction"> | string;
    confidence?: Prisma.FloatFilter<"AdminPrediction"> | number;
    generatedAt?: Prisma.DateTimeFilter<"AdminPrediction"> | Date | string;
}, "id">;
export type AdminPredictionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    predictedPopularCategory?: Prisma.SortOrder;
    predictionMonth?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdminPredictionCountOrderByAggregateInput;
    _avg?: Prisma.AdminPredictionAvgOrderByAggregateInput;
    _max?: Prisma.AdminPredictionMaxOrderByAggregateInput;
    _min?: Prisma.AdminPredictionMinOrderByAggregateInput;
    _sum?: Prisma.AdminPredictionSumOrderByAggregateInput;
};
export type AdminPredictionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminPredictionScalarWhereWithAggregatesInput | Prisma.AdminPredictionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminPredictionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminPredictionScalarWhereWithAggregatesInput | Prisma.AdminPredictionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdminPrediction"> | string;
    predictedEventCount?: Prisma.IntWithAggregatesFilter<"AdminPrediction"> | number;
    predictedTotalParticipants?: Prisma.IntWithAggregatesFilter<"AdminPrediction"> | number;
    predictedAverageAttendance?: Prisma.FloatWithAggregatesFilter<"AdminPrediction"> | number;
    predictedPopularCategory?: Prisma.StringWithAggregatesFilter<"AdminPrediction"> | string;
    predictionMonth?: Prisma.StringWithAggregatesFilter<"AdminPrediction"> | string;
    confidence?: Prisma.FloatWithAggregatesFilter<"AdminPrediction"> | number;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdminPrediction"> | Date | string;
};
export type AdminPredictionCreateInput = {
    id?: string;
    predictedEventCount: number;
    predictedTotalParticipants: number;
    predictedAverageAttendance: number;
    predictedPopularCategory: string;
    predictionMonth: string;
    confidence: number;
    generatedAt?: Date | string;
};
export type AdminPredictionUncheckedCreateInput = {
    id?: string;
    predictedEventCount: number;
    predictedTotalParticipants: number;
    predictedAverageAttendance: number;
    predictedPopularCategory: string;
    predictionMonth: string;
    confidence: number;
    generatedAt?: Date | string;
};
export type AdminPredictionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predictedEventCount?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedTotalParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedAverageAttendance?: Prisma.FloatFieldUpdateOperationsInput | number;
    predictedPopularCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    predictionMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.FloatFieldUpdateOperationsInput | number;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminPredictionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predictedEventCount?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedTotalParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedAverageAttendance?: Prisma.FloatFieldUpdateOperationsInput | number;
    predictedPopularCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    predictionMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.FloatFieldUpdateOperationsInput | number;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminPredictionCreateManyInput = {
    id?: string;
    predictedEventCount: number;
    predictedTotalParticipants: number;
    predictedAverageAttendance: number;
    predictedPopularCategory: string;
    predictionMonth: string;
    confidence: number;
    generatedAt?: Date | string;
};
export type AdminPredictionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predictedEventCount?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedTotalParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedAverageAttendance?: Prisma.FloatFieldUpdateOperationsInput | number;
    predictedPopularCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    predictionMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.FloatFieldUpdateOperationsInput | number;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminPredictionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predictedEventCount?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedTotalParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    predictedAverageAttendance?: Prisma.FloatFieldUpdateOperationsInput | number;
    predictedPopularCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    predictionMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    confidence?: Prisma.FloatFieldUpdateOperationsInput | number;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminPredictionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    predictedPopularCategory?: Prisma.SortOrder;
    predictionMonth?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type AdminPredictionAvgOrderByAggregateInput = {
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type AdminPredictionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    predictedPopularCategory?: Prisma.SortOrder;
    predictionMonth?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type AdminPredictionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    predictedPopularCategory?: Prisma.SortOrder;
    predictionMonth?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type AdminPredictionSumOrderByAggregateInput = {
    predictedEventCount?: Prisma.SortOrder;
    predictedTotalParticipants?: Prisma.SortOrder;
    predictedAverageAttendance?: Prisma.SortOrder;
    confidence?: Prisma.SortOrder;
};
export type AdminPredictionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    predictedEventCount?: boolean;
    predictedTotalParticipants?: boolean;
    predictedAverageAttendance?: boolean;
    predictedPopularCategory?: boolean;
    predictionMonth?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
}, ExtArgs["result"]["adminPrediction"]>;
export type AdminPredictionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    predictedEventCount?: boolean;
    predictedTotalParticipants?: boolean;
    predictedAverageAttendance?: boolean;
    predictedPopularCategory?: boolean;
    predictionMonth?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
}, ExtArgs["result"]["adminPrediction"]>;
export type AdminPredictionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    predictedEventCount?: boolean;
    predictedTotalParticipants?: boolean;
    predictedAverageAttendance?: boolean;
    predictedPopularCategory?: boolean;
    predictionMonth?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
}, ExtArgs["result"]["adminPrediction"]>;
export type AdminPredictionSelectScalar = {
    id?: boolean;
    predictedEventCount?: boolean;
    predictedTotalParticipants?: boolean;
    predictedAverageAttendance?: boolean;
    predictedPopularCategory?: boolean;
    predictionMonth?: boolean;
    confidence?: boolean;
    generatedAt?: boolean;
};
export type AdminPredictionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "predictedEventCount" | "predictedTotalParticipants" | "predictedAverageAttendance" | "predictedPopularCategory" | "predictionMonth" | "confidence" | "generatedAt", ExtArgs["result"]["adminPrediction"]>;
export type $AdminPredictionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminPrediction";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        predictedEventCount: number;
        predictedTotalParticipants: number;
        predictedAverageAttendance: number;
        predictedPopularCategory: string;
        predictionMonth: string;
        confidence: number;
        generatedAt: Date;
    }, ExtArgs["result"]["adminPrediction"]>;
    composites: {};
};
export type AdminPredictionGetPayload<S extends boolean | null | undefined | AdminPredictionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload, S>;
export type AdminPredictionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminPredictionCountAggregateInputType | true;
};
export interface AdminPredictionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminPrediction'];
        meta: {
            name: 'AdminPrediction';
        };
    };
    /**
     * Find zero or one AdminPrediction that matches the filter.
     * @param {AdminPredictionFindUniqueArgs} args - Arguments to find a AdminPrediction
     * @example
     * // Get one AdminPrediction
     * const adminPrediction = await prisma.adminPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminPredictionFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminPredictionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdminPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminPredictionFindUniqueOrThrowArgs} args - Arguments to find a AdminPrediction
     * @example
     * // Get one AdminPrediction
     * const adminPrediction = await prisma.adminPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminPredictionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdminPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionFindFirstArgs} args - Arguments to find a AdminPrediction
     * @example
     * // Get one AdminPrediction
     * const adminPrediction = await prisma.adminPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminPredictionFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminPredictionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdminPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionFindFirstOrThrowArgs} args - Arguments to find a AdminPrediction
     * @example
     * // Get one AdminPrediction
     * const adminPrediction = await prisma.adminPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminPredictionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdminPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminPredictions
     * const adminPredictions = await prisma.adminPrediction.findMany()
     *
     * // Get first 10 AdminPredictions
     * const adminPredictions = await prisma.adminPrediction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminPredictionWithIdOnly = await prisma.adminPrediction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdminPredictionFindManyArgs>(args?: Prisma.SelectSubset<T, AdminPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdminPrediction.
     * @param {AdminPredictionCreateArgs} args - Arguments to create a AdminPrediction.
     * @example
     * // Create one AdminPrediction
     * const AdminPrediction = await prisma.adminPrediction.create({
     *   data: {
     *     // ... data to create a AdminPrediction
     *   }
     * })
     *
     */
    create<T extends AdminPredictionCreateArgs>(args: Prisma.SelectSubset<T, AdminPredictionCreateArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdminPredictions.
     * @param {AdminPredictionCreateManyArgs} args - Arguments to create many AdminPredictions.
     * @example
     * // Create many AdminPredictions
     * const adminPrediction = await prisma.adminPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminPredictionCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AdminPredictions and returns the data saved in the database.
     * @param {AdminPredictionCreateManyAndReturnArgs} args - Arguments to create many AdminPredictions.
     * @example
     * // Create many AdminPredictions
     * const adminPrediction = await prisma.adminPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AdminPredictions and only return the `id`
     * const adminPredictionWithIdOnly = await prisma.adminPrediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminPredictionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AdminPrediction.
     * @param {AdminPredictionDeleteArgs} args - Arguments to delete one AdminPrediction.
     * @example
     * // Delete one AdminPrediction
     * const AdminPrediction = await prisma.adminPrediction.delete({
     *   where: {
     *     // ... filter to delete one AdminPrediction
     *   }
     * })
     *
     */
    delete<T extends AdminPredictionDeleteArgs>(args: Prisma.SelectSubset<T, AdminPredictionDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdminPrediction.
     * @param {AdminPredictionUpdateArgs} args - Arguments to update one AdminPrediction.
     * @example
     * // Update one AdminPrediction
     * const adminPrediction = await prisma.adminPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminPredictionUpdateArgs>(args: Prisma.SelectSubset<T, AdminPredictionUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdminPredictions.
     * @param {AdminPredictionDeleteManyArgs} args - Arguments to filter AdminPredictions to delete.
     * @example
     * // Delete a few AdminPredictions
     * const { count } = await prisma.adminPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminPredictionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdminPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminPredictions
     * const adminPrediction = await prisma.adminPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminPredictionUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdminPredictions and returns the data updated in the database.
     * @param {AdminPredictionUpdateManyAndReturnArgs} args - Arguments to update many AdminPredictions.
     * @example
     * // Update many AdminPredictions
     * const adminPrediction = await prisma.adminPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AdminPredictions and only return the `id`
     * const adminPredictionWithIdOnly = await prisma.adminPrediction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AdminPredictionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AdminPrediction.
     * @param {AdminPredictionUpsertArgs} args - Arguments to update or create a AdminPrediction.
     * @example
     * // Update or create a AdminPrediction
     * const adminPrediction = await prisma.adminPrediction.upsert({
     *   create: {
     *     // ... data to create a AdminPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminPrediction we want to update
     *   }
     * })
     */
    upsert<T extends AdminPredictionUpsertArgs>(args: Prisma.SelectSubset<T, AdminPredictionUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminPredictionClient<runtime.Types.Result.GetResult<Prisma.$AdminPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdminPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionCountArgs} args - Arguments to filter AdminPredictions to count.
     * @example
     * // Count the number of AdminPredictions
     * const count = await prisma.adminPrediction.count({
     *   where: {
     *     // ... the filter for the AdminPredictions we want to count
     *   }
     * })
    **/
    count<T extends AdminPredictionCountArgs>(args?: Prisma.Subset<T, AdminPredictionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminPredictionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdminPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminPredictionAggregateArgs>(args: Prisma.Subset<T, AdminPredictionAggregateArgs>): Prisma.PrismaPromise<GetAdminPredictionAggregateType<T>>;
    /**
     * Group by AdminPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AdminPredictionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminPredictionGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminPredictionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdminPrediction model
     */
    readonly fields: AdminPredictionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdminPrediction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdminPredictionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the AdminPrediction model
 */
export interface AdminPredictionFieldRefs {
    readonly id: Prisma.FieldRef<"AdminPrediction", 'String'>;
    readonly predictedEventCount: Prisma.FieldRef<"AdminPrediction", 'Int'>;
    readonly predictedTotalParticipants: Prisma.FieldRef<"AdminPrediction", 'Int'>;
    readonly predictedAverageAttendance: Prisma.FieldRef<"AdminPrediction", 'Float'>;
    readonly predictedPopularCategory: Prisma.FieldRef<"AdminPrediction", 'String'>;
    readonly predictionMonth: Prisma.FieldRef<"AdminPrediction", 'String'>;
    readonly confidence: Prisma.FieldRef<"AdminPrediction", 'Float'>;
    readonly generatedAt: Prisma.FieldRef<"AdminPrediction", 'DateTime'>;
}
/**
 * AdminPrediction findUnique
 */
export type AdminPredictionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * Filter, which AdminPrediction to fetch.
     */
    where: Prisma.AdminPredictionWhereUniqueInput;
};
/**
 * AdminPrediction findUniqueOrThrow
 */
export type AdminPredictionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * Filter, which AdminPrediction to fetch.
     */
    where: Prisma.AdminPredictionWhereUniqueInput;
};
/**
 * AdminPrediction findFirst
 */
export type AdminPredictionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * Filter, which AdminPrediction to fetch.
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminPredictions to fetch.
     */
    orderBy?: Prisma.AdminPredictionOrderByWithRelationInput | Prisma.AdminPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminPredictions.
     */
    cursor?: Prisma.AdminPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminPredictions.
     */
    distinct?: Prisma.AdminPredictionScalarFieldEnum | Prisma.AdminPredictionScalarFieldEnum[];
};
/**
 * AdminPrediction findFirstOrThrow
 */
export type AdminPredictionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * Filter, which AdminPrediction to fetch.
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminPredictions to fetch.
     */
    orderBy?: Prisma.AdminPredictionOrderByWithRelationInput | Prisma.AdminPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminPredictions.
     */
    cursor?: Prisma.AdminPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminPredictions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminPredictions.
     */
    distinct?: Prisma.AdminPredictionScalarFieldEnum | Prisma.AdminPredictionScalarFieldEnum[];
};
/**
 * AdminPrediction findMany
 */
export type AdminPredictionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * Filter, which AdminPredictions to fetch.
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminPredictions to fetch.
     */
    orderBy?: Prisma.AdminPredictionOrderByWithRelationInput | Prisma.AdminPredictionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdminPredictions.
     */
    cursor?: Prisma.AdminPredictionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminPredictions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminPredictions.
     */
    skip?: number;
    distinct?: Prisma.AdminPredictionScalarFieldEnum | Prisma.AdminPredictionScalarFieldEnum[];
};
/**
 * AdminPrediction create
 */
export type AdminPredictionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * The data needed to create a AdminPrediction.
     */
    data: Prisma.XOR<Prisma.AdminPredictionCreateInput, Prisma.AdminPredictionUncheckedCreateInput>;
};
/**
 * AdminPrediction createMany
 */
export type AdminPredictionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminPredictions.
     */
    data: Prisma.AdminPredictionCreateManyInput | Prisma.AdminPredictionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdminPrediction createManyAndReturn
 */
export type AdminPredictionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * The data used to create many AdminPredictions.
     */
    data: Prisma.AdminPredictionCreateManyInput | Prisma.AdminPredictionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdminPrediction update
 */
export type AdminPredictionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * The data needed to update a AdminPrediction.
     */
    data: Prisma.XOR<Prisma.AdminPredictionUpdateInput, Prisma.AdminPredictionUncheckedUpdateInput>;
    /**
     * Choose, which AdminPrediction to update.
     */
    where: Prisma.AdminPredictionWhereUniqueInput;
};
/**
 * AdminPrediction updateMany
 */
export type AdminPredictionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminPredictions.
     */
    data: Prisma.XOR<Prisma.AdminPredictionUpdateManyMutationInput, Prisma.AdminPredictionUncheckedUpdateManyInput>;
    /**
     * Filter which AdminPredictions to update
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * Limit how many AdminPredictions to update.
     */
    limit?: number;
};
/**
 * AdminPrediction updateManyAndReturn
 */
export type AdminPredictionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * The data used to update AdminPredictions.
     */
    data: Prisma.XOR<Prisma.AdminPredictionUpdateManyMutationInput, Prisma.AdminPredictionUncheckedUpdateManyInput>;
    /**
     * Filter which AdminPredictions to update
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * Limit how many AdminPredictions to update.
     */
    limit?: number;
};
/**
 * AdminPrediction upsert
 */
export type AdminPredictionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * The filter to search for the AdminPrediction to update in case it exists.
     */
    where: Prisma.AdminPredictionWhereUniqueInput;
    /**
     * In case the AdminPrediction found by the `where` argument doesn't exist, create a new AdminPrediction with this data.
     */
    create: Prisma.XOR<Prisma.AdminPredictionCreateInput, Prisma.AdminPredictionUncheckedCreateInput>;
    /**
     * In case the AdminPrediction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdminPredictionUpdateInput, Prisma.AdminPredictionUncheckedUpdateInput>;
};
/**
 * AdminPrediction delete
 */
export type AdminPredictionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
    /**
     * Filter which AdminPrediction to delete.
     */
    where: Prisma.AdminPredictionWhereUniqueInput;
};
/**
 * AdminPrediction deleteMany
 */
export type AdminPredictionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPredictions to delete
     */
    where?: Prisma.AdminPredictionWhereInput;
    /**
     * Limit how many AdminPredictions to delete.
     */
    limit?: number;
};
/**
 * AdminPrediction without action
 */
export type AdminPredictionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPrediction
     */
    select?: Prisma.AdminPredictionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminPrediction
     */
    omit?: Prisma.AdminPredictionOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AdminPrediction.d.ts.map