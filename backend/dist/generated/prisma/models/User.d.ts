import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
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
    phone: string | null;
    name: string | null;
    photo_url: string | null;
    phone_verified: boolean | null;
    created_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    phone: string | null;
    name: string | null;
    photo_url: string | null;
    phone_verified: boolean | null;
    created_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    phone: number;
    name: number;
    photo_url: number;
    preferences: number;
    allergies: number;
    phone_verified: number;
    created_at: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    name?: true;
    photo_url?: true;
    phone_verified?: true;
    created_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    name?: true;
    photo_url?: true;
    phone_verified?: true;
    created_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    name?: true;
    photo_url?: true;
    preferences?: true;
    allergies?: true;
    phone_verified?: true;
    created_at?: true;
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
    phone: string;
    name: string;
    photo_url: string | null;
    preferences: runtime.JsonValue | null;
    allergies: runtime.JsonValue | null;
    phone_verified: boolean;
    created_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    photo_url?: Prisma.StringNullableFilter<"User"> | string | null;
    preferences?: Prisma.JsonNullableFilter<"User">;
    allergies?: Prisma.JsonNullableFilter<"User">;
    phone_verified?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    restaurants?: Prisma.RestaurantListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    support_tickets?: Prisma.SupportTicketListRelationFilter;
    loyalty_points?: Prisma.LoyaltyPointListRelationFilter;
    referrals_sent?: Prisma.ReferralListRelationFilter;
    referrals_received?: Prisma.ReferralListRelationFilter;
    addresses?: Prisma.UserAddressListRelationFilter;
    paymentMethods?: Prisma.PaymentMethodListRelationFilter;
    subscriptions?: Prisma.SubscriptionListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferences?: Prisma.SortOrderInput | Prisma.SortOrder;
    allergies?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone_verified?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    restaurants?: Prisma.RestaurantOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    support_tickets?: Prisma.SupportTicketOrderByRelationAggregateInput;
    loyalty_points?: Prisma.LoyaltyPointOrderByRelationAggregateInput;
    referrals_sent?: Prisma.ReferralOrderByRelationAggregateInput;
    referrals_received?: Prisma.ReferralOrderByRelationAggregateInput;
    addresses?: Prisma.UserAddressOrderByRelationAggregateInput;
    paymentMethods?: Prisma.PaymentMethodOrderByRelationAggregateInput;
    subscriptions?: Prisma.SubscriptionOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    phone?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    photo_url?: Prisma.StringNullableFilter<"User"> | string | null;
    preferences?: Prisma.JsonNullableFilter<"User">;
    allergies?: Prisma.JsonNullableFilter<"User">;
    phone_verified?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    restaurants?: Prisma.RestaurantListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    support_tickets?: Prisma.SupportTicketListRelationFilter;
    loyalty_points?: Prisma.LoyaltyPointListRelationFilter;
    referrals_sent?: Prisma.ReferralListRelationFilter;
    referrals_received?: Prisma.ReferralListRelationFilter;
    addresses?: Prisma.UserAddressListRelationFilter;
    paymentMethods?: Prisma.PaymentMethodListRelationFilter;
    subscriptions?: Prisma.SubscriptionListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferences?: Prisma.SortOrderInput | Prisma.SortOrder;
    allergies?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone_verified?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
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
    phone?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    photo_url?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    preferences?: Prisma.JsonNullableWithAggregatesFilter<"User">;
    allergies?: Prisma.JsonNullableWithAggregatesFilter<"User">;
    phone_verified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrder;
    preferences?: Prisma.SortOrder;
    allergies?: Prisma.SortOrder;
    phone_verified?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrder;
    phone_verified?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrder;
    phone_verified?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutRestaurantsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRestaurantsInput, Prisma.UserUncheckedCreateWithoutRestaurantsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRestaurantsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRestaurantsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRestaurantsInput, Prisma.UserUncheckedCreateWithoutRestaurantsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRestaurantsInput;
    upsert?: Prisma.UserUpsertWithoutRestaurantsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRestaurantsInput, Prisma.UserUpdateWithoutRestaurantsInput>, Prisma.UserUncheckedUpdateWithoutRestaurantsInput>;
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
export type UserCreateNestedOneWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupport_ticketsInput, Prisma.UserUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupport_ticketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupport_ticketsInput, Prisma.UserUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupport_ticketsInput;
    upsert?: Prisma.UserUpsertWithoutSupport_ticketsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSupport_ticketsInput, Prisma.UserUpdateWithoutSupport_ticketsInput>, Prisma.UserUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.UserUpsertWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReviewsInput, Prisma.UserUpdateWithoutReviewsInput>, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserCreateNestedOneWithoutLoyalty_pointsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoyalty_pointsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLoyalty_pointsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoyalty_pointsInput;
    upsert?: Prisma.UserUpsertWithoutLoyalty_pointsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLoyalty_pointsInput, Prisma.UserUpdateWithoutLoyalty_pointsInput>, Prisma.UserUncheckedUpdateWithoutLoyalty_pointsInput>;
};
export type UserCreateNestedOneWithoutReferrals_sentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferrals_sentInput, Prisma.UserUncheckedCreateWithoutReferrals_sentInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferrals_sentInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReferrals_receivedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferrals_receivedInput, Prisma.UserUncheckedCreateWithoutReferrals_receivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferrals_receivedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReferrals_sentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferrals_sentInput, Prisma.UserUncheckedCreateWithoutReferrals_sentInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferrals_sentInput;
    upsert?: Prisma.UserUpsertWithoutReferrals_sentInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReferrals_sentInput, Prisma.UserUpdateWithoutReferrals_sentInput>, Prisma.UserUncheckedUpdateWithoutReferrals_sentInput>;
};
export type UserUpdateOneRequiredWithoutReferrals_receivedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferrals_receivedInput, Prisma.UserUncheckedCreateWithoutReferrals_receivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferrals_receivedInput;
    upsert?: Prisma.UserUpsertWithoutReferrals_receivedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReferrals_receivedInput, Prisma.UserUpdateWithoutReferrals_receivedInput>, Prisma.UserUncheckedUpdateWithoutReferrals_receivedInput>;
};
export type UserCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.UserUpsertWithoutAddressesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAddressesInput, Prisma.UserUpdateWithoutAddressesInput>, Prisma.UserUncheckedUpdateWithoutAddressesInput>;
};
export type UserCreateNestedOneWithoutPaymentMethodsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaymentMethodsInput, Prisma.UserUncheckedCreateWithoutPaymentMethodsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaymentMethodsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaymentMethodsInput, Prisma.UserUncheckedCreateWithoutPaymentMethodsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaymentMethodsInput;
    upsert?: Prisma.UserUpsertWithoutPaymentMethodsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPaymentMethodsInput, Prisma.UserUpdateWithoutPaymentMethodsInput>, Prisma.UserUncheckedUpdateWithoutPaymentMethodsInput>;
};
export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubscriptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSubscriptionsInput;
    upsert?: Prisma.UserUpsertWithoutSubscriptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSubscriptionsInput, Prisma.UserUpdateWithoutSubscriptionsInput>, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
};
export type UserCreateWithoutRestaurantsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRestaurantsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRestaurantsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRestaurantsInput, Prisma.UserUncheckedCreateWithoutRestaurantsInput>;
};
export type UserUpsertWithoutRestaurantsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRestaurantsInput, Prisma.UserUncheckedUpdateWithoutRestaurantsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRestaurantsInput, Prisma.UserUncheckedCreateWithoutRestaurantsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRestaurantsInput, Prisma.UserUncheckedUpdateWithoutRestaurantsInput>;
};
export type UserUpdateWithoutRestaurantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRestaurantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
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
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSupport_ticketsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSupport_ticketsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupport_ticketsInput, Prisma.UserUncheckedCreateWithoutSupport_ticketsInput>;
};
export type UserUpsertWithoutSupport_ticketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSupport_ticketsInput, Prisma.UserUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupport_ticketsInput, Prisma.UserUncheckedCreateWithoutSupport_ticketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSupport_ticketsInput, Prisma.UserUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type UserUpdateWithoutSupport_ticketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSupport_ticketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOrdersInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
};
export type UserUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLoyalty_pointsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLoyalty_pointsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLoyalty_pointsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
};
export type UserUpsertWithoutLoyalty_pointsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLoyalty_pointsInput, Prisma.UserUncheckedUpdateWithoutLoyalty_pointsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLoyalty_pointsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLoyalty_pointsInput, Prisma.UserUncheckedUpdateWithoutLoyalty_pointsInput>;
};
export type UserUpdateWithoutLoyalty_pointsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLoyalty_pointsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReferrals_sentInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReferrals_sentInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReferrals_sentInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferrals_sentInput, Prisma.UserUncheckedCreateWithoutReferrals_sentInput>;
};
export type UserCreateWithoutReferrals_receivedInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReferrals_receivedInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReferrals_receivedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferrals_receivedInput, Prisma.UserUncheckedCreateWithoutReferrals_receivedInput>;
};
export type UserUpsertWithoutReferrals_sentInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReferrals_sentInput, Prisma.UserUncheckedUpdateWithoutReferrals_sentInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferrals_sentInput, Prisma.UserUncheckedCreateWithoutReferrals_sentInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReferrals_sentInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReferrals_sentInput, Prisma.UserUncheckedUpdateWithoutReferrals_sentInput>;
};
export type UserUpdateWithoutReferrals_sentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReferrals_sentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutReferrals_receivedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReferrals_receivedInput, Prisma.UserUncheckedUpdateWithoutReferrals_receivedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferrals_receivedInput, Prisma.UserUncheckedCreateWithoutReferrals_receivedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReferrals_receivedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReferrals_receivedInput, Prisma.UserUncheckedUpdateWithoutReferrals_receivedInput>;
};
export type UserUpdateWithoutReferrals_receivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReferrals_receivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAddressesInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAddressesInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAddressesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
};
export type UserUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAddressesInput, Prisma.UserUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAddressesInput, Prisma.UserUncheckedUpdateWithoutAddressesInput>;
};
export type UserUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPaymentMethodsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    subscriptions?: Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPaymentMethodsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaymentMethodsInput, Prisma.UserUncheckedCreateWithoutPaymentMethodsInput>;
};
export type UserUpsertWithoutPaymentMethodsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPaymentMethodsInput, Prisma.UserUncheckedUpdateWithoutPaymentMethodsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaymentMethodsInput, Prisma.UserUncheckedCreateWithoutPaymentMethodsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPaymentMethodsInput, Prisma.UserUncheckedUpdateWithoutPaymentMethodsInput>;
};
export type UserUpdateWithoutPaymentMethodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    subscriptions?: Prisma.SubscriptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSubscriptionsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string;
    email: string;
    phone: string;
    name: string;
    photo_url?: string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified: boolean;
    created_at?: Date | string;
    restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    support_tickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    referrals_sent?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referrals_received?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferredInput;
    addresses?: Prisma.UserAddressUncheckedCreateNestedManyWithoutUserInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
};
export type UserUpsertWithoutSubscriptionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSubscriptionsInput, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSubscriptionsInput, Prisma.UserUncheckedCreateWithoutSubscriptionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSubscriptionsInput, Prisma.UserUncheckedUpdateWithoutSubscriptionsInput>;
};
export type UserUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferences?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    allergies?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    phone_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    restaurants?: Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    support_tickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    referrals_sent?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referrals_received?: Prisma.ReferralUncheckedUpdateManyWithoutReferredNestedInput;
    addresses?: Prisma.UserAddressUncheckedUpdateManyWithoutUserNestedInput;
    paymentMethods?: Prisma.PaymentMethodUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    restaurants: number;
    orders: number;
    reviews: number;
    notifications: number;
    support_tickets: number;
    loyalty_points: number;
    referrals_sent: number;
    referrals_received: number;
    addresses: number;
    paymentMethods: number;
    subscriptions: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurants?: boolean | UserCountOutputTypeCountRestaurantsArgs;
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    support_tickets?: boolean | UserCountOutputTypeCountSupport_ticketsArgs;
    loyalty_points?: boolean | UserCountOutputTypeCountLoyalty_pointsArgs;
    referrals_sent?: boolean | UserCountOutputTypeCountReferrals_sentArgs;
    referrals_received?: boolean | UserCountOutputTypeCountReferrals_receivedArgs;
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs;
    paymentMethods?: boolean | UserCountOutputTypeCountPaymentMethodsArgs;
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs;
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
export type UserCountOutputTypeCountRestaurantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RestaurantWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
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
export type UserCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLoyalty_pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPointWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReferrals_sentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReferrals_receivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAddressWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    photo_url?: boolean;
    preferences?: boolean;
    allergies?: boolean;
    phone_verified?: boolean;
    created_at?: boolean;
    restaurants?: boolean | Prisma.User$restaurantsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.User$support_ticketsArgs<ExtArgs>;
    loyalty_points?: boolean | Prisma.User$loyalty_pointsArgs<ExtArgs>;
    referrals_sent?: boolean | Prisma.User$referrals_sentArgs<ExtArgs>;
    referrals_received?: boolean | Prisma.User$referrals_receivedArgs<ExtArgs>;
    addresses?: boolean | Prisma.User$addressesArgs<ExtArgs>;
    paymentMethods?: boolean | Prisma.User$paymentMethodsArgs<ExtArgs>;
    subscriptions?: boolean | Prisma.User$subscriptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    photo_url?: boolean;
    preferences?: boolean;
    allergies?: boolean;
    phone_verified?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    photo_url?: boolean;
    preferences?: boolean;
    allergies?: boolean;
    phone_verified?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    photo_url?: boolean;
    preferences?: boolean;
    allergies?: boolean;
    phone_verified?: boolean;
    created_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "phone" | "name" | "photo_url" | "preferences" | "allergies" | "phone_verified" | "created_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurants?: boolean | Prisma.User$restaurantsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.User$support_ticketsArgs<ExtArgs>;
    loyalty_points?: boolean | Prisma.User$loyalty_pointsArgs<ExtArgs>;
    referrals_sent?: boolean | Prisma.User$referrals_sentArgs<ExtArgs>;
    referrals_received?: boolean | Prisma.User$referrals_receivedArgs<ExtArgs>;
    addresses?: boolean | Prisma.User$addressesArgs<ExtArgs>;
    paymentMethods?: boolean | Prisma.User$paymentMethodsArgs<ExtArgs>;
    subscriptions?: boolean | Prisma.User$subscriptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        restaurants: Prisma.$RestaurantPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        support_tickets: Prisma.$SupportTicketPayload<ExtArgs>[];
        loyalty_points: Prisma.$LoyaltyPointPayload<ExtArgs>[];
        referrals_sent: Prisma.$ReferralPayload<ExtArgs>[];
        referrals_received: Prisma.$ReferralPayload<ExtArgs>[];
        addresses: Prisma.$UserAddressPayload<ExtArgs>[];
        paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[];
        subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        phone: string;
        name: string;
        photo_url: string | null;
        preferences: runtime.JsonValue | null;
        allergies: runtime.JsonValue | null;
        phone_verified: boolean;
        created_at: Date;
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
    restaurants<T extends Prisma.User$restaurantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.User$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    support_tickets<T extends Prisma.User$support_ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    loyalty_points<T extends Prisma.User$loyalty_pointsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$loyalty_pointsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    referrals_sent<T extends Prisma.User$referrals_sentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$referrals_sentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    referrals_received<T extends Prisma.User$referrals_receivedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$referrals_receivedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addresses<T extends Prisma.User$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    paymentMethods<T extends Prisma.User$paymentMethodsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subscriptions<T extends Prisma.User$subscriptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly photo_url: Prisma.FieldRef<"User", 'String'>;
    readonly preferences: Prisma.FieldRef<"User", 'Json'>;
    readonly allergies: Prisma.FieldRef<"User", 'Json'>;
    readonly phone_verified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
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
 * User.restaurants
 */
export type User$restaurantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: Prisma.RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: Prisma.RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RestaurantInclude<ExtArgs> | null;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput | Prisma.RestaurantOrderByWithRelationInput[];
    cursor?: Prisma.RestaurantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RestaurantScalarFieldEnum | Prisma.RestaurantScalarFieldEnum[];
};
/**
 * User.orders
 */
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * User.reviews
 */
export type User$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.support_tickets
 */
export type User$support_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.loyalty_points
 */
export type User$loyalty_pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.referrals_sent
 */
export type User$referrals_sentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * User.referrals_received
 */
export type User$referrals_receivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * User.addresses
 */
export type User$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: Prisma.UserAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: Prisma.UserAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAddressInclude<ExtArgs> | null;
    where?: Prisma.UserAddressWhereInput;
    orderBy?: Prisma.UserAddressOrderByWithRelationInput | Prisma.UserAddressOrderByWithRelationInput[];
    cursor?: Prisma.UserAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserAddressScalarFieldEnum | Prisma.UserAddressScalarFieldEnum[];
};
/**
 * User.paymentMethods
 */
export type User$paymentMethodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
/**
 * User.subscriptions
 */
export type User$subscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
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
//# sourceMappingURL=User.d.ts.map