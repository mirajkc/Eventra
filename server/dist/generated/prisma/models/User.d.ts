import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    image: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    image: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    phone: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    image: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phone?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    image?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phone?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    image?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    phone?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    image?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    phone: string | null;
    password: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    session?: Prisma.SessionListRelationFilter;
    organizationMember?: Prisma.OrganizationMemberListRelationFilter;
    createdEvents?: Prisma.EventListRelationFilter;
    creditPurchases?: Prisma.CreditPurchaseListRelationFilter;
    userInteractions?: Prisma.UserInteractionListRelationFilter;
    eventParticipants?: Prisma.EventParticipantsListRelationFilter;
    userEmbedding?: Prisma.XOR<Prisma.UserEmbeddingNullableScalarRelationFilter, Prisma.UserEmbeddingWhereInput> | null;
    notifications?: Prisma.NotificationListRelationFilter;
    otpdetails?: Prisma.OtpdetailsListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    session?: Prisma.SessionOrderByRelationAggregateInput;
    organizationMember?: Prisma.OrganizationMemberOrderByRelationAggregateInput;
    createdEvents?: Prisma.EventOrderByRelationAggregateInput;
    creditPurchases?: Prisma.CreditPurchaseOrderByRelationAggregateInput;
    userInteractions?: Prisma.UserInteractionOrderByRelationAggregateInput;
    eventParticipants?: Prisma.EventParticipantsOrderByRelationAggregateInput;
    userEmbedding?: Prisma.UserEmbeddingOrderByWithRelationInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    otpdetails?: Prisma.OtpdetailsOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    session?: Prisma.SessionListRelationFilter;
    organizationMember?: Prisma.OrganizationMemberListRelationFilter;
    createdEvents?: Prisma.EventListRelationFilter;
    creditPurchases?: Prisma.CreditPurchaseListRelationFilter;
    userInteractions?: Prisma.UserInteractionListRelationFilter;
    eventParticipants?: Prisma.EventParticipantsListRelationFilter;
    userEmbedding?: Prisma.XOR<Prisma.UserEmbeddingNullableScalarRelationFilter, Prisma.UserEmbeddingWhereInput> | null;
    notifications?: Prisma.NotificationListRelationFilter;
    otpdetails?: Prisma.OtpdetailsListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutOtpdetailsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOtpdetailsInput, Prisma.UserUncheckedCreateWithoutOtpdetailsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOtpdetailsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOtpdetailsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOtpdetailsInput, Prisma.UserUncheckedCreateWithoutOtpdetailsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOtpdetailsInput;
    upsert?: Prisma.UserUpsertWithoutOtpdetailsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOtpdetailsInput, Prisma.UserUpdateWithoutOtpdetailsInput>, Prisma.UserUncheckedUpdateWithoutOtpdetailsInput>;
};
export type UserCreateNestedOneWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionInput, Prisma.UserUncheckedCreateWithoutSessionInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionInput, Prisma.UserUncheckedCreateWithoutSessionInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionInput;
    upsert?: Prisma.UserUpsertWithoutSessionInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionInput, Prisma.UserUpdateWithoutSessionInput>, Prisma.UserUncheckedUpdateWithoutSessionInput>;
};
export type UserCreateNestedOneWithoutOrganizationMemberInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrganizationMemberInput, Prisma.UserUncheckedCreateWithoutOrganizationMemberInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrganizationMemberInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrganizationMemberNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrganizationMemberInput, Prisma.UserUncheckedCreateWithoutOrganizationMemberInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrganizationMemberInput;
    upsert?: Prisma.UserUpsertWithoutOrganizationMemberInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrganizationMemberInput, Prisma.UserUpdateWithoutOrganizationMemberInput>, Prisma.UserUncheckedUpdateWithoutOrganizationMemberInput>;
};
export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedEventsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedEventsInput, Prisma.UserUpdateWithoutCreatedEventsInput>, Prisma.UserUncheckedUpdateWithoutCreatedEventsInput>;
};
export type UserCreateNestedOneWithoutEventParticipantsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventParticipantsInput, Prisma.UserUncheckedCreateWithoutEventParticipantsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventParticipantsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEventParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventParticipantsInput, Prisma.UserUncheckedCreateWithoutEventParticipantsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventParticipantsInput;
    upsert?: Prisma.UserUpsertWithoutEventParticipantsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventParticipantsInput, Prisma.UserUpdateWithoutEventParticipantsInput>, Prisma.UserUncheckedUpdateWithoutEventParticipantsInput>;
};
export type UserCreateNestedOneWithoutCreditPurchasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreditPurchasesInput, Prisma.UserUncheckedCreateWithoutCreditPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreditPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreditPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreditPurchasesInput, Prisma.UserUncheckedCreateWithoutCreditPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreditPurchasesInput;
    upsert?: Prisma.UserUpsertWithoutCreditPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreditPurchasesInput, Prisma.UserUpdateWithoutCreditPurchasesInput>, Prisma.UserUncheckedUpdateWithoutCreditPurchasesInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutUserEmbeddingInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserEmbeddingInput, Prisma.UserUncheckedCreateWithoutUserEmbeddingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserEmbeddingInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserEmbeddingNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserEmbeddingInput, Prisma.UserUncheckedCreateWithoutUserEmbeddingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserEmbeddingInput;
    upsert?: Prisma.UserUpsertWithoutUserEmbeddingInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserEmbeddingInput, Prisma.UserUpdateWithoutUserEmbeddingInput>, Prisma.UserUncheckedUpdateWithoutUserEmbeddingInput>;
};
export type UserCreateNestedOneWithoutUserInteractionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserInteractionsInput, Prisma.UserUncheckedCreateWithoutUserInteractionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserInteractionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserInteractionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserInteractionsInput, Prisma.UserUncheckedCreateWithoutUserInteractionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserInteractionsInput;
    upsert?: Prisma.UserUpsertWithoutUserInteractionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserInteractionsInput, Prisma.UserUpdateWithoutUserInteractionsInput>, Prisma.UserUncheckedUpdateWithoutUserInteractionsInput>;
};
export type UserCreateWithoutOtpdetailsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOtpdetailsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOtpdetailsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOtpdetailsInput, Prisma.UserUncheckedCreateWithoutOtpdetailsInput>;
};
export type UserUpsertWithoutOtpdetailsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOtpdetailsInput, Prisma.UserUncheckedUpdateWithoutOtpdetailsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOtpdetailsInput, Prisma.UserUncheckedCreateWithoutOtpdetailsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOtpdetailsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOtpdetailsInput, Prisma.UserUncheckedUpdateWithoutOtpdetailsInput>;
};
export type UserUpdateWithoutOtpdetailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOtpdetailsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionInput, Prisma.UserUncheckedCreateWithoutSessionInput>;
};
export type UserUpsertWithoutSessionInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionInput, Prisma.UserUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionInput, Prisma.UserUncheckedCreateWithoutSessionInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionInput, Prisma.UserUncheckedUpdateWithoutSessionInput>;
};
export type UserUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOrganizationMemberInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrganizationMemberInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrganizationMemberInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrganizationMemberInput, Prisma.UserUncheckedCreateWithoutOrganizationMemberInput>;
};
export type UserUpsertWithoutOrganizationMemberInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrganizationMemberInput, Prisma.UserUncheckedUpdateWithoutOrganizationMemberInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrganizationMemberInput, Prisma.UserUncheckedCreateWithoutOrganizationMemberInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrganizationMemberInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrganizationMemberInput, Prisma.UserUncheckedUpdateWithoutOrganizationMemberInput>;
};
export type UserUpdateWithoutOrganizationMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrganizationMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCreatedEventsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
};
export type UserUpsertWithoutCreatedEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedEventsInput, Prisma.UserUncheckedUpdateWithoutCreatedEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedEventsInput, Prisma.UserUncheckedUpdateWithoutCreatedEventsInput>;
};
export type UserUpdateWithoutCreatedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEventParticipantsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventParticipantsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventParticipantsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventParticipantsInput, Prisma.UserUncheckedCreateWithoutEventParticipantsInput>;
};
export type UserUpsertWithoutEventParticipantsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventParticipantsInput, Prisma.UserUncheckedUpdateWithoutEventParticipantsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventParticipantsInput, Prisma.UserUncheckedCreateWithoutEventParticipantsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventParticipantsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventParticipantsInput, Prisma.UserUncheckedUpdateWithoutEventParticipantsInput>;
};
export type UserUpdateWithoutEventParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCreditPurchasesInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreditPurchasesInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreditPurchasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreditPurchasesInput, Prisma.UserUncheckedCreateWithoutCreditPurchasesInput>;
};
export type UserUpsertWithoutCreditPurchasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreditPurchasesInput, Prisma.UserUncheckedUpdateWithoutCreditPurchasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreditPurchasesInput, Prisma.UserUncheckedCreateWithoutCreditPurchasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreditPurchasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreditPurchasesInput, Prisma.UserUncheckedUpdateWithoutCreditPurchasesInput>;
};
export type UserUpdateWithoutCreditPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreditPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutUserEmbeddingInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUserEmbeddingInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    userInteractions?: Prisma.UserInteractionUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUserEmbeddingInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserEmbeddingInput, Prisma.UserUncheckedCreateWithoutUserEmbeddingInput>;
};
export type UserUpsertWithoutUserEmbeddingInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserEmbeddingInput, Prisma.UserUncheckedUpdateWithoutUserEmbeddingInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserEmbeddingInput, Prisma.UserUncheckedCreateWithoutUserEmbeddingInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserEmbeddingInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserEmbeddingInput, Prisma.UserUncheckedUpdateWithoutUserEmbeddingInput>;
};
export type UserUpdateWithoutUserEmbeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUserEmbeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    userInteractions?: Prisma.UserInteractionUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutUserInteractionsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUserInteractionsInput = {
    id?: string;
    email: string;
    name: string;
    phone?: string | null;
    password?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: string | null;
    session?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatorInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedCreateNestedManyWithoutUserInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedCreateNestedManyWithoutUserInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    otpdetails?: Prisma.OtpdetailsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUserInteractionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserInteractionsInput, Prisma.UserUncheckedCreateWithoutUserInteractionsInput>;
};
export type UserUpsertWithoutUserInteractionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserInteractionsInput, Prisma.UserUncheckedUpdateWithoutUserInteractionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserInteractionsInput, Prisma.UserUncheckedCreateWithoutUserInteractionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserInteractionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserInteractionsInput, Prisma.UserUncheckedUpdateWithoutUserInteractionsInput>;
};
export type UserUpdateWithoutUserInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUserInteractionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    organizationMember?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatorNestedInput;
    creditPurchases?: Prisma.CreditPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    eventParticipants?: Prisma.EventParticipantsUncheckedUpdateManyWithoutUserNestedInput;
    userEmbedding?: Prisma.UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    otpdetails?: Prisma.OtpdetailsUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    session: number;
    organizationMember: number;
    createdEvents: number;
    creditPurchases: number;
    userInteractions: number;
    eventParticipants: number;
    notifications: number;
    otpdetails: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | UserCountOutputTypeCountSessionArgs;
    organizationMember?: boolean | UserCountOutputTypeCountOrganizationMemberArgs;
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs;
    creditPurchases?: boolean | UserCountOutputTypeCountCreditPurchasesArgs;
    userInteractions?: boolean | UserCountOutputTypeCountUserInteractionsArgs;
    eventParticipants?: boolean | UserCountOutputTypeCountEventParticipantsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    otpdetails?: boolean | UserCountOutputTypeCountOtpdetailsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrganizationMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationMemberWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreditPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditPurchaseWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUserInteractionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserInteractionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEventParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventParticipantsWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOtpdetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpdetailsWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
    session?: boolean | Prisma.User$sessionArgs<ExtArgs>;
    organizationMember?: boolean | Prisma.User$organizationMemberArgs<ExtArgs>;
    createdEvents?: boolean | Prisma.User$createdEventsArgs<ExtArgs>;
    creditPurchases?: boolean | Prisma.User$creditPurchasesArgs<ExtArgs>;
    userInteractions?: boolean | Prisma.User$userInteractionsArgs<ExtArgs>;
    eventParticipants?: boolean | Prisma.User$eventParticipantsArgs<ExtArgs>;
    userEmbedding?: boolean | Prisma.User$userEmbeddingArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    otpdetails?: boolean | Prisma.User$otpdetailsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    image?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "phone" | "password" | "role" | "createdAt" | "updatedAt" | "image", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.User$sessionArgs<ExtArgs>;
    organizationMember?: boolean | Prisma.User$organizationMemberArgs<ExtArgs>;
    createdEvents?: boolean | Prisma.User$createdEventsArgs<ExtArgs>;
    creditPurchases?: boolean | Prisma.User$creditPurchasesArgs<ExtArgs>;
    userInteractions?: boolean | Prisma.User$userInteractionsArgs<ExtArgs>;
    eventParticipants?: boolean | Prisma.User$eventParticipantsArgs<ExtArgs>;
    userEmbedding?: boolean | Prisma.User$userEmbeddingArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    otpdetails?: boolean | Prisma.User$otpdetailsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        session: Prisma.$SessionPayload<ExtArgs>[];
        organizationMember: Prisma.$OrganizationMemberPayload<ExtArgs>[];
        createdEvents: Prisma.$EventPayload<ExtArgs>[];
        creditPurchases: Prisma.$CreditPurchasePayload<ExtArgs>[];
        userInteractions: Prisma.$UserInteractionPayload<ExtArgs>[];
        eventParticipants: Prisma.$EventParticipantsPayload<ExtArgs>[];
        userEmbedding: Prisma.$UserEmbeddingPayload<ExtArgs> | null;
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        otpdetails: Prisma.$OtpdetailsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        name: string;
        phone: string | null;
        password: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.User$sessionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    organizationMember<T extends Prisma.User$organizationMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$organizationMemberArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdEvents<T extends Prisma.User$createdEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    creditPurchases<T extends Prisma.User$creditPurchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$creditPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userInteractions<T extends Prisma.User$userInteractionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userInteractionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    eventParticipants<T extends Prisma.User$eventParticipantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userEmbedding<T extends Prisma.User$userEmbeddingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userEmbeddingArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    otpdetails<T extends Prisma.User$otpdetailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$otpdetailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly image: Prisma.FieldRef<"User", 'String'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.session
 */
export type User$sessionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: Prisma.SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
/**
 * User.organizationMember
 */
export type User$organizationMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: Prisma.OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: Prisma.OrganizationMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrganizationMemberInclude<ExtArgs> | null;
    where?: Prisma.OrganizationMemberWhereInput;
    orderBy?: Prisma.OrganizationMemberOrderByWithRelationInput | Prisma.OrganizationMemberOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationMemberScalarFieldEnum | Prisma.OrganizationMemberScalarFieldEnum[];
};
/**
 * User.createdEvents
 */
export type User$createdEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * User.creditPurchases
 */
export type User$creditPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditPurchase
     */
    select?: Prisma.CreditPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreditPurchase
     */
    omit?: Prisma.CreditPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreditPurchaseInclude<ExtArgs> | null;
    where?: Prisma.CreditPurchaseWhereInput;
    orderBy?: Prisma.CreditPurchaseOrderByWithRelationInput | Prisma.CreditPurchaseOrderByWithRelationInput[];
    cursor?: Prisma.CreditPurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreditPurchaseScalarFieldEnum | Prisma.CreditPurchaseScalarFieldEnum[];
};
/**
 * User.userInteractions
 */
export type User$userInteractionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInteraction
     */
    select?: Prisma.UserInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserInteraction
     */
    omit?: Prisma.UserInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInteractionInclude<ExtArgs> | null;
    where?: Prisma.UserInteractionWhereInput;
    orderBy?: Prisma.UserInteractionOrderByWithRelationInput | Prisma.UserInteractionOrderByWithRelationInput[];
    cursor?: Prisma.UserInteractionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserInteractionScalarFieldEnum | Prisma.UserInteractionScalarFieldEnum[];
};
/**
 * User.eventParticipants
 */
export type User$eventParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EventParticipantsWhereInput;
    orderBy?: Prisma.EventParticipantsOrderByWithRelationInput | Prisma.EventParticipantsOrderByWithRelationInput[];
    cursor?: Prisma.EventParticipantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventParticipantsScalarFieldEnum | Prisma.EventParticipantsScalarFieldEnum[];
};
/**
 * User.userEmbedding
 */
export type User$userEmbeddingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmbedding
     */
    select?: Prisma.UserEmbeddingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserEmbedding
     */
    omit?: Prisma.UserEmbeddingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserEmbeddingInclude<ExtArgs> | null;
    where?: Prisma.UserEmbeddingWhereInput;
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.otpdetails
 */
export type User$otpdetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otpdetails
     */
    select?: Prisma.OtpdetailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Otpdetails
     */
    omit?: Prisma.OtpdetailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OtpdetailsInclude<ExtArgs> | null;
    where?: Prisma.OtpdetailsWhereInput;
    orderBy?: Prisma.OtpdetailsOrderByWithRelationInput | Prisma.OtpdetailsOrderByWithRelationInput[];
    cursor?: Prisma.OtpdetailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpdetailsScalarFieldEnum | Prisma.OtpdetailsScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map