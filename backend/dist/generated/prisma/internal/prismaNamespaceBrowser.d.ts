import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Driver: "Driver";
    readonly DriverEarning: "DriverEarning";
    readonly Restaurant: "Restaurant";
    readonly MenuCategory: "MenuCategory";
    readonly MenuItem: "MenuItem";
    readonly MenuItemOption: "MenuItemOption";
    readonly MenuItemOptionValue: "MenuItemOptionValue";
    readonly Notification: "Notification";
    readonly SupportTicket: "SupportTicket";
    readonly SupportMessage: "SupportMessage";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly OrderItemSelection: "OrderItemSelection";
    readonly OrderStatusHistory: "OrderStatusHistory";
    readonly Review: "Review";
    readonly PromoCode: "PromoCode";
    readonly LoyaltyPoint: "LoyaltyPoint";
    readonly Referral: "Referral";
    readonly User: "User";
    readonly UserAddress: "UserAddress";
    readonly PaymentMethod: "PaymentMethod";
    readonly Subscription: "Subscription";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const DriverScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly photo_url: "photo_url";
    readonly transport_type: "transport_type";
    readonly is_online: "is_online";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly rating_avg: "rating_avg";
    readonly is_verified: "is_verified";
    readonly created_at: "created_at";
};
export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum];
export declare const DriverEarningScalarFieldEnum: {
    readonly id: "id";
    readonly driver_id: "driver_id";
    readonly order_id: "order_id";
    readonly base_amount: "base_amount";
    readonly bonus: "bonus";
    readonly tip: "tip";
    readonly total: "total";
    readonly status: "status";
    readonly paid_at: "paid_at";
};
export type DriverEarningScalarFieldEnum = (typeof DriverEarningScalarFieldEnum)[keyof typeof DriverEarningScalarFieldEnum];
export declare const RestaurantScalarFieldEnum: {
    readonly id: "id";
    readonly owner_id: "owner_id";
    readonly name: "name";
    readonly description: "description";
    readonly logo_url: "logo_url";
    readonly address: "address";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly opening_hours: "opening_hours";
    readonly is_active: "is_active";
    readonly rating_avg: "rating_avg";
    readonly cuisine_type: "cuisine_type";
    readonly prep_time_min: "prep_time_min";
    readonly delivery_fee: "delivery_fee";
};
export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum];
export declare const MenuCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly restaurant_id: "restaurant_id";
    readonly name: "name";
    readonly position: "position";
    readonly availability: "availability";
};
export type MenuCategoryScalarFieldEnum = (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum];
export declare const MenuItemScalarFieldEnum: {
    readonly id: "id";
    readonly category_id: "category_id";
    readonly name: "name";
    readonly description: "description";
    readonly photo_url: "photo_url";
    readonly price: "price";
    readonly is_available: "is_available";
    readonly is_popular: "is_popular";
};
export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum];
export declare const MenuItemOptionScalarFieldEnum: {
    readonly id: "id";
    readonly item_id: "item_id";
    readonly name: "name";
    readonly type: "type";
    readonly is_required: "is_required";
};
export type MenuItemOptionScalarFieldEnum = (typeof MenuItemOptionScalarFieldEnum)[keyof typeof MenuItemOptionScalarFieldEnum];
export declare const MenuItemOptionValueScalarFieldEnum: {
    readonly id: "id";
    readonly option_id: "option_id";
    readonly label: "label";
    readonly extra_price: "extra_price";
};
export type MenuItemOptionValueScalarFieldEnum = (typeof MenuItemOptionValueScalarFieldEnum)[keyof typeof MenuItemOptionValueScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly channel: "channel";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly is_read: "is_read";
    readonly sent_at: "sent_at";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly order_id: "order_id";
    readonly reason: "reason";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const SupportMessageScalarFieldEnum: {
    readonly id: "id";
    readonly ticket_id: "ticket_id";
    readonly sender_id: "sender_id";
    readonly role: "role";
    readonly content: "content";
    readonly sent_at: "sent_at";
};
export type SupportMessageScalarFieldEnum = (typeof SupportMessageScalarFieldEnum)[keyof typeof SupportMessageScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly restaurant_id: "restaurant_id";
    readonly driver_id: "driver_id";
    readonly delivery_address_id: "delivery_address_id";
    readonly promo_code_id: "promo_code_id";
    readonly payment_method_id: "payment_method_id";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly delivery_fee: "delivery_fee";
    readonly taxes: "taxes";
    readonly tip_amount: "tip_amount";
    readonly total: "total";
    readonly estimated_delivery_at: "estimated_delivery_at";
    readonly delivered_at: "delivered_at";
    readonly created_at: "created_at";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly menu_item_id: "menu_item_id";
    readonly quantity: "quantity";
    readonly unit_price: "unit_price";
    readonly notes: "notes";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const OrderItemSelectionScalarFieldEnum: {
    readonly id: "id";
    readonly order_item_id: "order_item_id";
    readonly option_value_id: "option_value_id";
    readonly extra_price: "extra_price";
};
export type OrderItemSelectionScalarFieldEnum = (typeof OrderItemSelectionScalarFieldEnum)[keyof typeof OrderItemSelectionScalarFieldEnum];
export declare const OrderStatusHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly status: "status";
    readonly note: "note";
    readonly changed_at: "changed_at";
};
export type OrderStatusHistoryScalarFieldEnum = (typeof OrderStatusHistoryScalarFieldEnum)[keyof typeof OrderStatusHistoryScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly user_id: "user_id";
    readonly restaurant_id: "restaurant_id";
    readonly driver_id: "driver_id";
    readonly restaurant_rating: "restaurant_rating";
    readonly driver_rating: "driver_rating";
    readonly comment: "comment";
    readonly photo_url: "photo_url";
    readonly created_at: "created_at";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const PromoCodeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly type: "type";
    readonly value: "value";
    readonly min_order: "min_order";
    readonly max_uses: "max_uses";
    readonly uses_count: "uses_count";
    readonly expires_at: "expires_at";
};
export type PromoCodeScalarFieldEnum = (typeof PromoCodeScalarFieldEnum)[keyof typeof PromoCodeScalarFieldEnum];
export declare const LoyaltyPointScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly order_id: "order_id";
    readonly points: "points";
    readonly reason: "reason";
    readonly created_at: "created_at";
};
export type LoyaltyPointScalarFieldEnum = (typeof LoyaltyPointScalarFieldEnum)[keyof typeof LoyaltyPointScalarFieldEnum];
export declare const ReferralScalarFieldEnum: {
    readonly id: "id";
    readonly referrer_id: "referrer_id";
    readonly referred_id: "referred_id";
    readonly code: "code";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly phone: "phone";
    readonly name: "name";
    readonly photo_url: "photo_url";
    readonly preferences: "preferences";
    readonly allergies: "allergies";
    readonly phone_verified: "phone_verified";
    readonly created_at: "created_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserAddressScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly label: "label";
    readonly street: "street";
    readonly city: "city";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly is_default: "is_default";
};
export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum];
export declare const PaymentMethodScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly type: "type";
    readonly stripe_token: "stripe_token";
    readonly last4: "last4";
    readonly is_default: "is_default";
};
export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly plan: "plan";
    readonly price: "price";
    readonly status: "status";
    readonly started_at: "started_at";
    readonly expires_at: "expires_at";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map