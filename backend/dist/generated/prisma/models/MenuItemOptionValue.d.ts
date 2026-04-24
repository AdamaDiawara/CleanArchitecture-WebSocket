import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MenuItemOptionValue
 *
 */
export type MenuItemOptionValueModel = runtime.Types.Result.DefaultSelection<Prisma.$MenuItemOptionValuePayload>;
export type AggregateMenuItemOptionValue = {
    _count: MenuItemOptionValueCountAggregateOutputType | null;
    _avg: MenuItemOptionValueAvgAggregateOutputType | null;
    _sum: MenuItemOptionValueSumAggregateOutputType | null;
    _min: MenuItemOptionValueMinAggregateOutputType | null;
    _max: MenuItemOptionValueMaxAggregateOutputType | null;
};
export type MenuItemOptionValueAvgAggregateOutputType = {
    extra_price: runtime.Decimal | null;
};
export type MenuItemOptionValueSumAggregateOutputType = {
    extra_price: runtime.Decimal | null;
};
export type MenuItemOptionValueMinAggregateOutputType = {
    id: string | null;
    option_id: string | null;
    label: string | null;
    extra_price: runtime.Decimal | null;
};
export type MenuItemOptionValueMaxAggregateOutputType = {
    id: string | null;
    option_id: string | null;
    label: string | null;
    extra_price: runtime.Decimal | null;
};
export type MenuItemOptionValueCountAggregateOutputType = {
    id: number;
    option_id: number;
    label: number;
    extra_price: number;
    _all: number;
};
export type MenuItemOptionValueAvgAggregateInputType = {
    extra_price?: true;
};
export type MenuItemOptionValueSumAggregateInputType = {
    extra_price?: true;
};
export type MenuItemOptionValueMinAggregateInputType = {
    id?: true;
    option_id?: true;
    label?: true;
    extra_price?: true;
};
export type MenuItemOptionValueMaxAggregateInputType = {
    id?: true;
    option_id?: true;
    label?: true;
    extra_price?: true;
};
export type MenuItemOptionValueCountAggregateInputType = {
    id?: true;
    option_id?: true;
    label?: true;
    extra_price?: true;
    _all?: true;
};
export type MenuItemOptionValueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemOptionValue to aggregate.
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuItemOptionValues to fetch.
     */
    orderBy?: Prisma.MenuItemOptionValueOrderByWithRelationInput | Prisma.MenuItemOptionValueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MenuItemOptionValueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuItemOptionValues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuItemOptionValues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MenuItemOptionValues
    **/
    _count?: true | MenuItemOptionValueCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MenuItemOptionValueAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MenuItemOptionValueSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemOptionValueMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemOptionValueMaxAggregateInputType;
};
export type GetMenuItemOptionValueAggregateType<T extends MenuItemOptionValueAggregateArgs> = {
    [P in keyof T & keyof AggregateMenuItemOptionValue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenuItemOptionValue[P]> : Prisma.GetScalarType<T[P], AggregateMenuItemOptionValue[P]>;
};
export type MenuItemOptionValueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemOptionValueWhereInput;
    orderBy?: Prisma.MenuItemOptionValueOrderByWithAggregationInput | Prisma.MenuItemOptionValueOrderByWithAggregationInput[];
    by: Prisma.MenuItemOptionValueScalarFieldEnum[] | Prisma.MenuItemOptionValueScalarFieldEnum;
    having?: Prisma.MenuItemOptionValueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuItemOptionValueCountAggregateInputType | true;
    _avg?: MenuItemOptionValueAvgAggregateInputType;
    _sum?: MenuItemOptionValueSumAggregateInputType;
    _min?: MenuItemOptionValueMinAggregateInputType;
    _max?: MenuItemOptionValueMaxAggregateInputType;
};
export type MenuItemOptionValueGroupByOutputType = {
    id: string;
    option_id: string;
    label: string;
    extra_price: runtime.Decimal;
    _count: MenuItemOptionValueCountAggregateOutputType | null;
    _avg: MenuItemOptionValueAvgAggregateOutputType | null;
    _sum: MenuItemOptionValueSumAggregateOutputType | null;
    _min: MenuItemOptionValueMinAggregateOutputType | null;
    _max: MenuItemOptionValueMaxAggregateOutputType | null;
};
export type GetMenuItemOptionValueGroupByPayload<T extends MenuItemOptionValueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenuItemOptionValueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenuItemOptionValueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenuItemOptionValueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenuItemOptionValueGroupByOutputType[P]>;
}>>;
export type MenuItemOptionValueWhereInput = {
    AND?: Prisma.MenuItemOptionValueWhereInput | Prisma.MenuItemOptionValueWhereInput[];
    OR?: Prisma.MenuItemOptionValueWhereInput[];
    NOT?: Prisma.MenuItemOptionValueWhereInput | Prisma.MenuItemOptionValueWhereInput[];
    id?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    option_id?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    label?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    extra_price?: Prisma.DecimalFilter<"MenuItemOptionValue"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    option?: Prisma.XOR<Prisma.MenuItemOptionScalarRelationFilter, Prisma.MenuItemOptionWhereInput>;
    selections?: Prisma.OrderItemSelectionListRelationFilter;
};
export type MenuItemOptionValueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    option_id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
    option?: Prisma.MenuItemOptionOrderByWithRelationInput;
    selections?: Prisma.OrderItemSelectionOrderByRelationAggregateInput;
};
export type MenuItemOptionValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MenuItemOptionValueWhereInput | Prisma.MenuItemOptionValueWhereInput[];
    OR?: Prisma.MenuItemOptionValueWhereInput[];
    NOT?: Prisma.MenuItemOptionValueWhereInput | Prisma.MenuItemOptionValueWhereInput[];
    option_id?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    label?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    extra_price?: Prisma.DecimalFilter<"MenuItemOptionValue"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    option?: Prisma.XOR<Prisma.MenuItemOptionScalarRelationFilter, Prisma.MenuItemOptionWhereInput>;
    selections?: Prisma.OrderItemSelectionListRelationFilter;
}, "id">;
export type MenuItemOptionValueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    option_id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
    _count?: Prisma.MenuItemOptionValueCountOrderByAggregateInput;
    _avg?: Prisma.MenuItemOptionValueAvgOrderByAggregateInput;
    _max?: Prisma.MenuItemOptionValueMaxOrderByAggregateInput;
    _min?: Prisma.MenuItemOptionValueMinOrderByAggregateInput;
    _sum?: Prisma.MenuItemOptionValueSumOrderByAggregateInput;
};
export type MenuItemOptionValueScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenuItemOptionValueScalarWhereWithAggregatesInput | Prisma.MenuItemOptionValueScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenuItemOptionValueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenuItemOptionValueScalarWhereWithAggregatesInput | Prisma.MenuItemOptionValueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MenuItemOptionValue"> | string;
    option_id?: Prisma.StringWithAggregatesFilter<"MenuItemOptionValue"> | string;
    label?: Prisma.StringWithAggregatesFilter<"MenuItemOptionValue"> | string;
    extra_price?: Prisma.DecimalWithAggregatesFilter<"MenuItemOptionValue"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueCreateInput = {
    id?: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    option: Prisma.MenuItemOptionCreateNestedOneWithoutValuesInput;
    selections?: Prisma.OrderItemSelectionCreateNestedManyWithoutOption_valueInput;
};
export type MenuItemOptionValueUncheckedCreateInput = {
    id?: string;
    option_id: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    selections?: Prisma.OrderItemSelectionUncheckedCreateNestedManyWithoutOption_valueInput;
};
export type MenuItemOptionValueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    option?: Prisma.MenuItemOptionUpdateOneRequiredWithoutValuesNestedInput;
    selections?: Prisma.OrderItemSelectionUpdateManyWithoutOption_valueNestedInput;
};
export type MenuItemOptionValueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    selections?: Prisma.OrderItemSelectionUncheckedUpdateManyWithoutOption_valueNestedInput;
};
export type MenuItemOptionValueCreateManyInput = {
    id?: string;
    option_id: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueListRelationFilter = {
    every?: Prisma.MenuItemOptionValueWhereInput;
    some?: Prisma.MenuItemOptionValueWhereInput;
    none?: Prisma.MenuItemOptionValueWhereInput;
};
export type MenuItemOptionValueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MenuItemOptionValueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    option_id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
};
export type MenuItemOptionValueAvgOrderByAggregateInput = {
    extra_price?: Prisma.SortOrder;
};
export type MenuItemOptionValueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    option_id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
};
export type MenuItemOptionValueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    option_id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
};
export type MenuItemOptionValueSumOrderByAggregateInput = {
    extra_price?: Prisma.SortOrder;
};
export type MenuItemOptionValueScalarRelationFilter = {
    is?: Prisma.MenuItemOptionValueWhereInput;
    isNot?: Prisma.MenuItemOptionValueWhereInput;
};
export type MenuItemOptionValueCreateNestedManyWithoutOptionInput = {
    create?: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput> | Prisma.MenuItemOptionValueCreateWithoutOptionInput[] | Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput | Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput[];
    createMany?: Prisma.MenuItemOptionValueCreateManyOptionInputEnvelope;
    connect?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
};
export type MenuItemOptionValueUncheckedCreateNestedManyWithoutOptionInput = {
    create?: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput> | Prisma.MenuItemOptionValueCreateWithoutOptionInput[] | Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput | Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput[];
    createMany?: Prisma.MenuItemOptionValueCreateManyOptionInputEnvelope;
    connect?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
};
export type MenuItemOptionValueUpdateManyWithoutOptionNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput> | Prisma.MenuItemOptionValueCreateWithoutOptionInput[] | Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput | Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput[];
    upsert?: Prisma.MenuItemOptionValueUpsertWithWhereUniqueWithoutOptionInput | Prisma.MenuItemOptionValueUpsertWithWhereUniqueWithoutOptionInput[];
    createMany?: Prisma.MenuItemOptionValueCreateManyOptionInputEnvelope;
    set?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    disconnect?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    delete?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    connect?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    update?: Prisma.MenuItemOptionValueUpdateWithWhereUniqueWithoutOptionInput | Prisma.MenuItemOptionValueUpdateWithWhereUniqueWithoutOptionInput[];
    updateMany?: Prisma.MenuItemOptionValueUpdateManyWithWhereWithoutOptionInput | Prisma.MenuItemOptionValueUpdateManyWithWhereWithoutOptionInput[];
    deleteMany?: Prisma.MenuItemOptionValueScalarWhereInput | Prisma.MenuItemOptionValueScalarWhereInput[];
};
export type MenuItemOptionValueUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput> | Prisma.MenuItemOptionValueCreateWithoutOptionInput[] | Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput[];
    connectOrCreate?: Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput | Prisma.MenuItemOptionValueCreateOrConnectWithoutOptionInput[];
    upsert?: Prisma.MenuItemOptionValueUpsertWithWhereUniqueWithoutOptionInput | Prisma.MenuItemOptionValueUpsertWithWhereUniqueWithoutOptionInput[];
    createMany?: Prisma.MenuItemOptionValueCreateManyOptionInputEnvelope;
    set?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    disconnect?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    delete?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    connect?: Prisma.MenuItemOptionValueWhereUniqueInput | Prisma.MenuItemOptionValueWhereUniqueInput[];
    update?: Prisma.MenuItemOptionValueUpdateWithWhereUniqueWithoutOptionInput | Prisma.MenuItemOptionValueUpdateWithWhereUniqueWithoutOptionInput[];
    updateMany?: Prisma.MenuItemOptionValueUpdateManyWithWhereWithoutOptionInput | Prisma.MenuItemOptionValueUpdateManyWithWhereWithoutOptionInput[];
    deleteMany?: Prisma.MenuItemOptionValueScalarWhereInput | Prisma.MenuItemOptionValueScalarWhereInput[];
};
export type MenuItemOptionValueCreateNestedOneWithoutSelectionsInput = {
    create?: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutSelectionsInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutSelectionsInput>;
    connectOrCreate?: Prisma.MenuItemOptionValueCreateOrConnectWithoutSelectionsInput;
    connect?: Prisma.MenuItemOptionValueWhereUniqueInput;
};
export type MenuItemOptionValueUpdateOneRequiredWithoutSelectionsNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutSelectionsInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutSelectionsInput>;
    connectOrCreate?: Prisma.MenuItemOptionValueCreateOrConnectWithoutSelectionsInput;
    upsert?: Prisma.MenuItemOptionValueUpsertWithoutSelectionsInput;
    connect?: Prisma.MenuItemOptionValueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuItemOptionValueUpdateToOneWithWhereWithoutSelectionsInput, Prisma.MenuItemOptionValueUpdateWithoutSelectionsInput>, Prisma.MenuItemOptionValueUncheckedUpdateWithoutSelectionsInput>;
};
export type MenuItemOptionValueCreateWithoutOptionInput = {
    id?: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    selections?: Prisma.OrderItemSelectionCreateNestedManyWithoutOption_valueInput;
};
export type MenuItemOptionValueUncheckedCreateWithoutOptionInput = {
    id?: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    selections?: Prisma.OrderItemSelectionUncheckedCreateNestedManyWithoutOption_valueInput;
};
export type MenuItemOptionValueCreateOrConnectWithoutOptionInput = {
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput>;
};
export type MenuItemOptionValueCreateManyOptionInputEnvelope = {
    data: Prisma.MenuItemOptionValueCreateManyOptionInput | Prisma.MenuItemOptionValueCreateManyOptionInput[];
    skipDuplicates?: boolean;
};
export type MenuItemOptionValueUpsertWithWhereUniqueWithoutOptionInput = {
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
    update: Prisma.XOR<Prisma.MenuItemOptionValueUpdateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedUpdateWithoutOptionInput>;
    create: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutOptionInput>;
};
export type MenuItemOptionValueUpdateWithWhereUniqueWithoutOptionInput = {
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
    data: Prisma.XOR<Prisma.MenuItemOptionValueUpdateWithoutOptionInput, Prisma.MenuItemOptionValueUncheckedUpdateWithoutOptionInput>;
};
export type MenuItemOptionValueUpdateManyWithWhereWithoutOptionInput = {
    where: Prisma.MenuItemOptionValueScalarWhereInput;
    data: Prisma.XOR<Prisma.MenuItemOptionValueUpdateManyMutationInput, Prisma.MenuItemOptionValueUncheckedUpdateManyWithoutOptionInput>;
};
export type MenuItemOptionValueScalarWhereInput = {
    AND?: Prisma.MenuItemOptionValueScalarWhereInput | Prisma.MenuItemOptionValueScalarWhereInput[];
    OR?: Prisma.MenuItemOptionValueScalarWhereInput[];
    NOT?: Prisma.MenuItemOptionValueScalarWhereInput | Prisma.MenuItemOptionValueScalarWhereInput[];
    id?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    option_id?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    label?: Prisma.StringFilter<"MenuItemOptionValue"> | string;
    extra_price?: Prisma.DecimalFilter<"MenuItemOptionValue"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueCreateWithoutSelectionsInput = {
    id?: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    option: Prisma.MenuItemOptionCreateNestedOneWithoutValuesInput;
};
export type MenuItemOptionValueUncheckedCreateWithoutSelectionsInput = {
    id?: string;
    option_id: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueCreateOrConnectWithoutSelectionsInput = {
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutSelectionsInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutSelectionsInput>;
};
export type MenuItemOptionValueUpsertWithoutSelectionsInput = {
    update: Prisma.XOR<Prisma.MenuItemOptionValueUpdateWithoutSelectionsInput, Prisma.MenuItemOptionValueUncheckedUpdateWithoutSelectionsInput>;
    create: Prisma.XOR<Prisma.MenuItemOptionValueCreateWithoutSelectionsInput, Prisma.MenuItemOptionValueUncheckedCreateWithoutSelectionsInput>;
    where?: Prisma.MenuItemOptionValueWhereInput;
};
export type MenuItemOptionValueUpdateToOneWithWhereWithoutSelectionsInput = {
    where?: Prisma.MenuItemOptionValueWhereInput;
    data: Prisma.XOR<Prisma.MenuItemOptionValueUpdateWithoutSelectionsInput, Prisma.MenuItemOptionValueUncheckedUpdateWithoutSelectionsInput>;
};
export type MenuItemOptionValueUpdateWithoutSelectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    option?: Prisma.MenuItemOptionUpdateOneRequiredWithoutValuesNestedInput;
};
export type MenuItemOptionValueUncheckedUpdateWithoutSelectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueCreateManyOptionInput = {
    id?: string;
    label: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MenuItemOptionValueUpdateWithoutOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    selections?: Prisma.OrderItemSelectionUpdateManyWithoutOption_valueNestedInput;
};
export type MenuItemOptionValueUncheckedUpdateWithoutOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    selections?: Prisma.OrderItemSelectionUncheckedUpdateManyWithoutOption_valueNestedInput;
};
export type MenuItemOptionValueUncheckedUpdateManyWithoutOptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
/**
 * Count Type MenuItemOptionValueCountOutputType
 */
export type MenuItemOptionValueCountOutputType = {
    selections: number;
};
export type MenuItemOptionValueCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    selections?: boolean | MenuItemOptionValueCountOutputTypeCountSelectionsArgs;
};
/**
 * MenuItemOptionValueCountOutputType without action
 */
export type MenuItemOptionValueCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValueCountOutputType
     */
    select?: Prisma.MenuItemOptionValueCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MenuItemOptionValueCountOutputType without action
 */
export type MenuItemOptionValueCountOutputTypeCountSelectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemSelectionWhereInput;
};
export type MenuItemOptionValueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    option_id?: boolean;
    label?: boolean;
    extra_price?: boolean;
    option?: boolean | Prisma.MenuItemOptionDefaultArgs<ExtArgs>;
    selections?: boolean | Prisma.MenuItemOptionValue$selectionsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuItemOptionValueCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItemOptionValue"]>;
export type MenuItemOptionValueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    option_id?: boolean;
    label?: boolean;
    extra_price?: boolean;
    option?: boolean | Prisma.MenuItemOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItemOptionValue"]>;
export type MenuItemOptionValueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    option_id?: boolean;
    label?: boolean;
    extra_price?: boolean;
    option?: boolean | Prisma.MenuItemOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItemOptionValue"]>;
export type MenuItemOptionValueSelectScalar = {
    id?: boolean;
    option_id?: boolean;
    label?: boolean;
    extra_price?: boolean;
};
export type MenuItemOptionValueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "option_id" | "label" | "extra_price", ExtArgs["result"]["menuItemOptionValue"]>;
export type MenuItemOptionValueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    option?: boolean | Prisma.MenuItemOptionDefaultArgs<ExtArgs>;
    selections?: boolean | Prisma.MenuItemOptionValue$selectionsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuItemOptionValueCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MenuItemOptionValueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    option?: boolean | Prisma.MenuItemOptionDefaultArgs<ExtArgs>;
};
export type MenuItemOptionValueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    option?: boolean | Prisma.MenuItemOptionDefaultArgs<ExtArgs>;
};
export type $MenuItemOptionValuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MenuItemOptionValue";
    objects: {
        option: Prisma.$MenuItemOptionPayload<ExtArgs>;
        selections: Prisma.$OrderItemSelectionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        option_id: string;
        label: string;
        extra_price: runtime.Decimal;
    }, ExtArgs["result"]["menuItemOptionValue"]>;
    composites: {};
};
export type MenuItemOptionValueGetPayload<S extends boolean | null | undefined | MenuItemOptionValueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload, S>;
export type MenuItemOptionValueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenuItemOptionValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenuItemOptionValueCountAggregateInputType | true;
};
export interface MenuItemOptionValueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MenuItemOptionValue'];
        meta: {
            name: 'MenuItemOptionValue';
        };
    };
    /**
     * Find zero or one MenuItemOptionValue that matches the filter.
     * @param {MenuItemOptionValueFindUniqueArgs} args - Arguments to find a MenuItemOptionValue
     * @example
     * // Get one MenuItemOptionValue
     * const menuItemOptionValue = await prisma.menuItemOptionValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemOptionValueFindUniqueArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MenuItemOptionValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemOptionValueFindUniqueOrThrowArgs} args - Arguments to find a MenuItemOptionValue
     * @example
     * // Get one MenuItemOptionValue
     * const menuItemOptionValue = await prisma.menuItemOptionValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemOptionValueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MenuItemOptionValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueFindFirstArgs} args - Arguments to find a MenuItemOptionValue
     * @example
     * // Get one MenuItemOptionValue
     * const menuItemOptionValue = await prisma.menuItemOptionValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemOptionValueFindFirstArgs>(args?: Prisma.SelectSubset<T, MenuItemOptionValueFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MenuItemOptionValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueFindFirstOrThrowArgs} args - Arguments to find a MenuItemOptionValue
     * @example
     * // Get one MenuItemOptionValue
     * const menuItemOptionValue = await prisma.menuItemOptionValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemOptionValueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenuItemOptionValueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MenuItemOptionValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItemOptionValues
     * const menuItemOptionValues = await prisma.menuItemOptionValue.findMany()
     *
     * // Get first 10 MenuItemOptionValues
     * const menuItemOptionValues = await prisma.menuItemOptionValue.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const menuItemOptionValueWithIdOnly = await prisma.menuItemOptionValue.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MenuItemOptionValueFindManyArgs>(args?: Prisma.SelectSubset<T, MenuItemOptionValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MenuItemOptionValue.
     * @param {MenuItemOptionValueCreateArgs} args - Arguments to create a MenuItemOptionValue.
     * @example
     * // Create one MenuItemOptionValue
     * const MenuItemOptionValue = await prisma.menuItemOptionValue.create({
     *   data: {
     *     // ... data to create a MenuItemOptionValue
     *   }
     * })
     *
     */
    create<T extends MenuItemOptionValueCreateArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueCreateArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MenuItemOptionValues.
     * @param {MenuItemOptionValueCreateManyArgs} args - Arguments to create many MenuItemOptionValues.
     * @example
     * // Create many MenuItemOptionValues
     * const menuItemOptionValue = await prisma.menuItemOptionValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MenuItemOptionValueCreateManyArgs>(args?: Prisma.SelectSubset<T, MenuItemOptionValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MenuItemOptionValues and returns the data saved in the database.
     * @param {MenuItemOptionValueCreateManyAndReturnArgs} args - Arguments to create many MenuItemOptionValues.
     * @example
     * // Create many MenuItemOptionValues
     * const menuItemOptionValue = await prisma.menuItemOptionValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MenuItemOptionValues and only return the `id`
     * const menuItemOptionValueWithIdOnly = await prisma.menuItemOptionValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MenuItemOptionValueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenuItemOptionValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MenuItemOptionValue.
     * @param {MenuItemOptionValueDeleteArgs} args - Arguments to delete one MenuItemOptionValue.
     * @example
     * // Delete one MenuItemOptionValue
     * const MenuItemOptionValue = await prisma.menuItemOptionValue.delete({
     *   where: {
     *     // ... filter to delete one MenuItemOptionValue
     *   }
     * })
     *
     */
    delete<T extends MenuItemOptionValueDeleteArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueDeleteArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MenuItemOptionValue.
     * @param {MenuItemOptionValueUpdateArgs} args - Arguments to update one MenuItemOptionValue.
     * @example
     * // Update one MenuItemOptionValue
     * const menuItemOptionValue = await prisma.menuItemOptionValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MenuItemOptionValueUpdateArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueUpdateArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MenuItemOptionValues.
     * @param {MenuItemOptionValueDeleteManyArgs} args - Arguments to filter MenuItemOptionValues to delete.
     * @example
     * // Delete a few MenuItemOptionValues
     * const { count } = await prisma.menuItemOptionValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MenuItemOptionValueDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenuItemOptionValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MenuItemOptionValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItemOptionValues
     * const menuItemOptionValue = await prisma.menuItemOptionValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MenuItemOptionValueUpdateManyArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MenuItemOptionValues and returns the data updated in the database.
     * @param {MenuItemOptionValueUpdateManyAndReturnArgs} args - Arguments to update many MenuItemOptionValues.
     * @example
     * // Update many MenuItemOptionValues
     * const menuItemOptionValue = await prisma.menuItemOptionValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MenuItemOptionValues and only return the `id`
     * const menuItemOptionValueWithIdOnly = await prisma.menuItemOptionValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuItemOptionValueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MenuItemOptionValue.
     * @param {MenuItemOptionValueUpsertArgs} args - Arguments to update or create a MenuItemOptionValue.
     * @example
     * // Update or create a MenuItemOptionValue
     * const menuItemOptionValue = await prisma.menuItemOptionValue.upsert({
     *   create: {
     *     // ... data to create a MenuItemOptionValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItemOptionValue we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemOptionValueUpsertArgs>(args: Prisma.SelectSubset<T, MenuItemOptionValueUpsertArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MenuItemOptionValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueCountArgs} args - Arguments to filter MenuItemOptionValues to count.
     * @example
     * // Count the number of MenuItemOptionValues
     * const count = await prisma.menuItemOptionValue.count({
     *   where: {
     *     // ... the filter for the MenuItemOptionValues we want to count
     *   }
     * })
    **/
    count<T extends MenuItemOptionValueCountArgs>(args?: Prisma.Subset<T, MenuItemOptionValueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenuItemOptionValueCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MenuItemOptionValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemOptionValueAggregateArgs>(args: Prisma.Subset<T, MenuItemOptionValueAggregateArgs>): Prisma.PrismaPromise<GetMenuItemOptionValueAggregateType<T>>;
    /**
     * Group by MenuItemOptionValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemOptionValueGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MenuItemOptionValueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenuItemOptionValueGroupByArgs['orderBy'];
    } : {
        orderBy?: MenuItemOptionValueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenuItemOptionValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemOptionValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MenuItemOptionValue model
     */
    readonly fields: MenuItemOptionValueFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MenuItemOptionValue.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MenuItemOptionValueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    option<T extends Prisma.MenuItemOptionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItemOptionDefaultArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    selections<T extends Prisma.MenuItemOptionValue$selectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItemOptionValue$selectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MenuItemOptionValue model
 */
export interface MenuItemOptionValueFieldRefs {
    readonly id: Prisma.FieldRef<"MenuItemOptionValue", 'String'>;
    readonly option_id: Prisma.FieldRef<"MenuItemOptionValue", 'String'>;
    readonly label: Prisma.FieldRef<"MenuItemOptionValue", 'String'>;
    readonly extra_price: Prisma.FieldRef<"MenuItemOptionValue", 'Decimal'>;
}
/**
 * MenuItemOptionValue findUnique
 */
export type MenuItemOptionValueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * Filter, which MenuItemOptionValue to fetch.
     */
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
};
/**
 * MenuItemOptionValue findUniqueOrThrow
 */
export type MenuItemOptionValueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * Filter, which MenuItemOptionValue to fetch.
     */
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
};
/**
 * MenuItemOptionValue findFirst
 */
export type MenuItemOptionValueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * Filter, which MenuItemOptionValue to fetch.
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuItemOptionValues to fetch.
     */
    orderBy?: Prisma.MenuItemOptionValueOrderByWithRelationInput | Prisma.MenuItemOptionValueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MenuItemOptionValues.
     */
    cursor?: Prisma.MenuItemOptionValueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuItemOptionValues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuItemOptionValues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MenuItemOptionValues.
     */
    distinct?: Prisma.MenuItemOptionValueScalarFieldEnum | Prisma.MenuItemOptionValueScalarFieldEnum[];
};
/**
 * MenuItemOptionValue findFirstOrThrow
 */
export type MenuItemOptionValueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * Filter, which MenuItemOptionValue to fetch.
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuItemOptionValues to fetch.
     */
    orderBy?: Prisma.MenuItemOptionValueOrderByWithRelationInput | Prisma.MenuItemOptionValueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MenuItemOptionValues.
     */
    cursor?: Prisma.MenuItemOptionValueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuItemOptionValues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuItemOptionValues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MenuItemOptionValues.
     */
    distinct?: Prisma.MenuItemOptionValueScalarFieldEnum | Prisma.MenuItemOptionValueScalarFieldEnum[];
};
/**
 * MenuItemOptionValue findMany
 */
export type MenuItemOptionValueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * Filter, which MenuItemOptionValues to fetch.
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuItemOptionValues to fetch.
     */
    orderBy?: Prisma.MenuItemOptionValueOrderByWithRelationInput | Prisma.MenuItemOptionValueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MenuItemOptionValues.
     */
    cursor?: Prisma.MenuItemOptionValueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuItemOptionValues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuItemOptionValues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MenuItemOptionValues.
     */
    distinct?: Prisma.MenuItemOptionValueScalarFieldEnum | Prisma.MenuItemOptionValueScalarFieldEnum[];
};
/**
 * MenuItemOptionValue create
 */
export type MenuItemOptionValueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * The data needed to create a MenuItemOptionValue.
     */
    data: Prisma.XOR<Prisma.MenuItemOptionValueCreateInput, Prisma.MenuItemOptionValueUncheckedCreateInput>;
};
/**
 * MenuItemOptionValue createMany
 */
export type MenuItemOptionValueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItemOptionValues.
     */
    data: Prisma.MenuItemOptionValueCreateManyInput | Prisma.MenuItemOptionValueCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MenuItemOptionValue createManyAndReturn
 */
export type MenuItemOptionValueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * The data used to create many MenuItemOptionValues.
     */
    data: Prisma.MenuItemOptionValueCreateManyInput | Prisma.MenuItemOptionValueCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MenuItemOptionValue update
 */
export type MenuItemOptionValueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * The data needed to update a MenuItemOptionValue.
     */
    data: Prisma.XOR<Prisma.MenuItemOptionValueUpdateInput, Prisma.MenuItemOptionValueUncheckedUpdateInput>;
    /**
     * Choose, which MenuItemOptionValue to update.
     */
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
};
/**
 * MenuItemOptionValue updateMany
 */
export type MenuItemOptionValueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItemOptionValues.
     */
    data: Prisma.XOR<Prisma.MenuItemOptionValueUpdateManyMutationInput, Prisma.MenuItemOptionValueUncheckedUpdateManyInput>;
    /**
     * Filter which MenuItemOptionValues to update
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * Limit how many MenuItemOptionValues to update.
     */
    limit?: number;
};
/**
 * MenuItemOptionValue updateManyAndReturn
 */
export type MenuItemOptionValueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * The data used to update MenuItemOptionValues.
     */
    data: Prisma.XOR<Prisma.MenuItemOptionValueUpdateManyMutationInput, Prisma.MenuItemOptionValueUncheckedUpdateManyInput>;
    /**
     * Filter which MenuItemOptionValues to update
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * Limit how many MenuItemOptionValues to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MenuItemOptionValue upsert
 */
export type MenuItemOptionValueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * The filter to search for the MenuItemOptionValue to update in case it exists.
     */
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
    /**
     * In case the MenuItemOptionValue found by the `where` argument doesn't exist, create a new MenuItemOptionValue with this data.
     */
    create: Prisma.XOR<Prisma.MenuItemOptionValueCreateInput, Prisma.MenuItemOptionValueUncheckedCreateInput>;
    /**
     * In case the MenuItemOptionValue was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MenuItemOptionValueUpdateInput, Prisma.MenuItemOptionValueUncheckedUpdateInput>;
};
/**
 * MenuItemOptionValue delete
 */
export type MenuItemOptionValueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
    /**
     * Filter which MenuItemOptionValue to delete.
     */
    where: Prisma.MenuItemOptionValueWhereUniqueInput;
};
/**
 * MenuItemOptionValue deleteMany
 */
export type MenuItemOptionValueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemOptionValues to delete
     */
    where?: Prisma.MenuItemOptionValueWhereInput;
    /**
     * Limit how many MenuItemOptionValues to delete.
     */
    limit?: number;
};
/**
 * MenuItemOptionValue.selections
 */
export type MenuItemOptionValue$selectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSelection
     */
    select?: Prisma.OrderItemSelectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItemSelection
     */
    omit?: Prisma.OrderItemSelectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemSelectionInclude<ExtArgs> | null;
    where?: Prisma.OrderItemSelectionWhereInput;
    orderBy?: Prisma.OrderItemSelectionOrderByWithRelationInput | Prisma.OrderItemSelectionOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemSelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemSelectionScalarFieldEnum | Prisma.OrderItemSelectionScalarFieldEnum[];
};
/**
 * MenuItemOptionValue without action
 */
export type MenuItemOptionValueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemOptionValue
     */
    select?: Prisma.MenuItemOptionValueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuItemOptionValue
     */
    omit?: Prisma.MenuItemOptionValueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MenuItemOptionValueInclude<ExtArgs> | null;
};
//# sourceMappingURL=MenuItemOptionValue.d.ts.map