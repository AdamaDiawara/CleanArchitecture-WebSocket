import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Drivers
 * const drivers = await prisma.driver.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Driver
 *
 */
export type Driver = Prisma.DriverModel;
/**
 * Model DriverEarning
 *
 */
export type DriverEarning = Prisma.DriverEarningModel;
/**
 * Model Restaurant
 *
 */
export type Restaurant = Prisma.RestaurantModel;
/**
 * Model MenuCategory
 *
 */
export type MenuCategory = Prisma.MenuCategoryModel;
/**
 * Model MenuItem
 *
 */
export type MenuItem = Prisma.MenuItemModel;
/**
 * Model MenuItemOption
 *
 */
export type MenuItemOption = Prisma.MenuItemOptionModel;
/**
 * Model MenuItemOptionValue
 *
 */
export type MenuItemOptionValue = Prisma.MenuItemOptionValueModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model SupportTicket
 *
 */
export type SupportTicket = Prisma.SupportTicketModel;
/**
 * Model SupportMessage
 *
 */
export type SupportMessage = Prisma.SupportMessageModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model OrderItem
 *
 */
export type OrderItem = Prisma.OrderItemModel;
/**
 * Model OrderItemSelection
 *
 */
export type OrderItemSelection = Prisma.OrderItemSelectionModel;
/**
 * Model OrderStatusHistory
 *
 */
export type OrderStatusHistory = Prisma.OrderStatusHistoryModel;
/**
 * Model Review
 *
 */
export type Review = Prisma.ReviewModel;
/**
 * Model PromoCode
 *
 */
export type PromoCode = Prisma.PromoCodeModel;
/**
 * Model LoyaltyPoint
 *
 */
export type LoyaltyPoint = Prisma.LoyaltyPointModel;
/**
 * Model Referral
 *
 */
export type Referral = Prisma.ReferralModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model UserAddress
 *
 */
export type UserAddress = Prisma.UserAddressModel;
/**
 * Model PaymentMethod
 *
 */
export type PaymentMethod = Prisma.PaymentMethodModel;
/**
 * Model Subscription
 *
 */
export type Subscription = Prisma.SubscriptionModel;
//# sourceMappingURL=client.d.ts.map