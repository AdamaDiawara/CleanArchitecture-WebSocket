import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Drivers
  * const drivers = await prisma.driver.findMany()
  * ```
  */
    get driver(): Prisma.DriverDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.driverEarning`: Exposes CRUD operations for the **DriverEarning** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DriverEarnings
      * const driverEarnings = await prisma.driverEarning.findMany()
      * ```
      */
    get driverEarning(): Prisma.DriverEarningDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Restaurants
      * const restaurants = await prisma.restaurant.findMany()
      * ```
      */
    get restaurant(): Prisma.RestaurantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MenuCategories
      * const menuCategories = await prisma.menuCategory.findMany()
      * ```
      */
    get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MenuItems
      * const menuItems = await prisma.menuItem.findMany()
      * ```
      */
    get menuItem(): Prisma.MenuItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.menuItemOption`: Exposes CRUD operations for the **MenuItemOption** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MenuItemOptions
      * const menuItemOptions = await prisma.menuItemOption.findMany()
      * ```
      */
    get menuItemOption(): Prisma.MenuItemOptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.menuItemOptionValue`: Exposes CRUD operations for the **MenuItemOptionValue** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MenuItemOptionValues
      * const menuItemOptionValues = await prisma.menuItemOptionValue.findMany()
      * ```
      */
    get menuItemOptionValue(): Prisma.MenuItemOptionValueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupportTickets
      * const supportTickets = await prisma.supportTicket.findMany()
      * ```
      */
    get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supportMessage`: Exposes CRUD operations for the **SupportMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupportMessages
      * const supportMessages = await prisma.supportMessage.findMany()
      * ```
      */
    get supportMessage(): Prisma.SupportMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItems
      * const orderItems = await prisma.orderItem.findMany()
      * ```
      */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItemSelection`: Exposes CRUD operations for the **OrderItemSelection** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItemSelections
      * const orderItemSelections = await prisma.orderItemSelection.findMany()
      * ```
      */
    get orderItemSelection(): Prisma.OrderItemSelectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderStatusHistory`: Exposes CRUD operations for the **OrderStatusHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderStatusHistories
      * const orderStatusHistories = await prisma.orderStatusHistory.findMany()
      * ```
      */
    get orderStatusHistory(): Prisma.OrderStatusHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.review`: Exposes CRUD operations for the **Review** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reviews
      * const reviews = await prisma.review.findMany()
      * ```
      */
    get review(): Prisma.ReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.promoCode`: Exposes CRUD operations for the **PromoCode** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PromoCodes
      * const promoCodes = await prisma.promoCode.findMany()
      * ```
      */
    get promoCode(): Prisma.PromoCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.loyaltyPoint`: Exposes CRUD operations for the **LoyaltyPoint** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LoyaltyPoints
      * const loyaltyPoints = await prisma.loyaltyPoint.findMany()
      * ```
      */
    get loyaltyPoint(): Prisma.LoyaltyPointDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Referrals
      * const referrals = await prisma.referral.findMany()
      * ```
      */
    get referral(): Prisma.ReferralDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserAddresses
      * const userAddresses = await prisma.userAddress.findMany()
      * ```
      */
    get userAddress(): Prisma.UserAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PaymentMethods
      * const paymentMethods = await prisma.paymentMethod.findMany()
      * ```
      */
    get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subscriptions
      * const subscriptions = await prisma.subscription.findMany()
      * ```
      */
    get subscription(): Prisma.SubscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map