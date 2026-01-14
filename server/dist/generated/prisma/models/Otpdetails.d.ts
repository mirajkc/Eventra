import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Otpdetails
 *
 */
export type OtpdetailsModel = runtime.Types.Result.DefaultSelection<Prisma.$OtpdetailsPayload>;
export type AggregateOtpdetails = {
    _count: OtpdetailsCountAggregateOutputType | null;
    _min: OtpdetailsMinAggregateOutputType | null;
    _max: OtpdetailsMaxAggregateOutputType | null;
};
export type OtpdetailsMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    otp: string | null;
    purpose: $Enums.OtpPurpose | null;
    expiresAt: Date | null;
    used: boolean | null;
    createdAt: Date | null;
};
export type OtpdetailsMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    otp: string | null;
    purpose: $Enums.OtpPurpose | null;
    expiresAt: Date | null;
    used: boolean | null;
    createdAt: Date | null;
};
export type OtpdetailsCountAggregateOutputType = {
    id: number;
    userId: number;
    otp: number;
    purpose: number;
    expiresAt: number;
    used: number;
    createdAt: number;
    _all: number;
};
export type OtpdetailsMinAggregateInputType = {
    id?: true;
    userId?: true;
    otp?: true;
    purpose?: true;
    expiresAt?: true;
    used?: true;
    createdAt?: true;
};
export type OtpdetailsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    otp?: true;
    purpose?: true;
    expiresAt?: true;
    used?: true;
    createdAt?: true;
};
export type OtpdetailsCountAggregateInputType = {
    id?: true;
    userId?: true;
    otp?: true;
    purpose?: true;
    expiresAt?: true;
    used?: true;
    createdAt?: true;
    _all?: true;
};
export type OtpdetailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Otpdetails to aggregate.
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otpdetails to fetch.
     */
    orderBy?: Prisma.OtpdetailsOrderByWithRelationInput | Prisma.OtpdetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OtpdetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otpdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otpdetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Otpdetails
    **/
    _count?: true | OtpdetailsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OtpdetailsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OtpdetailsMaxAggregateInputType;
};
export type GetOtpdetailsAggregateType<T extends OtpdetailsAggregateArgs> = {
    [P in keyof T & keyof AggregateOtpdetails]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtpdetails[P]> : Prisma.GetScalarType<T[P], AggregateOtpdetails[P]>;
};
export type OtpdetailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpdetailsWhereInput;
    orderBy?: Prisma.OtpdetailsOrderByWithAggregationInput | Prisma.OtpdetailsOrderByWithAggregationInput[];
    by: Prisma.OtpdetailsScalarFieldEnum[] | Prisma.OtpdetailsScalarFieldEnum;
    having?: Prisma.OtpdetailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpdetailsCountAggregateInputType | true;
    _min?: OtpdetailsMinAggregateInputType;
    _max?: OtpdetailsMaxAggregateInputType;
};
export type OtpdetailsGroupByOutputType = {
    id: string;
    userId: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date;
    used: boolean;
    createdAt: Date;
    _count: OtpdetailsCountAggregateOutputType | null;
    _min: OtpdetailsMinAggregateOutputType | null;
    _max: OtpdetailsMaxAggregateOutputType | null;
};
type GetOtpdetailsGroupByPayload<T extends OtpdetailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtpdetailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtpdetailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtpdetailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtpdetailsGroupByOutputType[P]>;
}>>;
export type OtpdetailsWhereInput = {
    AND?: Prisma.OtpdetailsWhereInput | Prisma.OtpdetailsWhereInput[];
    OR?: Prisma.OtpdetailsWhereInput[];
    NOT?: Prisma.OtpdetailsWhereInput | Prisma.OtpdetailsWhereInput[];
    id?: Prisma.StringFilter<"Otpdetails"> | string;
    userId?: Prisma.StringFilter<"Otpdetails"> | string;
    otp?: Prisma.StringFilter<"Otpdetails"> | string;
    purpose?: Prisma.EnumOtpPurposeFilter<"Otpdetails"> | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFilter<"Otpdetails"> | Date | string;
    used?: Prisma.BoolFilter<"Otpdetails"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Otpdetails"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type OtpdetailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type OtpdetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    otp?: string;
    AND?: Prisma.OtpdetailsWhereInput | Prisma.OtpdetailsWhereInput[];
    OR?: Prisma.OtpdetailsWhereInput[];
    NOT?: Prisma.OtpdetailsWhereInput | Prisma.OtpdetailsWhereInput[];
    userId?: Prisma.StringFilter<"Otpdetails"> | string;
    purpose?: Prisma.EnumOtpPurposeFilter<"Otpdetails"> | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFilter<"Otpdetails"> | Date | string;
    used?: Prisma.BoolFilter<"Otpdetails"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Otpdetails"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "otp">;
export type OtpdetailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OtpdetailsCountOrderByAggregateInput;
    _max?: Prisma.OtpdetailsMaxOrderByAggregateInput;
    _min?: Prisma.OtpdetailsMinOrderByAggregateInput;
};
export type OtpdetailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtpdetailsScalarWhereWithAggregatesInput | Prisma.OtpdetailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtpdetailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtpdetailsScalarWhereWithAggregatesInput | Prisma.OtpdetailsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Otpdetails"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Otpdetails"> | string;
    otp?: Prisma.StringWithAggregatesFilter<"Otpdetails"> | string;
    purpose?: Prisma.EnumOtpPurposeWithAggregatesFilter<"Otpdetails"> | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Otpdetails"> | Date | string;
    used?: Prisma.BoolWithAggregatesFilter<"Otpdetails"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Otpdetails"> | Date | string;
};
export type OtpdetailsCreateInput = {
    id?: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date | string;
    used?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOtpdetailsInput;
};
export type OtpdetailsUncheckedCreateInput = {
    id?: string;
    userId: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date | string;
    used?: boolean;
    createdAt?: Date | string;
};
export type OtpdetailsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOtpdetailsNestedInput;
};
export type OtpdetailsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpdetailsCreateManyInput = {
    id?: string;
    userId: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date | string;
    used?: boolean;
    createdAt?: Date | string;
};
export type OtpdetailsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpdetailsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpdetailsListRelationFilter = {
    every?: Prisma.OtpdetailsWhereInput;
    some?: Prisma.OtpdetailsWhereInput;
    none?: Prisma.OtpdetailsWhereInput;
};
export type OtpdetailsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OtpdetailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpdetailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpdetailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpdetailsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OtpdetailsCreateWithoutUserInput, Prisma.OtpdetailsUncheckedCreateWithoutUserInput> | Prisma.OtpdetailsCreateWithoutUserInput[] | Prisma.OtpdetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OtpdetailsCreateOrConnectWithoutUserInput | Prisma.OtpdetailsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OtpdetailsCreateManyUserInputEnvelope;
    connect?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
};
export type OtpdetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OtpdetailsCreateWithoutUserInput, Prisma.OtpdetailsUncheckedCreateWithoutUserInput> | Prisma.OtpdetailsCreateWithoutUserInput[] | Prisma.OtpdetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OtpdetailsCreateOrConnectWithoutUserInput | Prisma.OtpdetailsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OtpdetailsCreateManyUserInputEnvelope;
    connect?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
};
export type OtpdetailsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OtpdetailsCreateWithoutUserInput, Prisma.OtpdetailsUncheckedCreateWithoutUserInput> | Prisma.OtpdetailsCreateWithoutUserInput[] | Prisma.OtpdetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OtpdetailsCreateOrConnectWithoutUserInput | Prisma.OtpdetailsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OtpdetailsUpsertWithWhereUniqueWithoutUserInput | Prisma.OtpdetailsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OtpdetailsCreateManyUserInputEnvelope;
    set?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    disconnect?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    delete?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    connect?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    update?: Prisma.OtpdetailsUpdateWithWhereUniqueWithoutUserInput | Prisma.OtpdetailsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OtpdetailsUpdateManyWithWhereWithoutUserInput | Prisma.OtpdetailsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OtpdetailsScalarWhereInput | Prisma.OtpdetailsScalarWhereInput[];
};
export type OtpdetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OtpdetailsCreateWithoutUserInput, Prisma.OtpdetailsUncheckedCreateWithoutUserInput> | Prisma.OtpdetailsCreateWithoutUserInput[] | Prisma.OtpdetailsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OtpdetailsCreateOrConnectWithoutUserInput | Prisma.OtpdetailsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OtpdetailsUpsertWithWhereUniqueWithoutUserInput | Prisma.OtpdetailsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OtpdetailsCreateManyUserInputEnvelope;
    set?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    disconnect?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    delete?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    connect?: Prisma.OtpdetailsWhereUniqueInput | Prisma.OtpdetailsWhereUniqueInput[];
    update?: Prisma.OtpdetailsUpdateWithWhereUniqueWithoutUserInput | Prisma.OtpdetailsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OtpdetailsUpdateManyWithWhereWithoutUserInput | Prisma.OtpdetailsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OtpdetailsScalarWhereInput | Prisma.OtpdetailsScalarWhereInput[];
};
export type EnumOtpPurposeFieldUpdateOperationsInput = {
    set?: $Enums.OtpPurpose;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type OtpdetailsCreateWithoutUserInput = {
    id?: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date | string;
    used?: boolean;
    createdAt?: Date | string;
};
export type OtpdetailsUncheckedCreateWithoutUserInput = {
    id?: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date | string;
    used?: boolean;
    createdAt?: Date | string;
};
export type OtpdetailsCreateOrConnectWithoutUserInput = {
    where: Prisma.OtpdetailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpdetailsCreateWithoutUserInput, Prisma.OtpdetailsUncheckedCreateWithoutUserInput>;
};
export type OtpdetailsCreateManyUserInputEnvelope = {
    data: Prisma.OtpdetailsCreateManyUserInput | Prisma.OtpdetailsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OtpdetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OtpdetailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.OtpdetailsUpdateWithoutUserInput, Prisma.OtpdetailsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OtpdetailsCreateWithoutUserInput, Prisma.OtpdetailsUncheckedCreateWithoutUserInput>;
};
export type OtpdetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OtpdetailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.OtpdetailsUpdateWithoutUserInput, Prisma.OtpdetailsUncheckedUpdateWithoutUserInput>;
};
export type OtpdetailsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OtpdetailsScalarWhereInput;
    data: Prisma.XOR<Prisma.OtpdetailsUpdateManyMutationInput, Prisma.OtpdetailsUncheckedUpdateManyWithoutUserInput>;
};
export type OtpdetailsScalarWhereInput = {
    AND?: Prisma.OtpdetailsScalarWhereInput | Prisma.OtpdetailsScalarWhereInput[];
    OR?: Prisma.OtpdetailsScalarWhereInput[];
    NOT?: Prisma.OtpdetailsScalarWhereInput | Prisma.OtpdetailsScalarWhereInput[];
    id?: Prisma.StringFilter<"Otpdetails"> | string;
    userId?: Prisma.StringFilter<"Otpdetails"> | string;
    otp?: Prisma.StringFilter<"Otpdetails"> | string;
    purpose?: Prisma.EnumOtpPurposeFilter<"Otpdetails"> | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFilter<"Otpdetails"> | Date | string;
    used?: Prisma.BoolFilter<"Otpdetails"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Otpdetails"> | Date | string;
};
export type OtpdetailsCreateManyUserInput = {
    id?: string;
    otp: string;
    purpose: $Enums.OtpPurpose;
    expiresAt: Date | string;
    used?: boolean;
    createdAt?: Date | string;
};
export type OtpdetailsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpdetailsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpdetailsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    otp?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumOtpPurposeFieldUpdateOperationsInput | $Enums.OtpPurpose;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpdetailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    otp?: boolean;
    purpose?: boolean;
    expiresAt?: boolean;
    used?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["otpdetails"]>;
export type OtpdetailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    otp?: boolean;
    purpose?: boolean;
    expiresAt?: boolean;
    used?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["otpdetails"]>;
export type OtpdetailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    otp?: boolean;
    purpose?: boolean;
    expiresAt?: boolean;
    used?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["otpdetails"]>;
export type OtpdetailsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    otp?: boolean;
    purpose?: boolean;
    expiresAt?: boolean;
    used?: boolean;
    createdAt?: boolean;
};
export type OtpdetailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "otp" | "purpose" | "expiresAt" | "used" | "createdAt", ExtArgs["result"]["otpdetails"]>;
export type OtpdetailsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OtpdetailsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OtpdetailsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OtpdetailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Otpdetails";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        otp: string;
        purpose: $Enums.OtpPurpose;
        expiresAt: Date;
        used: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["otpdetails"]>;
    composites: {};
};
export type OtpdetailsGetPayload<S extends boolean | null | undefined | OtpdetailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload, S>;
export type OtpdetailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtpdetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpdetailsCountAggregateInputType | true;
};
export interface OtpdetailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Otpdetails'];
        meta: {
            name: 'Otpdetails';
        };
    };
    /**
     * Find zero or one Otpdetails that matches the filter.
     * @param {OtpdetailsFindUniqueArgs} args - Arguments to find a Otpdetails
     * @example
     * // Get one Otpdetails
     * const otpdetails = await prisma.otpdetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpdetailsFindUniqueArgs>(args: Prisma.SelectSubset<T, OtpdetailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Otpdetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpdetailsFindUniqueOrThrowArgs} args - Arguments to find a Otpdetails
     * @example
     * // Get one Otpdetails
     * const otpdetails = await prisma.otpdetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpdetailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtpdetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Otpdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsFindFirstArgs} args - Arguments to find a Otpdetails
     * @example
     * // Get one Otpdetails
     * const otpdetails = await prisma.otpdetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpdetailsFindFirstArgs>(args?: Prisma.SelectSubset<T, OtpdetailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Otpdetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsFindFirstOrThrowArgs} args - Arguments to find a Otpdetails
     * @example
     * // Get one Otpdetails
     * const otpdetails = await prisma.otpdetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpdetailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtpdetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Otpdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otpdetails
     * const otpdetails = await prisma.otpdetails.findMany()
     *
     * // Get first 10 Otpdetails
     * const otpdetails = await prisma.otpdetails.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const otpdetailsWithIdOnly = await prisma.otpdetails.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OtpdetailsFindManyArgs>(args?: Prisma.SelectSubset<T, OtpdetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Otpdetails.
     * @param {OtpdetailsCreateArgs} args - Arguments to create a Otpdetails.
     * @example
     * // Create one Otpdetails
     * const Otpdetails = await prisma.otpdetails.create({
     *   data: {
     *     // ... data to create a Otpdetails
     *   }
     * })
     *
     */
    create<T extends OtpdetailsCreateArgs>(args: Prisma.SelectSubset<T, OtpdetailsCreateArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Otpdetails.
     * @param {OtpdetailsCreateManyArgs} args - Arguments to create many Otpdetails.
     * @example
     * // Create many Otpdetails
     * const otpdetails = await prisma.otpdetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OtpdetailsCreateManyArgs>(args?: Prisma.SelectSubset<T, OtpdetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Otpdetails and returns the data saved in the database.
     * @param {OtpdetailsCreateManyAndReturnArgs} args - Arguments to create many Otpdetails.
     * @example
     * // Create many Otpdetails
     * const otpdetails = await prisma.otpdetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Otpdetails and only return the `id`
     * const otpdetailsWithIdOnly = await prisma.otpdetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OtpdetailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtpdetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Otpdetails.
     * @param {OtpdetailsDeleteArgs} args - Arguments to delete one Otpdetails.
     * @example
     * // Delete one Otpdetails
     * const Otpdetails = await prisma.otpdetails.delete({
     *   where: {
     *     // ... filter to delete one Otpdetails
     *   }
     * })
     *
     */
    delete<T extends OtpdetailsDeleteArgs>(args: Prisma.SelectSubset<T, OtpdetailsDeleteArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Otpdetails.
     * @param {OtpdetailsUpdateArgs} args - Arguments to update one Otpdetails.
     * @example
     * // Update one Otpdetails
     * const otpdetails = await prisma.otpdetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OtpdetailsUpdateArgs>(args: Prisma.SelectSubset<T, OtpdetailsUpdateArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Otpdetails.
     * @param {OtpdetailsDeleteManyArgs} args - Arguments to filter Otpdetails to delete.
     * @example
     * // Delete a few Otpdetails
     * const { count } = await prisma.otpdetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OtpdetailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtpdetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Otpdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otpdetails
     * const otpdetails = await prisma.otpdetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OtpdetailsUpdateManyArgs>(args: Prisma.SelectSubset<T, OtpdetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Otpdetails and returns the data updated in the database.
     * @param {OtpdetailsUpdateManyAndReturnArgs} args - Arguments to update many Otpdetails.
     * @example
     * // Update many Otpdetails
     * const otpdetails = await prisma.otpdetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Otpdetails and only return the `id`
     * const otpdetailsWithIdOnly = await prisma.otpdetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpdetailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtpdetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Otpdetails.
     * @param {OtpdetailsUpsertArgs} args - Arguments to update or create a Otpdetails.
     * @example
     * // Update or create a Otpdetails
     * const otpdetails = await prisma.otpdetails.upsert({
     *   create: {
     *     // ... data to create a Otpdetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otpdetails we want to update
     *   }
     * })
     */
    upsert<T extends OtpdetailsUpsertArgs>(args: Prisma.SelectSubset<T, OtpdetailsUpsertArgs<ExtArgs>>): Prisma.Prisma__OtpdetailsClient<runtime.Types.Result.GetResult<Prisma.$OtpdetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Otpdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsCountArgs} args - Arguments to filter Otpdetails to count.
     * @example
     * // Count the number of Otpdetails
     * const count = await prisma.otpdetails.count({
     *   where: {
     *     // ... the filter for the Otpdetails we want to count
     *   }
     * })
    **/
    count<T extends OtpdetailsCountArgs>(args?: Prisma.Subset<T, OtpdetailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtpdetailsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Otpdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpdetailsAggregateArgs>(args: Prisma.Subset<T, OtpdetailsAggregateArgs>): Prisma.PrismaPromise<GetOtpdetailsAggregateType<T>>;
    /**
     * Group by Otpdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpdetailsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OtpdetailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtpdetailsGroupByArgs['orderBy'];
    } : {
        orderBy?: OtpdetailsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtpdetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpdetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Otpdetails model
     */
    readonly fields: OtpdetailsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Otpdetails.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OtpdetailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the Otpdetails model
 */
export interface OtpdetailsFieldRefs {
    readonly id: Prisma.FieldRef<"Otpdetails", 'String'>;
    readonly userId: Prisma.FieldRef<"Otpdetails", 'String'>;
    readonly otp: Prisma.FieldRef<"Otpdetails", 'String'>;
    readonly purpose: Prisma.FieldRef<"Otpdetails", 'OtpPurpose'>;
    readonly expiresAt: Prisma.FieldRef<"Otpdetails", 'DateTime'>;
    readonly used: Prisma.FieldRef<"Otpdetails", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Otpdetails", 'DateTime'>;
}
/**
 * Otpdetails findUnique
 */
export type OtpdetailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Otpdetails to fetch.
     */
    where: Prisma.OtpdetailsWhereUniqueInput;
};
/**
 * Otpdetails findUniqueOrThrow
 */
export type OtpdetailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Otpdetails to fetch.
     */
    where: Prisma.OtpdetailsWhereUniqueInput;
};
/**
 * Otpdetails findFirst
 */
export type OtpdetailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Otpdetails to fetch.
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otpdetails to fetch.
     */
    orderBy?: Prisma.OtpdetailsOrderByWithRelationInput | Prisma.OtpdetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Otpdetails.
     */
    cursor?: Prisma.OtpdetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otpdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otpdetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Otpdetails.
     */
    distinct?: Prisma.OtpdetailsScalarFieldEnum | Prisma.OtpdetailsScalarFieldEnum[];
};
/**
 * Otpdetails findFirstOrThrow
 */
export type OtpdetailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Otpdetails to fetch.
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otpdetails to fetch.
     */
    orderBy?: Prisma.OtpdetailsOrderByWithRelationInput | Prisma.OtpdetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Otpdetails.
     */
    cursor?: Prisma.OtpdetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otpdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otpdetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Otpdetails.
     */
    distinct?: Prisma.OtpdetailsScalarFieldEnum | Prisma.OtpdetailsScalarFieldEnum[];
};
/**
 * Otpdetails findMany
 */
export type OtpdetailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Otpdetails to fetch.
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otpdetails to fetch.
     */
    orderBy?: Prisma.OtpdetailsOrderByWithRelationInput | Prisma.OtpdetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Otpdetails.
     */
    cursor?: Prisma.OtpdetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otpdetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otpdetails.
     */
    skip?: number;
    distinct?: Prisma.OtpdetailsScalarFieldEnum | Prisma.OtpdetailsScalarFieldEnum[];
};
/**
 * Otpdetails create
 */
export type OtpdetailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Otpdetails.
     */
    data: Prisma.XOR<Prisma.OtpdetailsCreateInput, Prisma.OtpdetailsUncheckedCreateInput>;
};
/**
 * Otpdetails createMany
 */
export type OtpdetailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otpdetails.
     */
    data: Prisma.OtpdetailsCreateManyInput | Prisma.OtpdetailsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Otpdetails createManyAndReturn
 */
export type OtpdetailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otpdetails
     */
    select?: Prisma.OtpdetailsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Otpdetails
     */
    omit?: Prisma.OtpdetailsOmit<ExtArgs> | null;
    /**
     * The data used to create many Otpdetails.
     */
    data: Prisma.OtpdetailsCreateManyInput | Prisma.OtpdetailsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OtpdetailsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Otpdetails update
 */
export type OtpdetailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Otpdetails.
     */
    data: Prisma.XOR<Prisma.OtpdetailsUpdateInput, Prisma.OtpdetailsUncheckedUpdateInput>;
    /**
     * Choose, which Otpdetails to update.
     */
    where: Prisma.OtpdetailsWhereUniqueInput;
};
/**
 * Otpdetails updateMany
 */
export type OtpdetailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Otpdetails.
     */
    data: Prisma.XOR<Prisma.OtpdetailsUpdateManyMutationInput, Prisma.OtpdetailsUncheckedUpdateManyInput>;
    /**
     * Filter which Otpdetails to update
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * Limit how many Otpdetails to update.
     */
    limit?: number;
};
/**
 * Otpdetails updateManyAndReturn
 */
export type OtpdetailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otpdetails
     */
    select?: Prisma.OtpdetailsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Otpdetails
     */
    omit?: Prisma.OtpdetailsOmit<ExtArgs> | null;
    /**
     * The data used to update Otpdetails.
     */
    data: Prisma.XOR<Prisma.OtpdetailsUpdateManyMutationInput, Prisma.OtpdetailsUncheckedUpdateManyInput>;
    /**
     * Filter which Otpdetails to update
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * Limit how many Otpdetails to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OtpdetailsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Otpdetails upsert
 */
export type OtpdetailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Otpdetails to update in case it exists.
     */
    where: Prisma.OtpdetailsWhereUniqueInput;
    /**
     * In case the Otpdetails found by the `where` argument doesn't exist, create a new Otpdetails with this data.
     */
    create: Prisma.XOR<Prisma.OtpdetailsCreateInput, Prisma.OtpdetailsUncheckedCreateInput>;
    /**
     * In case the Otpdetails was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OtpdetailsUpdateInput, Prisma.OtpdetailsUncheckedUpdateInput>;
};
/**
 * Otpdetails delete
 */
export type OtpdetailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Otpdetails to delete.
     */
    where: Prisma.OtpdetailsWhereUniqueInput;
};
/**
 * Otpdetails deleteMany
 */
export type OtpdetailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Otpdetails to delete
     */
    where?: Prisma.OtpdetailsWhereInput;
    /**
     * Limit how many Otpdetails to delete.
     */
    limit?: number;
};
/**
 * Otpdetails without action
 */
export type OtpdetailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Otpdetails.d.ts.map