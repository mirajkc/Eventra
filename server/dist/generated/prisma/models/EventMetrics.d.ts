import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventMetrics
 *
 */
export type EventMetricsModel = runtime.Types.Result.DefaultSelection<Prisma.$EventMetricsPayload>;
export type AggregateEventMetrics = {
    _count: EventMetricsCountAggregateOutputType | null;
    _avg: EventMetricsAvgAggregateOutputType | null;
    _sum: EventMetricsSumAggregateOutputType | null;
    _min: EventMetricsMinAggregateOutputType | null;
    _max: EventMetricsMaxAggregateOutputType | null;
};
export type EventMetricsAvgAggregateOutputType = {
    totalViews: number | null;
    totalRegistrations: number | null;
    totalAttendees: number | null;
};
export type EventMetricsSumAggregateOutputType = {
    totalViews: number | null;
    totalRegistrations: number | null;
    totalAttendees: number | null;
};
export type EventMetricsMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    totalViews: number | null;
    totalRegistrations: number | null;
    totalAttendees: number | null;
    updatedAt: Date | null;
};
export type EventMetricsMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    totalViews: number | null;
    totalRegistrations: number | null;
    totalAttendees: number | null;
    updatedAt: Date | null;
};
export type EventMetricsCountAggregateOutputType = {
    id: number;
    eventId: number;
    totalViews: number;
    totalRegistrations: number;
    totalAttendees: number;
    updatedAt: number;
    _all: number;
};
export type EventMetricsAvgAggregateInputType = {
    totalViews?: true;
    totalRegistrations?: true;
    totalAttendees?: true;
};
export type EventMetricsSumAggregateInputType = {
    totalViews?: true;
    totalRegistrations?: true;
    totalAttendees?: true;
};
export type EventMetricsMinAggregateInputType = {
    id?: true;
    eventId?: true;
    totalViews?: true;
    totalRegistrations?: true;
    totalAttendees?: true;
    updatedAt?: true;
};
export type EventMetricsMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    totalViews?: true;
    totalRegistrations?: true;
    totalAttendees?: true;
    updatedAt?: true;
};
export type EventMetricsCountAggregateInputType = {
    id?: true;
    eventId?: true;
    totalViews?: true;
    totalRegistrations?: true;
    totalAttendees?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventMetricsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventMetrics to aggregate.
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricsOrderByWithRelationInput | Prisma.EventMetricsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventMetricsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventMetrics
    **/
    _count?: true | EventMetricsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventMetricsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventMetricsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventMetricsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventMetricsMaxAggregateInputType;
};
export type GetEventMetricsAggregateType<T extends EventMetricsAggregateArgs> = {
    [P in keyof T & keyof AggregateEventMetrics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventMetrics[P]> : Prisma.GetScalarType<T[P], AggregateEventMetrics[P]>;
};
export type EventMetricsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventMetricsWhereInput;
    orderBy?: Prisma.EventMetricsOrderByWithAggregationInput | Prisma.EventMetricsOrderByWithAggregationInput[];
    by: Prisma.EventMetricsScalarFieldEnum[] | Prisma.EventMetricsScalarFieldEnum;
    having?: Prisma.EventMetricsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventMetricsCountAggregateInputType | true;
    _avg?: EventMetricsAvgAggregateInputType;
    _sum?: EventMetricsSumAggregateInputType;
    _min?: EventMetricsMinAggregateInputType;
    _max?: EventMetricsMaxAggregateInputType;
};
export type EventMetricsGroupByOutputType = {
    id: string;
    eventId: string;
    totalViews: number;
    totalRegistrations: number;
    totalAttendees: number;
    updatedAt: Date;
    _count: EventMetricsCountAggregateOutputType | null;
    _avg: EventMetricsAvgAggregateOutputType | null;
    _sum: EventMetricsSumAggregateOutputType | null;
    _min: EventMetricsMinAggregateOutputType | null;
    _max: EventMetricsMaxAggregateOutputType | null;
};
type GetEventMetricsGroupByPayload<T extends EventMetricsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventMetricsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventMetricsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventMetricsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventMetricsGroupByOutputType[P]>;
}>>;
export type EventMetricsWhereInput = {
    AND?: Prisma.EventMetricsWhereInput | Prisma.EventMetricsWhereInput[];
    OR?: Prisma.EventMetricsWhereInput[];
    NOT?: Prisma.EventMetricsWhereInput | Prisma.EventMetricsWhereInput[];
    id?: Prisma.StringFilter<"EventMetrics"> | string;
    eventId?: Prisma.StringFilter<"EventMetrics"> | string;
    totalViews?: Prisma.IntFilter<"EventMetrics"> | number;
    totalRegistrations?: Prisma.IntFilter<"EventMetrics"> | number;
    totalAttendees?: Prisma.IntFilter<"EventMetrics"> | number;
    updatedAt?: Prisma.DateTimeFilter<"EventMetrics"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
};
export type EventMetricsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type EventMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId?: string;
    AND?: Prisma.EventMetricsWhereInput | Prisma.EventMetricsWhereInput[];
    OR?: Prisma.EventMetricsWhereInput[];
    NOT?: Prisma.EventMetricsWhereInput | Prisma.EventMetricsWhereInput[];
    totalViews?: Prisma.IntFilter<"EventMetrics"> | number;
    totalRegistrations?: Prisma.IntFilter<"EventMetrics"> | number;
    totalAttendees?: Prisma.IntFilter<"EventMetrics"> | number;
    updatedAt?: Prisma.DateTimeFilter<"EventMetrics"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
}, "id" | "eventId">;
export type EventMetricsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventMetricsCountOrderByAggregateInput;
    _avg?: Prisma.EventMetricsAvgOrderByAggregateInput;
    _max?: Prisma.EventMetricsMaxOrderByAggregateInput;
    _min?: Prisma.EventMetricsMinOrderByAggregateInput;
    _sum?: Prisma.EventMetricsSumOrderByAggregateInput;
};
export type EventMetricsScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventMetricsScalarWhereWithAggregatesInput | Prisma.EventMetricsScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventMetricsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventMetricsScalarWhereWithAggregatesInput | Prisma.EventMetricsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventMetrics"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventMetrics"> | string;
    totalViews?: Prisma.IntWithAggregatesFilter<"EventMetrics"> | number;
    totalRegistrations?: Prisma.IntWithAggregatesFilter<"EventMetrics"> | number;
    totalAttendees?: Prisma.IntWithAggregatesFilter<"EventMetrics"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventMetrics"> | Date | string;
};
export type EventMetricsCreateInput = {
    id?: string;
    totalViews?: number;
    totalRegistrations?: number;
    totalAttendees?: number;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutEventMetricsInput;
};
export type EventMetricsUncheckedCreateInput = {
    id?: string;
    eventId: string;
    totalViews?: number;
    totalRegistrations?: number;
    totalAttendees?: number;
    updatedAt?: Date | string;
};
export type EventMetricsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalViews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalRegistrations?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutEventMetricsNestedInput;
};
export type EventMetricsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalViews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalRegistrations?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricsCreateManyInput = {
    id?: string;
    eventId: string;
    totalViews?: number;
    totalRegistrations?: number;
    totalAttendees?: number;
    updatedAt?: Date | string;
};
export type EventMetricsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalViews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalRegistrations?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalViews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalRegistrations?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricsNullableScalarRelationFilter = {
    is?: Prisma.EventMetricsWhereInput | null;
    isNot?: Prisma.EventMetricsWhereInput | null;
};
export type EventMetricsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventMetricsAvgOrderByAggregateInput = {
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
};
export type EventMetricsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventMetricsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventMetricsSumOrderByAggregateInput = {
    totalViews?: Prisma.SortOrder;
    totalRegistrations?: Prisma.SortOrder;
    totalAttendees?: Prisma.SortOrder;
};
export type EventMetricsCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventMetricsCreateWithoutEventInput, Prisma.EventMetricsUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventMetricsCreateOrConnectWithoutEventInput;
    connect?: Prisma.EventMetricsWhereUniqueInput;
};
export type EventMetricsUncheckedCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventMetricsCreateWithoutEventInput, Prisma.EventMetricsUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventMetricsCreateOrConnectWithoutEventInput;
    connect?: Prisma.EventMetricsWhereUniqueInput;
};
export type EventMetricsUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventMetricsCreateWithoutEventInput, Prisma.EventMetricsUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventMetricsCreateOrConnectWithoutEventInput;
    upsert?: Prisma.EventMetricsUpsertWithoutEventInput;
    disconnect?: Prisma.EventMetricsWhereInput | boolean;
    delete?: Prisma.EventMetricsWhereInput | boolean;
    connect?: Prisma.EventMetricsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventMetricsUpdateToOneWithWhereWithoutEventInput, Prisma.EventMetricsUpdateWithoutEventInput>, Prisma.EventMetricsUncheckedUpdateWithoutEventInput>;
};
export type EventMetricsUncheckedUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventMetricsCreateWithoutEventInput, Prisma.EventMetricsUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventMetricsCreateOrConnectWithoutEventInput;
    upsert?: Prisma.EventMetricsUpsertWithoutEventInput;
    disconnect?: Prisma.EventMetricsWhereInput | boolean;
    delete?: Prisma.EventMetricsWhereInput | boolean;
    connect?: Prisma.EventMetricsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventMetricsUpdateToOneWithWhereWithoutEventInput, Prisma.EventMetricsUpdateWithoutEventInput>, Prisma.EventMetricsUncheckedUpdateWithoutEventInput>;
};
export type EventMetricsCreateWithoutEventInput = {
    id?: string;
    totalViews?: number;
    totalRegistrations?: number;
    totalAttendees?: number;
    updatedAt?: Date | string;
};
export type EventMetricsUncheckedCreateWithoutEventInput = {
    id?: string;
    totalViews?: number;
    totalRegistrations?: number;
    totalAttendees?: number;
    updatedAt?: Date | string;
};
export type EventMetricsCreateOrConnectWithoutEventInput = {
    where: Prisma.EventMetricsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventMetricsCreateWithoutEventInput, Prisma.EventMetricsUncheckedCreateWithoutEventInput>;
};
export type EventMetricsUpsertWithoutEventInput = {
    update: Prisma.XOR<Prisma.EventMetricsUpdateWithoutEventInput, Prisma.EventMetricsUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventMetricsCreateWithoutEventInput, Prisma.EventMetricsUncheckedCreateWithoutEventInput>;
    where?: Prisma.EventMetricsWhereInput;
};
export type EventMetricsUpdateToOneWithWhereWithoutEventInput = {
    where?: Prisma.EventMetricsWhereInput;
    data: Prisma.XOR<Prisma.EventMetricsUpdateWithoutEventInput, Prisma.EventMetricsUncheckedUpdateWithoutEventInput>;
};
export type EventMetricsUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalViews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalRegistrations?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricsUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalViews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalRegistrations?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAttendees?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    totalViews?: boolean;
    totalRegistrations?: boolean;
    totalAttendees?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventMetrics"]>;
export type EventMetricsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    totalViews?: boolean;
    totalRegistrations?: boolean;
    totalAttendees?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventMetrics"]>;
export type EventMetricsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    totalViews?: boolean;
    totalRegistrations?: boolean;
    totalAttendees?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventMetrics"]>;
export type EventMetricsSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    totalViews?: boolean;
    totalRegistrations?: boolean;
    totalAttendees?: boolean;
    updatedAt?: boolean;
};
export type EventMetricsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "totalViews" | "totalRegistrations" | "totalAttendees" | "updatedAt", ExtArgs["result"]["eventMetrics"]>;
export type EventMetricsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventMetricsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventMetricsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $EventMetricsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventMetrics";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        totalViews: number;
        totalRegistrations: number;
        totalAttendees: number;
        updatedAt: Date;
    }, ExtArgs["result"]["eventMetrics"]>;
    composites: {};
};
export type EventMetricsGetPayload<S extends boolean | null | undefined | EventMetricsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload, S>;
export type EventMetricsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventMetricsCountAggregateInputType | true;
};
export interface EventMetricsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventMetrics'];
        meta: {
            name: 'EventMetrics';
        };
    };
    /**
     * Find zero or one EventMetrics that matches the filter.
     * @param {EventMetricsFindUniqueArgs} args - Arguments to find a EventMetrics
     * @example
     * // Get one EventMetrics
     * const eventMetrics = await prisma.eventMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventMetricsFindUniqueArgs>(args: Prisma.SelectSubset<T, EventMetricsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventMetricsFindUniqueOrThrowArgs} args - Arguments to find a EventMetrics
     * @example
     * // Get one EventMetrics
     * const eventMetrics = await prisma.eventMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventMetricsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsFindFirstArgs} args - Arguments to find a EventMetrics
     * @example
     * // Get one EventMetrics
     * const eventMetrics = await prisma.eventMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventMetricsFindFirstArgs>(args?: Prisma.SelectSubset<T, EventMetricsFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsFindFirstOrThrowArgs} args - Arguments to find a EventMetrics
     * @example
     * // Get one EventMetrics
     * const eventMetrics = await prisma.eventMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventMetricsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventMetrics
     * const eventMetrics = await prisma.eventMetrics.findMany()
     *
     * // Get first 10 EventMetrics
     * const eventMetrics = await prisma.eventMetrics.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventMetricsWithIdOnly = await prisma.eventMetrics.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventMetricsFindManyArgs>(args?: Prisma.SelectSubset<T, EventMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventMetrics.
     * @param {EventMetricsCreateArgs} args - Arguments to create a EventMetrics.
     * @example
     * // Create one EventMetrics
     * const EventMetrics = await prisma.eventMetrics.create({
     *   data: {
     *     // ... data to create a EventMetrics
     *   }
     * })
     *
     */
    create<T extends EventMetricsCreateArgs>(args: Prisma.SelectSubset<T, EventMetricsCreateArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventMetrics.
     * @param {EventMetricsCreateManyArgs} args - Arguments to create many EventMetrics.
     * @example
     * // Create many EventMetrics
     * const eventMetrics = await prisma.eventMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventMetricsCreateManyArgs>(args?: Prisma.SelectSubset<T, EventMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventMetrics and returns the data saved in the database.
     * @param {EventMetricsCreateManyAndReturnArgs} args - Arguments to create many EventMetrics.
     * @example
     * // Create many EventMetrics
     * const eventMetrics = await prisma.eventMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventMetrics and only return the `id`
     * const eventMetricsWithIdOnly = await prisma.eventMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventMetricsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventMetrics.
     * @param {EventMetricsDeleteArgs} args - Arguments to delete one EventMetrics.
     * @example
     * // Delete one EventMetrics
     * const EventMetrics = await prisma.eventMetrics.delete({
     *   where: {
     *     // ... filter to delete one EventMetrics
     *   }
     * })
     *
     */
    delete<T extends EventMetricsDeleteArgs>(args: Prisma.SelectSubset<T, EventMetricsDeleteArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventMetrics.
     * @param {EventMetricsUpdateArgs} args - Arguments to update one EventMetrics.
     * @example
     * // Update one EventMetrics
     * const eventMetrics = await prisma.eventMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventMetricsUpdateArgs>(args: Prisma.SelectSubset<T, EventMetricsUpdateArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventMetrics.
     * @param {EventMetricsDeleteManyArgs} args - Arguments to filter EventMetrics to delete.
     * @example
     * // Delete a few EventMetrics
     * const { count } = await prisma.eventMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventMetricsDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventMetrics
     * const eventMetrics = await prisma.eventMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventMetricsUpdateManyArgs>(args: Prisma.SelectSubset<T, EventMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventMetrics and returns the data updated in the database.
     * @param {EventMetricsUpdateManyAndReturnArgs} args - Arguments to update many EventMetrics.
     * @example
     * // Update many EventMetrics
     * const eventMetrics = await prisma.eventMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventMetrics and only return the `id`
     * const eventMetricsWithIdOnly = await prisma.eventMetrics.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventMetricsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventMetrics.
     * @param {EventMetricsUpsertArgs} args - Arguments to update or create a EventMetrics.
     * @example
     * // Update or create a EventMetrics
     * const eventMetrics = await prisma.eventMetrics.upsert({
     *   create: {
     *     // ... data to create a EventMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventMetrics we want to update
     *   }
     * })
     */
    upsert<T extends EventMetricsUpsertArgs>(args: Prisma.SelectSubset<T, EventMetricsUpsertArgs<ExtArgs>>): Prisma.Prisma__EventMetricsClient<runtime.Types.Result.GetResult<Prisma.$EventMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsCountArgs} args - Arguments to filter EventMetrics to count.
     * @example
     * // Count the number of EventMetrics
     * const count = await prisma.eventMetrics.count({
     *   where: {
     *     // ... the filter for the EventMetrics we want to count
     *   }
     * })
    **/
    count<T extends EventMetricsCountArgs>(args?: Prisma.Subset<T, EventMetricsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventMetricsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventMetricsAggregateArgs>(args: Prisma.Subset<T, EventMetricsAggregateArgs>): Prisma.PrismaPromise<GetEventMetricsAggregateType<T>>;
    /**
     * Group by EventMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventMetricsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventMetricsGroupByArgs['orderBy'];
    } : {
        orderBy?: EventMetricsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventMetrics model
     */
    readonly fields: EventMetricsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventMetrics.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventMetricsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EventMetrics model
 */
export interface EventMetricsFieldRefs {
    readonly id: Prisma.FieldRef<"EventMetrics", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventMetrics", 'String'>;
    readonly totalViews: Prisma.FieldRef<"EventMetrics", 'Int'>;
    readonly totalRegistrations: Prisma.FieldRef<"EventMetrics", 'Int'>;
    readonly totalAttendees: Prisma.FieldRef<"EventMetrics", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"EventMetrics", 'DateTime'>;
}
/**
 * EventMetrics findUnique
 */
export type EventMetricsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetrics to fetch.
     */
    where: Prisma.EventMetricsWhereUniqueInput;
};
/**
 * EventMetrics findUniqueOrThrow
 */
export type EventMetricsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetrics to fetch.
     */
    where: Prisma.EventMetricsWhereUniqueInput;
};
/**
 * EventMetrics findFirst
 */
export type EventMetricsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetrics to fetch.
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricsOrderByWithRelationInput | Prisma.EventMetricsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventMetrics.
     */
    cursor?: Prisma.EventMetricsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventMetrics.
     */
    distinct?: Prisma.EventMetricsScalarFieldEnum | Prisma.EventMetricsScalarFieldEnum[];
};
/**
 * EventMetrics findFirstOrThrow
 */
export type EventMetricsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetrics to fetch.
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricsOrderByWithRelationInput | Prisma.EventMetricsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventMetrics.
     */
    cursor?: Prisma.EventMetricsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventMetrics.
     */
    distinct?: Prisma.EventMetricsScalarFieldEnum | Prisma.EventMetricsScalarFieldEnum[];
};
/**
 * EventMetrics findMany
 */
export type EventMetricsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetrics to fetch.
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricsOrderByWithRelationInput | Prisma.EventMetricsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventMetrics.
     */
    cursor?: Prisma.EventMetricsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventMetrics.
     */
    skip?: number;
    distinct?: Prisma.EventMetricsScalarFieldEnum | Prisma.EventMetricsScalarFieldEnum[];
};
/**
 * EventMetrics create
 */
export type EventMetricsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventMetrics.
     */
    data: Prisma.XOR<Prisma.EventMetricsCreateInput, Prisma.EventMetricsUncheckedCreateInput>;
};
/**
 * EventMetrics createMany
 */
export type EventMetricsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventMetrics.
     */
    data: Prisma.EventMetricsCreateManyInput | Prisma.EventMetricsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventMetrics createManyAndReturn
 */
export type EventMetricsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * The data used to create many EventMetrics.
     */
    data: Prisma.EventMetricsCreateManyInput | Prisma.EventMetricsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventMetrics update
 */
export type EventMetricsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventMetrics.
     */
    data: Prisma.XOR<Prisma.EventMetricsUpdateInput, Prisma.EventMetricsUncheckedUpdateInput>;
    /**
     * Choose, which EventMetrics to update.
     */
    where: Prisma.EventMetricsWhereUniqueInput;
};
/**
 * EventMetrics updateMany
 */
export type EventMetricsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventMetrics.
     */
    data: Prisma.XOR<Prisma.EventMetricsUpdateManyMutationInput, Prisma.EventMetricsUncheckedUpdateManyInput>;
    /**
     * Filter which EventMetrics to update
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * Limit how many EventMetrics to update.
     */
    limit?: number;
};
/**
 * EventMetrics updateManyAndReturn
 */
export type EventMetricsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * The data used to update EventMetrics.
     */
    data: Prisma.XOR<Prisma.EventMetricsUpdateManyMutationInput, Prisma.EventMetricsUncheckedUpdateManyInput>;
    /**
     * Filter which EventMetrics to update
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * Limit how many EventMetrics to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventMetrics upsert
 */
export type EventMetricsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventMetrics to update in case it exists.
     */
    where: Prisma.EventMetricsWhereUniqueInput;
    /**
     * In case the EventMetrics found by the `where` argument doesn't exist, create a new EventMetrics with this data.
     */
    create: Prisma.XOR<Prisma.EventMetricsCreateInput, Prisma.EventMetricsUncheckedCreateInput>;
    /**
     * In case the EventMetrics was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventMetricsUpdateInput, Prisma.EventMetricsUncheckedUpdateInput>;
};
/**
 * EventMetrics delete
 */
export type EventMetricsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
    /**
     * Filter which EventMetrics to delete.
     */
    where: Prisma.EventMetricsWhereUniqueInput;
};
/**
 * EventMetrics deleteMany
 */
export type EventMetricsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventMetrics to delete
     */
    where?: Prisma.EventMetricsWhereInput;
    /**
     * Limit how many EventMetrics to delete.
     */
    limit?: number;
};
/**
 * EventMetrics without action
 */
export type EventMetricsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetrics
     */
    select?: Prisma.EventMetricsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetrics
     */
    omit?: Prisma.EventMetricsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EventMetrics.d.ts.map