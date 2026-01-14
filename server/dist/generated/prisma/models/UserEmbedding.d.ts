import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model UserEmbedding
 *
 */
export type UserEmbeddingModel = runtime.Types.Result.DefaultSelection<Prisma.$UserEmbeddingPayload>;
export type AggregateUserEmbedding = {
    _count: UserEmbeddingCountAggregateOutputType | null;
    _avg: UserEmbeddingAvgAggregateOutputType | null;
    _sum: UserEmbeddingSumAggregateOutputType | null;
    _min: UserEmbeddingMinAggregateOutputType | null;
    _max: UserEmbeddingMaxAggregateOutputType | null;
};
export type UserEmbeddingAvgAggregateOutputType = {
    embedding: number | null;
};
export type UserEmbeddingSumAggregateOutputType = {
    embedding: number[];
};
export type UserEmbeddingMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    updatedAt: Date | null;
};
export type UserEmbeddingMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    updatedAt: Date | null;
};
export type UserEmbeddingCountAggregateOutputType = {
    id: number;
    userId: number;
    embedding: number;
    updatedAt: number;
    _all: number;
};
export type UserEmbeddingAvgAggregateInputType = {
    embedding?: true;
};
export type UserEmbeddingSumAggregateInputType = {
    embedding?: true;
};
export type UserEmbeddingMinAggregateInputType = {
    id?: true;
    userId?: true;
    updatedAt?: true;
};
export type UserEmbeddingMaxAggregateInputType = {
    id?: true;
    userId?: true;
    updatedAt?: true;
};
export type UserEmbeddingCountAggregateInputType = {
    id?: true;
    userId?: true;
    embedding?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserEmbeddingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserEmbedding to aggregate.
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserEmbeddings to fetch.
     */
    orderBy?: Prisma.UserEmbeddingOrderByWithRelationInput | Prisma.UserEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserEmbeddings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserEmbeddings
    **/
    _count?: true | UserEmbeddingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserEmbeddingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserEmbeddingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserEmbeddingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserEmbeddingMaxAggregateInputType;
};
export type GetUserEmbeddingAggregateType<T extends UserEmbeddingAggregateArgs> = {
    [P in keyof T & keyof AggregateUserEmbedding]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserEmbedding[P]> : Prisma.GetScalarType<T[P], AggregateUserEmbedding[P]>;
};
export type UserEmbeddingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserEmbeddingWhereInput;
    orderBy?: Prisma.UserEmbeddingOrderByWithAggregationInput | Prisma.UserEmbeddingOrderByWithAggregationInput[];
    by: Prisma.UserEmbeddingScalarFieldEnum[] | Prisma.UserEmbeddingScalarFieldEnum;
    having?: Prisma.UserEmbeddingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserEmbeddingCountAggregateInputType | true;
    _avg?: UserEmbeddingAvgAggregateInputType;
    _sum?: UserEmbeddingSumAggregateInputType;
    _min?: UserEmbeddingMinAggregateInputType;
    _max?: UserEmbeddingMaxAggregateInputType;
};
export type UserEmbeddingGroupByOutputType = {
    id: string;
    userId: string;
    embedding: number[];
    updatedAt: Date;
    _count: UserEmbeddingCountAggregateOutputType | null;
    _avg: UserEmbeddingAvgAggregateOutputType | null;
    _sum: UserEmbeddingSumAggregateOutputType | null;
    _min: UserEmbeddingMinAggregateOutputType | null;
    _max: UserEmbeddingMaxAggregateOutputType | null;
};
type GetUserEmbeddingGroupByPayload<T extends UserEmbeddingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserEmbeddingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserEmbeddingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserEmbeddingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserEmbeddingGroupByOutputType[P]>;
}>>;
export type UserEmbeddingWhereInput = {
    AND?: Prisma.UserEmbeddingWhereInput | Prisma.UserEmbeddingWhereInput[];
    OR?: Prisma.UserEmbeddingWhereInput[];
    NOT?: Prisma.UserEmbeddingWhereInput | Prisma.UserEmbeddingWhereInput[];
    id?: Prisma.StringFilter<"UserEmbedding"> | string;
    userId?: Prisma.StringFilter<"UserEmbedding"> | string;
    embedding?: Prisma.FloatNullableListFilter<"UserEmbedding">;
    updatedAt?: Prisma.DateTimeFilter<"UserEmbedding"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserEmbeddingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    embedding?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.UserEmbeddingWhereInput | Prisma.UserEmbeddingWhereInput[];
    OR?: Prisma.UserEmbeddingWhereInput[];
    NOT?: Prisma.UserEmbeddingWhereInput | Prisma.UserEmbeddingWhereInput[];
    embedding?: Prisma.FloatNullableListFilter<"UserEmbedding">;
    updatedAt?: Prisma.DateTimeFilter<"UserEmbedding"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type UserEmbeddingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    embedding?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserEmbeddingCountOrderByAggregateInput;
    _avg?: Prisma.UserEmbeddingAvgOrderByAggregateInput;
    _max?: Prisma.UserEmbeddingMaxOrderByAggregateInput;
    _min?: Prisma.UserEmbeddingMinOrderByAggregateInput;
    _sum?: Prisma.UserEmbeddingSumOrderByAggregateInput;
};
export type UserEmbeddingScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserEmbeddingScalarWhereWithAggregatesInput | Prisma.UserEmbeddingScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserEmbeddingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserEmbeddingScalarWhereWithAggregatesInput | Prisma.UserEmbeddingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserEmbedding"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserEmbedding"> | string;
    embedding?: Prisma.FloatNullableListFilter<"UserEmbedding">;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserEmbedding"> | Date | string;
};
export type UserEmbeddingCreateInput = {
    id?: string;
    embedding?: Prisma.UserEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutUserEmbeddingInput;
};
export type UserEmbeddingUncheckedCreateInput = {
    id?: string;
    userId: string;
    embedding?: Prisma.UserEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type UserEmbeddingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.UserEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutUserEmbeddingNestedInput;
};
export type UserEmbeddingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.UserEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserEmbeddingCreateManyInput = {
    id?: string;
    userId: string;
    embedding?: Prisma.UserEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type UserEmbeddingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.UserEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserEmbeddingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.UserEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserEmbeddingNullableScalarRelationFilter = {
    is?: Prisma.UserEmbeddingWhereInput | null;
    isNot?: Prisma.UserEmbeddingWhereInput | null;
};
export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type UserEmbeddingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    embedding?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserEmbeddingAvgOrderByAggregateInput = {
    embedding?: Prisma.SortOrder;
};
export type UserEmbeddingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserEmbeddingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserEmbeddingSumOrderByAggregateInput = {
    embedding?: Prisma.SortOrder;
};
export type UserEmbeddingCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserEmbeddingCreateWithoutUserInput, Prisma.UserEmbeddingUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserEmbeddingCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserEmbeddingWhereUniqueInput;
};
export type UserEmbeddingUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserEmbeddingCreateWithoutUserInput, Prisma.UserEmbeddingUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserEmbeddingCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserEmbeddingWhereUniqueInput;
};
export type UserEmbeddingUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserEmbeddingCreateWithoutUserInput, Prisma.UserEmbeddingUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserEmbeddingCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserEmbeddingUpsertWithoutUserInput;
    disconnect?: Prisma.UserEmbeddingWhereInput | boolean;
    delete?: Prisma.UserEmbeddingWhereInput | boolean;
    connect?: Prisma.UserEmbeddingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserEmbeddingUpdateToOneWithWhereWithoutUserInput, Prisma.UserEmbeddingUpdateWithoutUserInput>, Prisma.UserEmbeddingUncheckedUpdateWithoutUserInput>;
};
export type UserEmbeddingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserEmbeddingCreateWithoutUserInput, Prisma.UserEmbeddingUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserEmbeddingCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserEmbeddingUpsertWithoutUserInput;
    disconnect?: Prisma.UserEmbeddingWhereInput | boolean;
    delete?: Prisma.UserEmbeddingWhereInput | boolean;
    connect?: Prisma.UserEmbeddingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserEmbeddingUpdateToOneWithWhereWithoutUserInput, Prisma.UserEmbeddingUpdateWithoutUserInput>, Prisma.UserEmbeddingUncheckedUpdateWithoutUserInput>;
};
export type UserEmbeddingCreateembeddingInput = {
    set: number[];
};
export type UserEmbeddingUpdateembeddingInput = {
    set?: number[];
    push?: number | number[];
};
export type UserEmbeddingCreateWithoutUserInput = {
    id?: string;
    embedding?: Prisma.UserEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type UserEmbeddingUncheckedCreateWithoutUserInput = {
    id?: string;
    embedding?: Prisma.UserEmbeddingCreateembeddingInput | number[];
    updatedAt?: Date | string;
};
export type UserEmbeddingCreateOrConnectWithoutUserInput = {
    where: Prisma.UserEmbeddingWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserEmbeddingCreateWithoutUserInput, Prisma.UserEmbeddingUncheckedCreateWithoutUserInput>;
};
export type UserEmbeddingUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.UserEmbeddingUpdateWithoutUserInput, Prisma.UserEmbeddingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserEmbeddingCreateWithoutUserInput, Prisma.UserEmbeddingUncheckedCreateWithoutUserInput>;
    where?: Prisma.UserEmbeddingWhereInput;
};
export type UserEmbeddingUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.UserEmbeddingWhereInput;
    data: Prisma.XOR<Prisma.UserEmbeddingUpdateWithoutUserInput, Prisma.UserEmbeddingUncheckedUpdateWithoutUserInput>;
};
export type UserEmbeddingUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.UserEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserEmbeddingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    embedding?: Prisma.UserEmbeddingUpdateembeddingInput | number[];
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserEmbeddingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userEmbedding"]>;
export type UserEmbeddingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userEmbedding"]>;
export type UserEmbeddingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userEmbedding"]>;
export type UserEmbeddingSelectScalar = {
    id?: boolean;
    userId?: boolean;
    embedding?: boolean;
    updatedAt?: boolean;
};
export type UserEmbeddingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "embedding" | "updatedAt", ExtArgs["result"]["userEmbedding"]>;
export type UserEmbeddingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserEmbeddingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserEmbeddingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserEmbedding";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        embedding: number[];
        updatedAt: Date;
    }, ExtArgs["result"]["userEmbedding"]>;
    composites: {};
};
export type UserEmbeddingGetPayload<S extends boolean | null | undefined | UserEmbeddingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload, S>;
export type UserEmbeddingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserEmbeddingCountAggregateInputType | true;
};
export interface UserEmbeddingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserEmbedding'];
        meta: {
            name: 'UserEmbedding';
        };
    };
    /**
     * Find zero or one UserEmbedding that matches the filter.
     * @param {UserEmbeddingFindUniqueArgs} args - Arguments to find a UserEmbedding
     * @example
     * // Get one UserEmbedding
     * const userEmbedding = await prisma.userEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEmbeddingFindUniqueArgs>(args: Prisma.SelectSubset<T, UserEmbeddingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a UserEmbedding
     * @example
     * // Get one UserEmbedding
     * const userEmbedding = await prisma.userEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEmbeddingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingFindFirstArgs} args - Arguments to find a UserEmbedding
     * @example
     * // Get one UserEmbedding
     * const userEmbedding = await prisma.userEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEmbeddingFindFirstArgs>(args?: Prisma.SelectSubset<T, UserEmbeddingFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingFindFirstOrThrowArgs} args - Arguments to find a UserEmbedding
     * @example
     * // Get one UserEmbedding
     * const userEmbedding = await prisma.userEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEmbeddingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEmbeddings
     * const userEmbeddings = await prisma.userEmbedding.findMany()
     *
     * // Get first 10 UserEmbeddings
     * const userEmbeddings = await prisma.userEmbedding.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userEmbeddingWithIdOnly = await prisma.userEmbedding.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserEmbeddingFindManyArgs>(args?: Prisma.SelectSubset<T, UserEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserEmbedding.
     * @param {UserEmbeddingCreateArgs} args - Arguments to create a UserEmbedding.
     * @example
     * // Create one UserEmbedding
     * const UserEmbedding = await prisma.userEmbedding.create({
     *   data: {
     *     // ... data to create a UserEmbedding
     *   }
     * })
     *
     */
    create<T extends UserEmbeddingCreateArgs>(args: Prisma.SelectSubset<T, UserEmbeddingCreateArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserEmbeddings.
     * @param {UserEmbeddingCreateManyArgs} args - Arguments to create many UserEmbeddings.
     * @example
     * // Create many UserEmbeddings
     * const userEmbedding = await prisma.userEmbedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserEmbeddingCreateManyArgs>(args?: Prisma.SelectSubset<T, UserEmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserEmbeddings and returns the data saved in the database.
     * @param {UserEmbeddingCreateManyAndReturnArgs} args - Arguments to create many UserEmbeddings.
     * @example
     * // Create many UserEmbeddings
     * const userEmbedding = await prisma.userEmbedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserEmbeddings and only return the `id`
     * const userEmbeddingWithIdOnly = await prisma.userEmbedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserEmbeddingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserEmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserEmbedding.
     * @param {UserEmbeddingDeleteArgs} args - Arguments to delete one UserEmbedding.
     * @example
     * // Delete one UserEmbedding
     * const UserEmbedding = await prisma.userEmbedding.delete({
     *   where: {
     *     // ... filter to delete one UserEmbedding
     *   }
     * })
     *
     */
    delete<T extends UserEmbeddingDeleteArgs>(args: Prisma.SelectSubset<T, UserEmbeddingDeleteArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserEmbedding.
     * @param {UserEmbeddingUpdateArgs} args - Arguments to update one UserEmbedding.
     * @example
     * // Update one UserEmbedding
     * const userEmbedding = await prisma.userEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserEmbeddingUpdateArgs>(args: Prisma.SelectSubset<T, UserEmbeddingUpdateArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserEmbeddings.
     * @param {UserEmbeddingDeleteManyArgs} args - Arguments to filter UserEmbeddings to delete.
     * @example
     * // Delete a few UserEmbeddings
     * const { count } = await prisma.userEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserEmbeddingDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEmbeddings
     * const userEmbedding = await prisma.userEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserEmbeddingUpdateManyArgs>(args: Prisma.SelectSubset<T, UserEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserEmbeddings and returns the data updated in the database.
     * @param {UserEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many UserEmbeddings.
     * @example
     * // Update many UserEmbeddings
     * const userEmbedding = await prisma.userEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserEmbeddings and only return the `id`
     * const userEmbeddingWithIdOnly = await prisma.userEmbedding.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserEmbeddingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserEmbedding.
     * @param {UserEmbeddingUpsertArgs} args - Arguments to update or create a UserEmbedding.
     * @example
     * // Update or create a UserEmbedding
     * const userEmbedding = await prisma.userEmbedding.upsert({
     *   create: {
     *     // ... data to create a UserEmbedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEmbedding we want to update
     *   }
     * })
     */
    upsert<T extends UserEmbeddingUpsertArgs>(args: Prisma.SelectSubset<T, UserEmbeddingUpsertArgs<ExtArgs>>): Prisma.Prisma__UserEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$UserEmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingCountArgs} args - Arguments to filter UserEmbeddings to count.
     * @example
     * // Count the number of UserEmbeddings
     * const count = await prisma.userEmbedding.count({
     *   where: {
     *     // ... the filter for the UserEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends UserEmbeddingCountArgs>(args?: Prisma.Subset<T, UserEmbeddingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserEmbeddingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserEmbeddingAggregateArgs>(args: Prisma.Subset<T, UserEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetUserEmbeddingAggregateType<T>>;
    /**
     * Group by UserEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEmbeddingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserEmbeddingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserEmbeddingGroupByArgs['orderBy'];
    } : {
        orderBy?: UserEmbeddingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserEmbedding model
     */
    readonly fields: UserEmbeddingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserEmbedding.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserEmbeddingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the UserEmbedding model
 */
export interface UserEmbeddingFieldRefs {
    readonly id: Prisma.FieldRef<"UserEmbedding", 'String'>;
    readonly userId: Prisma.FieldRef<"UserEmbedding", 'String'>;
    readonly embedding: Prisma.FieldRef<"UserEmbedding", 'Float[]'>;
    readonly updatedAt: Prisma.FieldRef<"UserEmbedding", 'DateTime'>;
}
/**
 * UserEmbedding findUnique
 */
export type UserEmbeddingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserEmbedding to fetch.
     */
    where: Prisma.UserEmbeddingWhereUniqueInput;
};
/**
 * UserEmbedding findUniqueOrThrow
 */
export type UserEmbeddingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserEmbedding to fetch.
     */
    where: Prisma.UserEmbeddingWhereUniqueInput;
};
/**
 * UserEmbedding findFirst
 */
export type UserEmbeddingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserEmbedding to fetch.
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserEmbeddings to fetch.
     */
    orderBy?: Prisma.UserEmbeddingOrderByWithRelationInput | Prisma.UserEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserEmbeddings.
     */
    cursor?: Prisma.UserEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserEmbeddings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserEmbeddings.
     */
    distinct?: Prisma.UserEmbeddingScalarFieldEnum | Prisma.UserEmbeddingScalarFieldEnum[];
};
/**
 * UserEmbedding findFirstOrThrow
 */
export type UserEmbeddingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserEmbedding to fetch.
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserEmbeddings to fetch.
     */
    orderBy?: Prisma.UserEmbeddingOrderByWithRelationInput | Prisma.UserEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserEmbeddings.
     */
    cursor?: Prisma.UserEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserEmbeddings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserEmbeddings.
     */
    distinct?: Prisma.UserEmbeddingScalarFieldEnum | Prisma.UserEmbeddingScalarFieldEnum[];
};
/**
 * UserEmbedding findMany
 */
export type UserEmbeddingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserEmbeddings to fetch.
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserEmbeddings to fetch.
     */
    orderBy?: Prisma.UserEmbeddingOrderByWithRelationInput | Prisma.UserEmbeddingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserEmbeddings.
     */
    cursor?: Prisma.UserEmbeddingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserEmbeddings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserEmbeddings.
     */
    skip?: number;
    distinct?: Prisma.UserEmbeddingScalarFieldEnum | Prisma.UserEmbeddingScalarFieldEnum[];
};
/**
 * UserEmbedding create
 */
export type UserEmbeddingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a UserEmbedding.
     */
    data: Prisma.XOR<Prisma.UserEmbeddingCreateInput, Prisma.UserEmbeddingUncheckedCreateInput>;
};
/**
 * UserEmbedding createMany
 */
export type UserEmbeddingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEmbeddings.
     */
    data: Prisma.UserEmbeddingCreateManyInput | Prisma.UserEmbeddingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserEmbedding createManyAndReturn
 */
export type UserEmbeddingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmbedding
     */
    select?: Prisma.UserEmbeddingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserEmbedding
     */
    omit?: Prisma.UserEmbeddingOmit<ExtArgs> | null;
    /**
     * The data used to create many UserEmbeddings.
     */
    data: Prisma.UserEmbeddingCreateManyInput | Prisma.UserEmbeddingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserEmbeddingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserEmbedding update
 */
export type UserEmbeddingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a UserEmbedding.
     */
    data: Prisma.XOR<Prisma.UserEmbeddingUpdateInput, Prisma.UserEmbeddingUncheckedUpdateInput>;
    /**
     * Choose, which UserEmbedding to update.
     */
    where: Prisma.UserEmbeddingWhereUniqueInput;
};
/**
 * UserEmbedding updateMany
 */
export type UserEmbeddingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEmbeddings.
     */
    data: Prisma.XOR<Prisma.UserEmbeddingUpdateManyMutationInput, Prisma.UserEmbeddingUncheckedUpdateManyInput>;
    /**
     * Filter which UserEmbeddings to update
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * Limit how many UserEmbeddings to update.
     */
    limit?: number;
};
/**
 * UserEmbedding updateManyAndReturn
 */
export type UserEmbeddingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEmbedding
     */
    select?: Prisma.UserEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserEmbedding
     */
    omit?: Prisma.UserEmbeddingOmit<ExtArgs> | null;
    /**
     * The data used to update UserEmbeddings.
     */
    data: Prisma.XOR<Prisma.UserEmbeddingUpdateManyMutationInput, Prisma.UserEmbeddingUncheckedUpdateManyInput>;
    /**
     * Filter which UserEmbeddings to update
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * Limit how many UserEmbeddings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserEmbedding upsert
 */
export type UserEmbeddingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the UserEmbedding to update in case it exists.
     */
    where: Prisma.UserEmbeddingWhereUniqueInput;
    /**
     * In case the UserEmbedding found by the `where` argument doesn't exist, create a new UserEmbedding with this data.
     */
    create: Prisma.XOR<Prisma.UserEmbeddingCreateInput, Prisma.UserEmbeddingUncheckedCreateInput>;
    /**
     * In case the UserEmbedding was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserEmbeddingUpdateInput, Prisma.UserEmbeddingUncheckedUpdateInput>;
};
/**
 * UserEmbedding delete
 */
export type UserEmbeddingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which UserEmbedding to delete.
     */
    where: Prisma.UserEmbeddingWhereUniqueInput;
};
/**
 * UserEmbedding deleteMany
 */
export type UserEmbeddingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserEmbeddings to delete
     */
    where?: Prisma.UserEmbeddingWhereInput;
    /**
     * Limit how many UserEmbeddings to delete.
     */
    limit?: number;
};
/**
 * UserEmbedding without action
 */
export type UserEmbeddingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=UserEmbedding.d.ts.map