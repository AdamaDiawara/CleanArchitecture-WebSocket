import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Order
 *
 */
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    delivery_fee: runtime.Decimal | null;
    taxes: runtime.Decimal | null;
    tip_amount: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type OrderSumAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    delivery_fee: runtime.Decimal | null;
    taxes: runtime.Decimal | null;
    tip_amount: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    restaurant_id: string | null;
    driver_id: string | null;
    delivery_address_id: string | null;
    promo_code_id: string | null;
    payment_method_id: string | null;
    status: $Enums.OrderStatus | null;
    subtotal: runtime.Decimal | null;
    delivery_fee: runtime.Decimal | null;
    taxes: runtime.Decimal | null;
    tip_amount: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estimated_delivery_at: Date | null;
    delivered_at: Date | null;
    created_at: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    restaurant_id: string | null;
    driver_id: string | null;
    delivery_address_id: string | null;
    promo_code_id: string | null;
    payment_method_id: string | null;
    status: $Enums.OrderStatus | null;
    subtotal: runtime.Decimal | null;
    delivery_fee: runtime.Decimal | null;
    taxes: runtime.Decimal | null;
    tip_amount: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estimated_delivery_at: Date | null;
    delivered_at: Date | null;
    created_at: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    user_id: number;
    restaurant_id: number;
    driver_id: number;
    delivery_address_id: number;
    promo_code_id: number;
    payment_method_id: number;
    status: number;
    subtotal: number;
    delivery_fee: number;
    taxes: number;
    tip_amount: number;
    total: number;
    estimated_delivery_at: number;
    delivered_at: number;
    created_at: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    subtotal?: true;
    delivery_fee?: true;
    taxes?: true;
    tip_amount?: true;
    total?: true;
};
export type OrderSumAggregateInputType = {
    subtotal?: true;
    delivery_fee?: true;
    taxes?: true;
    tip_amount?: true;
    total?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    user_id?: true;
    restaurant_id?: true;
    driver_id?: true;
    delivery_address_id?: true;
    promo_code_id?: true;
    payment_method_id?: true;
    status?: true;
    subtotal?: true;
    delivery_fee?: true;
    taxes?: true;
    tip_amount?: true;
    total?: true;
    estimated_delivery_at?: true;
    delivered_at?: true;
    created_at?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    restaurant_id?: true;
    driver_id?: true;
    delivery_address_id?: true;
    promo_code_id?: true;
    payment_method_id?: true;
    status?: true;
    subtotal?: true;
    delivery_fee?: true;
    taxes?: true;
    tip_amount?: true;
    total?: true;
    estimated_delivery_at?: true;
    delivered_at?: true;
    created_at?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    user_id?: true;
    restaurant_id?: true;
    driver_id?: true;
    delivery_address_id?: true;
    promo_code_id?: true;
    payment_method_id?: true;
    status?: true;
    subtotal?: true;
    delivery_fee?: true;
    taxes?: true;
    tip_amount?: true;
    total?: true;
    estimated_delivery_at?: true;
    delivered_at?: true;
    created_at?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    user_id: string;
    restaurant_id: string;
    driver_id: string | null;
    delivery_address_id: string;
    promo_code_id: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal;
    delivery_fee: runtime.Decimal;
    taxes: runtime.Decimal;
    tip_amount: runtime.Decimal;
    total: runtime.Decimal;
    estimated_delivery_at: Date;
    delivered_at: Date | null;
    created_at: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    user_id?: Prisma.StringFilter<"Order"> | string;
    restaurant_id?: Prisma.StringFilter<"Order"> | string;
    driver_id?: Prisma.StringNullableFilter<"Order"> | string | null;
    delivery_address_id?: Prisma.StringFilter<"Order"> | string;
    promo_code_id?: Prisma.StringNullableFilter<"Order"> | string | null;
    payment_method_id?: Prisma.StringFilter<"Order"> | string;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    delivered_at?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    delivery_address?: Prisma.XOR<Prisma.UserAddressScalarRelationFilter, Prisma.UserAddressWhereInput>;
    promo_code?: Prisma.XOR<Prisma.PromoCodeNullableScalarRelationFilter, Prisma.PromoCodeWhereInput> | null;
    payment_method?: Prisma.XOR<Prisma.PaymentMethodScalarRelationFilter, Prisma.PaymentMethodWhereInput>;
    order_items?: Prisma.OrderItemListRelationFilter;
    status_history?: Prisma.OrderStatusHistoryListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    driver_earnings?: Prisma.DriverEarningListRelationFilter;
    support_tickets?: Prisma.SupportTicketListRelationFilter;
    loyalty_points?: Prisma.LoyaltyPointListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    restaurant_id?: Prisma.SortOrder;
    driver_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivery_address_id?: Prisma.SortOrder;
    promo_code_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estimated_delivery_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    restaurant?: Prisma.RestaurantOrderByWithRelationInput;
    driver?: Prisma.DriverOrderByWithRelationInput;
    delivery_address?: Prisma.UserAddressOrderByWithRelationInput;
    promo_code?: Prisma.PromoCodeOrderByWithRelationInput;
    payment_method?: Prisma.PaymentMethodOrderByWithRelationInput;
    order_items?: Prisma.OrderItemOrderByRelationAggregateInput;
    status_history?: Prisma.OrderStatusHistoryOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    driver_earnings?: Prisma.DriverEarningOrderByRelationAggregateInput;
    support_tickets?: Prisma.SupportTicketOrderByRelationAggregateInput;
    loyalty_points?: Prisma.LoyaltyPointOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    user_id?: Prisma.StringFilter<"Order"> | string;
    restaurant_id?: Prisma.StringFilter<"Order"> | string;
    driver_id?: Prisma.StringNullableFilter<"Order"> | string | null;
    delivery_address_id?: Prisma.StringFilter<"Order"> | string;
    promo_code_id?: Prisma.StringNullableFilter<"Order"> | string | null;
    payment_method_id?: Prisma.StringFilter<"Order"> | string;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    delivered_at?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    restaurant?: Prisma.XOR<Prisma.RestaurantScalarRelationFilter, Prisma.RestaurantWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    delivery_address?: Prisma.XOR<Prisma.UserAddressScalarRelationFilter, Prisma.UserAddressWhereInput>;
    promo_code?: Prisma.XOR<Prisma.PromoCodeNullableScalarRelationFilter, Prisma.PromoCodeWhereInput> | null;
    payment_method?: Prisma.XOR<Prisma.PaymentMethodScalarRelationFilter, Prisma.PaymentMethodWhereInput>;
    order_items?: Prisma.OrderItemListRelationFilter;
    status_history?: Prisma.OrderStatusHistoryListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    driver_earnings?: Prisma.DriverEarningListRelationFilter;
    support_tickets?: Prisma.SupportTicketListRelationFilter;
    loyalty_points?: Prisma.LoyaltyPointListRelationFilter;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    restaurant_id?: Prisma.SortOrder;
    driver_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivery_address_id?: Prisma.SortOrder;
    promo_code_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estimated_delivery_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    restaurant_id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    driver_id?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    delivery_address_id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    promo_code_id?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    payment_method_id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    delivered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    restaurant_id?: Prisma.SortOrder;
    driver_id?: Prisma.SortOrder;
    delivery_address_id?: Prisma.SortOrder;
    promo_code_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estimated_delivery_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    restaurant_id?: Prisma.SortOrder;
    driver_id?: Prisma.SortOrder;
    delivery_address_id?: Prisma.SortOrder;
    promo_code_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estimated_delivery_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    restaurant_id?: Prisma.SortOrder;
    driver_id?: Prisma.SortOrder;
    delivery_address_id?: Prisma.SortOrder;
    promo_code_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estimated_delivery_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    delivery_fee?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    tip_amount?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDriverInput, Prisma.OrderUncheckedCreateWithoutDriverInput> | Prisma.OrderCreateWithoutDriverInput[] | Prisma.OrderUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDriverInput | Prisma.OrderCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.OrderCreateManyDriverInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDriverInput, Prisma.OrderUncheckedCreateWithoutDriverInput> | Prisma.OrderCreateWithoutDriverInput[] | Prisma.OrderUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDriverInput | Prisma.OrderCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.OrderCreateManyDriverInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDriverInput, Prisma.OrderUncheckedCreateWithoutDriverInput> | Prisma.OrderCreateWithoutDriverInput[] | Prisma.OrderUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDriverInput | Prisma.OrderCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutDriverInput | Prisma.OrderUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.OrderCreateManyDriverInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutDriverInput | Prisma.OrderUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutDriverInput | Prisma.OrderUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDriverInput, Prisma.OrderUncheckedCreateWithoutDriverInput> | Prisma.OrderCreateWithoutDriverInput[] | Prisma.OrderUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDriverInput | Prisma.OrderCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutDriverInput | Prisma.OrderUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.OrderCreateManyDriverInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutDriverInput | Prisma.OrderUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutDriverInput | Prisma.OrderUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedOneWithoutDriver_earningsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDriver_earningsInput, Prisma.OrderUncheckedCreateWithoutDriver_earningsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDriver_earningsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutDriver_earningsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDriver_earningsInput, Prisma.OrderUncheckedCreateWithoutDriver_earningsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDriver_earningsInput;
    upsert?: Prisma.OrderUpsertWithoutDriver_earningsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutDriver_earningsInput, Prisma.OrderUpdateWithoutDriver_earningsInput>, Prisma.OrderUncheckedUpdateWithoutDriver_earningsInput>;
};
export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput | Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput> | Prisma.OrderCreateWithoutRestaurantInput[] | Prisma.OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutRestaurantInput | Prisma.OrderCreateOrConnectWithoutRestaurantInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: Prisma.OrderCreateManyRestaurantInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput | Prisma.OrderUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput | Prisma.OrderUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedOneWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSupport_ticketsInput, Prisma.OrderUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSupport_ticketsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSupport_ticketsInput, Prisma.OrderUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSupport_ticketsInput;
    upsert?: Prisma.OrderUpsertWithoutSupport_ticketsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutSupport_ticketsInput, Prisma.OrderUpdateWithoutSupport_ticketsInput>, Prisma.OrderUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type OrderCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.OrderUpsertWithoutOrder_itemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.OrderUpdateWithoutOrder_itemsInput>, Prisma.OrderUncheckedUpdateWithoutOrder_itemsInput>;
};
export type OrderCreateNestedOneWithoutStatus_historyInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutStatus_historyInput, Prisma.OrderUncheckedCreateWithoutStatus_historyInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutStatus_historyInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutStatus_historyNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutStatus_historyInput, Prisma.OrderUncheckedCreateWithoutStatus_historyInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutStatus_historyInput;
    upsert?: Prisma.OrderUpsertWithoutStatus_historyInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutStatus_historyInput, Prisma.OrderUpdateWithoutStatus_historyInput>, Prisma.OrderUncheckedUpdateWithoutStatus_historyInput>;
};
export type OrderCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutReviewsInput, Prisma.OrderUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutReviewsInput, Prisma.OrderUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.OrderUpsertWithoutReviewsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutReviewsInput, Prisma.OrderUpdateWithoutReviewsInput>, Prisma.OrderUncheckedUpdateWithoutReviewsInput>;
};
export type OrderCreateNestedManyWithoutPromo_codeInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPromo_codeInput, Prisma.OrderUncheckedCreateWithoutPromo_codeInput> | Prisma.OrderCreateWithoutPromo_codeInput[] | Prisma.OrderUncheckedCreateWithoutPromo_codeInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPromo_codeInput | Prisma.OrderCreateOrConnectWithoutPromo_codeInput[];
    createMany?: Prisma.OrderCreateManyPromo_codeInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutPromo_codeInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPromo_codeInput, Prisma.OrderUncheckedCreateWithoutPromo_codeInput> | Prisma.OrderCreateWithoutPromo_codeInput[] | Prisma.OrderUncheckedCreateWithoutPromo_codeInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPromo_codeInput | Prisma.OrderCreateOrConnectWithoutPromo_codeInput[];
    createMany?: Prisma.OrderCreateManyPromo_codeInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutPromo_codeNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPromo_codeInput, Prisma.OrderUncheckedCreateWithoutPromo_codeInput> | Prisma.OrderCreateWithoutPromo_codeInput[] | Prisma.OrderUncheckedCreateWithoutPromo_codeInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPromo_codeInput | Prisma.OrderCreateOrConnectWithoutPromo_codeInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPromo_codeInput | Prisma.OrderUpsertWithWhereUniqueWithoutPromo_codeInput[];
    createMany?: Prisma.OrderCreateManyPromo_codeInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPromo_codeInput | Prisma.OrderUpdateWithWhereUniqueWithoutPromo_codeInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPromo_codeInput | Prisma.OrderUpdateManyWithWhereWithoutPromo_codeInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutPromo_codeNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPromo_codeInput, Prisma.OrderUncheckedCreateWithoutPromo_codeInput> | Prisma.OrderCreateWithoutPromo_codeInput[] | Prisma.OrderUncheckedCreateWithoutPromo_codeInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPromo_codeInput | Prisma.OrderCreateOrConnectWithoutPromo_codeInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPromo_codeInput | Prisma.OrderUpsertWithWhereUniqueWithoutPromo_codeInput[];
    createMany?: Prisma.OrderCreateManyPromo_codeInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPromo_codeInput | Prisma.OrderUpdateWithWhereUniqueWithoutPromo_codeInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPromo_codeInput | Prisma.OrderUpdateManyWithWhereWithoutPromo_codeInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedOneWithoutLoyalty_pointsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutLoyalty_pointsInput, Prisma.OrderUncheckedCreateWithoutLoyalty_pointsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutLoyalty_pointsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutLoyalty_pointsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutLoyalty_pointsInput, Prisma.OrderUncheckedCreateWithoutLoyalty_pointsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutLoyalty_pointsInput;
    upsert?: Prisma.OrderUpsertWithoutLoyalty_pointsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutLoyalty_pointsInput, Prisma.OrderUpdateWithoutLoyalty_pointsInput>, Prisma.OrderUncheckedUpdateWithoutLoyalty_pointsInput>;
};
export type OrderCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutDelivery_addressInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDelivery_addressInput, Prisma.OrderUncheckedCreateWithoutDelivery_addressInput> | Prisma.OrderCreateWithoutDelivery_addressInput[] | Prisma.OrderUncheckedCreateWithoutDelivery_addressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDelivery_addressInput | Prisma.OrderCreateOrConnectWithoutDelivery_addressInput[];
    createMany?: Prisma.OrderCreateManyDelivery_addressInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutDelivery_addressInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDelivery_addressInput, Prisma.OrderUncheckedCreateWithoutDelivery_addressInput> | Prisma.OrderCreateWithoutDelivery_addressInput[] | Prisma.OrderUncheckedCreateWithoutDelivery_addressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDelivery_addressInput | Prisma.OrderCreateOrConnectWithoutDelivery_addressInput[];
    createMany?: Prisma.OrderCreateManyDelivery_addressInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutDelivery_addressNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDelivery_addressInput, Prisma.OrderUncheckedCreateWithoutDelivery_addressInput> | Prisma.OrderCreateWithoutDelivery_addressInput[] | Prisma.OrderUncheckedCreateWithoutDelivery_addressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDelivery_addressInput | Prisma.OrderCreateOrConnectWithoutDelivery_addressInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutDelivery_addressInput | Prisma.OrderUpsertWithWhereUniqueWithoutDelivery_addressInput[];
    createMany?: Prisma.OrderCreateManyDelivery_addressInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutDelivery_addressInput | Prisma.OrderUpdateWithWhereUniqueWithoutDelivery_addressInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutDelivery_addressInput | Prisma.OrderUpdateManyWithWhereWithoutDelivery_addressInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutDelivery_addressNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutDelivery_addressInput, Prisma.OrderUncheckedCreateWithoutDelivery_addressInput> | Prisma.OrderCreateWithoutDelivery_addressInput[] | Prisma.OrderUncheckedCreateWithoutDelivery_addressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutDelivery_addressInput | Prisma.OrderCreateOrConnectWithoutDelivery_addressInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutDelivery_addressInput | Prisma.OrderUpsertWithWhereUniqueWithoutDelivery_addressInput[];
    createMany?: Prisma.OrderCreateManyDelivery_addressInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutDelivery_addressInput | Prisma.OrderUpdateWithWhereUniqueWithoutDelivery_addressInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutDelivery_addressInput | Prisma.OrderUpdateManyWithWhereWithoutDelivery_addressInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutPayment_methodInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPayment_methodInput, Prisma.OrderUncheckedCreateWithoutPayment_methodInput> | Prisma.OrderCreateWithoutPayment_methodInput[] | Prisma.OrderUncheckedCreateWithoutPayment_methodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPayment_methodInput | Prisma.OrderCreateOrConnectWithoutPayment_methodInput[];
    createMany?: Prisma.OrderCreateManyPayment_methodInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutPayment_methodInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPayment_methodInput, Prisma.OrderUncheckedCreateWithoutPayment_methodInput> | Prisma.OrderCreateWithoutPayment_methodInput[] | Prisma.OrderUncheckedCreateWithoutPayment_methodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPayment_methodInput | Prisma.OrderCreateOrConnectWithoutPayment_methodInput[];
    createMany?: Prisma.OrderCreateManyPayment_methodInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutPayment_methodNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPayment_methodInput, Prisma.OrderUncheckedCreateWithoutPayment_methodInput> | Prisma.OrderCreateWithoutPayment_methodInput[] | Prisma.OrderUncheckedCreateWithoutPayment_methodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPayment_methodInput | Prisma.OrderCreateOrConnectWithoutPayment_methodInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPayment_methodInput | Prisma.OrderUpsertWithWhereUniqueWithoutPayment_methodInput[];
    createMany?: Prisma.OrderCreateManyPayment_methodInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPayment_methodInput | Prisma.OrderUpdateWithWhereUniqueWithoutPayment_methodInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPayment_methodInput | Prisma.OrderUpdateManyWithWhereWithoutPayment_methodInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutPayment_methodNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPayment_methodInput, Prisma.OrderUncheckedCreateWithoutPayment_methodInput> | Prisma.OrderCreateWithoutPayment_methodInput[] | Prisma.OrderUncheckedCreateWithoutPayment_methodInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPayment_methodInput | Prisma.OrderCreateOrConnectWithoutPayment_methodInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutPayment_methodInput | Prisma.OrderUpsertWithWhereUniqueWithoutPayment_methodInput[];
    createMany?: Prisma.OrderCreateManyPayment_methodInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutPayment_methodInput | Prisma.OrderUpdateWithWhereUniqueWithoutPayment_methodInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutPayment_methodInput | Prisma.OrderUpdateManyWithWhereWithoutPayment_methodInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateWithoutDriverInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutDriverInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutDriverInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDriverInput, Prisma.OrderUncheckedCreateWithoutDriverInput>;
};
export type OrderCreateManyDriverInputEnvelope = {
    data: Prisma.OrderCreateManyDriverInput | Prisma.OrderCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutDriverInput, Prisma.OrderUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDriverInput, Prisma.OrderUncheckedCreateWithoutDriverInput>;
};
export type OrderUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutDriverInput, Prisma.OrderUncheckedUpdateWithoutDriverInput>;
};
export type OrderUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutDriverInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    user_id?: Prisma.StringFilter<"Order"> | string;
    restaurant_id?: Prisma.StringFilter<"Order"> | string;
    driver_id?: Prisma.StringNullableFilter<"Order"> | string | null;
    delivery_address_id?: Prisma.StringFilter<"Order"> | string;
    promo_code_id?: Prisma.StringNullableFilter<"Order"> | string | null;
    payment_method_id?: Prisma.StringFilter<"Order"> | string;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    delivered_at?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderCreateWithoutDriver_earningsInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutDriver_earningsInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutDriver_earningsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDriver_earningsInput, Prisma.OrderUncheckedCreateWithoutDriver_earningsInput>;
};
export type OrderUpsertWithoutDriver_earningsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutDriver_earningsInput, Prisma.OrderUncheckedUpdateWithoutDriver_earningsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDriver_earningsInput, Prisma.OrderUncheckedCreateWithoutDriver_earningsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutDriver_earningsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutDriver_earningsInput, Prisma.OrderUncheckedUpdateWithoutDriver_earningsInput>;
};
export type OrderUpdateWithoutDriver_earningsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutDriver_earningsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutRestaurantInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    user_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput>;
};
export type OrderCreateManyRestaurantInputEnvelope = {
    data: Prisma.OrderCreateManyRestaurantInput | Prisma.OrderCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutRestaurantInput, Prisma.OrderUncheckedUpdateWithoutRestaurantInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutRestaurantInput, Prisma.OrderUncheckedCreateWithoutRestaurantInput>;
};
export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutRestaurantInput, Prisma.OrderUncheckedUpdateWithoutRestaurantInput>;
};
export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutRestaurantInput>;
};
export type OrderCreateWithoutSupport_ticketsInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutSupport_ticketsInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutSupport_ticketsInput, Prisma.OrderUncheckedCreateWithoutSupport_ticketsInput>;
};
export type OrderUpsertWithoutSupport_ticketsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutSupport_ticketsInput, Prisma.OrderUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutSupport_ticketsInput, Prisma.OrderUncheckedCreateWithoutSupport_ticketsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutSupport_ticketsInput, Prisma.OrderUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type OrderUpdateWithoutSupport_ticketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutSupport_ticketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutOrder_itemsInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutOrder_itemsInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
};
export type OrderUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrder_itemsInput, Prisma.OrderUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrder_itemsInput, Prisma.OrderUncheckedUpdateWithoutOrder_itemsInput>;
};
export type OrderUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutStatus_historyInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutStatus_historyInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutStatus_historyInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutStatus_historyInput, Prisma.OrderUncheckedCreateWithoutStatus_historyInput>;
};
export type OrderUpsertWithoutStatus_historyInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutStatus_historyInput, Prisma.OrderUncheckedUpdateWithoutStatus_historyInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutStatus_historyInput, Prisma.OrderUncheckedCreateWithoutStatus_historyInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutStatus_historyInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutStatus_historyInput, Prisma.OrderUncheckedUpdateWithoutStatus_historyInput>;
};
export type OrderUpdateWithoutStatus_historyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutStatus_historyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutReviewsInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutReviewsInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutReviewsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutReviewsInput, Prisma.OrderUncheckedCreateWithoutReviewsInput>;
};
export type OrderUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutReviewsInput, Prisma.OrderUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutReviewsInput, Prisma.OrderUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutReviewsInput, Prisma.OrderUncheckedUpdateWithoutReviewsInput>;
};
export type OrderUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutPromo_codeInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutPromo_codeInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutPromo_codeInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPromo_codeInput, Prisma.OrderUncheckedCreateWithoutPromo_codeInput>;
};
export type OrderCreateManyPromo_codeInputEnvelope = {
    data: Prisma.OrderCreateManyPromo_codeInput | Prisma.OrderCreateManyPromo_codeInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutPromo_codeInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPromo_codeInput, Prisma.OrderUncheckedUpdateWithoutPromo_codeInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPromo_codeInput, Prisma.OrderUncheckedCreateWithoutPromo_codeInput>;
};
export type OrderUpdateWithWhereUniqueWithoutPromo_codeInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPromo_codeInput, Prisma.OrderUncheckedUpdateWithoutPromo_codeInput>;
};
export type OrderUpdateManyWithWhereWithoutPromo_codeInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutPromo_codeInput>;
};
export type OrderCreateWithoutLoyalty_pointsInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutLoyalty_pointsInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutLoyalty_pointsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutLoyalty_pointsInput, Prisma.OrderUncheckedCreateWithoutLoyalty_pointsInput>;
};
export type OrderUpsertWithoutLoyalty_pointsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutLoyalty_pointsInput, Prisma.OrderUncheckedUpdateWithoutLoyalty_pointsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutLoyalty_pointsInput, Prisma.OrderUncheckedCreateWithoutLoyalty_pointsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutLoyalty_pointsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutLoyalty_pointsInput, Prisma.OrderUncheckedUpdateWithoutLoyalty_pointsInput>;
};
export type OrderUpdateWithoutLoyalty_pointsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutLoyalty_pointsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutUserInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutUserInput = {
    id?: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderCreateManyUserInputEnvelope = {
    data: Prisma.OrderCreateManyUserInput | Prisma.OrderCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
};
export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutUserInput>;
};
export type OrderCreateWithoutDelivery_addressInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    payment_method: Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutDelivery_addressInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutDelivery_addressInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDelivery_addressInput, Prisma.OrderUncheckedCreateWithoutDelivery_addressInput>;
};
export type OrderCreateManyDelivery_addressInputEnvelope = {
    data: Prisma.OrderCreateManyDelivery_addressInput | Prisma.OrderCreateManyDelivery_addressInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutDelivery_addressInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutDelivery_addressInput, Prisma.OrderUncheckedUpdateWithoutDelivery_addressInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutDelivery_addressInput, Prisma.OrderUncheckedCreateWithoutDelivery_addressInput>;
};
export type OrderUpdateWithWhereUniqueWithoutDelivery_addressInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutDelivery_addressInput, Prisma.OrderUncheckedUpdateWithoutDelivery_addressInput>;
};
export type OrderUpdateManyWithWhereWithoutDelivery_addressInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutDelivery_addressInput>;
};
export type OrderCreateWithoutPayment_methodInput = {
    id?: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
    restaurant: Prisma.RestaurantCreateNestedOneWithoutOrdersInput;
    driver?: Prisma.DriverCreateNestedOneWithoutOrdersInput;
    delivery_address: Prisma.UserAddressCreateNestedOneWithoutDelivery_ordersInput;
    promo_code?: Prisma.PromoCodeCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutPayment_methodInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutOrderInput;
    driver_earnings?: Prisma.DriverEarningUncheckedCreateNestedManyWithoutOrderInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutOrderInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutPayment_methodInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPayment_methodInput, Prisma.OrderUncheckedCreateWithoutPayment_methodInput>;
};
export type OrderCreateManyPayment_methodInputEnvelope = {
    data: Prisma.OrderCreateManyPayment_methodInput | Prisma.OrderCreateManyPayment_methodInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutPayment_methodInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPayment_methodInput, Prisma.OrderUncheckedUpdateWithoutPayment_methodInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPayment_methodInput, Prisma.OrderUncheckedCreateWithoutPayment_methodInput>;
};
export type OrderUpdateWithWhereUniqueWithoutPayment_methodInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPayment_methodInput, Prisma.OrderUncheckedUpdateWithoutPayment_methodInput>;
};
export type OrderUpdateManyWithWhereWithoutPayment_methodInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutPayment_methodInput>;
};
export type OrderCreateManyDriverInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyRestaurantInput = {
    id?: string;
    user_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateWithoutRestaurantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyPromo_codeInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateWithoutPromo_codeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutPromo_codeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutPromo_codeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyUserInput = {
    id?: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyDelivery_addressInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    promo_code_id?: string | null;
    payment_method_id: string;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateWithoutDelivery_addressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    payment_method?: Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutDelivery_addressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutDelivery_addressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyPayment_methodInput = {
    id?: string;
    user_id: string;
    restaurant_id: string;
    driver_id?: string | null;
    delivery_address_id: string;
    promo_code_id?: string | null;
    status: $Enums.OrderStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at: Date | string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type OrderUpdateWithoutPayment_methodInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    restaurant?: Prisma.RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutOrdersNestedInput;
    delivery_address?: Prisma.UserAddressUpdateOneRequiredWithoutDelivery_ordersNestedInput;
    promo_code?: Prisma.PromoCodeUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutPayment_methodInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    status_history?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutOrderNestedInput;
    driver_earnings?: Prisma.DriverEarningUncheckedUpdateManyWithoutOrderNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutOrderNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutPayment_methodInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    driver_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    delivery_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    promo_code_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxes?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tip_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_delivery_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type OrderCountOutputType
 */
export type OrderCountOutputType = {
    order_items: number;
    status_history: number;
    reviews: number;
    driver_earnings: number;
    support_tickets: number;
    loyalty_points: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | OrderCountOutputTypeCountOrder_itemsArgs;
    status_history?: boolean | OrderCountOutputTypeCountStatus_historyArgs;
    reviews?: boolean | OrderCountOutputTypeCountReviewsArgs;
    driver_earnings?: boolean | OrderCountOutputTypeCountDriver_earningsArgs;
    support_tickets?: boolean | OrderCountOutputTypeCountSupport_ticketsArgs;
    loyalty_points?: boolean | OrderCountOutputTypeCountLoyalty_pointsArgs;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountStatus_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusHistoryWhereInput;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountDriver_earningsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverEarningWhereInput;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
};
/**
 * OrderCountOutputType without action
 */
export type OrderCountOutputTypeCountLoyalty_pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPointWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    restaurant_id?: boolean;
    driver_id?: boolean;
    delivery_address_id?: boolean;
    promo_code_id?: boolean;
    payment_method_id?: boolean;
    status?: boolean;
    subtotal?: boolean;
    delivery_fee?: boolean;
    taxes?: boolean;
    tip_amount?: boolean;
    total?: boolean;
    estimated_delivery_at?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Order$driverArgs<ExtArgs>;
    delivery_address?: boolean | Prisma.UserAddressDefaultArgs<ExtArgs>;
    promo_code?: boolean | Prisma.Order$promo_codeArgs<ExtArgs>;
    payment_method?: boolean | Prisma.PaymentMethodDefaultArgs<ExtArgs>;
    order_items?: boolean | Prisma.Order$order_itemsArgs<ExtArgs>;
    status_history?: boolean | Prisma.Order$status_historyArgs<ExtArgs>;
    reviews?: boolean | Prisma.Order$reviewsArgs<ExtArgs>;
    driver_earnings?: boolean | Prisma.Order$driver_earningsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.Order$support_ticketsArgs<ExtArgs>;
    loyalty_points?: boolean | Prisma.Order$loyalty_pointsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    restaurant_id?: boolean;
    driver_id?: boolean;
    delivery_address_id?: boolean;
    promo_code_id?: boolean;
    payment_method_id?: boolean;
    status?: boolean;
    subtotal?: boolean;
    delivery_fee?: boolean;
    taxes?: boolean;
    tip_amount?: boolean;
    total?: boolean;
    estimated_delivery_at?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Order$driverArgs<ExtArgs>;
    delivery_address?: boolean | Prisma.UserAddressDefaultArgs<ExtArgs>;
    promo_code?: boolean | Prisma.Order$promo_codeArgs<ExtArgs>;
    payment_method?: boolean | Prisma.PaymentMethodDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    restaurant_id?: boolean;
    driver_id?: boolean;
    delivery_address_id?: boolean;
    promo_code_id?: boolean;
    payment_method_id?: boolean;
    status?: boolean;
    subtotal?: boolean;
    delivery_fee?: boolean;
    taxes?: boolean;
    tip_amount?: boolean;
    total?: boolean;
    estimated_delivery_at?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Order$driverArgs<ExtArgs>;
    delivery_address?: boolean | Prisma.UserAddressDefaultArgs<ExtArgs>;
    promo_code?: boolean | Prisma.Order$promo_codeArgs<ExtArgs>;
    payment_method?: boolean | Prisma.PaymentMethodDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    restaurant_id?: boolean;
    driver_id?: boolean;
    delivery_address_id?: boolean;
    promo_code_id?: boolean;
    payment_method_id?: boolean;
    status?: boolean;
    subtotal?: boolean;
    delivery_fee?: boolean;
    taxes?: boolean;
    tip_amount?: boolean;
    total?: boolean;
    estimated_delivery_at?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "restaurant_id" | "driver_id" | "delivery_address_id" | "promo_code_id" | "payment_method_id" | "status" | "subtotal" | "delivery_fee" | "taxes" | "tip_amount" | "total" | "estimated_delivery_at" | "delivered_at" | "created_at", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Order$driverArgs<ExtArgs>;
    delivery_address?: boolean | Prisma.UserAddressDefaultArgs<ExtArgs>;
    promo_code?: boolean | Prisma.Order$promo_codeArgs<ExtArgs>;
    payment_method?: boolean | Prisma.PaymentMethodDefaultArgs<ExtArgs>;
    order_items?: boolean | Prisma.Order$order_itemsArgs<ExtArgs>;
    status_history?: boolean | Prisma.Order$status_historyArgs<ExtArgs>;
    reviews?: boolean | Prisma.Order$reviewsArgs<ExtArgs>;
    driver_earnings?: boolean | Prisma.Order$driver_earningsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.Order$support_ticketsArgs<ExtArgs>;
    loyalty_points?: boolean | Prisma.Order$loyalty_pointsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Order$driverArgs<ExtArgs>;
    delivery_address?: boolean | Prisma.UserAddressDefaultArgs<ExtArgs>;
    promo_code?: boolean | Prisma.Order$promo_codeArgs<ExtArgs>;
    payment_method?: boolean | Prisma.PaymentMethodDefaultArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    restaurant?: boolean | Prisma.RestaurantDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Order$driverArgs<ExtArgs>;
    delivery_address?: boolean | Prisma.UserAddressDefaultArgs<ExtArgs>;
    promo_code?: boolean | Prisma.Order$promo_codeArgs<ExtArgs>;
    payment_method?: boolean | Prisma.PaymentMethodDefaultArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        restaurant: Prisma.$RestaurantPayload<ExtArgs>;
        driver: Prisma.$DriverPayload<ExtArgs> | null;
        delivery_address: Prisma.$UserAddressPayload<ExtArgs>;
        promo_code: Prisma.$PromoCodePayload<ExtArgs> | null;
        payment_method: Prisma.$PaymentMethodPayload<ExtArgs>;
        order_items: Prisma.$OrderItemPayload<ExtArgs>[];
        status_history: Prisma.$OrderStatusHistoryPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        driver_earnings: Prisma.$DriverEarningPayload<ExtArgs>[];
        support_tickets: Prisma.$SupportTicketPayload<ExtArgs>[];
        loyalty_points: Prisma.$LoyaltyPointPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        restaurant_id: string;
        driver_id: string | null;
        delivery_address_id: string;
        promo_code_id: string | null;
        payment_method_id: string;
        status: $Enums.OrderStatus;
        subtotal: runtime.Decimal;
        delivery_fee: runtime.Decimal;
        taxes: runtime.Decimal;
        tip_amount: runtime.Decimal;
        total: runtime.Decimal;
        estimated_delivery_at: Date;
        delivered_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     */
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     */
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Order model
     */
    readonly fields: OrderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Order.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    restaurant<T extends Prisma.RestaurantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RestaurantDefaultArgs<ExtArgs>>): Prisma.Prisma__RestaurantClient<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.Order$driverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$driverArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    delivery_address<T extends Prisma.UserAddressDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserAddressDefaultArgs<ExtArgs>>): Prisma.Prisma__UserAddressClient<runtime.Types.Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    promo_code<T extends Prisma.Order$promo_codeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$promo_codeArgs<ExtArgs>>): Prisma.Prisma__PromoCodeClient<runtime.Types.Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payment_method<T extends Prisma.PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentMethodDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order_items<T extends Prisma.Order$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    status_history<T extends Prisma.Order$status_historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$status_historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Order$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    driver_earnings<T extends Prisma.Order$driver_earningsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$driver_earningsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    support_tickets<T extends Prisma.Order$support_ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    loyalty_points<T extends Prisma.Order$loyalty_pointsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$loyalty_pointsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Order model
 */
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly user_id: Prisma.FieldRef<"Order", 'String'>;
    readonly restaurant_id: Prisma.FieldRef<"Order", 'String'>;
    readonly driver_id: Prisma.FieldRef<"Order", 'String'>;
    readonly delivery_address_id: Prisma.FieldRef<"Order", 'String'>;
    readonly promo_code_id: Prisma.FieldRef<"Order", 'String'>;
    readonly payment_method_id: Prisma.FieldRef<"Order", 'String'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly subtotal: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly delivery_fee: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly taxes: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly tip_amount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly total: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly estimated_delivery_at: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly delivered_at: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Order", 'DateTime'>;
}
/**
 * Order findUnique
 */
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order findUniqueOrThrow
 */
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order findFirst
 */
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Order findFirstOrThrow
 */
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Order findMany
 */
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: Prisma.OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: Prisma.OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Order create
 */
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Order.
     */
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
/**
 * Order createMany
 */
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Order createManyAndReturn
 */
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * The data used to create many Orders.
     */
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Order update
 */
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Order.
     */
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    /**
     * Choose, which Order to update.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order updateMany
 */
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: Prisma.OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
};
/**
 * Order updateManyAndReturn
 */
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * The data used to update Orders.
     */
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: Prisma.OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Order upsert
 */
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: Prisma.OrderWhereUniqueInput;
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
/**
 * Order delete
 */
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    /**
     * Filter which Order to delete.
     */
    where: Prisma.OrderWhereUniqueInput;
};
/**
 * Order deleteMany
 */
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: Prisma.OrderWhereInput;
    /**
     * Limit how many Orders to delete.
     */
    limit?: number;
};
/**
 * Order.driver
 */
export type Order$driverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: Prisma.DriverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Driver
     */
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
};
/**
 * Order.promo_code
 */
export type Order$promo_codeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: Prisma.PromoCodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: Prisma.PromoCodeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PromoCodeInclude<ExtArgs> | null;
    where?: Prisma.PromoCodeWhereInput;
};
/**
 * Order.order_items
 */
export type Order$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
/**
 * Order.status_history
 */
export type Order$status_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusHistory
     */
    select?: Prisma.OrderStatusHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderStatusHistory
     */
    omit?: Prisma.OrderStatusHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.OrderStatusHistoryWhereInput;
    orderBy?: Prisma.OrderStatusHistoryOrderByWithRelationInput | Prisma.OrderStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderStatusHistoryScalarFieldEnum | Prisma.OrderStatusHistoryScalarFieldEnum[];
};
/**
 * Order.reviews
 */
export type Order$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * Order.driver_earnings
 */
export type Order$driver_earningsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverEarning
     */
    select?: Prisma.DriverEarningSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DriverEarning
     */
    omit?: Prisma.DriverEarningOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DriverEarningInclude<ExtArgs> | null;
    where?: Prisma.DriverEarningWhereInput;
    orderBy?: Prisma.DriverEarningOrderByWithRelationInput | Prisma.DriverEarningOrderByWithRelationInput[];
    cursor?: Prisma.DriverEarningWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverEarningScalarFieldEnum | Prisma.DriverEarningScalarFieldEnum[];
};
/**
 * Order.support_tickets
 */
export type Order$support_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
/**
 * Order.loyalty_points
 */
export type Order$loyalty_pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyPoint
     */
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LoyaltyPoint
     */
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyPointWhereInput;
    orderBy?: Prisma.LoyaltyPointOrderByWithRelationInput | Prisma.LoyaltyPointOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyPointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyPointScalarFieldEnum | Prisma.LoyaltyPointScalarFieldEnum[];
};
/**
 * Order without action
 */
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
//# sourceMappingURL=Order.d.ts.map