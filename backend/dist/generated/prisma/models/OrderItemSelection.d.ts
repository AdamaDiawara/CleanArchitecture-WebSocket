import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model OrderItemSelection
 *
 */
export type OrderItemSelectionModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderItemSelectionPayload>;
export type AggregateOrderItemSelection = {
    _count: OrderItemSelectionCountAggregateOutputType | null;
    _avg: OrderItemSelectionAvgAggregateOutputType | null;
    _sum: OrderItemSelectionSumAggregateOutputType | null;
    _min: OrderItemSelectionMinAggregateOutputType | null;
    _max: OrderItemSelectionMaxAggregateOutputType | null;
};
export type OrderItemSelectionAvgAggregateOutputType = {
    extra_price: runtime.Decimal | null;
};
export type OrderItemSelectionSumAggregateOutputType = {
    extra_price: runtime.Decimal | null;
};
export type OrderItemSelectionMinAggregateOutputType = {
    id: string | null;
    order_item_id: string | null;
    option_value_id: string | null;
    extra_price: runtime.Decimal | null;
};
export type OrderItemSelectionMaxAggregateOutputType = {
    id: string | null;
    order_item_id: string | null;
    option_value_id: string | null;
    extra_price: runtime.Decimal | null;
};
export type OrderItemSelectionCountAggregateOutputType = {
    id: number;
    order_item_id: number;
    option_value_id: number;
    extra_price: number;
    _all: number;
};
export type OrderItemSelectionAvgAggregateInputType = {
    extra_price?: true;
};
export type OrderItemSelectionSumAggregateInputType = {
    extra_price?: true;
};
export type OrderItemSelectionMinAggregateInputType = {
    id?: true;
    order_item_id?: true;
    option_value_id?: true;
    extra_price?: true;
};
export type OrderItemSelectionMaxAggregateInputType = {
    id?: true;
    order_item_id?: true;
    option_value_id?: true;
    extra_price?: true;
};
export type OrderItemSelectionCountAggregateInputType = {
    id?: true;
    order_item_id?: true;
    option_value_id?: true;
    extra_price?: true;
    _all?: true;
};
export type OrderItemSelectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemSelection to aggregate.
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItemSelections to fetch.
     */
    orderBy?: Prisma.OrderItemSelectionOrderByWithRelationInput | Prisma.OrderItemSelectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrderItemSelectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItemSelections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItemSelections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderItemSelections
    **/
    _count?: true | OrderItemSelectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: OrderItemSelectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: OrderItemSelectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemSelectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemSelectionMaxAggregateInputType;
};
export type GetOrderItemSelectionAggregateType<T extends OrderItemSelectionAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderItemSelection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderItemSelection[P]> : Prisma.GetScalarType<T[P], AggregateOrderItemSelection[P]>;
};
export type OrderItemSelectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemSelectionWhereInput;
    orderBy?: Prisma.OrderItemSelectionOrderByWithAggregationInput | Prisma.OrderItemSelectionOrderByWithAggregationInput[];
    by: Prisma.OrderItemSelectionScalarFieldEnum[] | Prisma.OrderItemSelectionScalarFieldEnum;
    having?: Prisma.OrderItemSelectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderItemSelectionCountAggregateInputType | true;
    _avg?: OrderItemSelectionAvgAggregateInputType;
    _sum?: OrderItemSelectionSumAggregateInputType;
    _min?: OrderItemSelectionMinAggregateInputType;
    _max?: OrderItemSelectionMaxAggregateInputType;
};
export type OrderItemSelectionGroupByOutputType = {
    id: string;
    order_item_id: string;
    option_value_id: string;
    extra_price: runtime.Decimal;
    _count: OrderItemSelectionCountAggregateOutputType | null;
    _avg: OrderItemSelectionAvgAggregateOutputType | null;
    _sum: OrderItemSelectionSumAggregateOutputType | null;
    _min: OrderItemSelectionMinAggregateOutputType | null;
    _max: OrderItemSelectionMaxAggregateOutputType | null;
};
export type GetOrderItemSelectionGroupByPayload<T extends OrderItemSelectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderItemSelectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderItemSelectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderItemSelectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderItemSelectionGroupByOutputType[P]>;
}>>;
export type OrderItemSelectionWhereInput = {
    AND?: Prisma.OrderItemSelectionWhereInput | Prisma.OrderItemSelectionWhereInput[];
    OR?: Prisma.OrderItemSelectionWhereInput[];
    NOT?: Prisma.OrderItemSelectionWhereInput | Prisma.OrderItemSelectionWhereInput[];
    id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    order_item_id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    option_value_id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    extra_price?: Prisma.DecimalFilter<"OrderItemSelection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_item?: Prisma.XOR<Prisma.OrderItemScalarRelationFilter, Prisma.OrderItemWhereInput>;
    option_value?: Prisma.XOR<Prisma.MenuItemOptionValueScalarRelationFilter, Prisma.MenuItemOptionValueWhereInput>;
};
export type OrderItemSelectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    option_value_id?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
    order_item?: Prisma.OrderItemOrderByWithRelationInput;
    option_value?: Prisma.MenuItemOptionValueOrderByWithRelationInput;
};
export type OrderItemSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderItemSelectionWhereInput | Prisma.OrderItemSelectionWhereInput[];
    OR?: Prisma.OrderItemSelectionWhereInput[];
    NOT?: Prisma.OrderItemSelectionWhereInput | Prisma.OrderItemSelectionWhereInput[];
    order_item_id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    option_value_id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    extra_price?: Prisma.DecimalFilter<"OrderItemSelection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_item?: Prisma.XOR<Prisma.OrderItemScalarRelationFilter, Prisma.OrderItemWhereInput>;
    option_value?: Prisma.XOR<Prisma.MenuItemOptionValueScalarRelationFilter, Prisma.MenuItemOptionValueWhereInput>;
}, "id">;
export type OrderItemSelectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    option_value_id?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
    _count?: Prisma.OrderItemSelectionCountOrderByAggregateInput;
    _avg?: Prisma.OrderItemSelectionAvgOrderByAggregateInput;
    _max?: Prisma.OrderItemSelectionMaxOrderByAggregateInput;
    _min?: Prisma.OrderItemSelectionMinOrderByAggregateInput;
    _sum?: Prisma.OrderItemSelectionSumOrderByAggregateInput;
};
export type OrderItemSelectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderItemSelectionScalarWhereWithAggregatesInput | Prisma.OrderItemSelectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderItemSelectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderItemSelectionScalarWhereWithAggregatesInput | Prisma.OrderItemSelectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderItemSelection"> | string;
    order_item_id?: Prisma.StringWithAggregatesFilter<"OrderItemSelection"> | string;
    option_value_id?: Prisma.StringWithAggregatesFilter<"OrderItemSelection"> | string;
    extra_price?: Prisma.DecimalWithAggregatesFilter<"OrderItemSelection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionCreateInput = {
    id?: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_item: Prisma.OrderItemCreateNestedOneWithoutSelectionsInput;
    option_value: Prisma.MenuItemOptionValueCreateNestedOneWithoutSelectionsInput;
};
export type OrderItemSelectionUncheckedCreateInput = {
    id?: string;
    order_item_id: string;
    option_value_id: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_item?: Prisma.OrderItemUpdateOneRequiredWithoutSelectionsNestedInput;
    option_value?: Prisma.MenuItemOptionValueUpdateOneRequiredWithoutSelectionsNestedInput;
};
export type OrderItemSelectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_value_id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionCreateManyInput = {
    id?: string;
    order_item_id: string;
    option_value_id: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_value_id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionListRelationFilter = {
    every?: Prisma.OrderItemSelectionWhereInput;
    some?: Prisma.OrderItemSelectionWhereInput;
    none?: Prisma.OrderItemSelectionWhereInput;
};
export type OrderItemSelectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderItemSelectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    option_value_id?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
};
export type OrderItemSelectionAvgOrderByAggregateInput = {
    extra_price?: Prisma.SortOrder;
};
export type OrderItemSelectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    option_value_id?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
};
export type OrderItemSelectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    option_value_id?: Prisma.SortOrder;
    extra_price?: Prisma.SortOrder;
};
export type OrderItemSelectionSumOrderByAggregateInput = {
    extra_price?: Prisma.SortOrder;
};
export type OrderItemSelectionCreateNestedManyWithoutOption_valueInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput> | Prisma.OrderItemSelectionCreateWithoutOption_valueInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOption_valueInputEnvelope;
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
};
export type OrderItemSelectionUncheckedCreateNestedManyWithoutOption_valueInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput> | Prisma.OrderItemSelectionCreateWithoutOption_valueInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOption_valueInputEnvelope;
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
};
export type OrderItemSelectionUpdateManyWithoutOption_valueNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput> | Prisma.OrderItemSelectionCreateWithoutOption_valueInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput[];
    upsert?: Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOption_valueInput | Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOption_valueInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOption_valueInputEnvelope;
    set?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    disconnect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    delete?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    update?: Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOption_valueInput | Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOption_valueInput[];
    updateMany?: Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOption_valueInput | Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOption_valueInput[];
    deleteMany?: Prisma.OrderItemSelectionScalarWhereInput | Prisma.OrderItemSelectionScalarWhereInput[];
};
export type OrderItemSelectionUncheckedUpdateManyWithoutOption_valueNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput> | Prisma.OrderItemSelectionCreateWithoutOption_valueInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOption_valueInput[];
    upsert?: Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOption_valueInput | Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOption_valueInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOption_valueInputEnvelope;
    set?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    disconnect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    delete?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    update?: Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOption_valueInput | Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOption_valueInput[];
    updateMany?: Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOption_valueInput | Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOption_valueInput[];
    deleteMany?: Prisma.OrderItemSelectionScalarWhereInput | Prisma.OrderItemSelectionScalarWhereInput[];
};
export type OrderItemSelectionCreateNestedManyWithoutOrder_itemInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput> | Prisma.OrderItemSelectionCreateWithoutOrder_itemInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOrder_itemInputEnvelope;
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
};
export type OrderItemSelectionUncheckedCreateNestedManyWithoutOrder_itemInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput> | Prisma.OrderItemSelectionCreateWithoutOrder_itemInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOrder_itemInputEnvelope;
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
};
export type OrderItemSelectionUpdateManyWithoutOrder_itemNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput> | Prisma.OrderItemSelectionCreateWithoutOrder_itemInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput[];
    upsert?: Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOrder_itemInput | Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOrder_itemInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOrder_itemInputEnvelope;
    set?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    disconnect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    delete?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    update?: Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOrder_itemInput | Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOrder_itemInput[];
    updateMany?: Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOrder_itemInput | Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOrder_itemInput[];
    deleteMany?: Prisma.OrderItemSelectionScalarWhereInput | Prisma.OrderItemSelectionScalarWhereInput[];
};
export type OrderItemSelectionUncheckedUpdateManyWithoutOrder_itemNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput> | Prisma.OrderItemSelectionCreateWithoutOrder_itemInput[] | Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput[];
    connectOrCreate?: Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput | Prisma.OrderItemSelectionCreateOrConnectWithoutOrder_itemInput[];
    upsert?: Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOrder_itemInput | Prisma.OrderItemSelectionUpsertWithWhereUniqueWithoutOrder_itemInput[];
    createMany?: Prisma.OrderItemSelectionCreateManyOrder_itemInputEnvelope;
    set?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    disconnect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    delete?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    connect?: Prisma.OrderItemSelectionWhereUniqueInput | Prisma.OrderItemSelectionWhereUniqueInput[];
    update?: Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOrder_itemInput | Prisma.OrderItemSelectionUpdateWithWhereUniqueWithoutOrder_itemInput[];
    updateMany?: Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOrder_itemInput | Prisma.OrderItemSelectionUpdateManyWithWhereWithoutOrder_itemInput[];
    deleteMany?: Prisma.OrderItemSelectionScalarWhereInput | Prisma.OrderItemSelectionScalarWhereInput[];
};
export type OrderItemSelectionCreateWithoutOption_valueInput = {
    id?: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_item: Prisma.OrderItemCreateNestedOneWithoutSelectionsInput;
};
export type OrderItemSelectionUncheckedCreateWithoutOption_valueInput = {
    id?: string;
    order_item_id: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionCreateOrConnectWithoutOption_valueInput = {
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput>;
};
export type OrderItemSelectionCreateManyOption_valueInputEnvelope = {
    data: Prisma.OrderItemSelectionCreateManyOption_valueInput | Prisma.OrderItemSelectionCreateManyOption_valueInput[];
    skipDuplicates?: boolean;
};
export type OrderItemSelectionUpsertWithWhereUniqueWithoutOption_valueInput = {
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemSelectionUpdateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedUpdateWithoutOption_valueInput>;
    create: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOption_valueInput>;
};
export type OrderItemSelectionUpdateWithWhereUniqueWithoutOption_valueInput = {
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateWithoutOption_valueInput, Prisma.OrderItemSelectionUncheckedUpdateWithoutOption_valueInput>;
};
export type OrderItemSelectionUpdateManyWithWhereWithoutOption_valueInput = {
    where: Prisma.OrderItemSelectionScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateManyMutationInput, Prisma.OrderItemSelectionUncheckedUpdateManyWithoutOption_valueInput>;
};
export type OrderItemSelectionScalarWhereInput = {
    AND?: Prisma.OrderItemSelectionScalarWhereInput | Prisma.OrderItemSelectionScalarWhereInput[];
    OR?: Prisma.OrderItemSelectionScalarWhereInput[];
    NOT?: Prisma.OrderItemSelectionScalarWhereInput | Prisma.OrderItemSelectionScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    order_item_id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    option_value_id?: Prisma.StringFilter<"OrderItemSelection"> | string;
    extra_price?: Prisma.DecimalFilter<"OrderItemSelection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionCreateWithoutOrder_itemInput = {
    id?: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    option_value: Prisma.MenuItemOptionValueCreateNestedOneWithoutSelectionsInput;
};
export type OrderItemSelectionUncheckedCreateWithoutOrder_itemInput = {
    id?: string;
    option_value_id: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionCreateOrConnectWithoutOrder_itemInput = {
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput>;
};
export type OrderItemSelectionCreateManyOrder_itemInputEnvelope = {
    data: Prisma.OrderItemSelectionCreateManyOrder_itemInput | Prisma.OrderItemSelectionCreateManyOrder_itemInput[];
    skipDuplicates?: boolean;
};
export type OrderItemSelectionUpsertWithWhereUniqueWithoutOrder_itemInput = {
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemSelectionUpdateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedUpdateWithoutOrder_itemInput>;
    create: Prisma.XOR<Prisma.OrderItemSelectionCreateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedCreateWithoutOrder_itemInput>;
};
export type OrderItemSelectionUpdateWithWhereUniqueWithoutOrder_itemInput = {
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateWithoutOrder_itemInput, Prisma.OrderItemSelectionUncheckedUpdateWithoutOrder_itemInput>;
};
export type OrderItemSelectionUpdateManyWithWhereWithoutOrder_itemInput = {
    where: Prisma.OrderItemSelectionScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateManyMutationInput, Prisma.OrderItemSelectionUncheckedUpdateManyWithoutOrder_itemInput>;
};
export type OrderItemSelectionCreateManyOption_valueInput = {
    id?: string;
    order_item_id: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUpdateWithoutOption_valueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_item?: Prisma.OrderItemUpdateOneRequiredWithoutSelectionsNestedInput;
};
export type OrderItemSelectionUncheckedUpdateWithoutOption_valueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUncheckedUpdateManyWithoutOption_valueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionCreateManyOrder_itemInput = {
    id?: string;
    option_value_id: string;
    extra_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUpdateWithoutOrder_itemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    option_value?: Prisma.MenuItemOptionValueUpdateOneRequiredWithoutSelectionsNestedInput;
};
export type OrderItemSelectionUncheckedUpdateWithoutOrder_itemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_value_id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionUncheckedUpdateManyWithoutOrder_itemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    option_value_id?: Prisma.StringFieldUpdateOperationsInput | string;
    extra_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemSelectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_item_id?: boolean;
    option_value_id?: boolean;
    extra_price?: boolean;
    order_item?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
    option_value?: boolean | Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderItemSelection"]>;
export type OrderItemSelectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_item_id?: boolean;
    option_value_id?: boolean;
    extra_price?: boolean;
    order_item?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
    option_value?: boolean | Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderItemSelection"]>;
export type OrderItemSelectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_item_id?: boolean;
    option_value_id?: boolean;
    extra_price?: boolean;
    order_item?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
    option_value?: boolean | Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderItemSelection"]>;
export type OrderItemSelectionSelectScalar = {
    id?: boolean;
    order_item_id?: boolean;
    option_value_id?: boolean;
    extra_price?: boolean;
};
export type OrderItemSelectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_item_id" | "option_value_id" | "extra_price", ExtArgs["result"]["orderItemSelection"]>;
export type OrderItemSelectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_item?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
    option_value?: boolean | Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>;
};
export type OrderItemSelectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_item?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
    option_value?: boolean | Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>;
};
export type OrderItemSelectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_item?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
    option_value?: boolean | Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>;
};
export type $OrderItemSelectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderItemSelection";
    objects: {
        order_item: Prisma.$OrderItemPayload<ExtArgs>;
        option_value: Prisma.$MenuItemOptionValuePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        order_item_id: string;
        option_value_id: string;
        extra_price: runtime.Decimal;
    }, ExtArgs["result"]["orderItemSelection"]>;
    composites: {};
};
export type OrderItemSelectionGetPayload<S extends boolean | null | undefined | OrderItemSelectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload, S>;
export type OrderItemSelectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderItemSelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderItemSelectionCountAggregateInputType | true;
};
export interface OrderItemSelectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderItemSelection'];
        meta: {
            name: 'OrderItemSelection';
        };
    };
    /**
     * Find zero or one OrderItemSelection that matches the filter.
     * @param {OrderItemSelectionFindUniqueArgs} args - Arguments to find a OrderItemSelection
     * @example
     * // Get one OrderItemSelection
     * const orderItemSelection = await prisma.orderItemSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemSelectionFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OrderItemSelection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemSelectionFindUniqueOrThrowArgs} args - Arguments to find a OrderItemSelection
     * @example
     * // Get one OrderItemSelection
     * const orderItemSelection = await prisma.orderItemSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemSelectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrderItemSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionFindFirstArgs} args - Arguments to find a OrderItemSelection
     * @example
     * // Get one OrderItemSelection
     * const orderItemSelection = await prisma.orderItemSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemSelectionFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderItemSelectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrderItemSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionFindFirstOrThrowArgs} args - Arguments to find a OrderItemSelection
     * @example
     * // Get one OrderItemSelection
     * const orderItemSelection = await prisma.orderItemSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemSelectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderItemSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OrderItemSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItemSelections
     * const orderItemSelections = await prisma.orderItemSelection.findMany()
     *
     * // Get first 10 OrderItemSelections
     * const orderItemSelections = await prisma.orderItemSelection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderItemSelectionWithIdOnly = await prisma.orderItemSelection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderItemSelectionFindManyArgs>(args?: Prisma.SelectSubset<T, OrderItemSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OrderItemSelection.
     * @param {OrderItemSelectionCreateArgs} args - Arguments to create a OrderItemSelection.
     * @example
     * // Create one OrderItemSelection
     * const OrderItemSelection = await prisma.orderItemSelection.create({
     *   data: {
     *     // ... data to create a OrderItemSelection
     *   }
     * })
     *
     */
    create<T extends OrderItemSelectionCreateArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionCreateArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OrderItemSelections.
     * @param {OrderItemSelectionCreateManyArgs} args - Arguments to create many OrderItemSelections.
     * @example
     * // Create many OrderItemSelections
     * const orderItemSelection = await prisma.orderItemSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderItemSelectionCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderItemSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many OrderItemSelections and returns the data saved in the database.
     * @param {OrderItemSelectionCreateManyAndReturnArgs} args - Arguments to create many OrderItemSelections.
     * @example
     * // Create many OrderItemSelections
     * const orderItemSelection = await prisma.orderItemSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrderItemSelections and only return the `id`
     * const orderItemSelectionWithIdOnly = await prisma.orderItemSelection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderItemSelectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderItemSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a OrderItemSelection.
     * @param {OrderItemSelectionDeleteArgs} args - Arguments to delete one OrderItemSelection.
     * @example
     * // Delete one OrderItemSelection
     * const OrderItemSelection = await prisma.orderItemSelection.delete({
     *   where: {
     *     // ... filter to delete one OrderItemSelection
     *   }
     * })
     *
     */
    delete<T extends OrderItemSelectionDeleteArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OrderItemSelection.
     * @param {OrderItemSelectionUpdateArgs} args - Arguments to update one OrderItemSelection.
     * @example
     * // Update one OrderItemSelection
     * const orderItemSelection = await prisma.orderItemSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderItemSelectionUpdateArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OrderItemSelections.
     * @param {OrderItemSelectionDeleteManyArgs} args - Arguments to filter OrderItemSelections to delete.
     * @example
     * // Delete a few OrderItemSelections
     * const { count } = await prisma.orderItemSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderItemSelectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderItemSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrderItemSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItemSelections
     * const orderItemSelection = await prisma.orderItemSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderItemSelectionUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrderItemSelections and returns the data updated in the database.
     * @param {OrderItemSelectionUpdateManyAndReturnArgs} args - Arguments to update many OrderItemSelections.
     * @example
     * // Update many OrderItemSelections
     * const orderItemSelection = await prisma.orderItemSelection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OrderItemSelections and only return the `id`
     * const orderItemSelectionWithIdOnly = await prisma.orderItemSelection.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemSelectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one OrderItemSelection.
     * @param {OrderItemSelectionUpsertArgs} args - Arguments to update or create a OrderItemSelection.
     * @example
     * // Update or create a OrderItemSelection
     * const orderItemSelection = await prisma.orderItemSelection.upsert({
     *   create: {
     *     // ... data to create a OrderItemSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItemSelection we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemSelectionUpsertArgs>(args: Prisma.SelectSubset<T, OrderItemSelectionUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderItemSelectionClient<runtime.Types.Result.GetResult<Prisma.$OrderItemSelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OrderItemSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionCountArgs} args - Arguments to filter OrderItemSelections to count.
     * @example
     * // Count the number of OrderItemSelections
     * const count = await prisma.orderItemSelection.count({
     *   where: {
     *     // ... the filter for the OrderItemSelections we want to count
     *   }
     * })
    **/
    count<T extends OrderItemSelectionCountArgs>(args?: Prisma.Subset<T, OrderItemSelectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderItemSelectionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OrderItemSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemSelectionAggregateArgs>(args: Prisma.Subset<T, OrderItemSelectionAggregateArgs>): Prisma.PrismaPromise<GetOrderItemSelectionAggregateType<T>>;
    /**
     * Group by OrderItemSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSelectionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OrderItemSelectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderItemSelectionGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderItemSelectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderItemSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderItemSelection model
     */
    readonly fields: OrderItemSelectionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OrderItemSelection.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrderItemSelectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_item<T extends Prisma.OrderItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItemDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    option_value<T extends Prisma.MenuItemOptionValueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItemOptionValueDefaultArgs<ExtArgs>>): Prisma.Prisma__MenuItemOptionValueClient<runtime.Types.Result.GetResult<Prisma.$MenuItemOptionValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the OrderItemSelection model
 */
export interface OrderItemSelectionFieldRefs {
    readonly id: Prisma.FieldRef<"OrderItemSelection", 'String'>;
    readonly order_item_id: Prisma.FieldRef<"OrderItemSelection", 'String'>;
    readonly option_value_id: Prisma.FieldRef<"OrderItemSelection", 'String'>;
    readonly extra_price: Prisma.FieldRef<"OrderItemSelection", 'Decimal'>;
}
/**
 * OrderItemSelection findUnique
 */
export type OrderItemSelectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderItemSelection to fetch.
     */
    where: Prisma.OrderItemSelectionWhereUniqueInput;
};
/**
 * OrderItemSelection findUniqueOrThrow
 */
export type OrderItemSelectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderItemSelection to fetch.
     */
    where: Prisma.OrderItemSelectionWhereUniqueInput;
};
/**
 * OrderItemSelection findFirst
 */
export type OrderItemSelectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderItemSelection to fetch.
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItemSelections to fetch.
     */
    orderBy?: Prisma.OrderItemSelectionOrderByWithRelationInput | Prisma.OrderItemSelectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItemSelections.
     */
    cursor?: Prisma.OrderItemSelectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItemSelections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItemSelections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItemSelections.
     */
    distinct?: Prisma.OrderItemSelectionScalarFieldEnum | Prisma.OrderItemSelectionScalarFieldEnum[];
};
/**
 * OrderItemSelection findFirstOrThrow
 */
export type OrderItemSelectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderItemSelection to fetch.
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItemSelections to fetch.
     */
    orderBy?: Prisma.OrderItemSelectionOrderByWithRelationInput | Prisma.OrderItemSelectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItemSelections.
     */
    cursor?: Prisma.OrderItemSelectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItemSelections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItemSelections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItemSelections.
     */
    distinct?: Prisma.OrderItemSelectionScalarFieldEnum | Prisma.OrderItemSelectionScalarFieldEnum[];
};
/**
 * OrderItemSelection findMany
 */
export type OrderItemSelectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which OrderItemSelections to fetch.
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItemSelections to fetch.
     */
    orderBy?: Prisma.OrderItemSelectionOrderByWithRelationInput | Prisma.OrderItemSelectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderItemSelections.
     */
    cursor?: Prisma.OrderItemSelectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItemSelections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItemSelections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItemSelections.
     */
    distinct?: Prisma.OrderItemSelectionScalarFieldEnum | Prisma.OrderItemSelectionScalarFieldEnum[];
};
/**
 * OrderItemSelection create
 */
export type OrderItemSelectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a OrderItemSelection.
     */
    data: Prisma.XOR<Prisma.OrderItemSelectionCreateInput, Prisma.OrderItemSelectionUncheckedCreateInput>;
};
/**
 * OrderItemSelection createMany
 */
export type OrderItemSelectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItemSelections.
     */
    data: Prisma.OrderItemSelectionCreateManyInput | Prisma.OrderItemSelectionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OrderItemSelection createManyAndReturn
 */
export type OrderItemSelectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSelection
     */
    select?: Prisma.OrderItemSelectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItemSelection
     */
    omit?: Prisma.OrderItemSelectionOmit<ExtArgs> | null;
    /**
     * The data used to create many OrderItemSelections.
     */
    data: Prisma.OrderItemSelectionCreateManyInput | Prisma.OrderItemSelectionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemSelectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * OrderItemSelection update
 */
export type OrderItemSelectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a OrderItemSelection.
     */
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateInput, Prisma.OrderItemSelectionUncheckedUpdateInput>;
    /**
     * Choose, which OrderItemSelection to update.
     */
    where: Prisma.OrderItemSelectionWhereUniqueInput;
};
/**
 * OrderItemSelection updateMany
 */
export type OrderItemSelectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItemSelections.
     */
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateManyMutationInput, Prisma.OrderItemSelectionUncheckedUpdateManyInput>;
    /**
     * Filter which OrderItemSelections to update
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * Limit how many OrderItemSelections to update.
     */
    limit?: number;
};
/**
 * OrderItemSelection updateManyAndReturn
 */
export type OrderItemSelectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSelection
     */
    select?: Prisma.OrderItemSelectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItemSelection
     */
    omit?: Prisma.OrderItemSelectionOmit<ExtArgs> | null;
    /**
     * The data used to update OrderItemSelections.
     */
    data: Prisma.XOR<Prisma.OrderItemSelectionUpdateManyMutationInput, Prisma.OrderItemSelectionUncheckedUpdateManyInput>;
    /**
     * Filter which OrderItemSelections to update
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * Limit how many OrderItemSelections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemSelectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * OrderItemSelection upsert
 */
export type OrderItemSelectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the OrderItemSelection to update in case it exists.
     */
    where: Prisma.OrderItemSelectionWhereUniqueInput;
    /**
     * In case the OrderItemSelection found by the `where` argument doesn't exist, create a new OrderItemSelection with this data.
     */
    create: Prisma.XOR<Prisma.OrderItemSelectionCreateInput, Prisma.OrderItemSelectionUncheckedCreateInput>;
    /**
     * In case the OrderItemSelection was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrderItemSelectionUpdateInput, Prisma.OrderItemSelectionUncheckedUpdateInput>;
};
/**
 * OrderItemSelection delete
 */
export type OrderItemSelectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which OrderItemSelection to delete.
     */
    where: Prisma.OrderItemSelectionWhereUniqueInput;
};
/**
 * OrderItemSelection deleteMany
 */
export type OrderItemSelectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemSelections to delete
     */
    where?: Prisma.OrderItemSelectionWhereInput;
    /**
     * Limit how many OrderItemSelections to delete.
     */
    limit?: number;
};
/**
 * OrderItemSelection without action
 */
export type OrderItemSelectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=OrderItemSelection.d.ts.map