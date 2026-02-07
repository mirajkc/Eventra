import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventMetric
 *
 */
export type EventMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$EventMetricPayload>;
export type AggregateEventMetric = {
    _count: EventMetricCountAggregateOutputType | null;
    _min: EventMetricMinAggregateOutputType | null;
    _max: EventMetricMaxAggregateOutputType | null;
};
export type EventMetricMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventId: string | null;
    hasClicked: boolean | null;
    hasJoined: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventMetricMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventId: string | null;
    hasClicked: boolean | null;
    hasJoined: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventMetricCountAggregateOutputType = {
    id: number;
    userId: number;
    eventId: number;
    hasClicked: number;
    hasJoined: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventMetricMinAggregateInputType = {
    id?: true;
    userId?: true;
    eventId?: true;
    hasClicked?: true;
    hasJoined?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventMetricMaxAggregateInputType = {
    id?: true;
    userId?: true;
    eventId?: true;
    hasClicked?: true;
    hasJoined?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventMetricCountAggregateInputType = {
    id?: true;
    userId?: true;
    eventId?: true;
    hasClicked?: true;
    hasJoined?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventMetric to aggregate.
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricOrderByWithRelationInput | Prisma.EventMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventMetricWhereUniqueInput;
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
    _count?: true | EventMetricCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventMetricMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventMetricMaxAggregateInputType;
};
export type GetEventMetricAggregateType<T extends EventMetricAggregateArgs> = {
    [P in keyof T & keyof AggregateEventMetric]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventMetric[P]> : Prisma.GetScalarType<T[P], AggregateEventMetric[P]>;
};
export type EventMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventMetricWhereInput;
    orderBy?: Prisma.EventMetricOrderByWithAggregationInput | Prisma.EventMetricOrderByWithAggregationInput[];
    by: Prisma.EventMetricScalarFieldEnum[] | Prisma.EventMetricScalarFieldEnum;
    having?: Prisma.EventMetricScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventMetricCountAggregateInputType | true;
    _min?: EventMetricMinAggregateInputType;
    _max?: EventMetricMaxAggregateInputType;
};
export type EventMetricGroupByOutputType = {
    id: string;
    userId: string;
    eventId: string;
    hasClicked: boolean;
    hasJoined: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: EventMetricCountAggregateOutputType | null;
    _min: EventMetricMinAggregateOutputType | null;
    _max: EventMetricMaxAggregateOutputType | null;
};
type GetEventMetricGroupByPayload<T extends EventMetricGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventMetricGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventMetricGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventMetricGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventMetricGroupByOutputType[P]>;
}>>;
export type EventMetricWhereInput = {
    AND?: Prisma.EventMetricWhereInput | Prisma.EventMetricWhereInput[];
    OR?: Prisma.EventMetricWhereInput[];
    NOT?: Prisma.EventMetricWhereInput | Prisma.EventMetricWhereInput[];
    id?: Prisma.StringFilter<"EventMetric"> | string;
    userId?: Prisma.StringFilter<"EventMetric"> | string;
    eventId?: Prisma.StringFilter<"EventMetric"> | string;
    hasClicked?: Prisma.BoolFilter<"EventMetric"> | boolean;
    hasJoined?: Prisma.BoolFilter<"EventMetric"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventMetric"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
};
export type EventMetricOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    hasClicked?: Prisma.SortOrder;
    hasJoined?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type EventMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_eventId?: Prisma.EventMetricUserIdEventIdCompoundUniqueInput;
    AND?: Prisma.EventMetricWhereInput | Prisma.EventMetricWhereInput[];
    OR?: Prisma.EventMetricWhereInput[];
    NOT?: Prisma.EventMetricWhereInput | Prisma.EventMetricWhereInput[];
    userId?: Prisma.StringFilter<"EventMetric"> | string;
    eventId?: Prisma.StringFilter<"EventMetric"> | string;
    hasClicked?: Prisma.BoolFilter<"EventMetric"> | boolean;
    hasJoined?: Prisma.BoolFilter<"EventMetric"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventMetric"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
}, "id" | "userId_eventId">;
export type EventMetricOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    hasClicked?: Prisma.SortOrder;
    hasJoined?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventMetricCountOrderByAggregateInput;
    _max?: Prisma.EventMetricMaxOrderByAggregateInput;
    _min?: Prisma.EventMetricMinOrderByAggregateInput;
};
export type EventMetricScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventMetricScalarWhereWithAggregatesInput | Prisma.EventMetricScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventMetricScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventMetricScalarWhereWithAggregatesInput | Prisma.EventMetricScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventMetric"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"EventMetric"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventMetric"> | string;
    hasClicked?: Prisma.BoolWithAggregatesFilter<"EventMetric"> | boolean;
    hasJoined?: Prisma.BoolWithAggregatesFilter<"EventMetric"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventMetric"> | Date | string;
};
export type EventMetricCreateInput = {
    id?: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEventMetricsInput;
    event: Prisma.EventCreateNestedOneWithoutEventMetricsInput;
};
export type EventMetricUncheckedCreateInput = {
    id?: string;
    userId: string;
    eventId: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventMetricUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEventMetricsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutEventMetricsNestedInput;
};
export type EventMetricUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricCreateManyInput = {
    id?: string;
    userId: string;
    eventId: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventMetricUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricListRelationFilter = {
    every?: Prisma.EventMetricWhereInput;
    some?: Prisma.EventMetricWhereInput;
    none?: Prisma.EventMetricWhereInput;
};
export type EventMetricOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventMetricUserIdEventIdCompoundUniqueInput = {
    userId: string;
    eventId: string;
};
export type EventMetricCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    hasClicked?: Prisma.SortOrder;
    hasJoined?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventMetricMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    hasClicked?: Prisma.SortOrder;
    hasJoined?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventMetricMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    hasClicked?: Prisma.SortOrder;
    hasJoined?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventMetricCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutUserInput, Prisma.EventMetricUncheckedCreateWithoutUserInput> | Prisma.EventMetricCreateWithoutUserInput[] | Prisma.EventMetricUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutUserInput | Prisma.EventMetricCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventMetricCreateManyUserInputEnvelope;
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
};
export type EventMetricUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutUserInput, Prisma.EventMetricUncheckedCreateWithoutUserInput> | Prisma.EventMetricCreateWithoutUserInput[] | Prisma.EventMetricUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutUserInput | Prisma.EventMetricCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventMetricCreateManyUserInputEnvelope;
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
};
export type EventMetricUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutUserInput, Prisma.EventMetricUncheckedCreateWithoutUserInput> | Prisma.EventMetricCreateWithoutUserInput[] | Prisma.EventMetricUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutUserInput | Prisma.EventMetricCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventMetricUpsertWithWhereUniqueWithoutUserInput | Prisma.EventMetricUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventMetricCreateManyUserInputEnvelope;
    set?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    disconnect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    delete?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    update?: Prisma.EventMetricUpdateWithWhereUniqueWithoutUserInput | Prisma.EventMetricUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventMetricUpdateManyWithWhereWithoutUserInput | Prisma.EventMetricUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventMetricScalarWhereInput | Prisma.EventMetricScalarWhereInput[];
};
export type EventMetricUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutUserInput, Prisma.EventMetricUncheckedCreateWithoutUserInput> | Prisma.EventMetricCreateWithoutUserInput[] | Prisma.EventMetricUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutUserInput | Prisma.EventMetricCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventMetricUpsertWithWhereUniqueWithoutUserInput | Prisma.EventMetricUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventMetricCreateManyUserInputEnvelope;
    set?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    disconnect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    delete?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    update?: Prisma.EventMetricUpdateWithWhereUniqueWithoutUserInput | Prisma.EventMetricUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventMetricUpdateManyWithWhereWithoutUserInput | Prisma.EventMetricUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventMetricScalarWhereInput | Prisma.EventMetricScalarWhereInput[];
};
export type EventMetricCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutEventInput, Prisma.EventMetricUncheckedCreateWithoutEventInput> | Prisma.EventMetricCreateWithoutEventInput[] | Prisma.EventMetricUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutEventInput | Prisma.EventMetricCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventMetricCreateManyEventInputEnvelope;
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
};
export type EventMetricUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutEventInput, Prisma.EventMetricUncheckedCreateWithoutEventInput> | Prisma.EventMetricCreateWithoutEventInput[] | Prisma.EventMetricUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutEventInput | Prisma.EventMetricCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventMetricCreateManyEventInputEnvelope;
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
};
export type EventMetricUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutEventInput, Prisma.EventMetricUncheckedCreateWithoutEventInput> | Prisma.EventMetricCreateWithoutEventInput[] | Prisma.EventMetricUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutEventInput | Prisma.EventMetricCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventMetricUpsertWithWhereUniqueWithoutEventInput | Prisma.EventMetricUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventMetricCreateManyEventInputEnvelope;
    set?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    disconnect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    delete?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    update?: Prisma.EventMetricUpdateWithWhereUniqueWithoutEventInput | Prisma.EventMetricUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventMetricUpdateManyWithWhereWithoutEventInput | Prisma.EventMetricUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventMetricScalarWhereInput | Prisma.EventMetricScalarWhereInput[];
};
export type EventMetricUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventMetricCreateWithoutEventInput, Prisma.EventMetricUncheckedCreateWithoutEventInput> | Prisma.EventMetricCreateWithoutEventInput[] | Prisma.EventMetricUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventMetricCreateOrConnectWithoutEventInput | Prisma.EventMetricCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventMetricUpsertWithWhereUniqueWithoutEventInput | Prisma.EventMetricUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventMetricCreateManyEventInputEnvelope;
    set?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    disconnect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    delete?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    connect?: Prisma.EventMetricWhereUniqueInput | Prisma.EventMetricWhereUniqueInput[];
    update?: Prisma.EventMetricUpdateWithWhereUniqueWithoutEventInput | Prisma.EventMetricUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventMetricUpdateManyWithWhereWithoutEventInput | Prisma.EventMetricUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventMetricScalarWhereInput | Prisma.EventMetricScalarWhereInput[];
};
export type EventMetricCreateWithoutUserInput = {
    id?: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutEventMetricsInput;
};
export type EventMetricUncheckedCreateWithoutUserInput = {
    id?: string;
    eventId: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventMetricCreateOrConnectWithoutUserInput = {
    where: Prisma.EventMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventMetricCreateWithoutUserInput, Prisma.EventMetricUncheckedCreateWithoutUserInput>;
};
export type EventMetricCreateManyUserInputEnvelope = {
    data: Prisma.EventMetricCreateManyUserInput | Prisma.EventMetricCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EventMetricUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventMetricWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventMetricUpdateWithoutUserInput, Prisma.EventMetricUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EventMetricCreateWithoutUserInput, Prisma.EventMetricUncheckedCreateWithoutUserInput>;
};
export type EventMetricUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventMetricWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventMetricUpdateWithoutUserInput, Prisma.EventMetricUncheckedUpdateWithoutUserInput>;
};
export type EventMetricUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EventMetricScalarWhereInput;
    data: Prisma.XOR<Prisma.EventMetricUpdateManyMutationInput, Prisma.EventMetricUncheckedUpdateManyWithoutUserInput>;
};
export type EventMetricScalarWhereInput = {
    AND?: Prisma.EventMetricScalarWhereInput | Prisma.EventMetricScalarWhereInput[];
    OR?: Prisma.EventMetricScalarWhereInput[];
    NOT?: Prisma.EventMetricScalarWhereInput | Prisma.EventMetricScalarWhereInput[];
    id?: Prisma.StringFilter<"EventMetric"> | string;
    userId?: Prisma.StringFilter<"EventMetric"> | string;
    eventId?: Prisma.StringFilter<"EventMetric"> | string;
    hasClicked?: Prisma.BoolFilter<"EventMetric"> | boolean;
    hasJoined?: Prisma.BoolFilter<"EventMetric"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventMetric"> | Date | string;
};
export type EventMetricCreateWithoutEventInput = {
    id?: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEventMetricsInput;
};
export type EventMetricUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventMetricCreateOrConnectWithoutEventInput = {
    where: Prisma.EventMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventMetricCreateWithoutEventInput, Prisma.EventMetricUncheckedCreateWithoutEventInput>;
};
export type EventMetricCreateManyEventInputEnvelope = {
    data: Prisma.EventMetricCreateManyEventInput | Prisma.EventMetricCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventMetricUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventMetricWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventMetricUpdateWithoutEventInput, Prisma.EventMetricUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventMetricCreateWithoutEventInput, Prisma.EventMetricUncheckedCreateWithoutEventInput>;
};
export type EventMetricUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventMetricWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventMetricUpdateWithoutEventInput, Prisma.EventMetricUncheckedUpdateWithoutEventInput>;
};
export type EventMetricUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventMetricScalarWhereInput;
    data: Prisma.XOR<Prisma.EventMetricUpdateManyMutationInput, Prisma.EventMetricUncheckedUpdateManyWithoutEventInput>;
};
export type EventMetricCreateManyUserInput = {
    id?: string;
    eventId: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventMetricUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutEventMetricsNestedInput;
};
export type EventMetricUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricCreateManyEventInput = {
    id?: string;
    userId: string;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventMetricUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEventMetricsNestedInput;
};
export type EventMetricUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    hasClicked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hasJoined?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventMetric"]>;
export type EventMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventMetric"]>;
export type EventMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventMetric"]>;
export type EventMetricSelectScalar = {
    id?: boolean;
    userId?: boolean;
    eventId?: boolean;
    hasClicked?: boolean;
    hasJoined?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "eventId" | "hasClicked" | "hasJoined" | "createdAt" | "updatedAt", ExtArgs["result"]["eventMetric"]>;
export type EventMetricInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventMetricIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventMetricIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $EventMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventMetric";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        eventId: string;
        hasClicked: boolean;
        hasJoined: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventMetric"]>;
    composites: {};
};
export type EventMetricGetPayload<S extends boolean | null | undefined | EventMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventMetricPayload, S>;
export type EventMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventMetricCountAggregateInputType | true;
};
export interface EventMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventMetric'];
        meta: {
            name: 'EventMetric';
        };
    };
    /**
     * Find zero or one EventMetric that matches the filter.
     * @param {EventMetricFindUniqueArgs} args - Arguments to find a EventMetric
     * @example
     * // Get one EventMetric
     * const eventMetric = await prisma.eventMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, EventMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventMetricFindUniqueOrThrowArgs} args - Arguments to find a EventMetric
     * @example
     * // Get one EventMetric
     * const eventMetric = await prisma.eventMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricFindFirstArgs} args - Arguments to find a EventMetric
     * @example
     * // Get one EventMetric
     * const eventMetric = await prisma.eventMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, EventMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricFindFirstOrThrowArgs} args - Arguments to find a EventMetric
     * @example
     * // Get one EventMetric
     * const eventMetric = await prisma.eventMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventMetrics
     * const eventMetrics = await prisma.eventMetric.findMany()
     *
     * // Get first 10 EventMetrics
     * const eventMetrics = await prisma.eventMetric.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventMetricWithIdOnly = await prisma.eventMetric.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventMetricFindManyArgs>(args?: Prisma.SelectSubset<T, EventMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventMetric.
     * @param {EventMetricCreateArgs} args - Arguments to create a EventMetric.
     * @example
     * // Create one EventMetric
     * const EventMetric = await prisma.eventMetric.create({
     *   data: {
     *     // ... data to create a EventMetric
     *   }
     * })
     *
     */
    create<T extends EventMetricCreateArgs>(args: Prisma.SelectSubset<T, EventMetricCreateArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventMetrics.
     * @param {EventMetricCreateManyArgs} args - Arguments to create many EventMetrics.
     * @example
     * // Create many EventMetrics
     * const eventMetric = await prisma.eventMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, EventMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventMetrics and returns the data saved in the database.
     * @param {EventMetricCreateManyAndReturnArgs} args - Arguments to create many EventMetrics.
     * @example
     * // Create many EventMetrics
     * const eventMetric = await prisma.eventMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventMetrics and only return the `id`
     * const eventMetricWithIdOnly = await prisma.eventMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventMetric.
     * @param {EventMetricDeleteArgs} args - Arguments to delete one EventMetric.
     * @example
     * // Delete one EventMetric
     * const EventMetric = await prisma.eventMetric.delete({
     *   where: {
     *     // ... filter to delete one EventMetric
     *   }
     * })
     *
     */
    delete<T extends EventMetricDeleteArgs>(args: Prisma.SelectSubset<T, EventMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventMetric.
     * @param {EventMetricUpdateArgs} args - Arguments to update one EventMetric.
     * @example
     * // Update one EventMetric
     * const eventMetric = await prisma.eventMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventMetricUpdateArgs>(args: Prisma.SelectSubset<T, EventMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventMetrics.
     * @param {EventMetricDeleteManyArgs} args - Arguments to filter EventMetrics to delete.
     * @example
     * // Delete a few EventMetrics
     * const { count } = await prisma.eventMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventMetrics
     * const eventMetric = await prisma.eventMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, EventMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventMetrics and returns the data updated in the database.
     * @param {EventMetricUpdateManyAndReturnArgs} args - Arguments to update many EventMetrics.
     * @example
     * // Update many EventMetrics
     * const eventMetric = await prisma.eventMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventMetrics and only return the `id`
     * const eventMetricWithIdOnly = await prisma.eventMetric.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventMetric.
     * @param {EventMetricUpsertArgs} args - Arguments to update or create a EventMetric.
     * @example
     * // Update or create a EventMetric
     * const eventMetric = await prisma.eventMetric.upsert({
     *   create: {
     *     // ... data to create a EventMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventMetric we want to update
     *   }
     * })
     */
    upsert<T extends EventMetricUpsertArgs>(args: Prisma.SelectSubset<T, EventMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__EventMetricClient<runtime.Types.Result.GetResult<Prisma.$EventMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricCountArgs} args - Arguments to filter EventMetrics to count.
     * @example
     * // Count the number of EventMetrics
     * const count = await prisma.eventMetric.count({
     *   where: {
     *     // ... the filter for the EventMetrics we want to count
     *   }
     * })
    **/
    count<T extends EventMetricCountArgs>(args?: Prisma.Subset<T, EventMetricCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventMetricCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventMetricAggregateArgs>(args: Prisma.Subset<T, EventMetricAggregateArgs>): Prisma.PrismaPromise<GetEventMetricAggregateType<T>>;
    /**
     * Group by EventMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMetricGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventMetricGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventMetricGroupByArgs['orderBy'];
    } : {
        orderBy?: EventMetricGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventMetric model
     */
    readonly fields: EventMetricFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventMetric.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EventMetric model
 */
export interface EventMetricFieldRefs {
    readonly id: Prisma.FieldRef<"EventMetric", 'String'>;
    readonly userId: Prisma.FieldRef<"EventMetric", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventMetric", 'String'>;
    readonly hasClicked: Prisma.FieldRef<"EventMetric", 'Boolean'>;
    readonly hasJoined: Prisma.FieldRef<"EventMetric", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"EventMetric", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventMetric", 'DateTime'>;
}
/**
 * EventMetric findUnique
 */
export type EventMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetric to fetch.
     */
    where: Prisma.EventMetricWhereUniqueInput;
};
/**
 * EventMetric findUniqueOrThrow
 */
export type EventMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetric to fetch.
     */
    where: Prisma.EventMetricWhereUniqueInput;
};
/**
 * EventMetric findFirst
 */
export type EventMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetric to fetch.
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricOrderByWithRelationInput | Prisma.EventMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventMetrics.
     */
    cursor?: Prisma.EventMetricWhereUniqueInput;
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
    distinct?: Prisma.EventMetricScalarFieldEnum | Prisma.EventMetricScalarFieldEnum[];
};
/**
 * EventMetric findFirstOrThrow
 */
export type EventMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetric to fetch.
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricOrderByWithRelationInput | Prisma.EventMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventMetrics.
     */
    cursor?: Prisma.EventMetricWhereUniqueInput;
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
    distinct?: Prisma.EventMetricScalarFieldEnum | Prisma.EventMetricScalarFieldEnum[];
};
/**
 * EventMetric findMany
 */
export type EventMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * Filter, which EventMetrics to fetch.
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventMetrics to fetch.
     */
    orderBy?: Prisma.EventMetricOrderByWithRelationInput | Prisma.EventMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventMetrics.
     */
    cursor?: Prisma.EventMetricWhereUniqueInput;
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
    distinct?: Prisma.EventMetricScalarFieldEnum | Prisma.EventMetricScalarFieldEnum[];
};
/**
 * EventMetric create
 */
export type EventMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventMetric.
     */
    data: Prisma.XOR<Prisma.EventMetricCreateInput, Prisma.EventMetricUncheckedCreateInput>;
};
/**
 * EventMetric createMany
 */
export type EventMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventMetrics.
     */
    data: Prisma.EventMetricCreateManyInput | Prisma.EventMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventMetric createManyAndReturn
 */
export type EventMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * The data used to create many EventMetrics.
     */
    data: Prisma.EventMetricCreateManyInput | Prisma.EventMetricCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventMetric update
 */
export type EventMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventMetric.
     */
    data: Prisma.XOR<Prisma.EventMetricUpdateInput, Prisma.EventMetricUncheckedUpdateInput>;
    /**
     * Choose, which EventMetric to update.
     */
    where: Prisma.EventMetricWhereUniqueInput;
};
/**
 * EventMetric updateMany
 */
export type EventMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventMetrics.
     */
    data: Prisma.XOR<Prisma.EventMetricUpdateManyMutationInput, Prisma.EventMetricUncheckedUpdateManyInput>;
    /**
     * Filter which EventMetrics to update
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * Limit how many EventMetrics to update.
     */
    limit?: number;
};
/**
 * EventMetric updateManyAndReturn
 */
export type EventMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * The data used to update EventMetrics.
     */
    data: Prisma.XOR<Prisma.EventMetricUpdateManyMutationInput, Prisma.EventMetricUncheckedUpdateManyInput>;
    /**
     * Filter which EventMetrics to update
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * Limit how many EventMetrics to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventMetric upsert
 */
export type EventMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventMetric to update in case it exists.
     */
    where: Prisma.EventMetricWhereUniqueInput;
    /**
     * In case the EventMetric found by the `where` argument doesn't exist, create a new EventMetric with this data.
     */
    create: Prisma.XOR<Prisma.EventMetricCreateInput, Prisma.EventMetricUncheckedCreateInput>;
    /**
     * In case the EventMetric was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventMetricUpdateInput, Prisma.EventMetricUncheckedUpdateInput>;
};
/**
 * EventMetric delete
 */
export type EventMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
    /**
     * Filter which EventMetric to delete.
     */
    where: Prisma.EventMetricWhereUniqueInput;
};
/**
 * EventMetric deleteMany
 */
export type EventMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventMetrics to delete
     */
    where?: Prisma.EventMetricWhereInput;
    /**
     * Limit how many EventMetrics to delete.
     */
    limit?: number;
};
/**
 * EventMetric without action
 */
export type EventMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMetric
     */
    select?: Prisma.EventMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventMetric
     */
    omit?: Prisma.EventMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventMetricInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EventMetric.d.ts.map