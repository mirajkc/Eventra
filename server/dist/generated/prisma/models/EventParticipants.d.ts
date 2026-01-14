import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventParticipants
 *
 */
export type EventParticipantsModel = runtime.Types.Result.DefaultSelection<Prisma.$EventParticipantsPayload>;
export type AggregateEventParticipants = {
    _count: EventParticipantsCountAggregateOutputType | null;
    _min: EventParticipantsMinAggregateOutputType | null;
    _max: EventParticipantsMaxAggregateOutputType | null;
};
export type EventParticipantsMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    registeredAt: Date | null;
    checkInToken: string | null;
    attended: boolean | null;
    checkedInAt: Date | null;
};
export type EventParticipantsMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    registeredAt: Date | null;
    checkInToken: string | null;
    attended: boolean | null;
    checkedInAt: Date | null;
};
export type EventParticipantsCountAggregateOutputType = {
    id: number;
    eventId: number;
    userId: number;
    registeredAt: number;
    checkInToken: number;
    attended: number;
    checkedInAt: number;
    _all: number;
};
export type EventParticipantsMinAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    registeredAt?: true;
    checkInToken?: true;
    attended?: true;
    checkedInAt?: true;
};
export type EventParticipantsMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    registeredAt?: true;
    checkInToken?: true;
    attended?: true;
    checkedInAt?: true;
};
export type EventParticipantsCountAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    registeredAt?: true;
    checkInToken?: true;
    attended?: true;
    checkedInAt?: true;
    _all?: true;
};
export type EventParticipantsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to aggregate.
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: Prisma.EventParticipantsOrderByWithRelationInput | Prisma.EventParticipantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventParticipantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventParticipants
    **/
    _count?: true | EventParticipantsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventParticipantsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventParticipantsMaxAggregateInputType;
};
export type GetEventParticipantsAggregateType<T extends EventParticipantsAggregateArgs> = {
    [P in keyof T & keyof AggregateEventParticipants]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventParticipants[P]> : Prisma.GetScalarType<T[P], AggregateEventParticipants[P]>;
};
export type EventParticipantsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventParticipantsWhereInput;
    orderBy?: Prisma.EventParticipantsOrderByWithAggregationInput | Prisma.EventParticipantsOrderByWithAggregationInput[];
    by: Prisma.EventParticipantsScalarFieldEnum[] | Prisma.EventParticipantsScalarFieldEnum;
    having?: Prisma.EventParticipantsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventParticipantsCountAggregateInputType | true;
    _min?: EventParticipantsMinAggregateInputType;
    _max?: EventParticipantsMaxAggregateInputType;
};
export type EventParticipantsGroupByOutputType = {
    id: string;
    eventId: string;
    userId: string;
    registeredAt: Date;
    checkInToken: string | null;
    attended: boolean;
    checkedInAt: Date | null;
    _count: EventParticipantsCountAggregateOutputType | null;
    _min: EventParticipantsMinAggregateOutputType | null;
    _max: EventParticipantsMaxAggregateOutputType | null;
};
type GetEventParticipantsGroupByPayload<T extends EventParticipantsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventParticipantsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventParticipantsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventParticipantsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventParticipantsGroupByOutputType[P]>;
}>>;
export type EventParticipantsWhereInput = {
    AND?: Prisma.EventParticipantsWhereInput | Prisma.EventParticipantsWhereInput[];
    OR?: Prisma.EventParticipantsWhereInput[];
    NOT?: Prisma.EventParticipantsWhereInput | Prisma.EventParticipantsWhereInput[];
    id?: Prisma.StringFilter<"EventParticipants"> | string;
    eventId?: Prisma.StringFilter<"EventParticipants"> | string;
    userId?: Prisma.StringFilter<"EventParticipants"> | string;
    registeredAt?: Prisma.DateTimeFilter<"EventParticipants"> | Date | string;
    checkInToken?: Prisma.StringNullableFilter<"EventParticipants"> | string | null;
    attended?: Prisma.BoolFilter<"EventParticipants"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableFilter<"EventParticipants"> | Date | string | null;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EventParticipantsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    checkInToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type EventParticipantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    checkInToken?: string;
    eventId_userId?: Prisma.EventParticipantsEventIdUserIdCompoundUniqueInput;
    AND?: Prisma.EventParticipantsWhereInput | Prisma.EventParticipantsWhereInput[];
    OR?: Prisma.EventParticipantsWhereInput[];
    NOT?: Prisma.EventParticipantsWhereInput | Prisma.EventParticipantsWhereInput[];
    eventId?: Prisma.StringFilter<"EventParticipants"> | string;
    userId?: Prisma.StringFilter<"EventParticipants"> | string;
    registeredAt?: Prisma.DateTimeFilter<"EventParticipants"> | Date | string;
    attended?: Prisma.BoolFilter<"EventParticipants"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableFilter<"EventParticipants"> | Date | string | null;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "checkInToken" | "eventId_userId">;
export type EventParticipantsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    checkInToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EventParticipantsCountOrderByAggregateInput;
    _max?: Prisma.EventParticipantsMaxOrderByAggregateInput;
    _min?: Prisma.EventParticipantsMinOrderByAggregateInput;
};
export type EventParticipantsScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventParticipantsScalarWhereWithAggregatesInput | Prisma.EventParticipantsScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventParticipantsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventParticipantsScalarWhereWithAggregatesInput | Prisma.EventParticipantsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventParticipants"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventParticipants"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"EventParticipants"> | string;
    registeredAt?: Prisma.DateTimeWithAggregatesFilter<"EventParticipants"> | Date | string;
    checkInToken?: Prisma.StringNullableWithAggregatesFilter<"EventParticipants"> | string | null;
    attended?: Prisma.BoolWithAggregatesFilter<"EventParticipants"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EventParticipants"> | Date | string | null;
};
export type EventParticipantsCreateInput = {
    id?: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutParticipantsInput;
    user: Prisma.UserCreateNestedOneWithoutEventParticipantsInput;
};
export type EventParticipantsUncheckedCreateInput = {
    id?: string;
    eventId: string;
    userId: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
};
export type EventParticipantsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutEventParticipantsNestedInput;
};
export type EventParticipantsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsCreateManyInput = {
    id?: string;
    eventId: string;
    userId: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
};
export type EventParticipantsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsListRelationFilter = {
    every?: Prisma.EventParticipantsWhereInput;
    some?: Prisma.EventParticipantsWhereInput;
    none?: Prisma.EventParticipantsWhereInput;
};
export type EventParticipantsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventParticipantsEventIdUserIdCompoundUniqueInput = {
    eventId: string;
    userId: string;
};
export type EventParticipantsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    checkInToken?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type EventParticipantsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    checkInToken?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type EventParticipantsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    checkInToken?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type EventParticipantsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutUserInput, Prisma.EventParticipantsUncheckedCreateWithoutUserInput> | Prisma.EventParticipantsCreateWithoutUserInput[] | Prisma.EventParticipantsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutUserInput | Prisma.EventParticipantsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventParticipantsCreateManyUserInputEnvelope;
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
};
export type EventParticipantsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutUserInput, Prisma.EventParticipantsUncheckedCreateWithoutUserInput> | Prisma.EventParticipantsCreateWithoutUserInput[] | Prisma.EventParticipantsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutUserInput | Prisma.EventParticipantsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventParticipantsCreateManyUserInputEnvelope;
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
};
export type EventParticipantsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutUserInput, Prisma.EventParticipantsUncheckedCreateWithoutUserInput> | Prisma.EventParticipantsCreateWithoutUserInput[] | Prisma.EventParticipantsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutUserInput | Prisma.EventParticipantsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventParticipantsUpsertWithWhereUniqueWithoutUserInput | Prisma.EventParticipantsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventParticipantsCreateManyUserInputEnvelope;
    set?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    delete?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    update?: Prisma.EventParticipantsUpdateWithWhereUniqueWithoutUserInput | Prisma.EventParticipantsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventParticipantsUpdateManyWithWhereWithoutUserInput | Prisma.EventParticipantsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventParticipantsScalarWhereInput | Prisma.EventParticipantsScalarWhereInput[];
};
export type EventParticipantsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutUserInput, Prisma.EventParticipantsUncheckedCreateWithoutUserInput> | Prisma.EventParticipantsCreateWithoutUserInput[] | Prisma.EventParticipantsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutUserInput | Prisma.EventParticipantsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventParticipantsUpsertWithWhereUniqueWithoutUserInput | Prisma.EventParticipantsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventParticipantsCreateManyUserInputEnvelope;
    set?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    delete?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    update?: Prisma.EventParticipantsUpdateWithWhereUniqueWithoutUserInput | Prisma.EventParticipantsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventParticipantsUpdateManyWithWhereWithoutUserInput | Prisma.EventParticipantsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventParticipantsScalarWhereInput | Prisma.EventParticipantsScalarWhereInput[];
};
export type EventParticipantsCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutEventInput, Prisma.EventParticipantsUncheckedCreateWithoutEventInput> | Prisma.EventParticipantsCreateWithoutEventInput[] | Prisma.EventParticipantsUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutEventInput | Prisma.EventParticipantsCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventParticipantsCreateManyEventInputEnvelope;
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
};
export type EventParticipantsUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutEventInput, Prisma.EventParticipantsUncheckedCreateWithoutEventInput> | Prisma.EventParticipantsCreateWithoutEventInput[] | Prisma.EventParticipantsUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutEventInput | Prisma.EventParticipantsCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventParticipantsCreateManyEventInputEnvelope;
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
};
export type EventParticipantsUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutEventInput, Prisma.EventParticipantsUncheckedCreateWithoutEventInput> | Prisma.EventParticipantsCreateWithoutEventInput[] | Prisma.EventParticipantsUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutEventInput | Prisma.EventParticipantsCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventParticipantsUpsertWithWhereUniqueWithoutEventInput | Prisma.EventParticipantsUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventParticipantsCreateManyEventInputEnvelope;
    set?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    delete?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    update?: Prisma.EventParticipantsUpdateWithWhereUniqueWithoutEventInput | Prisma.EventParticipantsUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventParticipantsUpdateManyWithWhereWithoutEventInput | Prisma.EventParticipantsUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventParticipantsScalarWhereInput | Prisma.EventParticipantsScalarWhereInput[];
};
export type EventParticipantsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantsCreateWithoutEventInput, Prisma.EventParticipantsUncheckedCreateWithoutEventInput> | Prisma.EventParticipantsCreateWithoutEventInput[] | Prisma.EventParticipantsUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantsCreateOrConnectWithoutEventInput | Prisma.EventParticipantsCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventParticipantsUpsertWithWhereUniqueWithoutEventInput | Prisma.EventParticipantsUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventParticipantsCreateManyEventInputEnvelope;
    set?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    delete?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    connect?: Prisma.EventParticipantsWhereUniqueInput | Prisma.EventParticipantsWhereUniqueInput[];
    update?: Prisma.EventParticipantsUpdateWithWhereUniqueWithoutEventInput | Prisma.EventParticipantsUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventParticipantsUpdateManyWithWhereWithoutEventInput | Prisma.EventParticipantsUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventParticipantsScalarWhereInput | Prisma.EventParticipantsScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EventParticipantsCreateWithoutUserInput = {
    id?: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutParticipantsInput;
};
export type EventParticipantsUncheckedCreateWithoutUserInput = {
    id?: string;
    eventId: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
};
export type EventParticipantsCreateOrConnectWithoutUserInput = {
    where: Prisma.EventParticipantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventParticipantsCreateWithoutUserInput, Prisma.EventParticipantsUncheckedCreateWithoutUserInput>;
};
export type EventParticipantsCreateManyUserInputEnvelope = {
    data: Prisma.EventParticipantsCreateManyUserInput | Prisma.EventParticipantsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EventParticipantsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventParticipantsWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventParticipantsUpdateWithoutUserInput, Prisma.EventParticipantsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EventParticipantsCreateWithoutUserInput, Prisma.EventParticipantsUncheckedCreateWithoutUserInput>;
};
export type EventParticipantsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventParticipantsWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventParticipantsUpdateWithoutUserInput, Prisma.EventParticipantsUncheckedUpdateWithoutUserInput>;
};
export type EventParticipantsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EventParticipantsScalarWhereInput;
    data: Prisma.XOR<Prisma.EventParticipantsUpdateManyMutationInput, Prisma.EventParticipantsUncheckedUpdateManyWithoutUserInput>;
};
export type EventParticipantsScalarWhereInput = {
    AND?: Prisma.EventParticipantsScalarWhereInput | Prisma.EventParticipantsScalarWhereInput[];
    OR?: Prisma.EventParticipantsScalarWhereInput[];
    NOT?: Prisma.EventParticipantsScalarWhereInput | Prisma.EventParticipantsScalarWhereInput[];
    id?: Prisma.StringFilter<"EventParticipants"> | string;
    eventId?: Prisma.StringFilter<"EventParticipants"> | string;
    userId?: Prisma.StringFilter<"EventParticipants"> | string;
    registeredAt?: Prisma.DateTimeFilter<"EventParticipants"> | Date | string;
    checkInToken?: Prisma.StringNullableFilter<"EventParticipants"> | string | null;
    attended?: Prisma.BoolFilter<"EventParticipants"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableFilter<"EventParticipants"> | Date | string | null;
};
export type EventParticipantsCreateWithoutEventInput = {
    id?: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutEventParticipantsInput;
};
export type EventParticipantsUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
};
export type EventParticipantsCreateOrConnectWithoutEventInput = {
    where: Prisma.EventParticipantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventParticipantsCreateWithoutEventInput, Prisma.EventParticipantsUncheckedCreateWithoutEventInput>;
};
export type EventParticipantsCreateManyEventInputEnvelope = {
    data: Prisma.EventParticipantsCreateManyEventInput | Prisma.EventParticipantsCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventParticipantsUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventParticipantsWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventParticipantsUpdateWithoutEventInput, Prisma.EventParticipantsUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventParticipantsCreateWithoutEventInput, Prisma.EventParticipantsUncheckedCreateWithoutEventInput>;
};
export type EventParticipantsUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventParticipantsWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventParticipantsUpdateWithoutEventInput, Prisma.EventParticipantsUncheckedUpdateWithoutEventInput>;
};
export type EventParticipantsUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventParticipantsScalarWhereInput;
    data: Prisma.XOR<Prisma.EventParticipantsUpdateManyMutationInput, Prisma.EventParticipantsUncheckedUpdateManyWithoutEventInput>;
};
export type EventParticipantsCreateManyUserInput = {
    id?: string;
    eventId: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
};
export type EventParticipantsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type EventParticipantsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsCreateManyEventInput = {
    id?: string;
    userId: string;
    registeredAt?: Date | string;
    checkInToken?: string | null;
    attended?: boolean;
    checkedInAt?: Date | string | null;
};
export type EventParticipantsUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutEventParticipantsNestedInput;
};
export type EventParticipantsUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkInToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventParticipantsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    registeredAt?: boolean;
    checkInToken?: boolean;
    attended?: boolean;
    checkedInAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventParticipants"]>;
export type EventParticipantsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    registeredAt?: boolean;
    checkInToken?: boolean;
    attended?: boolean;
    checkedInAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventParticipants"]>;
export type EventParticipantsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    registeredAt?: boolean;
    checkInToken?: boolean;
    attended?: boolean;
    checkedInAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventParticipants"]>;
export type EventParticipantsSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    registeredAt?: boolean;
    checkInToken?: boolean;
    attended?: boolean;
    checkedInAt?: boolean;
};
export type EventParticipantsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "userId" | "registeredAt" | "checkInToken" | "attended" | "checkedInAt", ExtArgs["result"]["eventParticipants"]>;
export type EventParticipantsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventParticipantsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventParticipantsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EventParticipantsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventParticipants";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        userId: string;
        registeredAt: Date;
        checkInToken: string | null;
        attended: boolean;
        checkedInAt: Date | null;
    }, ExtArgs["result"]["eventParticipants"]>;
    composites: {};
};
export type EventParticipantsGetPayload<S extends boolean | null | undefined | EventParticipantsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload, S>;
export type EventParticipantsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventParticipantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventParticipantsCountAggregateInputType | true;
};
export interface EventParticipantsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventParticipants'];
        meta: {
            name: 'EventParticipants';
        };
    };
    /**
     * Find zero or one EventParticipants that matches the filter.
     * @param {EventParticipantsFindUniqueArgs} args - Arguments to find a EventParticipants
     * @example
     * // Get one EventParticipants
     * const eventParticipants = await prisma.eventParticipants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventParticipantsFindUniqueArgs>(args: Prisma.SelectSubset<T, EventParticipantsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventParticipants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventParticipantsFindUniqueOrThrowArgs} args - Arguments to find a EventParticipants
     * @example
     * // Get one EventParticipants
     * const eventParticipants = await prisma.eventParticipants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventParticipantsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventParticipantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsFindFirstArgs} args - Arguments to find a EventParticipants
     * @example
     * // Get one EventParticipants
     * const eventParticipants = await prisma.eventParticipants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventParticipantsFindFirstArgs>(args?: Prisma.SelectSubset<T, EventParticipantsFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventParticipants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsFindFirstOrThrowArgs} args - Arguments to find a EventParticipants
     * @example
     * // Get one EventParticipants
     * const eventParticipants = await prisma.eventParticipants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventParticipantsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventParticipantsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventParticipants
     * const eventParticipants = await prisma.eventParticipants.findMany()
     *
     * // Get first 10 EventParticipants
     * const eventParticipants = await prisma.eventParticipants.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventParticipantsWithIdOnly = await prisma.eventParticipants.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventParticipantsFindManyArgs>(args?: Prisma.SelectSubset<T, EventParticipantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventParticipants.
     * @param {EventParticipantsCreateArgs} args - Arguments to create a EventParticipants.
     * @example
     * // Create one EventParticipants
     * const EventParticipants = await prisma.eventParticipants.create({
     *   data: {
     *     // ... data to create a EventParticipants
     *   }
     * })
     *
     */
    create<T extends EventParticipantsCreateArgs>(args: Prisma.SelectSubset<T, EventParticipantsCreateArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventParticipants.
     * @param {EventParticipantsCreateManyArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipants = await prisma.eventParticipants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventParticipantsCreateManyArgs>(args?: Prisma.SelectSubset<T, EventParticipantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventParticipants and returns the data saved in the database.
     * @param {EventParticipantsCreateManyAndReturnArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipants = await prisma.eventParticipants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventParticipants and only return the `id`
     * const eventParticipantsWithIdOnly = await prisma.eventParticipants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventParticipantsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventParticipantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventParticipants.
     * @param {EventParticipantsDeleteArgs} args - Arguments to delete one EventParticipants.
     * @example
     * // Delete one EventParticipants
     * const EventParticipants = await prisma.eventParticipants.delete({
     *   where: {
     *     // ... filter to delete one EventParticipants
     *   }
     * })
     *
     */
    delete<T extends EventParticipantsDeleteArgs>(args: Prisma.SelectSubset<T, EventParticipantsDeleteArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventParticipants.
     * @param {EventParticipantsUpdateArgs} args - Arguments to update one EventParticipants.
     * @example
     * // Update one EventParticipants
     * const eventParticipants = await prisma.eventParticipants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventParticipantsUpdateArgs>(args: Prisma.SelectSubset<T, EventParticipantsUpdateArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventParticipants.
     * @param {EventParticipantsDeleteManyArgs} args - Arguments to filter EventParticipants to delete.
     * @example
     * // Delete a few EventParticipants
     * const { count } = await prisma.eventParticipants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventParticipantsDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventParticipantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventParticipants
     * const eventParticipants = await prisma.eventParticipants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventParticipantsUpdateManyArgs>(args: Prisma.SelectSubset<T, EventParticipantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventParticipants and returns the data updated in the database.
     * @param {EventParticipantsUpdateManyAndReturnArgs} args - Arguments to update many EventParticipants.
     * @example
     * // Update many EventParticipants
     * const eventParticipants = await prisma.eventParticipants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventParticipants and only return the `id`
     * const eventParticipantsWithIdOnly = await prisma.eventParticipants.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventParticipantsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventParticipantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventParticipants.
     * @param {EventParticipantsUpsertArgs} args - Arguments to update or create a EventParticipants.
     * @example
     * // Update or create a EventParticipants
     * const eventParticipants = await prisma.eventParticipants.upsert({
     *   create: {
     *     // ... data to create a EventParticipants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventParticipants we want to update
     *   }
     * })
     */
    upsert<T extends EventParticipantsUpsertArgs>(args: Prisma.SelectSubset<T, EventParticipantsUpsertArgs<ExtArgs>>): Prisma.Prisma__EventParticipantsClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsCountArgs} args - Arguments to filter EventParticipants to count.
     * @example
     * // Count the number of EventParticipants
     * const count = await prisma.eventParticipants.count({
     *   where: {
     *     // ... the filter for the EventParticipants we want to count
     *   }
     * })
    **/
    count<T extends EventParticipantsCountArgs>(args?: Prisma.Subset<T, EventParticipantsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventParticipantsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventParticipantsAggregateArgs>(args: Prisma.Subset<T, EventParticipantsAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantsAggregateType<T>>;
    /**
     * Group by EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventParticipantsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventParticipantsGroupByArgs['orderBy'];
    } : {
        orderBy?: EventParticipantsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventParticipantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventParticipants model
     */
    readonly fields: EventParticipantsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventParticipants.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventParticipantsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EventParticipants model
 */
export interface EventParticipantsFieldRefs {
    readonly id: Prisma.FieldRef<"EventParticipants", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventParticipants", 'String'>;
    readonly userId: Prisma.FieldRef<"EventParticipants", 'String'>;
    readonly registeredAt: Prisma.FieldRef<"EventParticipants", 'DateTime'>;
    readonly checkInToken: Prisma.FieldRef<"EventParticipants", 'String'>;
    readonly attended: Prisma.FieldRef<"EventParticipants", 'Boolean'>;
    readonly checkedInAt: Prisma.FieldRef<"EventParticipants", 'DateTime'>;
}
/**
 * EventParticipants findUnique
 */
export type EventParticipantsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * Filter, which EventParticipants to fetch.
     */
    where: Prisma.EventParticipantsWhereUniqueInput;
};
/**
 * EventParticipants findUniqueOrThrow
 */
export type EventParticipantsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * Filter, which EventParticipants to fetch.
     */
    where: Prisma.EventParticipantsWhereUniqueInput;
};
/**
 * EventParticipants findFirst
 */
export type EventParticipantsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: Prisma.EventParticipantsOrderByWithRelationInput | Prisma.EventParticipantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventParticipants.
     */
    cursor?: Prisma.EventParticipantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: Prisma.EventParticipantsScalarFieldEnum | Prisma.EventParticipantsScalarFieldEnum[];
};
/**
 * EventParticipants findFirstOrThrow
 */
export type EventParticipantsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: Prisma.EventParticipantsOrderByWithRelationInput | Prisma.EventParticipantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventParticipants.
     */
    cursor?: Prisma.EventParticipantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventParticipants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: Prisma.EventParticipantsScalarFieldEnum | Prisma.EventParticipantsScalarFieldEnum[];
};
/**
 * EventParticipants findMany
 */
export type EventParticipantsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: Prisma.EventParticipantsOrderByWithRelationInput | Prisma.EventParticipantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventParticipants.
     */
    cursor?: Prisma.EventParticipantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventParticipants.
     */
    skip?: number;
    distinct?: Prisma.EventParticipantsScalarFieldEnum | Prisma.EventParticipantsScalarFieldEnum[];
};
/**
 * EventParticipants create
 */
export type EventParticipantsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventParticipants.
     */
    data: Prisma.XOR<Prisma.EventParticipantsCreateInput, Prisma.EventParticipantsUncheckedCreateInput>;
};
/**
 * EventParticipants createMany
 */
export type EventParticipantsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventParticipants.
     */
    data: Prisma.EventParticipantsCreateManyInput | Prisma.EventParticipantsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventParticipants createManyAndReturn
 */
export type EventParticipantsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * The data used to create many EventParticipants.
     */
    data: Prisma.EventParticipantsCreateManyInput | Prisma.EventParticipantsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventParticipants update
 */
export type EventParticipantsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventParticipants.
     */
    data: Prisma.XOR<Prisma.EventParticipantsUpdateInput, Prisma.EventParticipantsUncheckedUpdateInput>;
    /**
     * Choose, which EventParticipants to update.
     */
    where: Prisma.EventParticipantsWhereUniqueInput;
};
/**
 * EventParticipants updateMany
 */
export type EventParticipantsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventParticipants.
     */
    data: Prisma.XOR<Prisma.EventParticipantsUpdateManyMutationInput, Prisma.EventParticipantsUncheckedUpdateManyInput>;
    /**
     * Filter which EventParticipants to update
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number;
};
/**
 * EventParticipants updateManyAndReturn
 */
export type EventParticipantsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * The data used to update EventParticipants.
     */
    data: Prisma.XOR<Prisma.EventParticipantsUpdateManyMutationInput, Prisma.EventParticipantsUncheckedUpdateManyInput>;
    /**
     * Filter which EventParticipants to update
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventParticipants upsert
 */
export type EventParticipantsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventParticipants to update in case it exists.
     */
    where: Prisma.EventParticipantsWhereUniqueInput;
    /**
     * In case the EventParticipants found by the `where` argument doesn't exist, create a new EventParticipants with this data.
     */
    create: Prisma.XOR<Prisma.EventParticipantsCreateInput, Prisma.EventParticipantsUncheckedCreateInput>;
    /**
     * In case the EventParticipants was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventParticipantsUpdateInput, Prisma.EventParticipantsUncheckedUpdateInput>;
};
/**
 * EventParticipants delete
 */
export type EventParticipantsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
    /**
     * Filter which EventParticipants to delete.
     */
    where: Prisma.EventParticipantsWhereUniqueInput;
};
/**
 * EventParticipants deleteMany
 */
export type EventParticipantsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to delete
     */
    where?: Prisma.EventParticipantsWhereInput;
    /**
     * Limit how many EventParticipants to delete.
     */
    limit?: number;
};
/**
 * EventParticipants without action
 */
export type EventParticipantsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipants
     */
    select?: Prisma.EventParticipantsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventParticipants
     */
    omit?: Prisma.EventParticipantsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventParticipantsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=EventParticipants.d.ts.map