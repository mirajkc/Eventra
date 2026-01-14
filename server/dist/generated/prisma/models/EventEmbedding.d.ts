import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventEmbedding
 *
 */
export type EventEmbeddingModel = runtime.Types.Result.DefaultSelection<Prisma.$EventEmbeddingPayload>;
export type AggregateEventEmbedding = {
    _count: EventEmbeddingCountAggregateOutputType | null;
    _avg: EventEmbeddingAvgAggregateOutputType | null;
    _sum: EventEmbeddingSumAggregateOutputType | null;
    _min: EventEmbeddingMinAggregateOutputType | null;
    _max: EventEmbeddingMaxAggregateOutputType | null;
};
export type EventEmbeddingAvgAggregateOutputType = {
    embedding: number | null;
};
export type EventEmbeddingSumAggregateOutputType = {
    embedding: number[];
};
export type EventEmbeddingMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    updatedAt: Date | null;
};
export type EventEmbeddingMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    updatedAt: Date | null;
};
export type EventEmbeddingCountAggregateOutputType = {
    id: number;
    eventId: number;
    embedding: number;
    updatedAt: number;
    _all: number;
};
export type EventEmbeddingAvgAggregateInputType = {
    embedding?: true;
};
export type EventEmbeddingSumAggregateInputType = {
    embedding?: true;
};
export type EventEmbeddingMinAggregateInputType = {
    id?: true;
    eventId?: true;
    updatedAt?: true;
};
export type EventEmbeddingMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    updatedAt?: true;
};
export type EventEmbeddingCountAggregateInputType = {
    id?: true;
    eventId?: true;
    embedding?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventEmbeddingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventEmbedding to aggregate.
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventEmbeddings to fetch.
     */
    orderBy?: Prisma.EventEmbeddingOrderByWithRelationInput | Prisma.EventEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventEmbeddings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventEmbeddings
    **/
    _count?: true | EventEmbeddingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventEmbeddingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventEmbeddingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventEmbeddingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventEmbeddingMaxAggregateInputType;
};
export type GetEventEmbeddingAggregateType<T extends EventEmbeddingAggregateArgs> = {
    [P in keyof T & keyof AggregateEventEmbedding]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventEmbedding[P]> : Prisma.GetScalarType<T[P], AggregateEventEmbedding[P]>;
};
export type EventEmbeddingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventEmbeddingWhereInput;
    orderBy?: Prisma.EventEmbeddingOrderByWithAggregationInput | Prisma.EventEmbeddingOrderByWithAggregationInput[];
    by: Prisma.EventEmbeddingScalarFieldEnum[] | Prisma.EventEmbeddingScalarFieldEnum;
    having?: Prisma.EventEmbeddingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventEmbeddingCountAggregateInputType | true;
    _avg?: EventEmbeddingAvgAggregateInputType;
    _sum?: EventEmbeddingSumAggregateInputType;
    _min?: EventEmbeddingMinAggregateInputType;
    _max?: EventEmbeddingMaxAggregateInputType;
};
export type EventEmbeddingGroupByOutputType = {
    id: string;
    eventId: string;
    embedding: number[];
    updatedAt: Date;
    _count: EventEmbeddingCountAggregateOutputType | null;
    _avg: EventEmbeddingAvgAggregateOutputType | null;
    _sum: EventEmbeddingSumAggregateOutputType | null;
    _min: EventEmbeddingMinAggregateOutputType | null;
    _max: EventEmbeddingMaxAggregateOutputType | null;
};
type GetEventEmbeddingGroupByPayload<T extends EventEmbeddingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventEmbeddingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventEmbeddingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventEmbeddingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventEmbeddingGroupByOutputType[P]>;
}>>;
export type EventEmbeddingWhereInput = {
    AND?: Prisma.EventEmbeddingWhereInput | Prisma.EventEmbeddingWhereInput[];
    OR?: Prisma.EventEmbeddingWhereInput[];
    NOT?: Prisma.EventEmbeddingWhereInput | Prisma.EventEmbeddingWhereInput[];
    id?: Prisma.StringFilter<"EventEmbedding"> | string;
    eventId?: Prisma.StringFilter<"EventEmbedding"> | string;
    embedding?: Prisma.FloatNullableListFilter<"EventEmbedding">;
    updatedAt?: Prisma.DateTimeFilter<"EventEmbedding"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
};
export type EventEmbeddingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    embedding?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type EventEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId?: string;
    AND?: Prisma.EventEmbeddingWhereInput | Prisma.EventEmbeddingWhereInput[];
    OR?: Prisma.EventEmbeddingWhereInput[];
    NOT?: Prisma.EventEmbeddingWhereInput | Prisma.EventEmbeddingWhereInput[];
    embedding?: Prisma.FloatNullableListFilter<"EventEmbedding">;
    updatedAt?: Prisma.DateTimeFilter<"EventEmbedding"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
}, "id" | "eventId">;
export type EventEmbeddingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    embedding?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventEmbeddingCountOrderByAggregateInput;
    _avg?: Prisma.EventEmbeddingAvgOrderByAggregateInput;
    _max?: Prisma.EventEmbeddingMaxOrderByAggregateInput;
    _min?: Prisma.EventEmbeddingMinOrderByAggregateInput;
    _sum?: Prisma.EventEmbeddingSumOrderByAggregateInput;
};
export type EventEmbeddingScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventEmbeddingScalarWhereWithAggregatesInput | Prisma.EventEmbeddingScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventEmbeddingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventEmbeddingScalarWhereWithAggregatesInput | Prisma.EventEmbeddingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventEmbedding"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventEmbedding"> | string;
    embedding?: Prisma.FloatNullableListFilter<"EventEmbedding">;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventEmbedding"> | Date | string;
};
export type EventEmbeddingCreateInput = {
    id?: string;
    embedding?: Prisma.EventEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutEventEmbeddingInput;
};
export type EventEmbeddingUncheckedCreateInput = {
    id?: string;
    eventId: string;
    embedding?: Prisma.EventEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type EventEmbeddingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.EventEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutEventEmbeddingNestedInput;
};
export type EventEmbeddingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.EventEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventEmbeddingCreateManyInput = {
    id?: string;
    eventId: string;
    embedding?: Prisma.EventEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type EventEmbeddingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.EventEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventEmbeddingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.EventEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventEmbeddingNullableScalarRelationFilter = {
    is?: Prisma.EventEmbeddingWhereInput | null;
    isNot?: Prisma.EventEmbeddingWhereInput | null;
};
export type EventEmbeddingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    embedding?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventEmbeddingAvgOrderByAggregateInput = {
    embedding?: Prisma.SortOrder;
};
export type EventEmbeddingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventEmbeddingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventEmbeddingSumOrderByAggregateInput = {
    embedding?: Prisma.SortOrder;
};
export type EventEmbeddingCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventEmbeddingCreateWithoutEventInput, Prisma.EventEmbeddingUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventEmbeddingCreateOrConnectWithoutEventInput;
    connect?: Prisma.EventEmbeddingWhereUniqueInput;
};
export type EventEmbeddingUncheckedCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventEmbeddingCreateWithoutEventInput, Prisma.EventEmbeddingUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventEmbeddingCreateOrConnectWithoutEventInput;
    connect?: Prisma.EventEmbeddingWhereUniqueInput;
};
export type EventEmbeddingUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventEmbeddingCreateWithoutEventInput, Prisma.EventEmbeddingUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventEmbeddingCreateOrConnectWithoutEventInput;
    upsert?: Prisma.EventEmbeddingUpsertWithoutEventInput;
    disconnect?: Prisma.EventEmbeddingWhereInput | boolean;
    delete?: Prisma.EventEmbeddingWhereInput | boolean;
    connect?: Prisma.EventEmbeddingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventEmbeddingUpdateToOneWithWhereWithoutEventInput, Prisma.EventEmbeddingUpdateWithoutEventInput>, Prisma.EventEmbeddingUncheckedUpdateWithoutEventInput>;
};
export type EventEmbeddingUncheckedUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventEmbeddingCreateWithoutEventInput, Prisma.EventEmbeddingUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.EventEmbeddingCreateOrConnectWithoutEventInput;
    upsert?: Prisma.EventEmbeddingUpsertWithoutEventInput;
    disconnect?: Prisma.EventEmbeddingWhereInput | boolean;
    delete?: Prisma.EventEmbeddingWhereInput | boolean;
    connect?: Prisma.EventEmbeddingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventEmbeddingUpdateToOneWithWhereWithoutEventInput, Prisma.EventEmbeddingUpdateWithoutEventInput>, Prisma.EventEmbeddingUncheckedUpdateWithoutEventInput>;
};
export type EventEmbeddingCreateembeddingInput = {
    set: number[];
};
export type EventEmbeddingUpdateembeddingInput = {
    set?: number[];
    push?: number | number[];
};
export type EventEmbeddingCreateWithoutEventInput = {
    id?: string;
    embedding?: Prisma.EventEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type EventEmbeddingUncheckedCreateWithoutEventInput = {
    id?: string;
    embedding?: Prisma.EventEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type EventEmbeddingCreateOrConnectWithoutEventInput = {
    where: Prisma.EventEmbeddingWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventEmbeddingCreateWithoutEventInput, Prisma.EventEmbeddingUncheckedCreateWithoutEventInput>;
};
export type EventEmbeddingUpsertWithoutEventInput = {
    update: Prisma.XOR<Prisma.EventEmbeddingUpdateWithoutEventInput, Prisma.EventEmbeddingUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventEmbeddingCreateWithoutEventInput, Prisma.EventEmbeddingUncheckedCreateWithoutEventInput>;
    where?: Prisma.EventEmbeddingWhereInput;
};
export type EventEmbeddingUpdateToOneWithWhereWithoutEventInput = {
    where?: Prisma.EventEmbeddingWhereInput;
    data: Prisma.XOR<Prisma.EventEmbeddingUpdateWithoutEventInput, Prisma.EventEmbeddingUncheckedUpdateWithoutEventInput>;
};
export type EventEmbeddingUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.EventEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventEmbeddingUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.EventEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventEmbeddingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventEmbedding"]>;
export type EventEmbeddingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventEmbedding"]>;
export type EventEmbeddingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventEmbedding"]>;
export type EventEmbeddingSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
};
export type EventEmbeddingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "embedding" | "updatedAt", ExtArgs["result"]["eventEmbedding"]>;
export type EventEmbeddingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventEmbeddingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $EventEmbeddingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventEmbedding";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        embedding: number[];
        updatedAt: Date;
    }, ExtArgs["result"]["eventEmbedding"]>;
    composites: {};
};
export type EventEmbeddingGetPayload<S extends boolean | null | undefined | EventEmbeddingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload, S>;
export type EventEmbeddingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventEmbeddingCountAggregateInputType | true;
};
export interface EventEmbeddingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventEmbedding'];
        meta: {
            name: 'EventEmbedding';
        };
    };
    /**
     * Find zero or one EventEmbedding that matches the filter.
     * @param {EventEmbeddingFindUniqueArgs} args - Arguments to find a EventEmbedding
     * @example
     * // Get one EventEmbedding
     * const eventEmbedding = await prisma.eventEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventEmbeddingFindUniqueArgs>(args: Prisma.SelectSubset<T, EventEmbeddingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a EventEmbedding
     * @example
     * // Get one EventEmbedding
     * const eventEmbedding = await prisma.eventEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventEmbeddingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingFindFirstArgs} args - Arguments to find a EventEmbedding
     * @example
     * // Get one EventEmbedding
     * const eventEmbedding = await prisma.eventEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventEmbeddingFindFirstArgs>(args?: Prisma.SelectSubset<T, EventEmbeddingFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingFindFirstOrThrowArgs} args - Arguments to find a EventEmbedding
     * @example
     * // Get one EventEmbedding
     * const eventEmbedding = await prisma.eventEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventEmbeddingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventEmbeddings
     * const eventEmbeddings = await prisma.eventEmbedding.findMany()
     *
     * // Get first 10 EventEmbeddings
     * const eventEmbeddings = await prisma.eventEmbedding.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventEmbeddingWithIdOnly = await prisma.eventEmbedding.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventEmbeddingFindManyArgs>(args?: Prisma.SelectSubset<T, EventEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventEmbedding.
     * @param {EventEmbeddingCreateArgs} args - Arguments to create a EventEmbedding.
     * @example
     * // Create one EventEmbedding
     * const EventEmbedding = await prisma.eventEmbedding.create({
     *   data: {
     *     // ... data to create a EventEmbedding
     *   }
     * })
     *
     */
    create<T extends EventEmbeddingCreateArgs>(args: Prisma.SelectSubset<T, EventEmbeddingCreateArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventEmbeddings.
     * @param {EventEmbeddingCreateManyArgs} args - Arguments to create many EventEmbeddings.
     * @example
     * // Create many EventEmbeddings
     * const eventEmbedding = await prisma.eventEmbedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventEmbeddingCreateManyArgs>(args?: Prisma.SelectSubset<T, EventEmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventEmbeddings and returns the data saved in the database.
     * @param {EventEmbeddingCreateManyAndReturnArgs} args - Arguments to create many EventEmbeddings.
     * @example
     * // Create many EventEmbeddings
     * const eventEmbedding = await prisma.eventEmbedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventEmbeddings and only return the `id`
     * const eventEmbeddingWithIdOnly = await prisma.eventEmbedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventEmbeddingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventEmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventEmbedding.
     * @param {EventEmbeddingDeleteArgs} args - Arguments to delete one EventEmbedding.
     * @example
     * // Delete one EventEmbedding
     * const EventEmbedding = await prisma.eventEmbedding.delete({
     *   where: {
     *     // ... filter to delete one EventEmbedding
     *   }
     * })
     *
     */
    delete<T extends EventEmbeddingDeleteArgs>(args: Prisma.SelectSubset<T, EventEmbeddingDeleteArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventEmbedding.
     * @param {EventEmbeddingUpdateArgs} args - Arguments to update one EventEmbedding.
     * @example
     * // Update one EventEmbedding
     * const eventEmbedding = await prisma.eventEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventEmbeddingUpdateArgs>(args: Prisma.SelectSubset<T, EventEmbeddingUpdateArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventEmbeddings.
     * @param {EventEmbeddingDeleteManyArgs} args - Arguments to filter EventEmbeddings to delete.
     * @example
     * // Delete a few EventEmbeddings
     * const { count } = await prisma.eventEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventEmbeddingDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventEmbeddings
     * const eventEmbedding = await prisma.eventEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventEmbeddingUpdateManyArgs>(args: Prisma.SelectSubset<T, EventEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventEmbeddings and returns the data updated in the database.
     * @param {EventEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many EventEmbeddings.
     * @example
     * // Update many EventEmbeddings
     * const eventEmbedding = await prisma.eventEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventEmbeddings and only return the `id`
     * const eventEmbeddingWithIdOnly = await prisma.eventEmbedding.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventEmbeddingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventEmbedding.
     * @param {EventEmbeddingUpsertArgs} args - Arguments to update or create a EventEmbedding.
     * @example
     * // Update or create a EventEmbedding
     * const eventEmbedding = await prisma.eventEmbedding.upsert({
     *   create: {
     *     // ... data to create a EventEmbedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventEmbedding we want to update
     *   }
     * })
     */
    upsert<T extends EventEmbeddingUpsertArgs>(args: Prisma.SelectSubset<T, EventEmbeddingUpsertArgs<ExtArgs>>): Prisma.Prisma__EventEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$EventEmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingCountArgs} args - Arguments to filter EventEmbeddings to count.
     * @example
     * // Count the number of EventEmbeddings
     * const count = await prisma.eventEmbedding.count({
     *   where: {
     *     // ... the filter for the EventEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends EventEmbeddingCountArgs>(args?: Prisma.Subset<T, EventEmbeddingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventEmbeddingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventEmbeddingAggregateArgs>(args: Prisma.Subset<T, EventEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetEventEmbeddingAggregateType<T>>;
    /**
     * Group by EventEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventEmbeddingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventEmbeddingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventEmbeddingGroupByArgs['orderBy'];
    } : {
        orderBy?: EventEmbeddingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventEmbedding model
     */
    readonly fields: EventEmbeddingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventEmbedding.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventEmbeddingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the EventEmbedding model
 */
export interface EventEmbeddingFieldRefs {
    readonly id: Prisma.FieldRef<"EventEmbedding", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventEmbedding", 'String'>;
    readonly embedding: Prisma.FieldRef<"EventEmbedding", 'Float[]'>;
    readonly updatedAt: Prisma.FieldRef<"EventEmbedding", 'DateTime'>;
}
/**
 * EventEmbedding findUnique
 */
export type EventEmbeddingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * Filter, which EventEmbedding to fetch.
     */
    where: Prisma.EventEmbeddingWhereUniqueInput;
};
/**
 * EventEmbedding findUniqueOrThrow
 */
export type EventEmbeddingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * Filter, which EventEmbedding to fetch.
     */
    where: Prisma.EventEmbeddingWhereUniqueInput;
};
/**
 * EventEmbedding findFirst
 */
export type EventEmbeddingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * Filter, which EventEmbedding to fetch.
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventEmbeddings to fetch.
     */
    orderBy?: Prisma.EventEmbeddingOrderByWithRelationInput | Prisma.EventEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventEmbeddings.
     */
    cursor?: Prisma.EventEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventEmbeddings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventEmbeddings.
     */
    distinct?: Prisma.EventEmbeddingScalarFieldEnum | Prisma.EventEmbeddingScalarFieldEnum[];
};
/**
 * EventEmbedding findFirstOrThrow
 */
export type EventEmbeddingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * Filter, which EventEmbedding to fetch.
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventEmbeddings to fetch.
     */
    orderBy?: Prisma.EventEmbeddingOrderByWithRelationInput | Prisma.EventEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventEmbeddings.
     */
    cursor?: Prisma.EventEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventEmbeddings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventEmbeddings.
     */
    distinct?: Prisma.EventEmbeddingScalarFieldEnum | Prisma.EventEmbeddingScalarFieldEnum[];
};
/**
 * EventEmbedding findMany
 */
export type EventEmbeddingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * Filter, which EventEmbeddings to fetch.
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventEmbeddings to fetch.
     */
    orderBy?: Prisma.EventEmbeddingOrderByWithRelationInput | Prisma.EventEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventEmbeddings.
     */
    cursor?: Prisma.EventEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventEmbeddings.
     */
    skip?: number;
    distinct?: Prisma.EventEmbeddingScalarFieldEnum | Prisma.EventEmbeddingScalarFieldEnum[];
};
/**
 * EventEmbedding create
 */
export type EventEmbeddingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventEmbedding.
     */
    data: Prisma.XOR<Prisma.EventEmbeddingCreateInput, Prisma.EventEmbeddingUncheckedCreateInput>;
};
/**
 * EventEmbedding createMany
 */
export type EventEmbeddingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventEmbeddings.
     */
    data: Prisma.EventEmbeddingCreateManyInput | Prisma.EventEmbeddingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventEmbedding createManyAndReturn
 */
export type EventEmbeddingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * The data used to create many EventEmbeddings.
     */
    data: Prisma.EventEmbeddingCreateManyInput | Prisma.EventEmbeddingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventEmbedding update
 */
export type EventEmbeddingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventEmbedding.
     */
    data: Prisma.XOR<Prisma.EventEmbeddingUpdateInput, Prisma.EventEmbeddingUncheckedUpdateInput>;
    /**
     * Choose, which EventEmbedding to update.
     */
    where: Prisma.EventEmbeddingWhereUniqueInput;
};
/**
 * EventEmbedding updateMany
 */
export type EventEmbeddingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventEmbeddings.
     */
    data: Prisma.XOR<Prisma.EventEmbeddingUpdateManyMutationInput, Prisma.EventEmbeddingUncheckedUpdateManyInput>;
    /**
     * Filter which EventEmbeddings to update
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * Limit how many EventEmbeddings to update.
     */
    limit?: number;
};
/**
 * EventEmbedding updateManyAndReturn
 */
export type EventEmbeddingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * The data used to update EventEmbeddings.
     */
    data: Prisma.XOR<Prisma.EventEmbeddingUpdateManyMutationInput, Prisma.EventEmbeddingUncheckedUpdateManyInput>;
    /**
     * Filter which EventEmbeddings to update
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * Limit how many EventEmbeddings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventEmbedding upsert
 */
export type EventEmbeddingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventEmbedding to update in case it exists.
     */
    where: Prisma.EventEmbeddingWhereUniqueInput;
    /**
     * In case the EventEmbedding found by the `where` argument doesn't exist, create a new EventEmbedding with this data.
     */
    create: Prisma.XOR<Prisma.EventEmbeddingCreateInput, Prisma.EventEmbeddingUncheckedCreateInput>;
    /**
     * In case the EventEmbedding was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventEmbeddingUpdateInput, Prisma.EventEmbeddingUncheckedUpdateInput>;
};
/**
 * EventEmbedding delete
 */
export type EventEmbeddingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
    /**
     * Filter which EventEmbedding to delete.
     */
    where: Prisma.EventEmbeddingWhereUniqueInput;
};
/**
 * EventEmbedding deleteMany
 */
export type EventEmbeddingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventEmbeddings to delete
     */
    where?: Prisma.EventEmbeddingWhereInput;
    /**
     * Limit how many EventEmbeddings to delete.
     */
    limit?: number;
};
/**
 * EventEmbedding without action
 */
export type EventEmbeddingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventEmbedding
     */
    select?: Prisma.EventEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventEmbedding
     */
    omit?: Prisma.EventEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventEmbeddingInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EventEmbedding.d.ts.map