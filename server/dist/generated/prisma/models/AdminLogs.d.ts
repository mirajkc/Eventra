import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AdminLogs
 *
 */
export type AdminLogsModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminLogsPayload>;
export type AggregateAdminLogs = {
    _count: AdminLogsCountAggregateOutputType | null;
    _min: AdminLogsMinAggregateOutputType | null;
    _max: AdminLogsMaxAggregateOutputType | null;
};
export type AdminLogsMinAggregateOutputType = {
    id: string | null;
    adminId: string | null;
    action: $Enums.AdminAction | null;
    entityId: string | null;
    entityType: $Enums.AdminEntityType | null;
    createdAt: Date | null;
    reason: string | null;
};
export type AdminLogsMaxAggregateOutputType = {
    id: string | null;
    adminId: string | null;
    action: $Enums.AdminAction | null;
    entityId: string | null;
    entityType: $Enums.AdminEntityType | null;
    createdAt: Date | null;
    reason: string | null;
};
export type AdminLogsCountAggregateOutputType = {
    id: number;
    adminId: number;
    action: number;
    entityId: number;
    entityType: number;
    createdAt: number;
    reason: number;
    _all: number;
};
export type AdminLogsMinAggregateInputType = {
    id?: true;
    adminId?: true;
    action?: true;
    entityId?: true;
    entityType?: true;
    createdAt?: true;
    reason?: true;
};
export type AdminLogsMaxAggregateInputType = {
    id?: true;
    adminId?: true;
    action?: true;
    entityId?: true;
    entityType?: true;
    createdAt?: true;
    reason?: true;
};
export type AdminLogsCountAggregateInputType = {
    id?: true;
    adminId?: true;
    action?: true;
    entityId?: true;
    entityType?: true;
    createdAt?: true;
    reason?: true;
    _all?: true;
};
export type AdminLogsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLogs to aggregate.
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: Prisma.AdminLogsOrderByWithRelationInput | Prisma.AdminLogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdminLogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdminLogs
    **/
    _count?: true | AdminLogsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdminLogsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdminLogsMaxAggregateInputType;
};
export type GetAdminLogsAggregateType<T extends AdminLogsAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminLogs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminLogs[P]> : Prisma.GetScalarType<T[P], AggregateAdminLogs[P]>;
};
export type AdminLogsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminLogsWhereInput;
    orderBy?: Prisma.AdminLogsOrderByWithAggregationInput | Prisma.AdminLogsOrderByWithAggregationInput[];
    by: Prisma.AdminLogsScalarFieldEnum[] | Prisma.AdminLogsScalarFieldEnum;
    having?: Prisma.AdminLogsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminLogsCountAggregateInputType | true;
    _min?: AdminLogsMinAggregateInputType;
    _max?: AdminLogsMaxAggregateInputType;
};
export type AdminLogsGroupByOutputType = {
    id: string;
    adminId: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt: Date;
    reason: string;
    _count: AdminLogsCountAggregateOutputType | null;
    _min: AdminLogsMinAggregateOutputType | null;
    _max: AdminLogsMaxAggregateOutputType | null;
};
type GetAdminLogsGroupByPayload<T extends AdminLogsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminLogsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminLogsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminLogsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminLogsGroupByOutputType[P]>;
}>>;
export type AdminLogsWhereInput = {
    AND?: Prisma.AdminLogsWhereInput | Prisma.AdminLogsWhereInput[];
    OR?: Prisma.AdminLogsWhereInput[];
    NOT?: Prisma.AdminLogsWhereInput | Prisma.AdminLogsWhereInput[];
    id?: Prisma.StringFilter<"AdminLogs"> | string;
    adminId?: Prisma.StringFilter<"AdminLogs"> | string;
    action?: Prisma.EnumAdminActionFilter<"AdminLogs"> | $Enums.AdminAction;
    entityId?: Prisma.StringFilter<"AdminLogs"> | string;
    entityType?: Prisma.EnumAdminEntityTypeFilter<"AdminLogs"> | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFilter<"AdminLogs"> | Date | string;
    reason?: Prisma.StringFilter<"AdminLogs"> | string;
    admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AdminLogsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    admin?: Prisma.UserOrderByWithRelationInput;
};
export type AdminLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AdminLogsWhereInput | Prisma.AdminLogsWhereInput[];
    OR?: Prisma.AdminLogsWhereInput[];
    NOT?: Prisma.AdminLogsWhereInput | Prisma.AdminLogsWhereInput[];
    adminId?: Prisma.StringFilter<"AdminLogs"> | string;
    action?: Prisma.EnumAdminActionFilter<"AdminLogs"> | $Enums.AdminAction;
    entityId?: Prisma.StringFilter<"AdminLogs"> | string;
    entityType?: Prisma.EnumAdminEntityTypeFilter<"AdminLogs"> | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFilter<"AdminLogs"> | Date | string;
    reason?: Prisma.StringFilter<"AdminLogs"> | string;
    admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AdminLogsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    _count?: Prisma.AdminLogsCountOrderByAggregateInput;
    _max?: Prisma.AdminLogsMaxOrderByAggregateInput;
    _min?: Prisma.AdminLogsMinOrderByAggregateInput;
};
export type AdminLogsScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminLogsScalarWhereWithAggregatesInput | Prisma.AdminLogsScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminLogsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminLogsScalarWhereWithAggregatesInput | Prisma.AdminLogsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdminLogs"> | string;
    adminId?: Prisma.StringWithAggregatesFilter<"AdminLogs"> | string;
    action?: Prisma.EnumAdminActionWithAggregatesFilter<"AdminLogs"> | $Enums.AdminAction;
    entityId?: Prisma.StringWithAggregatesFilter<"AdminLogs"> | string;
    entityType?: Prisma.EnumAdminEntityTypeWithAggregatesFilter<"AdminLogs"> | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminLogs"> | Date | string;
    reason?: Prisma.StringWithAggregatesFilter<"AdminLogs"> | string;
};
export type AdminLogsCreateInput = {
    id?: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt?: Date | string;
    reason: string;
    admin: Prisma.UserCreateNestedOneWithoutAdminLogsInput;
};
export type AdminLogsUncheckedCreateInput = {
    id?: string;
    adminId: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt?: Date | string;
    reason: string;
};
export type AdminLogsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.UserUpdateOneRequiredWithoutAdminLogsNestedInput;
};
export type AdminLogsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminLogsCreateManyInput = {
    id?: string;
    adminId: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt?: Date | string;
    reason: string;
};
export type AdminLogsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminLogsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminLogsListRelationFilter = {
    every?: Prisma.AdminLogsWhereInput;
    some?: Prisma.AdminLogsWhereInput;
    none?: Prisma.AdminLogsWhereInput;
};
export type AdminLogsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminLogsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type AdminLogsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type AdminLogsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type AdminLogsCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.AdminLogsCreateWithoutAdminInput, Prisma.AdminLogsUncheckedCreateWithoutAdminInput> | Prisma.AdminLogsCreateWithoutAdminInput[] | Prisma.AdminLogsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogsCreateOrConnectWithoutAdminInput | Prisma.AdminLogsCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.AdminLogsCreateManyAdminInputEnvelope;
    connect?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
};
export type AdminLogsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.AdminLogsCreateWithoutAdminInput, Prisma.AdminLogsUncheckedCreateWithoutAdminInput> | Prisma.AdminLogsCreateWithoutAdminInput[] | Prisma.AdminLogsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogsCreateOrConnectWithoutAdminInput | Prisma.AdminLogsCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.AdminLogsCreateManyAdminInputEnvelope;
    connect?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
};
export type AdminLogsUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AdminLogsCreateWithoutAdminInput, Prisma.AdminLogsUncheckedCreateWithoutAdminInput> | Prisma.AdminLogsCreateWithoutAdminInput[] | Prisma.AdminLogsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogsCreateOrConnectWithoutAdminInput | Prisma.AdminLogsCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.AdminLogsUpsertWithWhereUniqueWithoutAdminInput | Prisma.AdminLogsUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.AdminLogsCreateManyAdminInputEnvelope;
    set?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    disconnect?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    delete?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    connect?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    update?: Prisma.AdminLogsUpdateWithWhereUniqueWithoutAdminInput | Prisma.AdminLogsUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.AdminLogsUpdateManyWithWhereWithoutAdminInput | Prisma.AdminLogsUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.AdminLogsScalarWhereInput | Prisma.AdminLogsScalarWhereInput[];
};
export type AdminLogsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AdminLogsCreateWithoutAdminInput, Prisma.AdminLogsUncheckedCreateWithoutAdminInput> | Prisma.AdminLogsCreateWithoutAdminInput[] | Prisma.AdminLogsUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogsCreateOrConnectWithoutAdminInput | Prisma.AdminLogsCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.AdminLogsUpsertWithWhereUniqueWithoutAdminInput | Prisma.AdminLogsUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.AdminLogsCreateManyAdminInputEnvelope;
    set?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    disconnect?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    delete?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    connect?: Prisma.AdminLogsWhereUniqueInput | Prisma.AdminLogsWhereUniqueInput[];
    update?: Prisma.AdminLogsUpdateWithWhereUniqueWithoutAdminInput | Prisma.AdminLogsUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.AdminLogsUpdateManyWithWhereWithoutAdminInput | Prisma.AdminLogsUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.AdminLogsScalarWhereInput | Prisma.AdminLogsScalarWhereInput[];
};
export type EnumAdminActionFieldUpdateOperationsInput = {
    set?: $Enums.AdminAction;
};
export type EnumAdminEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdminEntityType;
};
export type AdminLogsCreateWithoutAdminInput = {
    id?: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt?: Date | string;
    reason: string;
};
export type AdminLogsUncheckedCreateWithoutAdminInput = {
    id?: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt?: Date | string;
    reason: string;
};
export type AdminLogsCreateOrConnectWithoutAdminInput = {
    where: Prisma.AdminLogsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminLogsCreateWithoutAdminInput, Prisma.AdminLogsUncheckedCreateWithoutAdminInput>;
};
export type AdminLogsCreateManyAdminInputEnvelope = {
    data: Prisma.AdminLogsCreateManyAdminInput | Prisma.AdminLogsCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type AdminLogsUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.AdminLogsWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminLogsUpdateWithoutAdminInput, Prisma.AdminLogsUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.AdminLogsCreateWithoutAdminInput, Prisma.AdminLogsUncheckedCreateWithoutAdminInput>;
};
export type AdminLogsUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.AdminLogsWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminLogsUpdateWithoutAdminInput, Prisma.AdminLogsUncheckedUpdateWithoutAdminInput>;
};
export type AdminLogsUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.AdminLogsScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminLogsUpdateManyMutationInput, Prisma.AdminLogsUncheckedUpdateManyWithoutAdminInput>;
};
export type AdminLogsScalarWhereInput = {
    AND?: Prisma.AdminLogsScalarWhereInput | Prisma.AdminLogsScalarWhereInput[];
    OR?: Prisma.AdminLogsScalarWhereInput[];
    NOT?: Prisma.AdminLogsScalarWhereInput | Prisma.AdminLogsScalarWhereInput[];
    id?: Prisma.StringFilter<"AdminLogs"> | string;
    adminId?: Prisma.StringFilter<"AdminLogs"> | string;
    action?: Prisma.EnumAdminActionFilter<"AdminLogs"> | $Enums.AdminAction;
    entityId?: Prisma.StringFilter<"AdminLogs"> | string;
    entityType?: Prisma.EnumAdminEntityTypeFilter<"AdminLogs"> | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFilter<"AdminLogs"> | Date | string;
    reason?: Prisma.StringFilter<"AdminLogs"> | string;
};
export type AdminLogsCreateManyAdminInput = {
    id?: string;
    action: $Enums.AdminAction;
    entityId: string;
    entityType: $Enums.AdminEntityType;
    createdAt?: Date | string;
    reason: string;
};
export type AdminLogsUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminLogsUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminLogsUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumAdminEntityTypeFieldUpdateOperationsInput | $Enums.AdminEntityType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminLogsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    entityId?: boolean;
    entityType?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminLogs"]>;
export type AdminLogsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    entityId?: boolean;
    entityType?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminLogs"]>;
export type AdminLogsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    entityId?: boolean;
    entityType?: boolean;
    createdAt?: boolean;
    reason?: boolean;
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminLogs"]>;
export type AdminLogsSelectScalar = {
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    entityId?: boolean;
    entityType?: boolean;
    createdAt?: boolean;
    reason?: boolean;
};
export type AdminLogsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "adminId" | "action" | "entityId" | "entityType" | "createdAt" | "reason", ExtArgs["result"]["adminLogs"]>;
export type AdminLogsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdminLogsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdminLogsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdminLogsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminLogs";
    objects: {
        admin: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        adminId: string;
        action: $Enums.AdminAction;
        entityId: string;
        entityType: $Enums.AdminEntityType;
        createdAt: Date;
        reason: string;
    }, ExtArgs["result"]["adminLogs"]>;
    composites: {};
};
export type AdminLogsGetPayload<S extends boolean | null | undefined | AdminLogsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload, S>;
export type AdminLogsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminLogsCountAggregateInputType | true;
};
export interface AdminLogsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminLogs'];
        meta: {
            name: 'AdminLogs';
        };
    };
    /**
     * Find zero or one AdminLogs that matches the filter.
     * @param {AdminLogsFindUniqueArgs} args - Arguments to find a AdminLogs
     * @example
     * // Get one AdminLogs
     * const adminLogs = await prisma.adminLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminLogsFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminLogsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdminLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminLogsFindUniqueOrThrowArgs} args - Arguments to find a AdminLogs
     * @example
     * // Get one AdminLogs
     * const adminLogs = await prisma.adminLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminLogsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdminLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsFindFirstArgs} args - Arguments to find a AdminLogs
     * @example
     * // Get one AdminLogs
     * const adminLogs = await prisma.adminLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminLogsFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminLogsFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdminLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsFindFirstOrThrowArgs} args - Arguments to find a AdminLogs
     * @example
     * // Get one AdminLogs
     * const adminLogs = await prisma.adminLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminLogsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdminLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminLogs
     * const adminLogs = await prisma.adminLogs.findMany()
     *
     * // Get first 10 AdminLogs
     * const adminLogs = await prisma.adminLogs.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminLogsWithIdOnly = await prisma.adminLogs.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdminLogsFindManyArgs>(args?: Prisma.SelectSubset<T, AdminLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdminLogs.
     * @param {AdminLogsCreateArgs} args - Arguments to create a AdminLogs.
     * @example
     * // Create one AdminLogs
     * const AdminLogs = await prisma.adminLogs.create({
     *   data: {
     *     // ... data to create a AdminLogs
     *   }
     * })
     *
     */
    create<T extends AdminLogsCreateArgs>(args: Prisma.SelectSubset<T, AdminLogsCreateArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdminLogs.
     * @param {AdminLogsCreateManyArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLogs = await prisma.adminLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminLogsCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AdminLogs and returns the data saved in the database.
     * @param {AdminLogsCreateManyAndReturnArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLogs = await prisma.adminLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AdminLogs and only return the `id`
     * const adminLogsWithIdOnly = await prisma.adminLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminLogsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AdminLogs.
     * @param {AdminLogsDeleteArgs} args - Arguments to delete one AdminLogs.
     * @example
     * // Delete one AdminLogs
     * const AdminLogs = await prisma.adminLogs.delete({
     *   where: {
     *     // ... filter to delete one AdminLogs
     *   }
     * })
     *
     */
    delete<T extends AdminLogsDeleteArgs>(args: Prisma.SelectSubset<T, AdminLogsDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdminLogs.
     * @param {AdminLogsUpdateArgs} args - Arguments to update one AdminLogs.
     * @example
     * // Update one AdminLogs
     * const adminLogs = await prisma.adminLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminLogsUpdateArgs>(args: Prisma.SelectSubset<T, AdminLogsUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdminLogs.
     * @param {AdminLogsDeleteManyArgs} args - Arguments to filter AdminLogs to delete.
     * @example
     * // Delete a few AdminLogs
     * const { count } = await prisma.adminLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminLogsDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminLogs
     * const adminLogs = await prisma.adminLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminLogsUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdminLogs and returns the data updated in the database.
     * @param {AdminLogsUpdateManyAndReturnArgs} args - Arguments to update many AdminLogs.
     * @example
     * // Update many AdminLogs
     * const adminLogs = await prisma.adminLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AdminLogs and only return the `id`
     * const adminLogsWithIdOnly = await prisma.adminLogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminLogsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AdminLogs.
     * @param {AdminLogsUpsertArgs} args - Arguments to update or create a AdminLogs.
     * @example
     * // Update or create a AdminLogs
     * const adminLogs = await prisma.adminLogs.upsert({
     *   create: {
     *     // ... data to create a AdminLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminLogs we want to update
     *   }
     * })
     */
    upsert<T extends AdminLogsUpsertArgs>(args: Prisma.SelectSubset<T, AdminLogsUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminLogsClient<runtime.Types.Result.GetResult<Prisma.$AdminLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsCountArgs} args - Arguments to filter AdminLogs to count.
     * @example
     * // Count the number of AdminLogs
     * const count = await prisma.adminLogs.count({
     *   where: {
     *     // ... the filter for the AdminLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminLogsCountArgs>(args?: Prisma.Subset<T, AdminLogsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminLogsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminLogsAggregateArgs>(args: Prisma.Subset<T, AdminLogsAggregateArgs>): Prisma.PrismaPromise<GetAdminLogsAggregateType<T>>;
    /**
     * Group by AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdminLogsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminLogsGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminLogsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdminLogs model
     */
    readonly fields: AdminLogsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdminLogs.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdminLogsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AdminLogs model
 */
export interface AdminLogsFieldRefs {
    readonly id: Prisma.FieldRef<"AdminLogs", 'String'>;
    readonly adminId: Prisma.FieldRef<"AdminLogs", 'String'>;
    readonly action: Prisma.FieldRef<"AdminLogs", 'AdminAction'>;
    readonly entityId: Prisma.FieldRef<"AdminLogs", 'String'>;
    readonly entityType: Prisma.FieldRef<"AdminLogs", 'AdminEntityType'>;
    readonly createdAt: Prisma.FieldRef<"AdminLogs", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"AdminLogs", 'String'>;
}
/**
 * AdminLogs findUnique
 */
export type AdminLogsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * Filter, which AdminLogs to fetch.
     */
    where: Prisma.AdminLogsWhereUniqueInput;
};
/**
 * AdminLogs findUniqueOrThrow
 */
export type AdminLogsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * Filter, which AdminLogs to fetch.
     */
    where: Prisma.AdminLogsWhereUniqueInput;
};
/**
 * AdminLogs findFirst
 */
export type AdminLogsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: Prisma.AdminLogsOrderByWithRelationInput | Prisma.AdminLogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminLogs.
     */
    cursor?: Prisma.AdminLogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: Prisma.AdminLogsScalarFieldEnum | Prisma.AdminLogsScalarFieldEnum[];
};
/**
 * AdminLogs findFirstOrThrow
 */
export type AdminLogsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: Prisma.AdminLogsOrderByWithRelationInput | Prisma.AdminLogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminLogs.
     */
    cursor?: Prisma.AdminLogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: Prisma.AdminLogsScalarFieldEnum | Prisma.AdminLogsScalarFieldEnum[];
};
/**
 * AdminLogs findMany
 */
export type AdminLogsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: Prisma.AdminLogsOrderByWithRelationInput | Prisma.AdminLogsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdminLogs.
     */
    cursor?: Prisma.AdminLogsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminLogs.
     */
    skip?: number;
    distinct?: Prisma.AdminLogsScalarFieldEnum | Prisma.AdminLogsScalarFieldEnum[];
};
/**
 * AdminLogs create
 */
export type AdminLogsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdminLogs.
     */
    data: Prisma.XOR<Prisma.AdminLogsCreateInput, Prisma.AdminLogsUncheckedCreateInput>;
};
/**
 * AdminLogs createMany
 */
export type AdminLogsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminLogs.
     */
    data: Prisma.AdminLogsCreateManyInput | Prisma.AdminLogsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdminLogs createManyAndReturn
 */
export type AdminLogsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * The data used to create many AdminLogs.
     */
    data: Prisma.AdminLogsCreateManyInput | Prisma.AdminLogsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AdminLogs update
 */
export type AdminLogsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdminLogs.
     */
    data: Prisma.XOR<Prisma.AdminLogsUpdateInput, Prisma.AdminLogsUncheckedUpdateInput>;
    /**
     * Choose, which AdminLogs to update.
     */
    where: Prisma.AdminLogsWhereUniqueInput;
};
/**
 * AdminLogs updateMany
 */
export type AdminLogsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminLogs.
     */
    data: Prisma.XOR<Prisma.AdminLogsUpdateManyMutationInput, Prisma.AdminLogsUncheckedUpdateManyInput>;
    /**
     * Filter which AdminLogs to update
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number;
};
/**
 * AdminLogs updateManyAndReturn
 */
export type AdminLogsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * The data used to update AdminLogs.
     */
    data: Prisma.XOR<Prisma.AdminLogsUpdateManyMutationInput, Prisma.AdminLogsUncheckedUpdateManyInput>;
    /**
     * Filter which AdminLogs to update
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AdminLogs upsert
 */
export type AdminLogsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdminLogs to update in case it exists.
     */
    where: Prisma.AdminLogsWhereUniqueInput;
    /**
     * In case the AdminLogs found by the `where` argument doesn't exist, create a new AdminLogs with this data.
     */
    create: Prisma.XOR<Prisma.AdminLogsCreateInput, Prisma.AdminLogsUncheckedCreateInput>;
    /**
     * In case the AdminLogs was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdminLogsUpdateInput, Prisma.AdminLogsUncheckedUpdateInput>;
};
/**
 * AdminLogs delete
 */
export type AdminLogsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
    /**
     * Filter which AdminLogs to delete.
     */
    where: Prisma.AdminLogsWhereUniqueInput;
};
/**
 * AdminLogs deleteMany
 */
export type AdminLogsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLogs to delete
     */
    where?: Prisma.AdminLogsWhereInput;
    /**
     * Limit how many AdminLogs to delete.
     */
    limit?: number;
};
/**
 * AdminLogs without action
 */
export type AdminLogsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLogs
     */
    select?: Prisma.AdminLogsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminLogs
     */
    omit?: Prisma.AdminLogsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminLogsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AdminLogs.d.ts.map