export declare const TransportType: {
    readonly bike: "bike";
    readonly scooter: "scooter";
    readonly car: "car";
};
export type TransportType = (typeof TransportType)[keyof typeof TransportType];
export declare const EarningStatus: {
    readonly pending: "pending";
    readonly paid: "paid";
};
export type EarningStatus = (typeof EarningStatus)[keyof typeof EarningStatus];
export declare const MenuCategoryAvailability: {
    readonly always: "always";
    readonly lunch: "lunch";
    readonly dinner: "dinner";
    readonly weekend: "weekend";
};
export type MenuCategoryAvailability = (typeof MenuCategoryAvailability)[keyof typeof MenuCategoryAvailability];
export declare const MenuItemOptionType: {
    readonly single: "single";
    readonly multiple: "multiple";
};
export type MenuItemOptionType = (typeof MenuItemOptionType)[keyof typeof MenuItemOptionType];
export declare const NotificationChannel: {
    readonly push: "push";
    readonly sms: "sms";
    readonly email: "email";
};
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];
export declare const SupportReason: {
    readonly missing_item: "missing_item";
    readonly wrong_item: "wrong_item";
    readonly other: "other";
};
export type SupportReason = (typeof SupportReason)[keyof typeof SupportReason];
export declare const SupportStatus: {
    readonly open: "open";
    readonly in_progress: "in_progress";
    readonly resolved: "resolved";
};
export type SupportStatus = (typeof SupportStatus)[keyof typeof SupportStatus];
export declare const SupportRole: {
    readonly user: "user";
    readonly agent: "agent";
    readonly bot: "bot";
};
export type SupportRole = (typeof SupportRole)[keyof typeof SupportRole];
export declare const OrderStatus: {
    readonly created: "created";
    readonly confirmed: "confirmed";
    readonly prepared: "prepared";
    readonly delivered: "delivered";
    readonly cancelled: "cancelled";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PromoType: {
    readonly percent: "percent";
    readonly fixed: "fixed";
    readonly free_delivery: "free_delivery";
};
export type PromoType = (typeof PromoType)[keyof typeof PromoType];
export declare const LoyaltyReason: {
    readonly order: "order";
    readonly referral: "referral";
    readonly redeem: "redeem";
};
export type LoyaltyReason = (typeof LoyaltyReason)[keyof typeof LoyaltyReason];
export declare const ReferralStatus: {
    readonly pending: "pending";
    readonly rewarded: "rewarded";
};
export type ReferralStatus = (typeof ReferralStatus)[keyof typeof ReferralStatus];
export declare const PaymentType: {
    readonly cb: "cb";
    readonly paypal: "paypal";
    readonly apple: "apple";
    readonly google: "google";
};
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];
export declare const SubscriptionPlan: {
    readonly free: "free";
    readonly premium: "premium";
};
export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan];
export declare const SubscriptionStatus: {
    readonly active: "active";
    readonly cancelled: "cancelled";
    readonly expired: "expired";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
//# sourceMappingURL=enums.d.ts.map