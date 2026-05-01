// src/infrastructure/config/env.ts
var requireEnv = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};
var resolveHttpFramework = () => {
  const configuredFramework = process.env.HTTP_FRAMEWORK?.toLowerCase();
  return configuredFramework === "fastify" ? "fastify" : "express";
};
var resolveCorsOrigins = () => {
  const configuredCorsOrigin = process.env.CORS_ORIGIN?.trim();
  if (!configuredCorsOrigin) {
    return ["http://localhost:3000", "http://localhost:3002"];
  }
  return configuredCorsOrigin.split(",").map((origin) => origin.trim()).filter(Boolean);
};
var env = {
  jwtAccessSecret: requireEnv("JWT_ACCESS_SECRET"),
  jwtRefreshSecret: requireEnv("JWT_REFRESH_SECRET"),
  databaseUrl: requireEnv("DATABASE_URL"),
  stripeSecretKey: requireEnv("STRIPE_SECRET_KEY"),
  stripeWebhookSecret: requireEnv("STRIPE_WEBHOOK_SECRET"),
  httpFramework: resolveHttpFramework(),
  corsOrigins: resolveCorsOrigins(),
  port: process.env.PORT ?? "3001"
};

// src/infrastructure/databases/prismaClient.ts
import { PrismaPg } from "@prisma/adapter-pg";

// src/generated/prisma/client.ts
import "process";
import * as path from "path";
import { fileURLToPath } from "url";
import "@prisma/client/runtime/client";

// src/generated/prisma/enums.ts
var PaymentType = {
  cb: "cb",
  paypal: "paypal",
  apple: "apple",
  google: "google"
};
var AuthProvider = {
  password: "password",
  phone: "phone",
  google: "google",
  apple: "apple"
};

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "postgresql",
  "inlineSchema": 'datasource db {\n  provider = "postgresql"\n}\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../src/generated/prisma"\n}\n\n// --- driver_models.prisma.part ---\n// --- driver_models.prisma ---\n\nmodel Driver {\n  id             String          @id @default(uuid())\n  name           String\n  email          String          @unique\n  phone          String\n  photo_url      String?\n  transport_type TransportType\n  is_online      Boolean\n  lat            Float\n  lng            Float\n  rating_avg     Float?\n  is_verified    Boolean\n  user_id        String?         @unique\n  created_at     DateTime        @default(now())\n  earnings       DriverEarning[] @relation("DriverEarnings")\n  orders         Order[]         @relation("DriverOrders")\n  reviews        Review[]        @relation("DriverReviews")\n  user           User?           @relation("DriverUser", fields: [user_id], references: [id])\n\n  @@index([is_online])\n  @@index([transport_type])\n  @@index([created_at])\n}\n\nenum TransportType {\n  bike\n  scooter\n  car\n}\n\nmodel DriverEarning {\n  id          String        @id @default(uuid())\n  driver_id   String\n  order_id    String\n  base_amount Decimal\n  bonus       Decimal\n  tip         Decimal\n  total       Decimal\n  status      EarningStatus\n  paid_at     DateTime?\n  driver      Driver        @relation("DriverEarnings", fields: [driver_id], references: [id])\n  order       Order         @relation("OrderDriverEarnings", fields: [order_id], references: [id])\n\n  @@index([driver_id])\n  @@index([order_id])\n  @@index([status])\n}\n\nenum EarningStatus {\n  pending\n  paid\n}\n\n// --- menu_restaurants_models.prisma.part ---\n// --- restaurants.prisma ---\nmodel Restaurant {\n  id              String         @id @default(uuid())\n  owner_id        String // FK \u2192 users\n  name            String\n  description     String?\n  logo_url        String?\n  address         String\n  lat             Float\n  lng             Float\n  opening_hours   Json\n  is_active       Boolean\n  rating_avg      Float?\n  cuisine_type    String\n  prep_time_min   Int\n  delivery_fee    Decimal\n  owner           User           @relation("UserRestaurants", fields: [owner_id], references: [id])\n  menu_categories MenuCategory[] @relation("RestaurantCategories")\n  orders          Order[]        @relation("RestaurantOrders")\n  reviews         Review[]       @relation("RestaurantReviews")\n\n  @@index([owner_id])\n  @@index([is_active])\n  @@index([cuisine_type])\n}\n\n// --- menu_categories.prisma ---\nmodel MenuCategory {\n  id            String                   @id @default(uuid())\n  restaurant_id String\n  name          String\n  position      Int\n  availability  MenuCategoryAvailability\n  restaurant    Restaurant               @relation(fields: [restaurant_id], references: [id], name: "RestaurantCategories")\n  menu_items    MenuItem[]               @relation("CategoryItems")\n\n  @@index([restaurant_id])\n  @@index([availability])\n}\n\nenum MenuCategoryAvailability {\n  always\n  lunch\n  dinner\n  weekend\n}\n\n// --- menu_items.prisma ---\nmodel MenuItem {\n  id           String           @id @default(uuid())\n  category_id  String\n  name         String\n  description  String?\n  photo_url    String?\n  price        Decimal\n  is_available Boolean\n  is_popular   Boolean\n  daily_stock  Int?\n  category     MenuCategory     @relation(fields: [category_id], references: [id], name: "CategoryItems", onDelete: Cascade)\n  options      MenuItemOption[] @relation("ItemOptions")\n  order_items  OrderItem[]      @relation("MenuItemOrderItems")\n\n  @@index([category_id])\n  @@index([is_available])\n  @@index([is_popular])\n}\n\n// --- menu_item_options.prisma ---\nmodel MenuItemOption {\n  id          String                @id @default(uuid())\n  item_id     String\n  name        String\n  type        MenuItemOptionType\n  is_required Boolean\n  item        MenuItem              @relation(fields: [item_id], references: [id], name: "ItemOptions", onDelete: Cascade)\n  values      MenuItemOptionValue[] @relation("OptionValues")\n\n  @@index([item_id])\n  @@index([type])\n}\n\nenum MenuItemOptionType {\n  single\n  multiple\n}\n\n// --- menu_item_option_values.prisma ---\nmodel MenuItemOptionValue {\n  id          String               @id @default(uuid())\n  option_id   String\n  label       String\n  extra_price Decimal\n  option      MenuItemOption       @relation(fields: [option_id], references: [id], name: "OptionValues")\n  selections  OrderItemSelection[] @relation("OptionValueSelections")\n\n  @@index([option_id])\n}\n\n// --- notification_support_models.prisma.part ---\n// --- notification_support_models.prisma ---\n\nmodel Notification {\n  id      String              @id @default(uuid())\n  user_id String\n  channel NotificationChannel\n  type    String\n  title   String\n  body    String\n  is_read Boolean\n  sent_at DateTime\n  user    User                @relation("UserNotifications", fields: [user_id], references: [id])\n\n  @@index([user_id])\n  @@index([is_read])\n  @@index([sent_at])\n}\n\nenum NotificationChannel {\n  push\n  sms\n  email\n}\n\nmodel SupportTicket {\n  id         String           @id @default(uuid())\n  user_id    String\n  order_id   String\n  reason     SupportReason\n  status     SupportStatus\n  created_at DateTime         @default(now())\n  user       User             @relation("UserSupportTickets", fields: [user_id], references: [id])\n  order      Order            @relation("OrderSupportTickets", fields: [order_id], references: [id])\n  messages   SupportMessage[] @relation("TicketMessages")\n\n  @@index([user_id])\n  @@index([order_id])\n  @@index([status])\n  @@index([created_at])\n}\n\nenum SupportReason {\n  missing_item\n  wrong_item\n  other\n}\n\nenum SupportStatus {\n  open\n  in_progress\n  resolved\n}\n\nmodel SupportMessage {\n  id        String        @id @default(uuid())\n  ticket_id String\n  sender_id String\n  role      SupportRole\n  content   String\n  sent_at   DateTime\n  ticket    SupportTicket @relation("TicketMessages", fields: [ticket_id], references: [id])\n\n  @@index([ticket_id])\n  @@index([sender_id])\n  @@index([sent_at])\n}\n\nenum SupportRole {\n  user\n  agent\n  bot\n}\n\n// --- order_models.prisma.part ---\n// --- order_models.prisma ---\n\nmodel Order {\n  id                    String               @id @default(uuid())\n  user_id               String\n  restaurant_id         String\n  driver_id             String?\n  delivery_address_id   String\n  promo_code_id         String?\n  payment_method_id     String?\n  status                OrderStatus\n  subtotal              Decimal\n  delivery_fee          Decimal\n  taxes                 Decimal\n  tip_amount            Decimal\n  total                 Decimal\n  estimated_delivery_at DateTime\n  delivered_at          DateTime?\n  created_at            DateTime             @default(now())\n  user                  User                 @relation("UserOrders", fields: [user_id], references: [id])\n  restaurant            Restaurant           @relation("RestaurantOrders", fields: [restaurant_id], references: [id])\n  driver                Driver?              @relation("DriverOrders", fields: [driver_id], references: [id])\n  delivery_address      UserAddress          @relation("OrderDeliveryAddress", fields: [delivery_address_id], references: [id])\n  promo_code            PromoCode?           @relation("OrderPromoCode", fields: [promo_code_id], references: [id])\n  payment_method        PaymentMethod?       @relation("OrderPaymentMethod", fields: [payment_method_id], references: [id])\n  order_items           OrderItem[]\n  status_history        OrderStatusHistory[]\n  reviews               Review[]             @relation("OrderReviews")\n  driver_earnings       DriverEarning[]      @relation("OrderDriverEarnings")\n  support_tickets       SupportTicket[]      @relation("OrderSupportTickets")\n  loyalty_points        LoyaltyPoint[]       @relation("OrderLoyaltyPoints")\n\n  @@index([user_id])\n  @@index([restaurant_id])\n  @@index([driver_id])\n  @@index([delivery_address_id])\n  @@index([promo_code_id])\n  @@index([payment_method_id])\n  @@index([status])\n  @@index([created_at])\n}\n\nenum OrderStatus {\n  created\n  confirmed\n  prepared\n  delivering\n  delivered\n  cancelled\n}\n\nmodel OrderItem {\n  id           String               @id @default(uuid())\n  order_id     String\n  menu_item_id String\n  quantity     Int\n  unit_price   Decimal\n  notes        String?\n  order        Order                @relation(fields: [order_id], references: [id])\n  menu_item    MenuItem             @relation("MenuItemOrderItems", fields: [menu_item_id], references: [id])\n  selections   OrderItemSelection[]\n\n  @@index([order_id])\n  @@index([menu_item_id])\n}\n\nmodel OrderItemSelection {\n  id              String              @id @default(uuid())\n  order_item_id   String\n  option_value_id String\n  extra_price     Decimal\n  order_item      OrderItem           @relation(fields: [order_item_id], references: [id])\n  option_value    MenuItemOptionValue @relation("OptionValueSelections", fields: [option_value_id], references: [id])\n\n  @@index([order_item_id])\n  @@index([option_value_id])\n}\n\nmodel OrderStatusHistory {\n  id         String      @id @default(uuid())\n  order_id   String\n  status     OrderStatus\n  note       String?\n  changed_at DateTime\n  order      Order       @relation(fields: [order_id], references: [id])\n\n  @@index([order_id])\n  @@index([status])\n  @@index([changed_at])\n}\n\nmodel Review {\n  id                String     @id @default(uuid())\n  order_id          String\n  user_id           String\n  restaurant_id     String\n  driver_id         String?\n  restaurant_rating Int\n  driver_rating     Int?\n  comment           String?\n  photo_url         String?\n  created_at        DateTime   @default(now())\n  order             Order      @relation("OrderReviews", fields: [order_id], references: [id])\n  user              User       @relation("UserReviews", fields: [user_id], references: [id])\n  restaurant        Restaurant @relation("RestaurantReviews", fields: [restaurant_id], references: [id])\n  driver            Driver?    @relation("DriverReviews", fields: [driver_id], references: [id])\n\n  @@unique([order_id])\n  @@index([user_id])\n  @@index([restaurant_id])\n  @@index([driver_id])\n  @@index([created_at])\n}\n\n// --- promo_loyalty_referral_models.prisma.part ---\n// --- promo_loyalty_referral_models.prisma ---\n\nmodel PromoCode {\n  id         String    @id @default(uuid())\n  code       String    @unique\n  type       PromoType\n  value      Decimal\n  min_order  Decimal\n  max_uses   Int\n  uses_count Int\n  expires_at DateTime\n  orders     Order[]   @relation("OrderPromoCode")\n\n  @@index([expires_at])\n  @@index([type])\n}\n\nenum PromoType {\n  percent\n  fixed\n  free_delivery\n}\n\nmodel LoyaltyPoint {\n  id         String        @id @default(uuid())\n  user_id    String\n  order_id   String\n  points     Int\n  reason     LoyaltyReason\n  created_at DateTime      @default(now())\n  user       User          @relation("UserLoyaltyPoints", fields: [user_id], references: [id])\n  order      Order         @relation("OrderLoyaltyPoints", fields: [order_id], references: [id])\n\n  @@index([user_id])\n  @@index([order_id])\n  @@index([created_at])\n}\n\nenum LoyaltyReason {\n  order\n  referral\n  redeem\n}\n\nmodel Referral {\n  id          String         @id @default(uuid())\n  referrer_id String\n  referred_id String\n  code        String         @unique\n  status      ReferralStatus\n  created_at  DateTime       @default(now())\n  referrer    User           @relation("ReferralsSent", fields: [referrer_id], references: [id])\n  referred    User           @relation("ReferralsReceived", fields: [referred_id], references: [id])\n\n  @@index([referrer_id])\n  @@index([referred_id])\n  @@index([status])\n  @@index([created_at])\n}\n\nenum ReferralStatus {\n  pending\n  rewarded\n}\n\n// --- user_models.prisma.part ---\n// --- user_models.prisma ---\n\nenum Role {\n  CLIENT\n  RESTAURANT_OWNER\n  DRIVER\n  ADMIN\n}\n\nenum DocumentType {\n  kbis\n  id_card\n  driving_license\n  vehicle_insurance\n  vehicle_registration\n  food_hygiene\n}\n\nenum DocumentStatus {\n  pending\n  approved\n  rejected\n}\n\nmodel Document {\n  id            String         @id @default(uuid())\n  user_id       String\n  type          DocumentType\n  file_path     String\n  mime_type     String\n  status        DocumentStatus @default(pending)\n  reject_reason String?\n  created_at    DateTime       @default(now())\n  reviewed_at   DateTime?\n  user          User           @relation("UserDocuments", fields: [user_id], references: [id])\n\n  @@index([user_id])\n  @@index([status])\n  @@index([type])\n}\n\nenum PaymentType {\n  cb\n  paypal\n  apple\n  google\n}\n\nenum SubscriptionPlan {\n  free\n  premium\n}\n\nenum SubscriptionStatus {\n  active\n  cancelled\n  expired\n}\n\nenum AuthProvider {\n  password\n  phone\n  google\n  apple\n}\n\nmodel User {\n  id                 String          @id @default(uuid())\n  email              String          @unique\n  phone              String\n  name               String\n  photo_url          String?\n  preferences        Json?\n  allergies          Json?\n  phone_verified     Boolean\n  role               Role            @default(CLIENT)\n  stripe_customer_id String?\n  created_at         DateTime        @default(now())\n  restaurants        Restaurant[]    @relation("UserRestaurants")\n  orders             Order[]         @relation("UserOrders")\n  reviews            Review[]        @relation("UserReviews")\n  notifications      Notification[]  @relation("UserNotifications")\n  support_tickets    SupportTicket[] @relation("UserSupportTickets")\n  loyalty_points     LoyaltyPoint[]  @relation("UserLoyaltyPoints")\n  referrals_sent     Referral[]      @relation("ReferralsSent")\n  referrals_received Referral[]      @relation("ReferralsReceived")\n  addresses          UserAddress[]\n  paymentMethods     PaymentMethod[]\n  subscriptions      Subscription[]\n  auth_identities    AuthIdentity[]\n  refresh_tokens     RefreshToken[]\n  driver_profile     Driver?         @relation("DriverUser")\n  documents          Document[]      @relation("UserDocuments")\n\n  @@index([created_at])\n}\n\nmodel AuthIdentity {\n  id               String       @id @default(uuid())\n  user_id          String\n  provider         AuthProvider\n  provider_user_id String\n  password_hash    String?\n  created_at       DateTime     @default(now())\n  user             User         @relation(fields: [user_id], references: [id])\n\n  @@unique([provider, provider_user_id])\n  @@index([user_id])\n  @@index([provider])\n}\n\nmodel RefreshToken {\n  id         String    @id @default(uuid())\n  user_id    String\n  token_hash String    @unique\n  expires_at DateTime\n  revoked_at DateTime?\n  created_at DateTime  @default(now())\n  user       User      @relation(fields: [user_id], references: [id])\n\n  @@index([user_id])\n  @@index([expires_at])\n}\n\nmodel UserAddress {\n  id              String  @id @default(uuid())\n  user_id         String\n  label           String\n  street          String\n  city            String\n  lat             Float\n  lng             Float\n  is_default      Boolean\n  user            User    @relation(fields: [user_id], references: [id])\n  delivery_orders Order[] @relation("OrderDeliveryAddress")\n\n  @@index([user_id])\n  @@index([is_default])\n}\n\nmodel PaymentMethod {\n  id           String      @id @default(uuid())\n  user_id      String\n  type         PaymentType\n  stripe_token String?\n  label        String\n  is_default   Boolean\n  created_at   DateTime    @default(now())\n  user         User        @relation(fields: [user_id], references: [id])\n  orders       Order[]     @relation("OrderPaymentMethod")\n\n  @@index([user_id])\n  @@index([type])\n  @@index([is_default])\n}\n\nmodel Subscription {\n  id         String             @id @default(uuid())\n  user_id    String\n  plan       SubscriptionPlan\n  price      Decimal\n  status     SubscriptionStatus\n  started_at DateTime\n  expires_at DateTime\n  user       User               @relation(fields: [user_id], references: [id])\n\n  @@index([user_id])\n  @@index([status])\n  @@index([expires_at])\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Driver":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"photo_url","kind":"scalar","type":"String"},{"name":"transport_type","kind":"enum","type":"TransportType"},{"name":"is_online","kind":"scalar","type":"Boolean"},{"name":"lat","kind":"scalar","type":"Float"},{"name":"lng","kind":"scalar","type":"Float"},{"name":"rating_avg","kind":"scalar","type":"Float"},{"name":"is_verified","kind":"scalar","type":"Boolean"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"earnings","kind":"object","type":"DriverEarning","relationName":"DriverEarnings"},{"name":"orders","kind":"object","type":"Order","relationName":"DriverOrders"},{"name":"reviews","kind":"object","type":"Review","relationName":"DriverReviews"},{"name":"user","kind":"object","type":"User","relationName":"DriverUser"}],"dbName":null},"DriverEarning":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"driver_id","kind":"scalar","type":"String"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"base_amount","kind":"scalar","type":"Decimal"},{"name":"bonus","kind":"scalar","type":"Decimal"},{"name":"tip","kind":"scalar","type":"Decimal"},{"name":"total","kind":"scalar","type":"Decimal"},{"name":"status","kind":"enum","type":"EarningStatus"},{"name":"paid_at","kind":"scalar","type":"DateTime"},{"name":"driver","kind":"object","type":"Driver","relationName":"DriverEarnings"},{"name":"order","kind":"object","type":"Order","relationName":"OrderDriverEarnings"}],"dbName":null},"Restaurant":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"owner_id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"logo_url","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"lat","kind":"scalar","type":"Float"},{"name":"lng","kind":"scalar","type":"Float"},{"name":"opening_hours","kind":"scalar","type":"Json"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"rating_avg","kind":"scalar","type":"Float"},{"name":"cuisine_type","kind":"scalar","type":"String"},{"name":"prep_time_min","kind":"scalar","type":"Int"},{"name":"delivery_fee","kind":"scalar","type":"Decimal"},{"name":"owner","kind":"object","type":"User","relationName":"UserRestaurants"},{"name":"menu_categories","kind":"object","type":"MenuCategory","relationName":"RestaurantCategories"},{"name":"orders","kind":"object","type":"Order","relationName":"RestaurantOrders"},{"name":"reviews","kind":"object","type":"Review","relationName":"RestaurantReviews"}],"dbName":null},"MenuCategory":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"restaurant_id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"position","kind":"scalar","type":"Int"},{"name":"availability","kind":"enum","type":"MenuCategoryAvailability"},{"name":"restaurant","kind":"object","type":"Restaurant","relationName":"RestaurantCategories"},{"name":"menu_items","kind":"object","type":"MenuItem","relationName":"CategoryItems"}],"dbName":null},"MenuItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"category_id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"photo_url","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Decimal"},{"name":"is_available","kind":"scalar","type":"Boolean"},{"name":"is_popular","kind":"scalar","type":"Boolean"},{"name":"daily_stock","kind":"scalar","type":"Int"},{"name":"category","kind":"object","type":"MenuCategory","relationName":"CategoryItems"},{"name":"options","kind":"object","type":"MenuItemOption","relationName":"ItemOptions"},{"name":"order_items","kind":"object","type":"OrderItem","relationName":"MenuItemOrderItems"}],"dbName":null},"MenuItemOption":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"item_id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"type","kind":"enum","type":"MenuItemOptionType"},{"name":"is_required","kind":"scalar","type":"Boolean"},{"name":"item","kind":"object","type":"MenuItem","relationName":"ItemOptions"},{"name":"values","kind":"object","type":"MenuItemOptionValue","relationName":"OptionValues"}],"dbName":null},"MenuItemOptionValue":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"option_id","kind":"scalar","type":"String"},{"name":"label","kind":"scalar","type":"String"},{"name":"extra_price","kind":"scalar","type":"Decimal"},{"name":"option","kind":"object","type":"MenuItemOption","relationName":"OptionValues"},{"name":"selections","kind":"object","type":"OrderItemSelection","relationName":"OptionValueSelections"}],"dbName":null},"Notification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"channel","kind":"enum","type":"NotificationChannel"},{"name":"type","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"body","kind":"scalar","type":"String"},{"name":"is_read","kind":"scalar","type":"Boolean"},{"name":"sent_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"UserNotifications"}],"dbName":null},"SupportTicket":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"reason","kind":"enum","type":"SupportReason"},{"name":"status","kind":"enum","type":"SupportStatus"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"UserSupportTickets"},{"name":"order","kind":"object","type":"Order","relationName":"OrderSupportTickets"},{"name":"messages","kind":"object","type":"SupportMessage","relationName":"TicketMessages"}],"dbName":null},"SupportMessage":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"ticket_id","kind":"scalar","type":"String"},{"name":"sender_id","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"SupportRole"},{"name":"content","kind":"scalar","type":"String"},{"name":"sent_at","kind":"scalar","type":"DateTime"},{"name":"ticket","kind":"object","type":"SupportTicket","relationName":"TicketMessages"}],"dbName":null},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"restaurant_id","kind":"scalar","type":"String"},{"name":"driver_id","kind":"scalar","type":"String"},{"name":"delivery_address_id","kind":"scalar","type":"String"},{"name":"promo_code_id","kind":"scalar","type":"String"},{"name":"payment_method_id","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"subtotal","kind":"scalar","type":"Decimal"},{"name":"delivery_fee","kind":"scalar","type":"Decimal"},{"name":"taxes","kind":"scalar","type":"Decimal"},{"name":"tip_amount","kind":"scalar","type":"Decimal"},{"name":"total","kind":"scalar","type":"Decimal"},{"name":"estimated_delivery_at","kind":"scalar","type":"DateTime"},{"name":"delivered_at","kind":"scalar","type":"DateTime"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"UserOrders"},{"name":"restaurant","kind":"object","type":"Restaurant","relationName":"RestaurantOrders"},{"name":"driver","kind":"object","type":"Driver","relationName":"DriverOrders"},{"name":"delivery_address","kind":"object","type":"UserAddress","relationName":"OrderDeliveryAddress"},{"name":"promo_code","kind":"object","type":"PromoCode","relationName":"OrderPromoCode"},{"name":"payment_method","kind":"object","type":"PaymentMethod","relationName":"OrderPaymentMethod"},{"name":"order_items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"status_history","kind":"object","type":"OrderStatusHistory","relationName":"OrderToOrderStatusHistory"},{"name":"reviews","kind":"object","type":"Review","relationName":"OrderReviews"},{"name":"driver_earnings","kind":"object","type":"DriverEarning","relationName":"OrderDriverEarnings"},{"name":"support_tickets","kind":"object","type":"SupportTicket","relationName":"OrderSupportTickets"},{"name":"loyalty_points","kind":"object","type":"LoyaltyPoint","relationName":"OrderLoyaltyPoints"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"menu_item_id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"unit_price","kind":"scalar","type":"Decimal"},{"name":"notes","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"menu_item","kind":"object","type":"MenuItem","relationName":"MenuItemOrderItems"},{"name":"selections","kind":"object","type":"OrderItemSelection","relationName":"OrderItemToOrderItemSelection"}],"dbName":null},"OrderItemSelection":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"order_item_id","kind":"scalar","type":"String"},{"name":"option_value_id","kind":"scalar","type":"String"},{"name":"extra_price","kind":"scalar","type":"Decimal"},{"name":"order_item","kind":"object","type":"OrderItem","relationName":"OrderItemToOrderItemSelection"},{"name":"option_value","kind":"object","type":"MenuItemOptionValue","relationName":"OptionValueSelections"}],"dbName":null},"OrderStatusHistory":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"note","kind":"scalar","type":"String"},{"name":"changed_at","kind":"scalar","type":"DateTime"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderStatusHistory"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"restaurant_id","kind":"scalar","type":"String"},{"name":"driver_id","kind":"scalar","type":"String"},{"name":"restaurant_rating","kind":"scalar","type":"Int"},{"name":"driver_rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"photo_url","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"order","kind":"object","type":"Order","relationName":"OrderReviews"},{"name":"user","kind":"object","type":"User","relationName":"UserReviews"},{"name":"restaurant","kind":"object","type":"Restaurant","relationName":"RestaurantReviews"},{"name":"driver","kind":"object","type":"Driver","relationName":"DriverReviews"}],"dbName":null},"PromoCode":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"code","kind":"scalar","type":"String"},{"name":"type","kind":"enum","type":"PromoType"},{"name":"value","kind":"scalar","type":"Decimal"},{"name":"min_order","kind":"scalar","type":"Decimal"},{"name":"max_uses","kind":"scalar","type":"Int"},{"name":"uses_count","kind":"scalar","type":"Int"},{"name":"expires_at","kind":"scalar","type":"DateTime"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderPromoCode"}],"dbName":null},"LoyaltyPoint":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"points","kind":"scalar","type":"Int"},{"name":"reason","kind":"enum","type":"LoyaltyReason"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"UserLoyaltyPoints"},{"name":"order","kind":"object","type":"Order","relationName":"OrderLoyaltyPoints"}],"dbName":null},"Referral":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"referrer_id","kind":"scalar","type":"String"},{"name":"referred_id","kind":"scalar","type":"String"},{"name":"code","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"ReferralStatus"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"referrer","kind":"object","type":"User","relationName":"ReferralsSent"},{"name":"referred","kind":"object","type":"User","relationName":"ReferralsReceived"}],"dbName":null},"Document":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"type","kind":"enum","type":"DocumentType"},{"name":"file_path","kind":"scalar","type":"String"},{"name":"mime_type","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"DocumentStatus"},{"name":"reject_reason","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"reviewed_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"UserDocuments"}],"dbName":null},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"photo_url","kind":"scalar","type":"String"},{"name":"preferences","kind":"scalar","type":"Json"},{"name":"allergies","kind":"scalar","type":"Json"},{"name":"phone_verified","kind":"scalar","type":"Boolean"},{"name":"role","kind":"enum","type":"Role"},{"name":"stripe_customer_id","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"restaurants","kind":"object","type":"Restaurant","relationName":"UserRestaurants"},{"name":"orders","kind":"object","type":"Order","relationName":"UserOrders"},{"name":"reviews","kind":"object","type":"Review","relationName":"UserReviews"},{"name":"notifications","kind":"object","type":"Notification","relationName":"UserNotifications"},{"name":"support_tickets","kind":"object","type":"SupportTicket","relationName":"UserSupportTickets"},{"name":"loyalty_points","kind":"object","type":"LoyaltyPoint","relationName":"UserLoyaltyPoints"},{"name":"referrals_sent","kind":"object","type":"Referral","relationName":"ReferralsSent"},{"name":"referrals_received","kind":"object","type":"Referral","relationName":"ReferralsReceived"},{"name":"addresses","kind":"object","type":"UserAddress","relationName":"UserToUserAddress"},{"name":"paymentMethods","kind":"object","type":"PaymentMethod","relationName":"PaymentMethodToUser"},{"name":"subscriptions","kind":"object","type":"Subscription","relationName":"SubscriptionToUser"},{"name":"auth_identities","kind":"object","type":"AuthIdentity","relationName":"AuthIdentityToUser"},{"name":"refresh_tokens","kind":"object","type":"RefreshToken","relationName":"RefreshTokenToUser"},{"name":"driver_profile","kind":"object","type":"Driver","relationName":"DriverUser"},{"name":"documents","kind":"object","type":"Document","relationName":"UserDocuments"}],"dbName":null},"AuthIdentity":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"provider","kind":"enum","type":"AuthProvider"},{"name":"provider_user_id","kind":"scalar","type":"String"},{"name":"password_hash","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"AuthIdentityToUser"}],"dbName":null},"RefreshToken":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"token_hash","kind":"scalar","type":"String"},{"name":"expires_at","kind":"scalar","type":"DateTime"},{"name":"revoked_at","kind":"scalar","type":"DateTime"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"RefreshTokenToUser"}],"dbName":null},"UserAddress":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"label","kind":"scalar","type":"String"},{"name":"street","kind":"scalar","type":"String"},{"name":"city","kind":"scalar","type":"String"},{"name":"lat","kind":"scalar","type":"Float"},{"name":"lng","kind":"scalar","type":"Float"},{"name":"is_default","kind":"scalar","type":"Boolean"},{"name":"user","kind":"object","type":"User","relationName":"UserToUserAddress"},{"name":"delivery_orders","kind":"object","type":"Order","relationName":"OrderDeliveryAddress"}],"dbName":null},"PaymentMethod":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"type","kind":"enum","type":"PaymentType"},{"name":"stripe_token","kind":"scalar","type":"String"},{"name":"label","kind":"scalar","type":"String"},{"name":"is_default","kind":"scalar","type":"Boolean"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"PaymentMethodToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderPaymentMethod"}],"dbName":null},"Subscription":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"plan","kind":"enum","type":"SubscriptionPlan"},{"name":"price","kind":"scalar","type":"Decimal"},{"name":"status","kind":"enum","type":"SubscriptionStatus"},{"name":"started_at","kind":"scalar","type":"DateTime"},{"name":"expires_at","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"SubscriptionToUser"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","driver","owner","restaurant","category","item","option","order","menu_item","selections","_count","order_item","option_value","values","options","order_items","menu_items","menu_categories","orders","user","reviews","restaurants","notifications","ticket","messages","support_tickets","loyalty_points","referrer","referred","referrals_sent","referrals_received","delivery_orders","addresses","paymentMethods","subscriptions","auth_identities","refresh_tokens","driver_profile","documents","delivery_address","promo_code","payment_method","status_history","driver_earnings","earnings","Driver.findUnique","Driver.findUniqueOrThrow","Driver.findFirst","Driver.findFirstOrThrow","Driver.findMany","data","Driver.createOne","Driver.createMany","Driver.createManyAndReturn","Driver.updateOne","Driver.updateMany","Driver.updateManyAndReturn","create","update","Driver.upsertOne","Driver.deleteOne","Driver.deleteMany","having","_avg","_sum","_min","_max","Driver.groupBy","Driver.aggregate","DriverEarning.findUnique","DriverEarning.findUniqueOrThrow","DriverEarning.findFirst","DriverEarning.findFirstOrThrow","DriverEarning.findMany","DriverEarning.createOne","DriverEarning.createMany","DriverEarning.createManyAndReturn","DriverEarning.updateOne","DriverEarning.updateMany","DriverEarning.updateManyAndReturn","DriverEarning.upsertOne","DriverEarning.deleteOne","DriverEarning.deleteMany","DriverEarning.groupBy","DriverEarning.aggregate","Restaurant.findUnique","Restaurant.findUniqueOrThrow","Restaurant.findFirst","Restaurant.findFirstOrThrow","Restaurant.findMany","Restaurant.createOne","Restaurant.createMany","Restaurant.createManyAndReturn","Restaurant.updateOne","Restaurant.updateMany","Restaurant.updateManyAndReturn","Restaurant.upsertOne","Restaurant.deleteOne","Restaurant.deleteMany","Restaurant.groupBy","Restaurant.aggregate","MenuCategory.findUnique","MenuCategory.findUniqueOrThrow","MenuCategory.findFirst","MenuCategory.findFirstOrThrow","MenuCategory.findMany","MenuCategory.createOne","MenuCategory.createMany","MenuCategory.createManyAndReturn","MenuCategory.updateOne","MenuCategory.updateMany","MenuCategory.updateManyAndReturn","MenuCategory.upsertOne","MenuCategory.deleteOne","MenuCategory.deleteMany","MenuCategory.groupBy","MenuCategory.aggregate","MenuItem.findUnique","MenuItem.findUniqueOrThrow","MenuItem.findFirst","MenuItem.findFirstOrThrow","MenuItem.findMany","MenuItem.createOne","MenuItem.createMany","MenuItem.createManyAndReturn","MenuItem.updateOne","MenuItem.updateMany","MenuItem.updateManyAndReturn","MenuItem.upsertOne","MenuItem.deleteOne","MenuItem.deleteMany","MenuItem.groupBy","MenuItem.aggregate","MenuItemOption.findUnique","MenuItemOption.findUniqueOrThrow","MenuItemOption.findFirst","MenuItemOption.findFirstOrThrow","MenuItemOption.findMany","MenuItemOption.createOne","MenuItemOption.createMany","MenuItemOption.createManyAndReturn","MenuItemOption.updateOne","MenuItemOption.updateMany","MenuItemOption.updateManyAndReturn","MenuItemOption.upsertOne","MenuItemOption.deleteOne","MenuItemOption.deleteMany","MenuItemOption.groupBy","MenuItemOption.aggregate","MenuItemOptionValue.findUnique","MenuItemOptionValue.findUniqueOrThrow","MenuItemOptionValue.findFirst","MenuItemOptionValue.findFirstOrThrow","MenuItemOptionValue.findMany","MenuItemOptionValue.createOne","MenuItemOptionValue.createMany","MenuItemOptionValue.createManyAndReturn","MenuItemOptionValue.updateOne","MenuItemOptionValue.updateMany","MenuItemOptionValue.updateManyAndReturn","MenuItemOptionValue.upsertOne","MenuItemOptionValue.deleteOne","MenuItemOptionValue.deleteMany","MenuItemOptionValue.groupBy","MenuItemOptionValue.aggregate","Notification.findUnique","Notification.findUniqueOrThrow","Notification.findFirst","Notification.findFirstOrThrow","Notification.findMany","Notification.createOne","Notification.createMany","Notification.createManyAndReturn","Notification.updateOne","Notification.updateMany","Notification.updateManyAndReturn","Notification.upsertOne","Notification.deleteOne","Notification.deleteMany","Notification.groupBy","Notification.aggregate","SupportTicket.findUnique","SupportTicket.findUniqueOrThrow","SupportTicket.findFirst","SupportTicket.findFirstOrThrow","SupportTicket.findMany","SupportTicket.createOne","SupportTicket.createMany","SupportTicket.createManyAndReturn","SupportTicket.updateOne","SupportTicket.updateMany","SupportTicket.updateManyAndReturn","SupportTicket.upsertOne","SupportTicket.deleteOne","SupportTicket.deleteMany","SupportTicket.groupBy","SupportTicket.aggregate","SupportMessage.findUnique","SupportMessage.findUniqueOrThrow","SupportMessage.findFirst","SupportMessage.findFirstOrThrow","SupportMessage.findMany","SupportMessage.createOne","SupportMessage.createMany","SupportMessage.createManyAndReturn","SupportMessage.updateOne","SupportMessage.updateMany","SupportMessage.updateManyAndReturn","SupportMessage.upsertOne","SupportMessage.deleteOne","SupportMessage.deleteMany","SupportMessage.groupBy","SupportMessage.aggregate","Order.findUnique","Order.findUniqueOrThrow","Order.findFirst","Order.findFirstOrThrow","Order.findMany","Order.createOne","Order.createMany","Order.createManyAndReturn","Order.updateOne","Order.updateMany","Order.updateManyAndReturn","Order.upsertOne","Order.deleteOne","Order.deleteMany","Order.groupBy","Order.aggregate","OrderItem.findUnique","OrderItem.findUniqueOrThrow","OrderItem.findFirst","OrderItem.findFirstOrThrow","OrderItem.findMany","OrderItem.createOne","OrderItem.createMany","OrderItem.createManyAndReturn","OrderItem.updateOne","OrderItem.updateMany","OrderItem.updateManyAndReturn","OrderItem.upsertOne","OrderItem.deleteOne","OrderItem.deleteMany","OrderItem.groupBy","OrderItem.aggregate","OrderItemSelection.findUnique","OrderItemSelection.findUniqueOrThrow","OrderItemSelection.findFirst","OrderItemSelection.findFirstOrThrow","OrderItemSelection.findMany","OrderItemSelection.createOne","OrderItemSelection.createMany","OrderItemSelection.createManyAndReturn","OrderItemSelection.updateOne","OrderItemSelection.updateMany","OrderItemSelection.updateManyAndReturn","OrderItemSelection.upsertOne","OrderItemSelection.deleteOne","OrderItemSelection.deleteMany","OrderItemSelection.groupBy","OrderItemSelection.aggregate","OrderStatusHistory.findUnique","OrderStatusHistory.findUniqueOrThrow","OrderStatusHistory.findFirst","OrderStatusHistory.findFirstOrThrow","OrderStatusHistory.findMany","OrderStatusHistory.createOne","OrderStatusHistory.createMany","OrderStatusHistory.createManyAndReturn","OrderStatusHistory.updateOne","OrderStatusHistory.updateMany","OrderStatusHistory.updateManyAndReturn","OrderStatusHistory.upsertOne","OrderStatusHistory.deleteOne","OrderStatusHistory.deleteMany","OrderStatusHistory.groupBy","OrderStatusHistory.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","PromoCode.findUnique","PromoCode.findUniqueOrThrow","PromoCode.findFirst","PromoCode.findFirstOrThrow","PromoCode.findMany","PromoCode.createOne","PromoCode.createMany","PromoCode.createManyAndReturn","PromoCode.updateOne","PromoCode.updateMany","PromoCode.updateManyAndReturn","PromoCode.upsertOne","PromoCode.deleteOne","PromoCode.deleteMany","PromoCode.groupBy","PromoCode.aggregate","LoyaltyPoint.findUnique","LoyaltyPoint.findUniqueOrThrow","LoyaltyPoint.findFirst","LoyaltyPoint.findFirstOrThrow","LoyaltyPoint.findMany","LoyaltyPoint.createOne","LoyaltyPoint.createMany","LoyaltyPoint.createManyAndReturn","LoyaltyPoint.updateOne","LoyaltyPoint.updateMany","LoyaltyPoint.updateManyAndReturn","LoyaltyPoint.upsertOne","LoyaltyPoint.deleteOne","LoyaltyPoint.deleteMany","LoyaltyPoint.groupBy","LoyaltyPoint.aggregate","Referral.findUnique","Referral.findUniqueOrThrow","Referral.findFirst","Referral.findFirstOrThrow","Referral.findMany","Referral.createOne","Referral.createMany","Referral.createManyAndReturn","Referral.updateOne","Referral.updateMany","Referral.updateManyAndReturn","Referral.upsertOne","Referral.deleteOne","Referral.deleteMany","Referral.groupBy","Referral.aggregate","Document.findUnique","Document.findUniqueOrThrow","Document.findFirst","Document.findFirstOrThrow","Document.findMany","Document.createOne","Document.createMany","Document.createManyAndReturn","Document.updateOne","Document.updateMany","Document.updateManyAndReturn","Document.upsertOne","Document.deleteOne","Document.deleteMany","Document.groupBy","Document.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","AuthIdentity.findUnique","AuthIdentity.findUniqueOrThrow","AuthIdentity.findFirst","AuthIdentity.findFirstOrThrow","AuthIdentity.findMany","AuthIdentity.createOne","AuthIdentity.createMany","AuthIdentity.createManyAndReturn","AuthIdentity.updateOne","AuthIdentity.updateMany","AuthIdentity.updateManyAndReturn","AuthIdentity.upsertOne","AuthIdentity.deleteOne","AuthIdentity.deleteMany","AuthIdentity.groupBy","AuthIdentity.aggregate","RefreshToken.findUnique","RefreshToken.findUniqueOrThrow","RefreshToken.findFirst","RefreshToken.findFirstOrThrow","RefreshToken.findMany","RefreshToken.createOne","RefreshToken.createMany","RefreshToken.createManyAndReturn","RefreshToken.updateOne","RefreshToken.updateMany","RefreshToken.updateManyAndReturn","RefreshToken.upsertOne","RefreshToken.deleteOne","RefreshToken.deleteMany","RefreshToken.groupBy","RefreshToken.aggregate","UserAddress.findUnique","UserAddress.findUniqueOrThrow","UserAddress.findFirst","UserAddress.findFirstOrThrow","UserAddress.findMany","UserAddress.createOne","UserAddress.createMany","UserAddress.createManyAndReturn","UserAddress.updateOne","UserAddress.updateMany","UserAddress.updateManyAndReturn","UserAddress.upsertOne","UserAddress.deleteOne","UserAddress.deleteMany","UserAddress.groupBy","UserAddress.aggregate","PaymentMethod.findUnique","PaymentMethod.findUniqueOrThrow","PaymentMethod.findFirst","PaymentMethod.findFirstOrThrow","PaymentMethod.findMany","PaymentMethod.createOne","PaymentMethod.createMany","PaymentMethod.createManyAndReturn","PaymentMethod.updateOne","PaymentMethod.updateMany","PaymentMethod.updateManyAndReturn","PaymentMethod.upsertOne","PaymentMethod.deleteOne","PaymentMethod.deleteMany","PaymentMethod.groupBy","PaymentMethod.aggregate","Subscription.findUnique","Subscription.findUniqueOrThrow","Subscription.findFirst","Subscription.findFirstOrThrow","Subscription.findMany","Subscription.createOne","Subscription.createMany","Subscription.createManyAndReturn","Subscription.updateOne","Subscription.updateMany","Subscription.updateManyAndReturn","Subscription.upsertOne","Subscription.deleteOne","Subscription.deleteMany","Subscription.groupBy","Subscription.aggregate","AND","OR","NOT","id","user_id","SubscriptionPlan","plan","price","SubscriptionStatus","status","started_at","expires_at","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","PaymentType","type","stripe_token","label","is_default","created_at","street","city","lat","lng","token_hash","revoked_at","AuthProvider","provider","provider_user_id","password_hash","email","phone","name","photo_url","preferences","allergies","phone_verified","Role","role","stripe_customer_id","string_contains","string_starts_with","string_ends_with","array_starts_with","array_ends_with","array_contains","every","some","none","DocumentType","file_path","mime_type","DocumentStatus","reject_reason","reviewed_at","referrer_id","referred_id","code","ReferralStatus","order_id","points","LoyaltyReason","reason","PromoType","value","min_order","max_uses","uses_count","restaurant_id","driver_id","restaurant_rating","driver_rating","comment","OrderStatus","note","changed_at","order_item_id","option_value_id","extra_price","menu_item_id","quantity","unit_price","notes","delivery_address_id","promo_code_id","payment_method_id","subtotal","delivery_fee","taxes","tip_amount","total","estimated_delivery_at","delivered_at","ticket_id","sender_id","SupportRole","content","sent_at","SupportReason","SupportStatus","NotificationChannel","channel","title","body","is_read","option_id","item_id","MenuItemOptionType","is_required","category_id","description","is_available","is_popular","daily_stock","position","MenuCategoryAvailability","availability","owner_id","logo_url","address","opening_hours","is_active","rating_avg","cuisine_type","prep_time_min","base_amount","bonus","tip","EarningStatus","paid_at","TransportType","transport_type","is_online","is_verified","provider_provider_user_id","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "vw7yAZADFBQAAIAGACAVAAD7BgAgFgAAgQYAIC4AAPoGACDHAwAA9wYAMMgDAAAyABDJAwAA9wYAMMoDAQAAAAHLAwEAAAAB4wNAAP4FACHmAwgA6QYAIecDCADpBgAh7gMBAAAAAe8DAQD5BQAh8AMBAPkFACHxAwEA-gUAIcoECAD5BgAh0wQAAPgG0wQi1AQgAPwFACHVBCAA_AUAIQEAAAABACAOAwAAmwcAIAkAANkGACDHAwAAmQcAMMgDAAADABDJAwAAmQcAMMoDAQD5BQAh0AMAAJoH0QQiiwQBAPkFACGVBAEA-QUAIaoEEACkBgAhzQQQAKQGACHOBBAApAYAIc8EEACkBgAh0QRAAN0GACEDAwAA2wsAIAkAANAMACDRBAAAqAcAIA4DAACbBwAgCQAA2QYAIMcDAACZBwAwyAMAAAMAEMkDAACZBwAwygMBAAAAAdADAACaB9EEIosEAQD5BQAhlQQBAPkFACGqBBAApAYAIc0EEACkBgAhzgQQAKQGACHPBBAApAYAIdEEQADdBgAhAwAAAAMAIAEAAAQAMAIAAAUAIBUEAADeBgAgEwAAmAcAIBQAAIAGACAWAACBBgAgxwMAAJYHADDIAwAABwAQyQMAAJYHADDKAwEA-QUAIeYDCADpBgAh5wMIAOkGACHwAwEA-QUAIacEEACkBgAhvgQBAPoFACHFBAEA-QUAIcYEAQD6BQAhxwQBAPkFACHIBAAAlwcAIMkEIAD8BQAhygQIAPkGACHLBAEA-QUAIcwEAgClBgAhBwQAAM8MACATAADiDAAgFAAA0AsAIBYAANELACC-BAAAqAcAIMYEAACoBwAgygQAAKgHACAVBAAA3gYAIBMAAJgHACAUAACABgAgFgAAgQYAIMcDAACWBwAwyAMAAAcAEMkDAACWBwAwygMBAAAAAeYDCADpBgAh5wMIAOkGACHwAwEA-QUAIacEEACkBgAhvgQBAPoFACHFBAEA-QUAIcYEAQD6BQAhxwQBAPkFACHIBAAAlwcAIMkEIAD8BQAhygQIAPkGACHLBAEA-QUAIcwEAgClBgAhAwAAAAcAIAEAAAgAMAIAAAkAIAoFAAD-BgAgEgAAlQcAIMcDAACTBwAwyAMAAAsAEMkDAACTBwAwygMBAPkFACHwAwEA-QUAIZQEAQD5BQAhwgQCAKUGACHEBAAAlAfEBCICBQAA0wwAIBIAAOEMACAKBQAA_gYAIBIAAJUHACDHAwAAkwcAMMgDAAALABDJAwAAkwcAMMoDAQAAAAHwAwEA-QUAIZQEAQD5BQAhwgQCAKUGACHEBAAAlAfEBCIDAAAACwAgAQAADAAwAgAADQAgDwYAAJEHACAQAACSBwAgEQAAgwcAIMcDAACQBwAwyAMAAA8AEMkDAACQBwAwygMBAPkFACHOAxAApAYAIfADAQD5BQAh8QMBAPoFACG9BAEA-QUAIb4EAQD6BQAhvwQgAPwFACHABCAA_AUAIcEEAgD9BgAhBgYAAN8MACAQAADgDAAgEQAA1wwAIPEDAACoBwAgvgQAAKgHACDBBAAAqAcAIA8GAACRBwAgEAAAkgcAIBEAAIMHACDHAwAAkAcAMMgDAAAPABDJAwAAkAcAMMoDAQAAAAHOAxAApAYAIfADAQD5BQAh8QMBAPoFACG9BAEA-QUAIb4EAQD6BQAhvwQgAPwFACHABCAA_AUAIcEEAgD9BgAhAwAAAA8AIAEAABAAMAIAABEAIAoHAACGBwAgDwAAjwcAIMcDAACNBwAwyAMAABMAEMkDAACNBwAwygMBAPkFACHfAwAAjge8BCLwAwEA-QUAIboEAQD5BQAhvAQgAPwFACECBwAA2QwAIA8AAN4MACAKBwAAhgcAIA8AAI8HACDHAwAAjQcAMMgDAAATABDJAwAAjQcAMMoDAQAAAAHfAwAAjge8BCLwAwEA-QUAIboEAQD5BQAhvAQgAPwFACEDAAAAEwAgAQAAFAAwAgAAFQAgCQgAAIwHACALAACHBwAgxwMAAIsHADDIAwAAFwAQyQMAAIsHADDKAwEA-QUAIeEDAQD5BQAhngQQAKQGACG5BAEA-QUAIQIIAADdDAAgCwAA2gwAIAkIAACMBwAgCwAAhwcAIMcDAACLBwAwyAMAABcAEMkDAACLBwAwygMBAAAAAeEDAQD5BQAhngQQAKQGACG5BAEA-QUAIQMAAAAXACABAAAYADACAAAZACAJDQAAiQcAIA4AAIoHACDHAwAAiAcAMMgDAAAbABDJAwAAiAcAMMoDAQD5BQAhnAQBAPkFACGdBAEA-QUAIZ4EEACkBgAhAg0AANsMACAOAADcDAAgCQ0AAIkHACAOAACKBwAgxwMAAIgHADDIAwAAGwAQyQMAAIgHADDKAwEAAAABnAQBAPkFACGdBAEA-QUAIZ4EEACkBgAhAwAAABsAIAEAABwAMAIAAB0AIAMAAAAbACABAAAcADACAAAdACABAAAAGwAgAQAAABsAIAEAAAAXACAMCQAA2QYAIAoAAIYHACALAACHBwAgxwMAAIUHADDIAwAAIwAQyQMAAIUHADDKAwEA-QUAIYsEAQD5BQAhnwQBAPkFACGgBAIApQYAIaEEEACkBgAhogQBAPoFACEECQAA0AwAIAoAANkMACALAADaDAAgogQAAKgHACAMCQAA2QYAIAoAAIYHACALAACHBwAgxwMAAIUHADDIAwAAIwAQyQMAAIUHADDKAwEAAAABiwQBAPkFACGfBAEA-QUAIaAEAgClBgAhoQQQAKQGACGiBAEA-gUAIQMAAAAjACABAAAkADACAAAlACABAAAAEwAgAQAAACMAIAEAAAAPACAfAwAAiwYAIAUAAP4GACARAACDBwAgFQAA3gYAIBYAAIEGACAbAACDBgAgHAAAhAYAICkAAIAHACAqAACBBwAgKwAAggcAICwAAIQHACAtAAD6BgAgxwMAAP8GADDIAwAAKgAQyQMAAP8GADDKAwEA-QUAIcsDAQD5BQAh0AMAANgGmgQi4wNAAP4FACGUBAEA-QUAIZUEAQD6BQAhowQBAPkFACGkBAEA-gUAIaUEAQD6BQAhpgQQAKQGACGnBBAApAYAIagEEACkBgAhqQQQAKQGACGqBBAApAYAIasEQAD-BQAhrARAAN0GACEQAwAA2wsAIAUAANMMACARAADXDAAgFQAAzwwAIBYAANELACAbAADTCwAgHAAA1AsAICkAANQMACAqAADVDAAgKwAA1gwAICwAANgMACAtAADODAAglQQAAKgHACCkBAAAqAcAIKUEAACoBwAgrAQAAKgHACAfAwAAiwYAIAUAAP4GACARAACDBwAgFQAA3gYAIBYAAIEGACAbAACDBgAgHAAAhAYAICkAAIAHACAqAACBBwAgKwAAggcAICwAAIQHACAtAAD6BgAgxwMAAP8GADDIAwAAKgAQyQMAAP8GADDKAwEAAAABywMBAPkFACHQAwAA2AaaBCLjA0AA_gUAIZQEAQD5BQAhlQQBAPoFACGjBAEA-QUAIaQEAQD6BQAhpQQBAPoFACGmBBAApAYAIacEEACkBgAhqAQQAKQGACGpBBAApAYAIaoEEACkBgAhqwRAAP4FACGsBEAA3QYAIQMAAAAqACABAAArADACAAAsACARAwAAiwYAIAUAAP4GACAJAADZBgAgFQAA3gYAIMcDAAD8BgAwyAMAAC4AEMkDAAD8BgAwygMBAPkFACHLAwEA-QUAIeMDQAD-BQAh8QMBAPoFACGLBAEA-QUAIZQEAQD5BQAhlQQBAPoFACGWBAIApQYAIZcEAgD9BgAhmAQBAPoFACEIAwAA2wsAIAUAANMMACAJAADQDAAgFQAAzwwAIPEDAACoBwAglQQAAKgHACCXBAAAqAcAIJgEAACoBwAgEQMAAIsGACAFAAD-BgAgCQAA2QYAIBUAAN4GACDHAwAA_AYAMMgDAAAuABDJAwAA_AYAMMoDAQAAAAHLAwEA-QUAIeMDQAD-BQAh8QMBAPoFACGLBAEAAAABlAQBAPkFACGVBAEA-gUAIZYEAgClBgAhlwQCAP0GACGYBAEA-gUAIQMAAAAuACABAAAvADACAAAwACAUFAAAgAYAIBUAAPsGACAWAACBBgAgLgAA-gYAIMcDAAD3BgAwyAMAADIAEMkDAAD3BgAwygMBAPkFACHLAwEA-gUAIeMDQAD-BQAh5gMIAOkGACHnAwgA6QYAIe4DAQD5BQAh7wMBAPkFACHwAwEA-QUAIfEDAQD6BQAhygQIAPkGACHTBAAA-AbTBCLUBCAA_AUAIdUEIAD8BQAhAQAAADIAIAEAAAALACABAAAAKgAgAQAAAC4AIAMAAAAqACABAAArADACAAAsACADAAAALgAgAQAALwAwAgAAMAAgDBUAAN4GACDHAwAA9QYAMMgDAAA5ABDJAwAA9QYAMMoDAQD5BQAhywMBAPkFACHfAwEA-QUAIbEEQAD-BQAhtQQAAPYGtQQitgQBAPkFACG3BAEA-QUAIbgEIAD8BQAhARUAAM8MACAMFQAA3gYAIMcDAAD1BgAwyAMAADkAEMkDAAD1BgAwygMBAAAAAcsDAQD5BQAh3wMBAPkFACGxBEAA_gUAIbUEAAD2BrUEIrYEAQD5BQAhtwQBAPkFACG4BCAA_AUAIQMAAAA5ACABAAA6ADACAAA7ACAMCQAA2QYAIBUAAN4GACAaAAD0BgAgxwMAAPEGADDIAwAAPQAQyQMAAPEGADDKAwEA-QUAIcsDAQD5BQAh0AMAAPMGtAQi4wNAAP4FACGLBAEA-QUAIY4EAADyBrMEIgMJAADQDAAgFQAAzwwAIBoAANIMACAMCQAA2QYAIBUAAN4GACAaAAD0BgAgxwMAAPEGADDIAwAAPQAQyQMAAPEGADDKAwEAAAABywMBAPkFACHQAwAA8wa0BCLjA0AA_gUAIYsEAQD5BQAhjgQAAPIGswQiAwAAAD0AIAEAAD4AMAIAAD8AIAoZAADwBgAgxwMAAO4GADDIAwAAQQAQyQMAAO4GADDKAwEA-QUAIfYDAADvBrAEIq0EAQD5BQAhrgQBAPkFACGwBAEA-QUAIbEEQAD-BQAhARkAANEMACAKGQAA8AYAIMcDAADuBgAwyAMAAEEAEMkDAADuBgAwygMBAAAAAfYDAADvBrAEIq0EAQD5BQAhrgQBAPkFACGwBAEA-QUAIbEEQAD-BQAhAwAAAEEAIAEAAEIAMAIAAEMAIAEAAABBACALCQAA2QYAIBUAAN4GACDHAwAA7AYAMMgDAABGABDJAwAA7AYAMMoDAQD5BQAhywMBAPkFACHjA0AA_gUAIYsEAQD5BQAhjAQCAKUGACGOBAAA7QaOBCICCQAA0AwAIBUAAM8MACALCQAA2QYAIBUAAN4GACDHAwAA7AYAMMgDAABGABDJAwAA7AYAMMoDAQAAAAHLAwEA-QUAIeMDQAD-BQAhiwQBAPkFACGMBAIApQYAIY4EAADtBo4EIgMAAABGACABAABHADACAABIACALHQAA3gYAIB4AAN4GACDHAwAA6gYAMMgDAABKABDJAwAA6gYAMMoDAQD5BQAh0AMAAOsGiwQi4wNAAP4FACGHBAEA-QUAIYgEAQD5BQAhiQQBAPkFACECHQAAzwwAIB4AAM8MACALHQAA3gYAIB4AAN4GACDHAwAA6gYAMMgDAABKABDJAwAA6gYAMMoDAQAAAAHQAwAA6waLBCLjA0AA_gUAIYcEAQD5BQAhiAQBAPkFACGJBAEAAAABAwAAAEoAIAEAAEsAMAIAAEwAIAMAAABKACABAABLADACAABMACANFQAA3gYAICEAAIAGACDHAwAA6AYAMMgDAABPABDJAwAA6AYAMMoDAQD5BQAhywMBAPkFACHhAwEA-QUAIeIDIAD8BQAh5AMBAPkFACHlAwEA-QUAIeYDCADpBgAh5wMIAOkGACECFQAAzwwAICEAANALACANFQAA3gYAICEAAIAGACDHAwAA6AYAMMgDAABPABDJAwAA6AYAMMoDAQAAAAHLAwEA-QUAIeEDAQD5BQAh4gMgAPwFACHkAwEA-QUAIeUDAQD5BQAh5gMIAOkGACHnAwgA6QYAIQMAAABPACABAABQADACAABRACADAAAAKgAgAQAAKwAwAgAALAAgAQAAACoAIAwUAACABgAgFQAA3gYAIMcDAADmBgAwyAMAAFUAEMkDAADmBgAwygMBAPkFACHLAwEA-QUAId8DAADnBt8DIuADAQD6BQAh4QMBAPkFACHiAyAA_AUAIeMDQAD-BQAhAxQAANALACAVAADPDAAg4AMAAKgHACAMFAAAgAYAIBUAAN4GACDHAwAA5gYAMMgDAABVABDJAwAA5gYAMMoDAQAAAAHLAwEA-QUAId8DAADnBt8DIuADAQD6BQAh4QMBAPkFACHiAyAA_AUAIeMDQAD-BQAhAwAAAFUAIAEAAFYAMAIAAFcAIAMAAAAqACABAAArADACAAAsACABAAAAKgAgCxUAAN4GACDHAwAA4wYAMMgDAABbABDJAwAA4wYAMMoDAQD5BQAhywMBAPkFACHNAwAA5AbNAyLOAxAApAYAIdADAADlBtADItEDQAD-BQAh0gNAAP4FACEBFQAAzwwAIAsVAADeBgAgxwMAAOMGADDIAwAAWwAQyQMAAOMGADDKAwEAAAABywMBAPkFACHNAwAA5AbNAyLOAxAApAYAIdADAADlBtADItEDQAD-BQAh0gNAAP4FACEDAAAAWwAgAQAAXAAwAgAAXQAgChUAAN4GACDHAwAA4QYAMMgDAABfABDJAwAA4QYAMMoDAQD5BQAhywMBAPkFACHjA0AA_gUAIesDAADiBusDIuwDAQD5BQAh7QMBAPoFACECFQAAzwwAIO0DAACoBwAgCxUAAN4GACDHAwAA4QYAMMgDAABfABDJAwAA4QYAMMoDAQAAAAHLAwEA-QUAIeMDQAD-BQAh6wMAAOIG6wMi7AMBAPkFACHtAwEA-gUAIdYEAADgBgAgAwAAAF8AIAEAAGAAMAIAAGEAIAoVAADeBgAgxwMAAN8GADDIAwAAYwAQyQMAAN8GADDKAwEA-QUAIcsDAQD5BQAh0gNAAP4FACHjA0AA_gUAIegDAQD5BQAh6QNAAN0GACECFQAAzwwAIOkDAACoBwAgChUAAN4GACDHAwAA3wYAMMgDAABjABDJAwAA3wYAMMoDAQAAAAHLAwEA-QUAIdIDQAD-BQAh4wNAAP4FACHoAwEAAAAB6QNAAN0GACEDAAAAYwAgAQAAZAAwAgAAZQAgAQAAADIAIA0VAADeBgAgxwMAANoGADDIAwAAaAAQyQMAANoGADDKAwEA-QUAIcsDAQD5BQAh0AMAANwGhQQi3wMAANsGggQi4wNAAP4FACGCBAEA-QUAIYMEAQD5BQAhhQQBAPoFACGGBEAA3QYAIQMVAADPDAAghQQAAKgHACCGBAAAqAcAIA0VAADeBgAgxwMAANoGADDIAwAAaAAQyQMAANoGADDKAwEAAAABywMBAPkFACHQAwAA3AaFBCLfAwAA2waCBCLjA0AA_gUAIYIEAQD5BQAhgwQBAPkFACGFBAEA-gUAIYYEQADdBgAhAwAAAGgAIAEAAGkAMAIAAGoAIAEAAAAHACABAAAAKgAgAQAAAC4AIAEAAAA5ACABAAAAPQAgAQAAAEYAIAEAAABKACABAAAASgAgAQAAAE8AIAEAAABVACABAAAAWwAgAQAAAF8AIAEAAABjACABAAAAaAAgAQAAADIAIAwUAACABgAgxwMAAKIGADDIAwAAewAQyQMAAKIGADDKAwEA-QUAIdIDQAD-BQAh3wMAAKMGkAQiiQQBAPkFACGQBBAApAYAIZEEEACkBgAhkgQCAKUGACGTBAIApQYAIQEAAAB7ACADAAAAKgAgAQAAKwAwAgAALAAgAQAAACoAIAEAAABVACADAAAAIwAgAQAAJAAwAgAAJQAgCQkAANkGACDHAwAA1wYAMMgDAACBAQAQyQMAANcGADDKAwEA-QUAIdADAADYBpoEIosEAQD5BQAhmgQBAPoFACGbBEAA_gUAIQIJAADQDAAgmgQAAKgHACAJCQAA2QYAIMcDAADXBgAwyAMAAIEBABDJAwAA1wYAMMoDAQAAAAHQAwAA2AaaBCKLBAEA-QUAIZoEAQD6BQAhmwRAAP4FACEDAAAAgQEAIAEAAIIBADACAACDAQAgAwAAAC4AIAEAAC8AMAIAADAAIAMAAAADACABAAAEADACAAAFACADAAAAPQAgAQAAPgAwAgAAPwAgAwAAAEYAIAEAAEcAMAIAAEgAIAEAAAAjACABAAAAgQEAIAEAAAAuACABAAAAAwAgAQAAAD0AIAEAAABGACADAAAAKgAgAQAAKwAwAgAALAAgAwAAAC4AIAEAAC8AMAIAADAAIB0UAACABgAgFgAAgQYAIBcAAP8FACAYAACCBgAgGwAAgwYAIBwAAIQGACAfAACFBgAgIAAAhQYAICIAAIYGACAjAACHBgAgJAAAiAYAICUAAIkGACAmAACKBgAgJwAAiwYAICgAAIwGACDHAwAA-AUAMMgDAACRAQAQyQMAAPgFADDKAwEA-QUAIeMDQAD-BQAh7gMBAPkFACHvAwEA-QUAIfADAQD5BQAh8QMBAPoFACHyAwAA-wUAIPMDAAD7BQAg9AMgAPwFACH2AwAA_QX2AyL3AwEA-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AEAAAABzAQCAAAAAQE0AADJAQAgDsoDAQAAAAHmAwgAAAAB5wMIAAAAAfADAQAAAAGnBBAAAAABvgQBAAAAAcUEAQAAAAHGBAEAAAABxwQBAAAAAcgEgAAAAAHJBCAAAAABygQIAAAAAcsEAQAAAAHMBAIAAAABATQAAMsBADABNAAAywEAMBIEAADADAAgEwAA1QoAIBQAANYKACAWAADXCgAgygMBAKEHACHmAwgA1wgAIecDCADXCAAh8AMBAKEHACGnBBAAowcAIb4EAQCtBwAhxQQBAKEHACHGBAEArQcAIccEAQChBwAhyASAAAAAAckEIACuBwAhygQIAJkJACHLBAEAoQcAIcwEAgDTBwAhAgAAAAkAIDQAAM4BACAOygMBAKEHACHmAwgA1wgAIecDCADXCAAh8AMBAKEHACGnBBAAowcAIb4EAQCtBwAhxQQBAKEHACHGBAEArQcAIccEAQChBwAhyASAAAAAAckEIACuBwAhygQIAJkJACHLBAEAoQcAIcwEAgDTBwAhAgAAAAcAIDQAANABACACAAAABwAgNAAA0AEAIAMAAAAJACA7AADJAQAgPAAAzgEAIAEAAAAJACABAAAABwAgCAwAALsMACBBAAC8DAAgQgAAvwwAIEMAAL4MACBEAAC9DAAgvgQAAKgHACDGBAAAqAcAIMoEAACoBwAgEccDAADKBgAwyAMAANcBABDJAwAAygYAMMoDAQDLBQAh5gMIAOcFACHnAwgA5wUAIfADAQDLBQAhpwQQAM0FACG-BAEA3QUAIcUEAQDLBQAhxgQBAN0FACHHBAEAywUAIcgEAADLBgAgyQQgAN4FACHKBAgAzAYAIcsEAQDLBQAhzAQCAJkGACEDAAAABwAgAQAA1gEAMEAAANcBACADAAAABwAgAQAACAAwAgAACQAgAQAAAA0AIAEAAAANACADAAAACwAgAQAADAAwAgAADQAgAwAAAAsAIAEAAAwAMAIAAA0AIAMAAAALACABAAAMADACAAANACAHBQAAugwAIBIAALsLACDKAwEAAAAB8AMBAAAAAZQEAQAAAAHCBAIAAAABxAQAAADEBAIBNAAA3wEAIAXKAwEAAAAB8AMBAAAAAZQEAQAAAAHCBAIAAAABxAQAAADEBAIBNAAA4QEAMAE0AADhAQAwBwUAALkMACASAAD2CgAgygMBAKEHACHwAwEAoQcAIZQEAQChBwAhwgQCANMHACHEBAAA9ArEBCICAAAADQAgNAAA5AEAIAXKAwEAoQcAIfADAQChBwAhlAQBAKEHACHCBAIA0wcAIcQEAAD0CsQEIgIAAAALACA0AADmAQAgAgAAAAsAIDQAAOYBACADAAAADQAgOwAA3wEAIDwAAOQBACABAAAADQAgAQAAAAsAIAUMAAC0DAAgQQAAtQwAIEIAALgMACBDAAC3DAAgRAAAtgwAIAjHAwAAxgYAMMgDAADtAQAQyQMAAMYGADDKAwEAywUAIfADAQDLBQAhlAQBAMsFACHCBAIAmQYAIcQEAADHBsQEIgMAAAALACABAADsAQAwQAAA7QEAIAMAAAALACABAAAMADACAAANACABAAAAEQAgAQAAABEAIAMAAAAPACABAAAQADACAAARACADAAAADwAgAQAAEAAwAgAAEQAgAwAAAA8AIAEAABAAMAIAABEAIAwGAACzDAAgEAAAuAsAIBEAALkLACDKAwEAAAABzgMQAAAAAfADAQAAAAHxAwEAAAABvQQBAAAAAb4EAQAAAAG_BCAAAAABwAQgAAAAAcEEAgAAAAEBNAAA9QEAIAnKAwEAAAABzgMQAAAAAfADAQAAAAHxAwEAAAABvQQBAAAAAb4EAQAAAAG_BCAAAAABwAQgAAAAAcEEAgAAAAEBNAAA9wEAMAE0AAD3AQAwDAYAALIMACAQAACCCwAgEQAAgwsAIMoDAQChBwAhzgMQAKMHACHwAwEAoQcAIfEDAQCtBwAhvQQBAKEHACG-BAEArQcAIb8EIACuBwAhwAQgAK4HACHBBAIAkQgAIQIAAAARACA0AAD6AQAgCcoDAQChBwAhzgMQAKMHACHwAwEAoQcAIfEDAQCtBwAhvQQBAKEHACG-BAEArQcAIb8EIACuBwAhwAQgAK4HACHBBAIAkQgAIQIAAAAPACA0AAD8AQAgAgAAAA8AIDQAAPwBACADAAAAEQAgOwAA9QEAIDwAAPoBACABAAAAEQAgAQAAAA8AIAgMAACtDAAgQQAArgwAIEIAALEMACBDAACwDAAgRAAArwwAIPEDAACoBwAgvgQAAKgHACDBBAAAqAcAIAzHAwAAxQYAMMgDAACDAgAQyQMAAMUGADDKAwEAywUAIc4DEADNBQAh8AMBAMsFACHxAwEA3QUAIb0EAQDLBQAhvgQBAN0FACG_BCAA3gUAIcAEIADeBQAhwQQCAKcGACEDAAAADwAgAQAAggIAMEAAAIMCACADAAAADwAgAQAAEAAwAgAAEQAgAQAAABUAIAEAAAAVACADAAAAEwAgAQAAFAAwAgAAFQAgAwAAABMAIAEAABQAMAIAABUAIAMAAAATACABAAAUADACAAAVACAHBwAArAwAIA8AALYLACDKAwEAAAAB3wMAAAC8BALwAwEAAAABugQBAAAAAbwEIAAAAAEBNAAAiwIAIAXKAwEAAAAB3wMAAAC8BALwAwEAAAABugQBAAAAAbwEIAAAAAEBNAAAjQIAMAE0AACNAgAwBwcAAKsMACAPAACbCwAgygMBAKEHACHfAwAAmQu8BCLwAwEAoQcAIboEAQChBwAhvAQgAK4HACECAAAAFQAgNAAAkAIAIAXKAwEAoQcAId8DAACZC7wEIvADAQChBwAhugQBAKEHACG8BCAArgcAIQIAAAATACA0AACSAgAgAgAAABMAIDQAAJICACADAAAAFQAgOwAAiwIAIDwAAJACACABAAAAFQAgAQAAABMAIAMMAACoDAAgQwAAqgwAIEQAAKkMACAIxwMAAMEGADDIAwAAmQIAEMkDAADBBgAwygMBAMsFACHfAwAAwga8BCLwAwEAywUAIboEAQDLBQAhvAQgAN4FACEDAAAAEwAgAQAAmAIAMEAAAJkCACADAAAAEwAgAQAAFAAwAgAAFQAgAQAAABkAIAEAAAAZACADAAAAFwAgAQAAGAAwAgAAGQAgAwAAABcAIAEAABgAMAIAABkAIAMAAAAXACABAAAYADACAAAZACAGCAAApwwAIAsAALQLACDKAwEAAAAB4QMBAAAAAZ4EEAAAAAG5BAEAAAABATQAAKECACAEygMBAAAAAeEDAQAAAAGeBBAAAAABuQQBAAAAAQE0AACjAgAwATQAAKMCADAGCAAApgwAIAsAAKcLACDKAwEAoQcAIeEDAQChBwAhngQQAKMHACG5BAEAoQcAIQIAAAAZACA0AACmAgAgBMoDAQChBwAh4QMBAKEHACGeBBAAowcAIbkEAQChBwAhAgAAABcAIDQAAKgCACACAAAAFwAgNAAAqAIAIAMAAAAZACA7AAChAgAgPAAApgIAIAEAAAAZACABAAAAFwAgBQwAAKEMACBBAACiDAAgQgAApQwAIEMAAKQMACBEAACjDAAgB8cDAADABgAwyAMAAK8CABDJAwAAwAYAMMoDAQDLBQAh4QMBAMsFACGeBBAAzQUAIbkEAQDLBQAhAwAAABcAIAEAAK4CADBAAACvAgAgAwAAABcAIAEAABgAMAIAABkAIAEAAAA7ACABAAAAOwAgAwAAADkAIAEAADoAMAIAADsAIAMAAAA5ACABAAA6ADACAAA7ACADAAAAOQAgAQAAOgAwAgAAOwAgCRUAAKAMACDKAwEAAAABywMBAAAAAd8DAQAAAAGxBEAAAAABtQQAAAC1BAK2BAEAAAABtwQBAAAAAbgEIAAAAAEBNAAAtwIAIAjKAwEAAAABywMBAAAAAd8DAQAAAAGxBEAAAAABtQQAAAC1BAK2BAEAAAABtwQBAAAAAbgEIAAAAAEBNAAAuQIAMAE0AAC5AgAwCRUAAJ8MACDKAwEAoQcAIcsDAQChBwAh3wMBAKEHACGxBEAApQcAIbUEAAC1CrUEIrYEAQChBwAhtwQBAKEHACG4BCAArgcAIQIAAAA7ACA0AAC8AgAgCMoDAQChBwAhywMBAKEHACHfAwEAoQcAIbEEQAClBwAhtQQAALUKtQQitgQBAKEHACG3BAEAoQcAIbgEIACuBwAhAgAAADkAIDQAAL4CACACAAAAOQAgNAAAvgIAIAMAAAA7ACA7AAC3AgAgPAAAvAIAIAEAAAA7ACABAAAAOQAgAwwAAJwMACBDAACeDAAgRAAAnQwAIAvHAwAAvAYAMMgDAADFAgAQyQMAALwGADDKAwEAywUAIcsDAQDLBQAh3wMBAMsFACGxBEAAzwUAIbUEAAC9BrUEIrYEAQDLBQAhtwQBAMsFACG4BCAA3gUAIQMAAAA5ACABAADEAgAwQAAAxQIAIAMAAAA5ACABAAA6ADACAAA7ACABAAAAPwAgAQAAAD8AIAMAAAA9ACABAAA-ADACAAA_ACADAAAAPQAgAQAAPgAwAgAAPwAgAwAAAD0AIAEAAD4AMAIAAD8AIAkJAACqCgAgFQAA9gcAIBoAAPcHACDKAwEAAAABywMBAAAAAdADAAAAtAQC4wNAAAAAAYsEAQAAAAGOBAAAALMEAgE0AADNAgAgBsoDAQAAAAHLAwEAAAAB0AMAAAC0BALjA0AAAAABiwQBAAAAAY4EAAAAswQCATQAAM8CADABNAAAzwIAMAkJAACoCgAgFQAA5gcAIBoAAOcHACDKAwEAoQcAIcsDAQChBwAh0AMAAOQHtAQi4wNAAKUHACGLBAEAoQcAIY4EAADjB7MEIgIAAAA_ACA0AADSAgAgBsoDAQChBwAhywMBAKEHACHQAwAA5Ae0BCLjA0AApQcAIYsEAQChBwAhjgQAAOMHswQiAgAAAD0AIDQAANQCACACAAAAPQAgNAAA1AIAIAMAAAA_ACA7AADNAgAgPAAA0gIAIAEAAAA_ACABAAAAPQAgAwwAAJkMACBDAACbDAAgRAAAmgwAIAnHAwAAtQYAMMgDAADbAgAQyQMAALUGADDKAwEAywUAIcsDAQDLBQAh0AMAALcGtAQi4wNAAM8FACGLBAEAywUAIY4EAAC2BrMEIgMAAAA9ACABAADaAgAwQAAA2wIAIAMAAAA9ACABAAA-ADACAAA_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_AsAIEIAAP8LACBDAAD-CwAgRAAA_QsAIPEDAACoBwAglQQAAKgHACCXBAAAqAcAIJgEAACoBwAgDccDAACmBgAwyAMAAOcDABDJAwAApgYAMMoDAQDLBQAhywMBAMsFACHjA0AAzwUAIfEDAQDdBQAhiwQBAMsFACGUBAEAywUAIZUEAQDdBQAhlgQCAJkGACGXBAIApwYAIZgEAQDdBQAhAwAAAC4AIAEAAOYDADBAAADnAwAgAwAAAC4AIAEAAC8AMAIAADAAIAwUAACABgAgxwMAAKIGADDIAwAAewAQyQMAAKIGADDKAwEAAAAB0gNAAP4FACHfAwAAowaQBCKJBAEAAAABkAQQAKQGACGRBBAApAYAIZIEAgClBgAhkwQCAKUGACEBAAAA6gMAIAEAAADqAwAgARQAANALACADAAAAewAgAQAA7QMAMAIAAOoDACADAAAAewAgAQAA7QMAMAIAAOoDACADAAAAewAgAQAA7QMAMAIAAOoDACAJFAAA-gsAIMoDAQAAAAHSA0AAAAAB3wMAAACQBAKJBAEAAAABkAQQAAAAAZEEEAAAAAGSBAIAAAABkwQCAAAAAQE0AADxAwAgCMoDAQAAAAHSA0AAAAAB3wMAAACQBAKJBAEAAAABkAQQAAAAAZEEEAAAAAGSBAIAAAABkwQCAAAAAQE0AADzAwAwATQAAPMDADAJFAAA8AsAIMoDAQChBwAh0gNAAKUHACHfAwAA7wuQBCKJBAEAoQcAIZAEEACjBwAhkQQQAKMHACGSBAIA0wcAIZMEAgDTBwAhAgAAAOoDACA0AAD2AwAgCMoDAQChBwAh0gNAAKUHACHfAwAA7wuQBCKJBAEAoQcAIZAEEACjBwAhkQQQAKMHACGSBAIA0wcAIZMEAgDTBwAhAgAAAHsAIDQAAPgDACACAAAAewAgNAAA-AMAIAMAAADqAwAgOwAA8QMAIDwAAPYDACABAAAA6gMAIAEAAAB7ACAFDAAA6gsAIEEAAOsLACBCAADuCwAgQwAA7QsAIEQAAOwLACALxwMAAJ4GADDIAwAA_wMAEMkDAACeBgAwygMBAMsFACHSA0AAzwUAId8DAACfBpAEIokEAQDLBQAhkAQQAM0FACGRBBAAzQUAIZIEAgCZBgAhkwQCAJkGACEDAAAAewAgAQAA_gMAMEAAAP8DACADAAAAewAgAQAA7QMAMAIAAOoDACABAAAASAAgAQAAAEgAIAMAAABGACABAABHADACAABIACADAAAARgAgAQAARwAwAgAASAAgAwAAAEYAIAEAAEcAMAIAAEgAIAgJAACfCgAgFQAA2AcAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAYsEAQAAAAGMBAIAAAABjgQAAACOBAIBNAAAhwQAIAbKAwEAAAABywMBAAAAAeMDQAAAAAGLBAEAAAABjAQCAAAAAY4EAAAAjgQCATQAAIkEADABNAAAiQQAMAgJAACdCgAgFQAA1gcAIMoDAQChBwAhywMBAKEHACHjA0AApQcAIYsEAQChBwAhjAQCANMHACGOBAAA1AeOBCICAAAASAAgNAAAjAQAIAbKAwEAoQcAIcsDAQChBwAh4wNAAKUHACGLBAEAoQcAIYwEAgDTBwAhjgQAANQHjgQiAgAAAEYAIDQAAI4EACACAAAARgAgNAAAjgQAIAMAAABIACA7AACHBAAgPAAAjAQAIAEAAABIACABAAAARgAgBQwAAOULACBBAADmCwAgQgAA6QsAIEMAAOgLACBEAADnCwAgCccDAACYBgAwyAMAAJUEABDJAwAAmAYAMMoDAQDLBQAhywMBAMsFACHjA0AAzwUAIYsEAQDLBQAhjAQCAJkGACGOBAAAmgaOBCIDAAAARgAgAQAAlAQAMEAAAJUEACADAAAARgAgAQAARwAwAgAASAAgAQAAAEwAIAEAAABMACADAAAASgAgAQAASwAwAgAATAAgAwAAAEoAIAEAAEsAMAIAAEwAIAMAAABKACABAABLADACAABMACAIHQAAiQoAIB4AAJQKACDKAwEAAAAB0AMAAACLBALjA0AAAAABhwQBAAAAAYgEAQAAAAGJBAEAAAABATQAAJ0EACAGygMBAAAAAdADAAAAiwQC4wNAAAAAAYcEAQAAAAGIBAEAAAABiQQBAAAAAQE0AACfBAAwATQAAJ8EADAIHQAAhwoAIB4AAJIKACDKAwEAoQcAIdADAACFCosEIuMDQAClBwAhhwQBAKEHACGIBAEAoQcAIYkEAQChBwAhAgAAAEwAIDQAAKIEACAGygMBAKEHACHQAwAAhQqLBCLjA0AApQcAIYcEAQChBwAhiAQBAKEHACGJBAEAoQcAIQIAAABKACA0AACkBAAgAgAAAEoAIDQAAKQEACADAAAATAAgOwAAnQQAIDwAAKIEACABAAAATAAgAQAAAEoAIAMMAADiCwAgQwAA5AsAIEQAAOMLACAJxwMAAJQGADDIAwAAqwQAEMkDAACUBgAwygMBAMsFACHQAwAAlQaLBCLjA0AAzwUAIYcEAQDLBQAhiAQBAMsFACGJBAEAywUAIQMAAABKACABAACqBAAwQAAAqwQAIAMAAABKACABAABLADACAABMACABAAAAagAgAQAAAGoAIAMAAABoACABAABpADACAABqACADAAAAaAAgAQAAaQAwAgAAagAgAwAAAGgAIAEAAGkAMAIAAGoAIAoVAADhCwAgygMBAAAAAcsDAQAAAAHQAwAAAIUEAt8DAAAAggQC4wNAAAAAAYIEAQAAAAGDBAEAAAABhQQBAAAAAYYEQAAAAAEBNAAAswQAIAnKAwEAAAABywMBAAAAAdADAAAAhQQC3wMAAACCBALjA0AAAAABggQBAAAAAYMEAQAAAAGFBAEAAAABhgRAAAAAAQE0AAC1BAAwATQAALUEADAKFQAA4AsAIMoDAQChBwAhywMBAKEHACHQAwAAkAmFBCLfAwAAjwmCBCLjA0AApQcAIYIEAQChBwAhgwQBAKEHACGFBAEArQcAIYYEQAC8BwAhAgAAAGoAIDQAALgEACAJygMBAKEHACHLAwEAoQcAIdADAACQCYUEIt8DAACPCYIEIuMDQAClBwAhggQBAKEHACGDBAEAoQcAIYUEAQCtBwAhhgRAALwHACECAAAAaAAgNAAAugQAIAIAAABoACA0AAC6BAAgAwAAAGoAIDsAALMEACA8AAC4BAAgAQAAAGoAIAEAAABoACAFDAAA3QsAIEMAAN8LACBEAADeCwAghQQAAKgHACCGBAAAqAcAIAzHAwAAjQYAMMgDAADBBAAQyQMAAI0GADDKAwEAywUAIcsDAQDLBQAh0AMAAI8GhQQi3wMAAI4GggQi4wNAAM8FACGCBAEAywUAIYMEAQDLBQAhhQQBAN0FACGGBEAA6wUAIQMAAABoACABAADABAAwQAAAwQQAIAMAAABoACABAABpADACAABqACAdFAAAgAYAIBYAAIEGACAXAAD_BQAgGAAAggYAIBsAAIMGACAcAACEBgAgHwAAhQYAICAAAIUGACAiAACGBgAgIwAAhwYAICQAAIgGACAlAACJBgAgJgAAigYAICcAAIsGACAoAACMBgAgxwMAAPgFADDIAwAAkQEAEMkDAAD4BQAwygMBAAAAAeMDQAD-BQAh7gMBAAAAAe8DAQD5BQAh8AMBAPkFACHxAwEA-gUAIfIDAAD7BQAg8wMAAPsFACD0AyAA_AUAIfYDAAD9BfYDIvcDAQD6BQAhAQAAAMQEACABAAAAxAQAIBMUAADQCwAgFgAA0QsAIBcAAM8LACAYAADSCwAgGwAA0wsAIBwAANQLACAfAADVCwAgIAAA1QsAICIAANYLACAjAADXCwAgJAAA2AsAICUAANkLACAmAADaCwAgJwAA2wsAICgAANwLACDxAwAAqAcAIPIDAACoBwAg8wMAAKgHACD3AwAAqAcAIAMAAACRAQAgAQAAxwQAMAIAAMQEACADAAAAkQEAIAEAAMcEADACAADEBAAgAwAAAJEBACABAADHBAAwAgAAxAQAIBoUAADBCwAgFgAAwgsAIBcAAMALACAYAADDCwAgGwAAxAsAIBwAAMULACAfAADGCwAgIAAAxwsAICIAAMgLACAjAADJCwAgJAAAygsAICUAAMsLACAmAADMCwAgJwAAzQsAICgAAM4LACDKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAEBNAAAywQAIAvKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAEBNAAAzQQAMAE0AADNBAAwGhQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAbAAD6CAAgHAAA-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIQIAAADEBAAgNAAA0AQAIAvKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACECAAAAkQEAIDQAANIEACACAAAAkQEAIDQAANIEACADAAAAxAQAIDsAAMsEACA8AADQBAAgAQAAAMQEACABAAAAkQEAIAcMAADyCAAgQwAA9AgAIEQAAPMIACDxAwAAqAcAIPIDAACoBwAg8wMAAKgHACD3AwAAqAcAIA7HAwAA8gUAMMgDAADZBAAQyQMAAPIFADDKAwEAywUAIeMDQADPBQAh7gMBAMsFACHvAwEAywUAIfADAQDLBQAh8QMBAN0FACHyAwAA8wUAIPMDAADzBQAg9AMgAN4FACH2AwAA9AX2AyL3AwEA3QUAIQMAAACRAQAgAQAA2AQAMEAAANkEACADAAAAkQEAIAEAAMcEADACAADEBAAgAQAAAGEAIAEAAABhACADAAAAXwAgAQAAYAAwAgAAYQAgAwAAAF8AIAEAAGAAMAIAAGEAIAMAAABfACABAABgADACAABhACAHFQAA8QgAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAesDAAAA6wMC7AMBAAAAAe0DAQAAAAEBNAAA4QQAIAbKAwEAAAABywMBAAAAAeMDQAAAAAHrAwAAAOsDAuwDAQAAAAHtAwEAAAABATQAAOMEADABNAAA4wQAMAcVAADwCAAgygMBAKEHACHLAwEAoQcAIeMDQAClBwAh6wMAAO8I6wMi7AMBAKEHACHtAwEArQcAIQIAAABhACA0AADmBAAgBsoDAQChBwAhywMBAKEHACHjA0AApQcAIesDAADvCOsDIuwDAQChBwAh7QMBAK0HACECAAAAXwAgNAAA6AQAIAIAAABfACA0AADoBAAgAwAAAGEAIDsAAOEEACA8AADmBAAgAQAAAGEAIAEAAABfACAEDAAA7AgAIEMAAO4IACBEAADtCAAg7QMAAKgHACAJxwMAAO4FADDIAwAA7wQAEMkDAADuBQAwygMBAMsFACHLAwEAywUAIeMDQADPBQAh6wMAAO8F6wMi7AMBAMsFACHtAwEA3QUAIQMAAABfACABAADuBAAwQAAA7wQAIAMAAABfACABAABgADACAABhACABAAAAZQAgAQAAAGUAIAMAAABjACABAABkADACAABlACADAAAAYwAgAQAAZAAwAgAAZQAgAwAAAGMAIAEAAGQAMAIAAGUAIAcVAADrCAAgygMBAAAAAcsDAQAAAAHSA0AAAAAB4wNAAAAAAegDAQAAAAHpA0AAAAABATQAAPcEACAGygMBAAAAAcsDAQAAAAHSA0AAAAAB4wNAAAAAAegDAQAAAAHpA0AAAAABATQAAPkEADABNAAA-QQAMAcVAADqCAAgygMBAKEHACHLAwEAoQcAIdIDQAClBwAh4wNAAKUHACHoAwEAoQcAIekDQAC8BwAhAgAAAGUAIDQAAPwEACAGygMBAKEHACHLAwEAoQcAIdIDQAClBwAh4wNAAKUHACHoAwEAoQcAIekDQAC8BwAhAgAAAGMAIDQAAP4EACACAAAAYwAgNAAA_gQAIAMAAABlACA7AAD3BAAgPAAA_AQAIAEAAABlACABAAAAYwAgBAwAAOcIACBDAADpCAAgRAAA6AgAIOkDAACoBwAgCccDAADqBQAwyAMAAIUFABDJAwAA6gUAMMoDAQDLBQAhywMBAMsFACHSA0AAzwUAIeMDQADPBQAh6AMBAMsFACHpA0AA6wUAIQMAAABjACABAACEBQAwQAAAhQUAIAMAAABjACABAABkADACAABlACABAAAAUQAgAQAAAFEAIAMAAABPACABAABQADACAABRACADAAAATwAgAQAAUAAwAgAAUQAgAwAAAE8AIAEAAFAAMAIAAFEAIAoVAADlCAAgIQAA5ggAIMoDAQAAAAHLAwEAAAAB4QMBAAAAAeIDIAAAAAHkAwEAAAAB5QMBAAAAAeYDCAAAAAHnAwgAAAABATQAAI0FACAIygMBAAAAAcsDAQAAAAHhAwEAAAAB4gMgAAAAAeQDAQAAAAHlAwEAAAAB5gMIAAAAAecDCAAAAAEBNAAAjwUAMAE0AACPBQAwChUAANgIACAhAADZCAAgygMBAKEHACHLAwEAoQcAIeEDAQChBwAh4gMgAK4HACHkAwEAoQcAIeUDAQChBwAh5gMIANcIACHnAwgA1wgAIQIAAABRACA0AACSBQAgCMoDAQChBwAhywMBAKEHACHhAwEAoQcAIeIDIACuBwAh5AMBAKEHACHlAwEAoQcAIeYDCADXCAAh5wMIANcIACECAAAATwAgNAAAlAUAIAIAAABPACA0AACUBQAgAwAAAFEAIDsAAI0FACA8AACSBQAgAQAAAFEAIAEAAABPACAFDAAA0ggAIEEAANMIACBCAADWCAAgQwAA1QgAIEQAANQIACALxwMAAOYFADDIAwAAmwUAEMkDAADmBQAwygMBAMsFACHLAwEAywUAIeEDAQDLBQAh4gMgAN4FACHkAwEAywUAIeUDAQDLBQAh5gMIAOcFACHnAwgA5wUAIQMAAABPACABAACaBQAwQAAAmwUAIAMAAABPACABAABQADACAABRACABAAAAVwAgAQAAAFcAIAMAAABVACABAABWADACAABXACADAAAAVQAgAQAAVgAwAgAAVwAgAwAAAFUAIAEAAFYAMAIAAFcAIAkUAADRCAAgFQAA0AgAIMoDAQAAAAHLAwEAAAAB3wMAAADfAwLgAwEAAAAB4QMBAAAAAeIDIAAAAAHjA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-AMBAAAAAfkDAQAAAAH6AwEAAAAB-wOAAAAAAfwDgAAAAAH9A4AAAAABBwwAANEFACBDAAD2BQAgRAAA9gUAINMDAAAA9gMC1AMAAAD2AwjVAwAAAPYDCNoDAAD1BfYDIgcMAADRBQAgQwAA9gUAIEQAAPYFACDTAwAAAPYDAtQDAAAA9gMI1QMAAAD2AwjaAwAA9QX2AyIE0wMAAAD2AwLUAwAAAPYDCNUDAAAA9gMI2gMAAPYF9gMiDNMDgAAAAAHWA4AAAAAB1wOAAAAAAdgDgAAAAAHZA4AAAAAB2gOAAAAAAfgDAQAAAAH5AwEAAAAB-gMBAAAAAfsDgAAAAAH8A4AAAAAB_QOAAAAAAR0UAACABgAgFgAAgQYAIBcAAP8FACAYAACCBgAgGwAAgwYAIBwAAIQGACAfAACFBgAgIAAAhQYAICIAAIYGACAjAACHBgAgJAAAiAYAICUAAIkGACAmAACKBgAgJwAAiwYAICgAAIwGACDHAwAA-AUAMMgDAACRAQAQyQMAAPgFADDKAwEA-QUAIeMDQAD-BQAh7gMBAPkFACHvAwEA-QUAIfADAQD5BQAh8QMBAPoFACHyAwAA-wUAIPMDAAD7BQAg9AMgAPwFACH2AwAA_QX2AyL3AwEA-gUAIQvTAwEAAAAB1AMBAAAABNUDAQAAAATWAwEAAAAB1wMBAAAAAdgDAQAAAAHZAwEAAAAB2gMBANoFACHbAwEAAAAB3AMBAAAAAd0DAQAAAAEL0wMBAAAAAdQDAQAAAAXVAwEAAAAF1gMBAAAAAdcDAQAAAAHYAwEAAAAB2QMBAAAAAdoDAQDjBQAh2wMBAAAAAdwDAQAAAAHdAwEAAAABDNMDgAAAAAHWA4AAAAAB1wOAAAAAAdgDgAAAAAHZA4AAAAAB2gOAAAAAAfgDAQAAAAH5AwEAAAAB-gMBAAAAAfsDgAAAAAH8A4AAAAAB_QOAAAAAAQLTAyAAAAAB2gMgAOAFACEE0wMAAAD2AwLUAwAAAPYDCNUDAAAA9gMI2gMAAPYF9gMiCNMDQAAAAAHUA0AAAAAE1QNAAAAABNYDQAAAAAHXA0AAAAAB2ANAAAAAAdkDQAAAAAHaA0AA0gUAIQP-AwAABwAg_wMAAAcAIIAEAAAHACAD_gMAACoAIP8DAAAqACCABAAAKgAgA_4DAAAuACD_AwAALgAggAQAAC4AIAP-AwAAOQAg_wMAADkAIIAEAAA5ACAD_gMAAD0AIP8DAAA9ACCABAAAPQAgA_4DAABGACD_AwAARgAggAQAAEYAIAP-AwAASgAg_wMAAEoAIIAEAABKACAD_gMAAE8AIP8DAABPACCABAAATwAgA_4DAABVACD_AwAAVQAggAQAAFUAIAP-AwAAWwAg_wMAAFsAIIAEAABbACAD_gMAAF8AIP8DAABfACCABAAAXwAgA_4DAABjACD_AwAAYwAggAQAAGMAIBYUAACABgAgFQAA-wYAIBYAAIEGACAuAAD6BgAgxwMAAPcGADDIAwAAMgAQyQMAAPcGADDKAwEA-QUAIcsDAQD6BQAh4wNAAP4FACHmAwgA6QYAIecDCADpBgAh7gMBAPkFACHvAwEA-QUAIfADAQD5BQAh8QMBAPoFACHKBAgA-QYAIdMEAAD4BtMEItQEIAD8BQAh1QQgAPwFACHXBAAAMgAg2AQAADIAIAP-AwAAaAAg_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_BgAg0wMAAAC1BALUAwAAALUECNUDAAAAtQQI2gMAAL4GtQQiBwwAANEFACBDAAC_BgAgRAAAvwYAINMDAAAAtQQC1AMAAAC1BAjVAwAAALUECNoDAAC-BrUEIgTTAwAAALUEAtQDAAAAtQQI1QMAAAC1BAjaAwAAvwa1BCIHxwMAAMAGADDIAwAArwIAEMkDAADABgAwygMBAMsFACHhAwEAywUAIZ4EEADNBQAhuQQBAMsFACEIxwMAAMEGADDIAwAAmQIAEMkDAADBBgAwygMBAMsFACHfAwAAwga8BCLwAwEAywUAIboEAQDLBQAhvAQgAN4FACEHDAAA0QUAIEMAAMQGACBEAADEBgAg0wMAAAC8BALUAwAAALwECNUDAAAAvAQI2gMAAMMGvAQiBwwAANEFACBDAADEBgAgRAAAxAYAINMDAAAAvAQC1AMAAAC8BAjVAwAAALwECNoDAADDBrwEIgTTAwAAALwEAtQDAAAAvAQI1QMAAAC8BAjaAwAAxAa8BCIMxwMAAMUGADDIAwAAgwIAEMkDAADFBgAwygMBAMsFACHOAxAAzQUAIfADAQDLBQAh8QMBAN0FACG9BAEAywUAIb4EAQDdBQAhvwQgAN4FACHABCAA3gUAIcEEAgCnBgAhCMcDAADGBgAwyAMAAO0BABDJAwAAxgYAMMoDAQDLBQAh8AMBAMsFACGUBAEAywUAIcIEAgCZBgAhxAQAAMcGxAQiBwwAANEFACBDAADJBgAgRAAAyQYAINMDAAAAxAQC1AMAAADEBAjVAwAAAMQECNoDAADIBsQEIgcMAADRBQAgQwAAyQYAIEQAAMkGACDTAwAAAMQEAtQDAAAAxAQI1QMAAADEBAjaAwAAyAbEBCIE0wMAAADEBALUAwAAAMQECNUDAAAAxAQI2gMAAMkGxAQiEccDAADKBgAwyAMAANcBABDJAwAAygYAMMoDAQDLBQAh5gMIAOcFACHnAwgA5wUAIfADAQDLBQAhpwQQAM0FACG-BAEA3QUAIcUEAQDLBQAhxgQBAN0FACHHBAEAywUAIcgEAADLBgAgyQQgAN4FACHKBAgAzAYAIcsEAQDLBQAhzAQCAJkGACEPDAAA0QUAIEMAAM4GACBEAADOBgAg0wOAAAAAAdYDgAAAAAHXA4AAAAAB2AOAAAAAAdkDgAAAAAHaA4AAAAAB-AMBAAAAAfkDAQAAAAH6AwEAAAAB-wOAAAAAAfwDgAAAAAH9A4AAAAABDQwAAOIFACBBAACpBgAgQgAAqQYAIEMAAKkGACBEAACpBgAg0wMIAAAAAdQDCAAAAAXVAwgAAAAF1gMIAAAAAdcDCAAAAAHYAwgAAAAB2QMIAAAAAdoDCADNBgAhDQwAAOIFACBBAACpBgAgQgAAqQYAIEMAAKkGACBEAACpBgAg0wMIAAAAAdQDCAAAAAXVAwgAAAAF1gMIAAAAAdcDCAAAAAHYAwgAAAAB2QMIAAAAAdoDCADNBgAhDNMDgAAAAAHWA4AAAAAB1wOAAAAAAdgDgAAAAAHZA4AAAAAB2gOAAAAAAfgDAQAAAAH5AwEAAAAB-gMBAAAAAfsDgAAAAAH8A4AAAAAB_QOAAAAAAQzHAwAAzwYAMMgDAADBAQAQyQMAAM8GADDKAwEAywUAIdADAADQBtEEIosEAQDLBQAhlQQBAMsFACGqBBAAzQUAIc0EEADNBQAhzgQQAM0FACHPBBAAzQUAIdEEQADrBQAhBwwAANEFACBDAADSBgAgRAAA0gYAINMDAAAA0QQC1AMAAADRBAjVAwAAANEECNoDAADRBtEEIgcMAADRBQAgQwAA0gYAIEQAANIGACDTAwAAANEEAtQDAAAA0QQI1QMAAADRBAjaAwAA0QbRBCIE0wMAAADRBALUAwAAANEECNUDAAAA0QQI2gMAANIG0QQiEMcDAADTBgAwyAMAAKsBABDJAwAA0wYAMMoDAQDLBQAhywMBAN0FACHjA0AAzwUAIeYDCADnBQAh5wMIAOcFACHuAwEAywUAIe8DAQDLBQAh8AMBAMsFACHxAwEA3QUAIcoECADMBgAh0wQAANQG0wQi1AQgAN4FACHVBCAA3gUAIQcMAADRBQAgQwAA1gYAIEQAANYGACDTAwAAANMEAtQDAAAA0wQI1QMAAADTBAjaAwAA1QbTBCIHDAAA0QUAIEMAANYGACBEAADWBgAg0wMAAADTBALUAwAAANMECNUDAAAA0wQI2gMAANUG0wQiBNMDAAAA0wQC1AMAAADTBAjVAwAAANMECNoDAADWBtMEIgkJAADZBgAgxwMAANcGADDIAwAAgQEAEMkDAADXBgAwygMBAPkFACHQAwAA2AaaBCKLBAEA-QUAIZoEAQD6BQAhmwRAAP4FACEE0wMAAACaBALUAwAAAJoECNUDAAAAmgQI2gMAAK0GmgQiIQMAAIsGACAFAAD-BgAgEQAAgwcAIBUAAN4GACAWAACBBgAgGwAAgwYAIBwAAIQGACApAACABwAgKgAAgQcAICsAAIIHACAsAACEBwAgLQAA-gYAIMcDAAD_BgAwyAMAACoAEMkDAAD_BgAwygMBAPkFACHLAwEA-QUAIdADAADYBpoEIuMDQAD-BQAhlAQBAPkFACGVBAEA-gUAIaMEAQD5BQAhpAQBAPoFACGlBAEA-gUAIaYEEACkBgAhpwQQAKQGACGoBBAApAYAIakEEACkBgAhqgQQAKQGACGrBEAA_gUAIawEQADdBgAh1wQAACoAINgEAAAqACANFQAA3gYAIMcDAADaBgAwyAMAAGgAEMkDAADaBgAwygMBAPkFACHLAwEA-QUAIdADAADcBoUEIt8DAADbBoIEIuMDQAD-BQAhggQBAPkFACGDBAEA-QUAIYUEAQD6BQAhhgRAAN0GACEE0wMAAACCBALUAwAAAIIECNUDAAAAggQI2gMAAJMGggQiBNMDAAAAhQQC1AMAAACFBAjVAwAAAIUECNoDAACRBoUEIgjTA0AAAAAB1ANAAAAABdUDQAAAAAXWA0AAAAAB1wNAAAAAAdgDQAAAAAHZA0AAAAAB2gNAAO0FACEfFAAAgAYAIBYAAIEGACAXAAD_BQAgGAAAggYAIBsAAIMGACAcAACEBgAgHwAAhQYAICAAAIUGACAiAACGBgAgIwAAhwYAICQAAIgGACAlAACJBgAgJgAAigYAICcAAIsGACAoAACMBgAgxwMAAPgFADDIAwAAkQEAEMkDAAD4BQAwygMBAPkFACHjA0AA_gUAIe4DAQD5BQAh7wMBAPkFACHwAwEA-QUAIfEDAQD6BQAh8gMAAPsFACDzAwAA-wUAIPQDIAD8BQAh9gMAAP0F9gMi9wMBAPoFACHXBAAAkQEAINgEAACRAQAgChUAAN4GACDHAwAA3wYAMMgDAABjABDJAwAA3wYAMMoDAQD5BQAhywMBAPkFACHSA0AA_gUAIeMDQAD-BQAh6AMBAPkFACHpA0AA3QYAIQLrAwAAAOsDAuwDAQAAAAEKFQAA3gYAIMcDAADhBgAwyAMAAF8AEMkDAADhBgAwygMBAPkFACHLAwEA-QUAIeMDQAD-BQAh6wMAAOIG6wMi7AMBAPkFACHtAwEA-gUAIQTTAwAAAOsDAtQDAAAA6wMI1QMAAADrAwjaAwAA8QXrAyILFQAA3gYAIMcDAADjBgAwyAMAAFsAEMkDAADjBgAwygMBAPkFACHLAwEA-QUAIc0DAADkBs0DIs4DEACkBgAh0AMAAOUG0AMi0QNAAP4FACHSA0AA_gUAIQTTAwAAAM0DAtQDAAAAzQMI1QMAAADNAwjaAwAA2AXNAyIE0wMAAADQAwLUAwAAANADCNUDAAAA0AMI2gMAANQF0AMiDBQAAIAGACAVAADeBgAgxwMAAOYGADDIAwAAVQAQyQMAAOYGADDKAwEA-QUAIcsDAQD5BQAh3wMAAOcG3wMi4AMBAPoFACHhAwEA-QUAIeIDIAD8BQAh4wNAAP4FACEE0wMAAADfAwLUAwAAAN8DCNUDAAAA3wMI2gMAAOUF3wMiDRUAAN4GACAhAACABgAgxwMAAOgGADDIAwAATwAQyQMAAOgGADDKAwEA-QUAIcsDAQD5BQAh4QMBAPkFACHiAyAA_AUAIeQDAQD5BQAh5QMBAPkFACHmAwgA6QYAIecDCADpBgAhCNMDCAAAAAHUAwgAAAAE1QMIAAAABNYDCAAAAAHXAwgAAAAB2AMIAAAAAdkDCAAAAAHaAwgA6QUAIQsdAADeBgAgHgAA3gYAIMcDAADqBgAwyAMAAEoAEMkDAADqBgAwygMBAPkFACHQAwAA6waLBCLjA0AA_gUAIYcEAQD5BQAhiAQBAPkFACGJBAEA-QUAIQTTAwAAAIsEAtQDAAAAiwQI1QMAAACLBAjaAwAAlwaLBCILCQAA2QYAIBUAAN4GACDHAwAA7AYAMMgDAABGABDJAwAA7AYAMMoDAQD5BQAhywMBAPkFACHjA0AA_gUAIYsEAQD5BQAhjAQCAKUGACGOBAAA7QaOBCIE0wMAAACOBALUAwAAAI4ECNUDAAAAjgQI2gMAAJwGjgQiChkAAPAGACDHAwAA7gYAMMgDAABBABDJAwAA7gYAMMoDAQD5BQAh9gMAAO8GsAQirQQBAPkFACGuBAEA-QUAIbAEAQD5BQAhsQRAAP4FACEE0wMAAACwBALUAwAAALAECNUDAAAAsAQI2gMAALQGsAQiDgkAANkGACAVAADeBgAgGgAA9AYAIMcDAADxBgAwyAMAAD0AEMkDAADxBgAwygMBAPkFACHLAwEA-QUAIdADAADzBrQEIuMDQAD-BQAhiwQBAPkFACGOBAAA8gazBCLXBAAAPQAg2AQAAD0AIAwJAADZBgAgFQAA3gYAIBoAAPQGACDHAwAA8QYAMMgDAAA9ABDJAwAA8QYAMMoDAQD5BQAhywMBAPkFACHQAwAA8wa0BCLjA0AA_gUAIYsEAQD5BQAhjgQAAPIGswQiBNMDAAAAswQC1AMAAACzBAjVAwAAALMECNoDAAC7BrMEIgTTAwAAALQEAtQDAAAAtAQI1QMAAAC0BAjaAwAAuQa0BCID_gMAAEEAIP8DAABBACCABAAAQQAgDBUAAN4GACDHAwAA9QYAMMgDAAA5ABDJAwAA9QYAMMoDAQD5BQAhywMBAPkFACHfAwEA-QUAIbEEQAD-BQAhtQQAAPYGtQQitgQBAPkFACG3BAEA-QUAIbgEIAD8BQAhBNMDAAAAtQQC1AMAAAC1BAjVAwAAALUECNoDAAC_BrUEIhQUAACABgAgFQAA-wYAIBYAAIEGACAuAAD6BgAgxwMAAPcGADDIAwAAMgAQyQMAAPcGADDKAwEA-QUAIcsDAQD6BQAh4wNAAP4FACHmAwgA6QYAIecDCADpBgAh7gMBAPkFACHvAwEA-QUAIfADAQD5BQAh8QMBAPoFACHKBAgA-QYAIdMEAAD4BtMEItQEIAD8BQAh1QQgAPwFACEE0wMAAADTBALUAwAAANMECNUDAAAA0wQI2gMAANYG0wQiCNMDCAAAAAHUAwgAAAAF1QMIAAAABdYDCAAAAAHXAwgAAAAB2AMIAAAAAdkDCAAAAAHaAwgAqQYAIQP-AwAAAwAg_wMAAAMAIIAEAAADACAfFAAAgAYAIBYAAIEGACAXAAD_BQAgGAAAggYAIBsAAIMGACAcAACEBgAgHwAAhQYAICAAAIUGACAiAACGBgAgIwAAhwYAICQAAIgGACAlAACJBgAgJgAAigYAICcAAIsGACAoAACMBgAgxwMAAPgFADDIAwAAkQEAEMkDAAD4BQAwygMBAPkFACHjA0AA_gUAIe4DAQD5BQAh7wMBAPkFACHwAwEA-QUAIfEDAQD6BQAh8gMAAPsFACDzAwAA-wUAIPQDIAD8BQAh9gMAAP0F9gMi9wMBAPoFACHXBAAAkQEAINgEAACRAQAgEQMAAIsGACAFAAD-BgAgCQAA2QYAIBUAAN4GACDHAwAA_AYAMMgDAAAuABDJAwAA_AYAMMoDAQD5BQAhywMBAPkFACHjA0AA_gUAIfEDAQD6BQAhiwQBAPkFACGUBAEA-QUAIZUEAQD6BQAhlgQCAKUGACGXBAIA_QYAIZgEAQD6BQAhCNMDAgAAAAHUAwIAAAAF1QMCAAAABdYDAgAAAAHXAwIAAAAB2AMCAAAAAdkDAgAAAAHaAwIA4gUAIRcEAADeBgAgEwAAmAcAIBQAAIAGACAWAACBBgAgxwMAAJYHADDIAwAABwAQyQMAAJYHADDKAwEA-QUAIeYDCADpBgAh5wMIAOkGACHwAwEA-QUAIacEEACkBgAhvgQBAPoFACHFBAEA-QUAIcYEAQD6BQAhxwQBAPkFACHIBAAAlwcAIMkEIAD8BQAhygQIAPkGACHLBAEA-QUAIcwEAgClBgAh1wQAAAcAINgEAAAHACAfAwAAiwYAIAUAAP4GACARAACDBwAgFQAA3gYAIBYAAIEGACAbAACDBgAgHAAAhAYAICkAAIAHACAqAACBBwAgKwAAggcAICwAAIQHACAtAAD6BgAgxwMAAP8GADDIAwAAKgAQyQMAAP8GADDKAwEA-QUAIcsDAQD5BQAh0AMAANgGmgQi4wNAAP4FACGUBAEA-QUAIZUEAQD6BQAhowQBAPkFACGkBAEA-gUAIaUEAQD6BQAhpgQQAKQGACGnBBAApAYAIagEEACkBgAhqQQQAKQGACGqBBAApAYAIasEQAD-BQAhrARAAN0GACEPFQAA3gYAICEAAIAGACDHAwAA6AYAMMgDAABPABDJAwAA6AYAMMoDAQD5BQAhywMBAPkFACHhAwEA-QUAIeIDIAD8BQAh5AMBAPkFACHlAwEA-QUAIeYDCADpBgAh5wMIAOkGACHXBAAATwAg2AQAAE8AIA4UAACABgAgxwMAAKIGADDIAwAAewAQyQMAAKIGADDKAwEA-QUAIdIDQAD-BQAh3wMAAKMGkAQiiQQBAPkFACGQBBAApAYAIZEEEACkBgAhkgQCAKUGACGTBAIApQYAIdcEAAB7ACDYBAAAewAgDhQAAIAGACAVAADeBgAgxwMAAOYGADDIAwAAVQAQyQMAAOYGADDKAwEA-QUAIcsDAQD5BQAh3wMAAOcG3wMi4AMBAPoFACHhAwEA-QUAIeIDIAD8BQAh4wNAAP4FACHXBAAAVQAg2AQAAFUAIAP-AwAAIwAg_wMAACMAIIAEAAAjACAD_gMAAIEBACD_AwAAgQEAIIAEAACBAQAgDAkAANkGACAKAACGBwAgCwAAhwcAIMcDAACFBwAwyAMAACMAEMkDAACFBwAwygMBAPkFACGLBAEA-QUAIZ8EAQD5BQAhoAQCAKUGACGhBBAApAYAIaIEAQD6BQAhEQYAAJEHACAQAACSBwAgEQAAgwcAIMcDAACQBwAwyAMAAA8AEMkDAACQBwAwygMBAPkFACHOAxAApAYAIfADAQD5BQAh8QMBAPoFACG9BAEA-QUAIb4EAQD6BQAhvwQgAPwFACHABCAA_AUAIcEEAgD9BgAh1wQAAA8AINgEAAAPACAD_gMAABsAIP8DAAAbACCABAAAGwAgCQ0AAIkHACAOAACKBwAgxwMAAIgHADDIAwAAGwAQyQMAAIgHADDKAwEA-QUAIZwEAQD5BQAhnQQBAPkFACGeBBAApAYAIQ4JAADZBgAgCgAAhgcAIAsAAIcHACDHAwAAhQcAMMgDAAAjABDJAwAAhQcAMMoDAQD5BQAhiwQBAPkFACGfBAEA-QUAIaAEAgClBgAhoQQQAKQGACGiBAEA-gUAIdcEAAAjACDYBAAAIwAgCwgAAIwHACALAACHBwAgxwMAAIsHADDIAwAAFwAQyQMAAIsHADDKAwEA-QUAIeEDAQD5BQAhngQQAKQGACG5BAEA-QUAIdcEAAAXACDYBAAAFwAgCQgAAIwHACALAACHBwAgxwMAAIsHADDIAwAAFwAQyQMAAIsHADDKAwEA-QUAIeEDAQD5BQAhngQQAKQGACG5BAEA-QUAIQwHAACGBwAgDwAAjwcAIMcDAACNBwAwyAMAABMAEMkDAACNBwAwygMBAPkFACHfAwAAjge8BCLwAwEA-QUAIboEAQD5BQAhvAQgAPwFACHXBAAAEwAg2AQAABMAIAoHAACGBwAgDwAAjwcAIMcDAACNBwAwyAMAABMAEMkDAACNBwAwygMBAPkFACHfAwAAjge8BCLwAwEA-QUAIboEAQD5BQAhvAQgAPwFACEE0wMAAAC8BALUAwAAALwECNUDAAAAvAQI2gMAAMQGvAQiA_4DAAAXACD_AwAAFwAggAQAABcAIA8GAACRBwAgEAAAkgcAIBEAAIMHACDHAwAAkAcAMMgDAAAPABDJAwAAkAcAMMoDAQD5BQAhzgMQAKQGACHwAwEA-QUAIfEDAQD6BQAhvQQBAPkFACG-BAEA-gUAIb8EIAD8BQAhwAQgAPwFACHBBAIA_QYAIQwFAAD-BgAgEgAAlQcAIMcDAACTBwAwyAMAAAsAEMkDAACTBwAwygMBAPkFACHwAwEA-QUAIZQEAQD5BQAhwgQCAKUGACHEBAAAlAfEBCLXBAAACwAg2AQAAAsAIAP-AwAAEwAg_wMAABMAIIAEAAATACAKBQAA_gYAIBIAAJUHACDHAwAAkwcAMMgDAAALABDJAwAAkwcAMMoDAQD5BQAh8AMBAPkFACGUBAEA-QUAIcIEAgClBgAhxAQAAJQHxAQiBNMDAAAAxAQC1AMAAADEBAjVAwAAAMQECNoDAADJBsQEIgP-AwAADwAg_wMAAA8AIIAEAAAPACAVBAAA3gYAIBMAAJgHACAUAACABgAgFgAAgQYAIMcDAACWBwAwyAMAAAcAEMkDAACWBwAwygMBAPkFACHmAwgA6QYAIecDCADpBgAh8AMBAPkFACGnBBAApAYAIb4EAQD6BQAhxQQBAPkFACHGBAEA-gUAIccEAQD5BQAhyAQAAJcHACDJBCAA_AUAIcoECAD5BgAhywQBAPkFACHMBAIApQYAIQzTA4AAAAAB1gOAAAAAAdcDgAAAAAHYA4AAAAAB2QOAAAAAAdoDgAAAAAH4AwEAAAAB-QMBAAAAAfoDAQAAAAH7A4AAAAAB_AOAAAAAAf0DgAAAAAED_gMAAAsAIP8DAAALACCABAAACwAgDgMAAJsHACAJAADZBgAgxwMAAJkHADDIAwAAAwAQyQMAAJkHADDKAwEA-QUAIdADAACaB9EEIosEAQD5BQAhlQQBAPkFACGqBBAApAYAIc0EEACkBgAhzgQQAKQGACHPBBAApAYAIdEEQADdBgAhBNMDAAAA0QQC1AMAAADRBAjVAwAAANEECNoDAADSBtEEIhYUAACABgAgFQAA-wYAIBYAAIEGACAuAAD6BgAgxwMAAPcGADDIAwAAMgAQyQMAAPcGADDKAwEA-QUAIcsDAQD6BQAh4wNAAP4FACHmAwgA6QYAIecDCADpBgAh7gMBAPkFACHvAwEA-QUAIfADAQD5BQAh8QMBAPoFACHKBAgA-QYAIdMEAAD4BtMEItQEIAD8BQAh1QQgAPwFACHXBAAAMgAg2AQAADIAIAAAAAAAAdwEAQAAAAEB3AQAAADNAwIF3AQQAAAAAeIEEAAAAAHjBBAAAAAB5AQQAAAAAeUEEAAAAAEB3AQAAADQAwIB3ARAAAAAAQU7AAC7DgAgPAAAvg4AINkEAAC8DgAg2gQAAL0OACDfBAAAxAQAIAM7AAC7DgAg2QQAALwOACDfBAAAxAQAIAAAAAAB3AQAAADfAwIB3AQBAAAAAQHcBCAAAAABBTsAAOwNACA8AAC5DgAg2QQAAO0NACDaBAAAuA4AIN8EAADEBAAgCzsAALEHADA8AAC2BwAw2QQAALIHADDaBAAAswcAMNsEAAC0BwAg3AQAALUHADDdBAAAtQcAMN4EAAC1BwAw3wQAALUHADDgBAAAtwcAMOEEAAC4BwAwGgMAAMcIACAFAADGCAAgEQAAyggAIBUAAMUIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKgAAyQgAICwAAMsIACAtAADNCAAgygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGkBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAAQIAAAAsACA7AADECAAgAwAAACwAIDsAAMQIACA8AAC9BwAgATQAALcOADAfAwAAiwYAIAUAAP4GACARAACDBwAgFQAA3gYAIBYAAIEGACAbAACDBgAgHAAAhAYAICkAAIAHACAqAACBBwAgKwAAggcAICwAAIQHACAtAAD6BgAgxwMAAP8GADDIAwAAKgAQyQMAAP8GADDKAwEAAAABywMBAPkFACHQAwAA2AaaBCLjA0AA_gUAIZQEAQD5BQAhlQQBAPoFACGjBAEA-QUAIaQEAQD6BQAhpQQBAPoFACGmBBAApAYAIacEEACkBgAhqAQQAKQGACGpBBAApAYAIaoEEACkBgAhqwRAAP4FACGsBEAA3QYAIQIAAAAsACA0AAC9BwAgAgAAALkHACA0AAC6BwAgE8cDAAC4BwAwyAMAALkHABDJAwAAuAcAMMoDAQD5BQAhywMBAPkFACHQAwAA2AaaBCLjA0AA_gUAIZQEAQD5BQAhlQQBAPoFACGjBAEA-QUAIaQEAQD6BQAhpQQBAPoFACGmBBAApAYAIacEEACkBgAhqAQQAKQGACGpBBAApAYAIaoEEACkBgAhqwRAAP4FACGsBEAA3QYAIRPHAwAAuAcAMMgDAAC5BwAQyQMAALgHADDKAwEA-QUAIcsDAQD5BQAh0AMAANgGmgQi4wNAAP4FACGUBAEA-QUAIZUEAQD6BQAhowQBAPkFACGkBAEA-gUAIaUEAQD6BQAhpgQQAKQGACGnBBAApAYAIagEEACkBgAhqQQQAKQGACGqBBAApAYAIasEQAD-BQAhrARAAN0GACEPygMBAKEHACHLAwEAoQcAIdADAAC7B5oEIuMDQAClBwAhlAQBAKEHACGVBAEArQcAIaMEAQChBwAhpAQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIQHcBAAAAJoEAgHcBEAAAAABGgMAAMAHACAFAAC_BwAgEQAAwwcAIBUAAL4HACAWAADFBwAgGwAAxwcAIBwAAMgHACApAADBBwAgKgAAwgcAICwAAMQHACAtAADGBwAgygMBAKEHACHLAwEAoQcAIdADAAC7B5oEIuMDQAClBwAhlAQBAKEHACGVBAEArQcAIaMEAQChBwAhpAQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIQU7AAD2DQAgPAAAtQ4AINkEAAD3DQAg2gQAALQOACDfBAAAxAQAIAU7AAD0DQAgPAAAsg4AINkEAAD1DQAg2gQAALEOACDfBAAACQAgBzsAAPINACA8AACvDgAg2QQAAPMNACDaBAAArg4AIN0EAAAyACDeBAAAMgAg3wQAAAEAIAU7AADwDQAgPAAArA4AINkEAADxDQAg2gQAAKsOACDfBAAAUQAgBzsAAO4NACA8AACpDgAg2QQAAO8NACDaBAAAqA4AIN0EAAB7ACDeBAAAewAg3wQAAOoDACALOwAApggAMDwAAKsIADDZBAAApwgAMNoEAACoCAAw2wQAAKkIACDcBAAAqggAMN0EAACqCAAw3gQAAKoIADDfBAAAqggAMOAEAACsCAAw4QQAAK0IADALOwAAmggAMDwAAJ8IADDZBAAAmwgAMNoEAACcCAAw2wQAAJ0IACDcBAAAnggAMN0EAACeCAAw3gQAAJ4IADDfBAAAnggAMOAEAACgCAAw4QQAAKEIADALOwAAhwgAMDwAAIwIADDZBAAAiAgAMNoEAACJCAAw2wQAAIoIACDcBAAAiwgAMN0EAACLCAAw3gQAAIsIADDfBAAAiwgAMOAEAACNCAAw4QQAAI4IADALOwAA-AcAMDwAAP0HADDZBAAA-QcAMNoEAAD6BwAw2wQAAPsHACDcBAAA_AcAMN0EAAD8BwAw3gQAAPwHADDfBAAA_AcAMOAEAAD-BwAw4QQAAP8HADALOwAA2QcAMDwAAN4HADDZBAAA2gcAMNoEAADbBwAw2wQAANwHACDcBAAA3QcAMN0EAADdBwAw3gQAAN0HADDfBAAA3QcAMOAEAADfBwAw4QQAAOAHADALOwAAyQcAMDwAAM4HADDZBAAAygcAMNoEAADLBwAw2wQAAMwHACDcBAAAzQcAMN0EAADNBwAw3gQAAM0HADDfBAAAzQcAMOAEAADPBwAw4QQAANAHADAGFQAA2AcAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAYwEAgAAAAGOBAAAAI4EAgIAAABIACA7AADXBwAgAwAAAEgAIDsAANcHACA8AADVBwAgATQAAKcOADALCQAA2QYAIBUAAN4GACDHAwAA7AYAMMgDAABGABDJAwAA7AYAMMoDAQAAAAHLAwEA-QUAIeMDQAD-BQAhiwQBAPkFACGMBAIApQYAIY4EAADtBo4EIgIAAABIACA0AADVBwAgAgAAANEHACA0AADSBwAgCccDAADQBwAwyAMAANEHABDJAwAA0AcAMMoDAQD5BQAhywMBAPkFACHjA0AA_gUAIYsEAQD5BQAhjAQCAKUGACGOBAAA7QaOBCIJxwMAANAHADDIAwAA0QcAEMkDAADQBwAwygMBAPkFACHLAwEA-QUAIeMDQAD-BQAhiwQBAPkFACGMBAIApQYAIY4EAADtBo4EIgXKAwEAoQcAIcsDAQChBwAh4wNAAKUHACGMBAIA0wcAIY4EAADUB44EIgXcBAIAAAAB4gQCAAAAAeMEAgAAAAHkBAIAAAAB5QQCAAAAAQHcBAAAAI4EAgYVAADWBwAgygMBAKEHACHLAwEAoQcAIeMDQAClBwAhjAQCANMHACGOBAAA1AeOBCIFOwAAog4AIDwAAKUOACDZBAAAow4AINoEAACkDgAg3wQAAMQEACAGFQAA2AcAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAYwEAgAAAAGOBAAAAI4EAgM7AACiDgAg2QQAAKMOACDfBAAAxAQAIAcVAAD2BwAgGgAA9wcAIMoDAQAAAAHLAwEAAAAB0AMAAAC0BALjA0AAAAABjgQAAACzBAICAAAAPwAgOwAA9QcAIAMAAAA_ACA7AAD1BwAgPAAA5QcAIAE0AAChDgAwDAkAANkGACAVAADeBgAgGgAA9AYAIMcDAADxBgAwyAMAAD0AEMkDAADxBgAwygMBAAAAAcsDAQD5BQAh0AMAAPMGtAQi4wNAAP4FACGLBAEA-QUAIY4EAADyBrMEIgIAAAA_ACA0AADlBwAgAgAAAOEHACA0AADiBwAgCccDAADgBwAwyAMAAOEHABDJAwAA4AcAMMoDAQD5BQAhywMBAPkFACHQAwAA8wa0BCLjA0AA_gUAIYsEAQD5BQAhjgQAAPIGswQiCccDAADgBwAwyAMAAOEHABDJAwAA4AcAMMoDAQD5BQAhywMBAPkFACHQAwAA8wa0BCLjA0AA_gUAIYsEAQD5BQAhjgQAAPIGswQiBcoDAQChBwAhywMBAKEHACHQAwAA5Ae0BCLjA0AApQcAIY4EAADjB7MEIgHcBAAAALMEAgHcBAAAALQEAgcVAADmBwAgGgAA5wcAIMoDAQChBwAhywMBAKEHACHQAwAA5Ae0BCLjA0AApQcAIY4EAADjB7MEIgU7AACbDgAgPAAAnw4AINkEAACcDgAg2gQAAJ4OACDfBAAAxAQAIAs7AADoBwAwPAAA7QcAMNkEAADpBwAw2gQAAOoHADDbBAAA6wcAINwEAADsBwAw3QQAAOwHADDeBAAA7AcAMN8EAADsBwAw4AQAAO4HADDhBAAA7wcAMAXKAwEAAAAB9gMAAACwBAKuBAEAAAABsAQBAAAAAbEEQAAAAAECAAAAQwAgOwAA9AcAIAMAAABDACA7AAD0BwAgPAAA8wcAIAE0AACdDgAwChkAAPAGACDHAwAA7gYAMMgDAABBABDJAwAA7gYAMMoDAQAAAAH2AwAA7wawBCKtBAEA-QUAIa4EAQD5BQAhsAQBAPkFACGxBEAA_gUAIQIAAABDACA0AADzBwAgAgAAAPAHACA0AADxBwAgCccDAADvBwAwyAMAAPAHABDJAwAA7wcAMMoDAQD5BQAh9gMAAO8GsAQirQQBAPkFACGuBAEA-QUAIbAEAQD5BQAhsQRAAP4FACEJxwMAAO8HADDIAwAA8AcAEMkDAADvBwAwygMBAPkFACH2AwAA7wawBCKtBAEA-QUAIa4EAQD5BQAhsAQBAPkFACGxBEAA_gUAIQXKAwEAoQcAIfYDAADyB7AEIq4EAQChBwAhsAQBAKEHACGxBEAApQcAIQHcBAAAALAEAgXKAwEAoQcAIfYDAADyB7AEIq4EAQChBwAhsAQBAKEHACGxBEAApQcAIQXKAwEAAAAB9gMAAACwBAKuBAEAAAABsAQBAAAAAbEEQAAAAAEHFQAA9gcAIBoAAPcHACDKAwEAAAABywMBAAAAAdADAAAAtAQC4wNAAAAAAY4EAAAAswQCAzsAAJsOACDZBAAAnA4AIN8EAADEBAAgBDsAAOgHADDZBAAA6QcAMNsEAADrBwAg3wQAAOwHADAJAwAAhggAIMoDAQAAAAHQAwAAANEEApUEAQAAAAGqBBAAAAABzQQQAAAAAc4EEAAAAAHPBBAAAAAB0QRAAAAAAQIAAAAFACA7AACFCAAgAwAAAAUAIDsAAIUIACA8AACDCAAgATQAAJoOADAOAwAAmwcAIAkAANkGACDHAwAAmQcAMMgDAAADABDJAwAAmQcAMMoDAQAAAAHQAwAAmgfRBCKLBAEA-QUAIZUEAQD5BQAhqgQQAKQGACHNBBAApAYAIc4EEACkBgAhzwQQAKQGACHRBEAA3QYAIQIAAAAFACA0AACDCAAgAgAAAIAIACA0AACBCAAgDMcDAAD_BwAwyAMAAIAIABDJAwAA_wcAMMoDAQD5BQAh0AMAAJoH0QQiiwQBAPkFACGVBAEA-QUAIaoEEACkBgAhzQQQAKQGACHOBBAApAYAIc8EEACkBgAh0QRAAN0GACEMxwMAAP8HADDIAwAAgAgAEMkDAAD_BwAwygMBAPkFACHQAwAAmgfRBCKLBAEA-QUAIZUEAQD5BQAhqgQQAKQGACHNBBAApAYAIc4EEACkBgAhzwQQAKQGACHRBEAA3QYAIQjKAwEAoQcAIdADAACCCNEEIpUEAQChBwAhqgQQAKMHACHNBBAAowcAIc4EEACjBwAhzwQQAKMHACHRBEAAvAcAIQHcBAAAANEEAgkDAACECAAgygMBAKEHACHQAwAAggjRBCKVBAEAoQcAIaoEEACjBwAhzQQQAKMHACHOBBAAowcAIc8EEACjBwAh0QRAALwHACEFOwAAlQ4AIDwAAJgOACDZBAAAlg4AINoEAACXDgAg3wQAAAEAIAkDAACGCAAgygMBAAAAAdADAAAA0QQClQQBAAAAAaoEEAAAAAHNBBAAAAABzgQQAAAAAc8EEAAAAAHRBEAAAAABAzsAAJUOACDZBAAAlg4AIN8EAAABACAMAwAAmQgAIAUAAJgIACAVAACXCAAgygMBAAAAAcsDAQAAAAHjA0AAAAAB8QMBAAAAAZQEAQAAAAGVBAEAAAABlgQCAAAAAZcEAgAAAAGYBAEAAAABAgAAADAAIDsAAJYIACADAAAAMAAgOwAAlggAIDwAAJIIACABNAAAlA4AMBEDAACLBgAgBQAA_gYAIAkAANkGACAVAADeBgAgxwMAAPwGADDIAwAALgAQyQMAAPwGADDKAwEAAAABywMBAPkFACHjA0AA_gUAIfEDAQD6BQAhiwQBAAAAAZQEAQD5BQAhlQQBAPoFACGWBAIApQYAIZcEAgD9BgAhmAQBAPoFACECAAAAMAAgNAAAkggAIAIAAACPCAAgNAAAkAgAIA3HAwAAjggAMMgDAACPCAAQyQMAAI4IADDKAwEA-QUAIcsDAQD5BQAh4wNAAP4FACHxAwEA-gUAIYsEAQD5BQAhlAQBAPkFACGVBAEA-gUAIZYEAgClBgAhlwQCAP0GACGYBAEA-gUAIQ3HAwAAjggAMMgDAACPCAAQyQMAAI4IADDKAwEA-QUAIcsDAQD5BQAh4wNAAP4FACHxAwEA-gUAIYsEAQD5BQAhlAQBAPkFACGVBAEA-gUAIZYEAgClBgAhlwQCAP0GACGYBAEA-gUAIQnKAwEAoQcAIcsDAQChBwAh4wNAAKUHACHxAwEArQcAIZQEAQChBwAhlQQBAK0HACGWBAIA0wcAIZcEAgCRCAAhmAQBAK0HACEF3AQCAAAAAeIEAgAAAAHjBAIAAAAB5AQCAAAAAeUEAgAAAAEMAwAAlQgAIAUAAJQIACAVAACTCAAgygMBAKEHACHLAwEAoQcAIeMDQAClBwAh8QMBAK0HACGUBAEAoQcAIZUEAQCtBwAhlgQCANMHACGXBAIAkQgAIZgEAQCtBwAhBTsAAIkOACA8AACSDgAg2QQAAIoOACDaBAAAkQ4AIN8EAADEBAAgBTsAAIcOACA8AACPDgAg2QQAAIgOACDaBAAAjg4AIN8EAAAJACAHOwAAhQ4AIDwAAIwOACDZBAAAhg4AINoEAACLDgAg3QQAADIAIN4EAAAyACDfBAAAAQAgDAMAAJkIACAFAACYCAAgFQAAlwgAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAfEDAQAAAAGUBAEAAAABlQQBAAAAAZYEAgAAAAGXBAIAAAABmAQBAAAAAQM7AACJDgAg2QQAAIoOACDfBAAAxAQAIAM7AACHDgAg2QQAAIgOACDfBAAACQAgAzsAAIUOACDZBAAAhg4AIN8EAAABACAEygMBAAAAAdADAAAAmgQCmgQBAAAAAZsEQAAAAAECAAAAgwEAIDsAAKUIACADAAAAgwEAIDsAAKUIACA8AACkCAAgATQAAIQOADAJCQAA2QYAIMcDAADXBgAwyAMAAIEBABDJAwAA1wYAMMoDAQAAAAHQAwAA2AaaBCKLBAEA-QUAIZoEAQD6BQAhmwRAAP4FACECAAAAgwEAIDQAAKQIACACAAAAoggAIDQAAKMIACAIxwMAAKEIADDIAwAAoggAEMkDAAChCAAwygMBAPkFACHQAwAA2AaaBCKLBAEA-QUAIZoEAQD6BQAhmwRAAP4FACEIxwMAAKEIADDIAwAAoggAEMkDAAChCAAwygMBAPkFACHQAwAA2AaaBCKLBAEA-QUAIZoEAQD6BQAhmwRAAP4FACEEygMBAKEHACHQAwAAuweaBCKaBAEArQcAIZsEQAClBwAhBMoDAQChBwAh0AMAALsHmgQimgQBAK0HACGbBEAApQcAIQTKAwEAAAAB0AMAAACaBAKaBAEAAAABmwRAAAAAAQcKAADCCAAgCwAAwwgAIMoDAQAAAAGfBAEAAAABoAQCAAAAAaEEEAAAAAGiBAEAAAABAgAAACUAIDsAAMEIACADAAAAJQAgOwAAwQgAIDwAALAIACABNAAAgw4AMAwJAADZBgAgCgAAhgcAIAsAAIcHACDHAwAAhQcAMMgDAAAjABDJAwAAhQcAMMoDAQAAAAGLBAEA-QUAIZ8EAQD5BQAhoAQCAKUGACGhBBAApAYAIaIEAQD6BQAhAgAAACUAIDQAALAIACACAAAArggAIDQAAK8IACAJxwMAAK0IADDIAwAArggAEMkDAACtCAAwygMBAPkFACGLBAEA-QUAIZ8EAQD5BQAhoAQCAKUGACGhBBAApAYAIaIEAQD6BQAhCccDAACtCAAwyAMAAK4IABDJAwAArQgAMMoDAQD5BQAhiwQBAPkFACGfBAEA-QUAIaAEAgClBgAhoQQQAKQGACGiBAEA-gUAIQXKAwEAoQcAIZ8EAQChBwAhoAQCANMHACGhBBAAowcAIaIEAQCtBwAhBwoAALEIACALAACyCAAgygMBAKEHACGfBAEAoQcAIaAEAgDTBwAhoQQQAKMHACGiBAEArQcAIQU7AAD4DQAgPAAAgQ4AINkEAAD5DQAg2gQAAIAOACDfBAAAEQAgCzsAALMIADA8AAC4CAAw2QQAALQIADDaBAAAtQgAMNsEAAC2CAAg3AQAALcIADDdBAAAtwgAMN4EAAC3CAAw3wQAALcIADDgBAAAuQgAMOEEAAC6CAAwBA4AAMAIACDKAwEAAAABnQQBAAAAAZ4EEAAAAAECAAAAHQAgOwAAvwgAIAMAAAAdACA7AAC_CAAgPAAAvQgAIAE0AAD_DQAwCQ0AAIkHACAOAACKBwAgxwMAAIgHADDIAwAAGwAQyQMAAIgHADDKAwEAAAABnAQBAPkFACGdBAEA-QUAIZ4EEACkBgAhAgAAAB0AIDQAAL0IACACAAAAuwgAIDQAALwIACAHxwMAALoIADDIAwAAuwgAEMkDAAC6CAAwygMBAPkFACGcBAEA-QUAIZ0EAQD5BQAhngQQAKQGACEHxwMAALoIADDIAwAAuwgAEMkDAAC6CAAwygMBAPkFACGcBAEA-QUAIZ0EAQD5BQAhngQQAKQGACEDygMBAKEHACGdBAEAoQcAIZ4EEACjBwAhBA4AAL4IACDKAwEAoQcAIZ0EAQChBwAhngQQAKMHACEFOwAA-g0AIDwAAP0NACDZBAAA-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_wkAMN0EAAD_CQAw3gQAAP8JADDfBAAA_wkAMOAEAACPCgAw4QQAAIIKADALOwAA-wkAMDwAAIAKADDZBAAA_AkAMNoEAAD9CQAw2wQAAP4JACDcBAAA_wkAMN0EAAD_CQAw3gQAAP8JADDfBAAA_wkAMOAEAACBCgAw4QQAAIIKADALOwAA7wkAMDwAAPQJADDZBAAA8AkAMNoEAADxCQAw2wQAAPIJACDcBAAA8wkAMN0EAADzCQAw3gQAAPMJADDfBAAA8wkAMOAEAAD1CQAw4QQAAPYJADALOwAA4wkAMDwAAOgJADDZBAAA5AkAMNoEAADlCQAw2wQAAOYJACDcBAAA5wkAMN0EAADnCQAw3gQAAOcJADDfBAAA5wkAMOAEAADpCQAw4QQAAOoJADALOwAA1wkAMDwAANwJADDZBAAA2AkAMNoEAADZCQAw2wQAANoJACDcBAAA2wkAMN0EAADbCQAw3gQAANsJADDfBAAA2wkAMOAEAADdCQAw4QQAAN4JADALOwAAywkAMDwAANAJADDZBAAAzAkAMNoEAADNCQAw2wQAAM4JACDcBAAAzwkAMN0EAADPCQAw3gQAAM8JADDfBAAAzwkAMOAEAADRCQAw4QQAANIJADALOwAAvwkAMDwAAMQJADDZBAAAwAkAMNoEAADBCQAw2wQAAMIJACDcBAAAwwkAMN0EAADDCQAw3gQAAMMJADDfBAAAwwkAMOAEAADFCQAw4QQAAMYJADAHOwAAkwkAIDwAAJYJACDZBAAAlAkAINoEAACVCQAg3QQAADIAIN4EAAAyACDfBAAAAQAgCzsAAIUJADA8AACKCQAw2QQAAIYJADDaBAAAhwkAMNsEAACICQAg3AQAAIkJADDdBAAAiQkAMN4EAACJCQAw3wQAAIkJADDgBAAAiwkAMOEEAACMCQAwCMoDAQAAAAHQAwAAAIUEAt8DAAAAggQC4wNAAAAAAYIEAQAAAAGDBAEAAAABhQQBAAAAAYYEQAAAAAECAAAAagAgOwAAkgkAIAMAAABqACA7AACSCQAgPAAAkQkAIAE0AADWDQAwDRUAAN4GACDHAwAA2gYAMMgDAABoABDJAwAA2gYAMMoDAQAAAAHLAwEA-QUAIdADAADcBoUEIt8DAADbBoIEIuMDQAD-BQAhggQBAPkFACGDBAEA-QUAIYUEAQD6BQAhhgRAAN0GACECAAAAagAgNAAAkQkAIAIAAACNCQAgNAAAjgkAIAzHAwAAjAkAMMgDAACNCQAQyQMAAIwJADDKAwEA-QUAIcsDAQD5BQAh0AMAANwGhQQi3wMAANsGggQi4wNAAP4FACGCBAEA-QUAIYMEAQD5BQAhhQQBAPoFACGGBEAA3QYAIQzHAwAAjAkAMMgDAACNCQAQyQMAAIwJADDKAwEA-QUAIcsDAQD5BQAh0AMAANwGhQQi3wMAANsGggQi4wNAAP4FACGCBAEA-QUAIYMEAQD5BQAhhQQBAPoFACGGBEAA3QYAIQjKAwEAoQcAIdADAACQCYUEIt8DAACPCYIEIuMDQAClBwAhggQBAKEHACGDBAEAoQcAIYUEAQCtBwAhhgRAALwHACEB3AQAAACCBAIB3AQAAACFBAIIygMBAKEHACHQAwAAkAmFBCLfAwAAjwmCBCLjA0AApQcAIYIEAQChBwAhgwQBAKEHACGFBAEArQcAIYYEQAC8BwAhCMoDAQAAAAHQAwAAAIUEAt8DAAAAggQC4wNAAAAAAYIEAQAAAAGDBAEAAAABhQQBAAAAAYYEQAAAAAEPFAAAvQkAIBYAAL4JACAuAAC8CQAgygMBAAAAAeMDQAAAAAHmAwgAAAAB5wMIAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHKBAgAAAAB0wQAAADTBALUBCAAAAAB1QQgAAAAAQIAAAABACA7AACTCQAgAwAAADIAIDsAAJMJACA8AACXCQAgEQAAADIAIBQAAJsJACAWAACcCQAgLgAAmgkAIDQAAJcJACDKAwEAoQcAIeMDQAClBwAh5gMIANcIACHnAwgA1wgAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAhygQIAJkJACHTBAAAmAnTBCLUBCAArgcAIdUEIACuBwAhDxQAAJsJACAWAACcCQAgLgAAmgkAIMoDAQChBwAh4wNAAKUHACHmAwgA1wgAIecDCADXCAAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHKBAgAmQkAIdMEAACYCdMEItQEIACuBwAh1QQgAK4HACEB3AQAAADTBAIF3AQIAAAAAeIECAAAAAHjBAgAAAAB5AQIAAAAAeUECAAAAAELOwAAsQkAMDwAALUJADDZBAAAsgkAMNoEAACzCQAw2wQAALQJACDcBAAA_AcAMN0EAAD8BwAw3gQAAPwHADDfBAAA_AcAMOAEAAC2CQAw4QQAAP8HADALOwAAqAkAMDwAAKwJADDZBAAAqQkAMNoEAACqCQAw2wQAAKsJACDcBAAAtQcAMN0EAAC1BwAw3gQAALUHADDfBAAAtQcAMOAEAACtCQAw4QQAALgHADALOwAAnQkAMDwAAKEJADDZBAAAngkAMNoEAACfCQAw2wQAAKAJACDcBAAAiwgAMN0EAACLCAAw3gQAAIsIADDfBAAAiwgAMOAEAACiCQAw4QQAAI4IADAMBQAAmAgAIAkAAKcJACAVAACXCAAgygMBAAAAAcsDAQAAAAHjA0AAAAAB8QMBAAAAAYsEAQAAAAGUBAEAAAABlgQCAAAAAZcEAgAAAAGYBAEAAAABAgAAADAAIDsAAKYJACADAAAAMAAgOwAApgkAIDwAAKQJACABNAAA1Q0AMAIAAAAwACA0AACkCQAgAgAAAI8IACA0AACjCQAgCcoDAQChBwAhywMBAKEHACHjA0AApQcAIfEDAQCtBwAhiwQBAKEHACGUBAEAoQcAIZYEAgDTBwAhlwQCAJEIACGYBAEArQcAIQwFAACUCAAgCQAApQkAIBUAAJMIACDKAwEAoQcAIcsDAQChBwAh4wNAAKUHACHxAwEArQcAIYsEAQChBwAhlAQBAKEHACGWBAIA0wcAIZcEAgCRCAAhmAQBAK0HACEFOwAA0A0AIDwAANMNACDZBAAA0Q0AINoEAADSDQAg3wQAACwAIAwFAACYCAAgCQAApwkAIBUAAJcIACDKAwEAAAABywMBAAAAAeMDQAAAAAHxAwEAAAABiwQBAAAAAZQEAQAAAAGWBAIAAAABlwQCAAAAAZgEAQAAAAEDOwAA0A0AINkEAADRDQAg3wQAACwAIBoFAADGCAAgEQAAyggAIBUAAMUIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKgAAyQgAICsAAOQIACAsAADLCAAgLQAAzQgAIMoDAQAAAAHLAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAECAAAALAAgOwAAsAkAIAMAAAAsACA7AACwCQAgPAAArwkAIAE0AADPDQAwAgAAACwAIDQAAK8JACACAAAAuQcAIDQAAK4JACAPygMBAKEHACHLAwEAoQcAIdADAAC7B5oEIuMDQAClBwAhlAQBAKEHACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIRoFAAC_BwAgEQAAwwcAIBUAAL4HACAWAADFBwAgGwAAxwcAIBwAAMgHACApAADBBwAgKgAAwgcAICsAAOIIACAsAADEBwAgLQAAxgcAIMoDAQChBwAhywMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEaBQAAxggAIBEAAMoIACAVAADFCAAgFgAAzAgAIBsAAM4IACAcAADPCAAgKQAAyAgAICoAAMkIACArAADkCAAgLAAAywgAIC0AAM0IACDKAwEAAAABywMBAAAAAdADAAAAmgQC4wNAAAAAAZQEAQAAAAGjBAEAAAABpAQBAAAAAaUEAQAAAAGmBBAAAAABpwQQAAAAAagEEAAAAAGpBBAAAAABqgQQAAAAAasEQAAAAAGsBEAAAAABCQkAALsJACDKAwEAAAAB0AMAAADRBAKLBAEAAAABqgQQAAAAAc0EEAAAAAHOBBAAAAABzwQQAAAAAdEEQAAAAAECAAAABQAgOwAAugkAIAMAAAAFACA7AAC6CQAgPAAAuAkAIAE0AADODQAwAgAAAAUAIDQAALgJACACAAAAgAgAIDQAALcJACAIygMBAKEHACHQAwAAggjRBCKLBAEAoQcAIaoEEACjBwAhzQQQAKMHACHOBBAAowcAIc8EEACjBwAh0QRAALwHACEJCQAAuQkAIMoDAQChBwAh0AMAAIII0QQiiwQBAKEHACGqBBAAowcAIc0EEACjBwAhzgQQAKMHACHPBBAAowcAIdEEQAC8BwAhBTsAAMkNACA8AADMDQAg2QQAAMoNACDaBAAAyw0AIN8EAAAsACAJCQAAuwkAIMoDAQAAAAHQAwAAANEEAosEAQAAAAGqBBAAAAABzQQQAAAAAc4EEAAAAAHPBBAAAAAB0QRAAAAAAQM7AADJDQAg2QQAAMoNACDfBAAALAAgBDsAALEJADDZBAAAsgkAMNsEAAC0CQAg3wQAAPwHADAEOwAAqAkAMNkEAACpCQAw2wQAAKsJACDfBAAAtQcAMAQ7AACdCQAw2QQAAJ4JADDbBAAAoAkAIN8EAACLCAAwBcoDAQAAAAHSA0AAAAAB4wNAAAAAAegDAQAAAAHpA0AAAAABAgAAAGUAIDsAAMoJACADAAAAZQAgOwAAygkAIDwAAMkJACABNAAAyA0AMAoVAADeBgAgxwMAAN8GADDIAwAAYwAQyQMAAN8GADDKAwEAAAABywMBAPkFACHSA0AA_gUAIeMDQAD-BQAh6AMBAAAAAekDQADdBgAhAgAAAGUAIDQAAMkJACACAAAAxwkAIDQAAMgJACAJxwMAAMYJADDIAwAAxwkAEMkDAADGCQAwygMBAPkFACHLAwEA-QUAIdIDQAD-BQAh4wNAAP4FACHoAwEA-QUAIekDQADdBgAhCccDAADGCQAwyAMAAMcJABDJAwAAxgkAMMoDAQD5BQAhywMBAPkFACHSA0AA_gUAIeMDQAD-BQAh6AMBAPkFACHpA0AA3QYAIQXKAwEAoQcAIdIDQAClBwAh4wNAAKUHACHoAwEAoQcAIekDQAC8BwAhBcoDAQChBwAh0gNAAKUHACHjA0AApQcAIegDAQChBwAh6QNAALwHACEFygMBAAAAAdIDQAAAAAHjA0AAAAAB6AMBAAAAAekDQAAAAAEFygMBAAAAAeMDQAAAAAHrAwAAAOsDAuwDAQAAAAHtAwEAAAABAgAAAGEAIDsAANYJACADAAAAYQAgOwAA1gkAIDwAANUJACABNAAAxw0AMAsVAADeBgAgxwMAAOEGADDIAwAAXwAQyQMAAOEGADDKAwEAAAABywMBAPkFACHjA0AA_gUAIesDAADiBusDIuwDAQD5BQAh7QMBAPoFACHWBAAA4AYAIAIAAABhACA0AADVCQAgAgAAANMJACA0AADUCQAgCccDAADSCQAwyAMAANMJABDJAwAA0gkAMMoDAQD5BQAhywMBAPkFACHjA0AA_gUAIesDAADiBusDIuwDAQD5BQAh7QMBAPoFACEJxwMAANIJADDIAwAA0wkAEMkDAADSCQAwygMBAPkFACHLAwEA-QUAIeMDQAD-BQAh6wMAAOIG6wMi7AMBAPkFACHtAwEA-gUAIQXKAwEAoQcAIeMDQAClBwAh6wMAAO8I6wMi7AMBAKEHACHtAwEArQcAIQXKAwEAoQcAIeMDQAClBwAh6wMAAO8I6wMi7AMBAKEHACHtAwEArQcAIQXKAwEAAAAB4wNAAAAAAesDAAAA6wMC7AMBAAAAAe0DAQAAAAEGygMBAAAAAc0DAAAAzQMCzgMQAAAAAdADAAAA0AMC0QNAAAAAAdIDQAAAAAECAAAAXQAgOwAA4gkAIAMAAABdACA7AADiCQAgPAAA4QkAIAE0AADGDQAwCxUAAN4GACDHAwAA4wYAMMgDAABbABDJAwAA4wYAMMoDAQAAAAHLAwEA-QUAIc0DAADkBs0DIs4DEACkBgAh0AMAAOUG0AMi0QNAAP4FACHSA0AA_gUAIQIAAABdACA0AADhCQAgAgAAAN8JACA0AADgCQAgCscDAADeCQAwyAMAAN8JABDJAwAA3gkAMMoDAQD5BQAhywMBAPkFACHNAwAA5AbNAyLOAxAApAYAIdADAADlBtADItEDQAD-BQAh0gNAAP4FACEKxwMAAN4JADDIAwAA3wkAEMkDAADeCQAwygMBAPkFACHLAwEA-QUAIc0DAADkBs0DIs4DEACkBgAh0AMAAOUG0AMi0QNAAP4FACHSA0AA_gUAIQbKAwEAoQcAIc0DAACiB80DIs4DEACjBwAh0AMAAKQH0AMi0QNAAKUHACHSA0AApQcAIQbKAwEAoQcAIc0DAACiB80DIs4DEACjBwAh0AMAAKQH0AMi0QNAAKUHACHSA0AApQcAIQbKAwEAAAABzQMAAADNAwLOAxAAAAAB0AMAAADQAwLRA0AAAAAB0gNAAAAAAQcUAADRCAAgygMBAAAAAd8DAAAA3wMC4AMBAAAAAeEDAQAAAAHiAyAAAAAB4wNAAAAAAQIAAABXACA7AADuCQAgAwAAAFcAIDsAAO4JACA8AADtCQAgATQAAMUNADAMFAAAgAYAIBUAAN4GACDHAwAA5gYAMMgDAABVABDJAwAA5gYAMMoDAQAAAAHLAwEA-QUAId8DAADnBt8DIuADAQD6BQAh4QMBAPkFACHiAyAA_AUAIeMDQAD-BQAhAgAAAFcAIDQAAO0JACACAAAA6wkAIDQAAOwJACAKxwMAAOoJADDIAwAA6wkAEMkDAADqCQAwygMBAPkFACHLAwEA-QUAId8DAADnBt8DIuADAQD6BQAh4QMBAPkFACHiAyAA_AUAIeMDQAD-BQAhCscDAADqCQAwyAMAAOsJABDJAwAA6gkAMMoDAQD5BQAhywMBAPkFACHfAwAA5wbfAyLgAwEA-gUAIeEDAQD5BQAh4gMgAPwFACHjA0AA_gUAIQbKAwEAoQcAId8DAACsB98DIuADAQCtBwAh4QMBAKEHACHiAyAArgcAIeMDQAClBwAhBxQAALAHACDKAwEAoQcAId8DAACsB98DIuADAQCtBwAh4QMBAKEHACHiAyAArgcAIeMDQAClBwAhBxQAANEIACDKAwEAAAAB3wMAAADfAwLgAwEAAAAB4QMBAAAAAeIDIAAAAAHjA0AAAAABCCEAAOYIACDKAwEAAAAB4QMBAAAAAeIDIAAAAAHkAwEAAAAB5QMBAAAAAeYDCAAAAAHnAwgAAAABAgAAAFEAIDsAAPoJACADAAAAUQAgOwAA-gkAIDwAAPkJACABNAAAxA0AMA0VAADeBgAgIQAAgAYAIMcDAADoBgAwyAMAAE8AEMkDAADoBgAwygMBAAAAAcsDAQD5BQAh4QMBAPkFACHiAyAA_AUAIeQDAQD5BQAh5QMBAPkFACHmAwgA6QYAIecDCADpBgAhAgAAAFEAIDQAAPkJACACAAAA9wkAIDQAAPgJACALxwMAAPYJADDIAwAA9wkAEMkDAAD2CQAwygMBAPkFACHLAwEA-QUAIeEDAQD5BQAh4gMgAPwFACHkAwEA-QUAIeUDAQD5BQAh5gMIAOkGACHnAwgA6QYAIQvHAwAA9gkAMMgDAAD3CQAQyQMAAPYJADDKAwEA-QUAIcsDAQD5BQAh4QMBAPkFACHiAyAA_AUAIeQDAQD5BQAh5QMBAPkFACHmAwgA6QYAIecDCADpBgAhB8oDAQChBwAh4QMBAKEHACHiAyAArgcAIeQDAQChBwAh5QMBAKEHACHmAwgA1wgAIecDCADXCAAhCCEAANkIACDKAwEAoQcAIeEDAQChBwAh4gMgAK4HACHkAwEAoQcAIeUDAQChBwAh5gMIANcIACHnAwgA1wgAIQghAADmCAAgygMBAAAAAeEDAQAAAAHiAyAAAAAB5AMBAAAAAeUDAQAAAAHmAwgAAAAB5wMIAAAAAQYdAACJCgAgygMBAAAAAdADAAAAiwQC4wNAAAAAAYcEAQAAAAGJBAEAAAABAgAAAEwAIDsAAIgKACADAAAATAAgOwAAiAoAIDwAAIYKACABNAAAww0AMAsdAADeBgAgHgAA3gYAIMcDAADqBgAwyAMAAEoAEMkDAADqBgAwygMBAAAAAdADAADrBosEIuMDQAD-BQAhhwQBAPkFACGIBAEA-QUAIYkEAQAAAAECAAAATAAgNAAAhgoAIAIAAACDCgAgNAAAhAoAIAnHAwAAggoAMMgDAACDCgAQyQMAAIIKADDKAwEA-QUAIdADAADrBosEIuMDQAD-BQAhhwQBAPkFACGIBAEA-QUAIYkEAQD5BQAhCccDAACCCgAwyAMAAIMKABDJAwAAggoAMMoDAQD5BQAh0AMAAOsGiwQi4wNAAP4FACGHBAEA-QUAIYgEAQD5BQAhiQQBAPkFACEFygMBAKEHACHQAwAAhQqLBCLjA0AApQcAIYcEAQChBwAhiQQBAKEHACEB3AQAAACLBAIGHQAAhwoAIMoDAQChBwAh0AMAAIUKiwQi4wNAAKUHACGHBAEAoQcAIYkEAQChBwAhBTsAAL4NACA8AADBDQAg2QQAAL8NACDaBAAAwA0AIN8EAADEBAAgBh0AAIkKACDKAwEAAAAB0AMAAACLBALjA0AAAAABhwQBAAAAAYkEAQAAAAEDOwAAvg0AINkEAAC_DQAg3wQAAMQEACAGHgAAlAoAIMoDAQAAAAHQAwAAAIsEAuMDQAAAAAGIBAEAAAABiQQBAAAAAQIAAABMACA7AACTCgAgAwAAAEwAIDsAAJMKACA8AACRCgAgATQAAL0NADACAAAATAAgNAAAkQoAIAIAAACDCgAgNAAAkAoAIAXKAwEAoQcAIdADAACFCosEIuMDQAClBwAhiAQBAKEHACGJBAEAoQcAIQYeAACSCgAgygMBAKEHACHQAwAAhQqLBCLjA0AApQcAIYgEAQChBwAhiQQBAKEHACEFOwAAuA0AIDwAALsNACDZBAAAuQ0AINoEAAC6DQAg3wQAAMQEACAGHgAAlAoAIMoDAQAAAAHQAwAAAIsEAuMDQAAAAAGIBAEAAAABiQQBAAAAAQM7AAC4DQAg2QQAALkNACDfBAAAxAQAIAYJAACfCgAgygMBAAAAAeMDQAAAAAGLBAEAAAABjAQCAAAAAY4EAAAAjgQCAgAAAEgAIDsAAJ4KACADAAAASAAgOwAAngoAIDwAAJwKACABNAAAtw0AMAIAAABIACA0AACcCgAgAgAAANEHACA0AACbCgAgBcoDAQChBwAh4wNAAKUHACGLBAEAoQcAIYwEAgDTBwAhjgQAANQHjgQiBgkAAJ0KACDKAwEAoQcAIeMDQAClBwAhiwQBAKEHACGMBAIA0wcAIY4EAADUB44EIgU7AACyDQAgPAAAtQ0AINkEAACzDQAg2gQAALQNACDfBAAALAAgBgkAAJ8KACDKAwEAAAAB4wNAAAAAAYsEAQAAAAGMBAIAAAABjgQAAACOBAIDOwAAsg0AINkEAACzDQAg3wQAACwAIAcJAACqCgAgGgAA9wcAIMoDAQAAAAHQAwAAALQEAuMDQAAAAAGLBAEAAAABjgQAAACzBAICAAAAPwAgOwAAqQoAIAMAAAA_ACA7AACpCgAgPAAApwoAIAE0AACxDQAwAgAAAD8AIDQAAKcKACACAAAA4QcAIDQAAKYKACAFygMBAKEHACHQAwAA5Ae0BCLjA0AApQcAIYsEAQChBwAhjgQAAOMHswQiBwkAAKgKACAaAADnBwAgygMBAKEHACHQAwAA5Ae0BCLjA0AApQcAIYsEAQChBwAhjgQAAOMHswQiBTsAAKwNACA8AACvDQAg2QQAAK0NACDaBAAArg0AIN8EAAAsACAHCQAAqgoAIBoAAPcHACDKAwEAAAAB0AMAAAC0BALjA0AAAAABiwQBAAAAAY4EAAAAswQCAzsAAKwNACDZBAAArQ0AIN8EAAAsACAHygMBAAAAAd8DAQAAAAGxBEAAAAABtQQAAAC1BAK2BAEAAAABtwQBAAAAAbgEIAAAAAECAAAAOwAgOwAAtwoAIAMAAAA7ACA7AAC3CgAgPAAAtgoAIAE0AACrDQAwDBUAAN4GACDHAwAA9QYAMMgDAAA5ABDJAwAA9QYAMMoDAQAAAAHLAwEA-QUAId8DAQD5BQAhsQRAAP4FACG1BAAA9ga1BCK2BAEA-QUAIbcEAQD5BQAhuAQgAPwFACECAAAAOwAgNAAAtgoAIAIAAACzCgAgNAAAtAoAIAvHAwAAsgoAMMgDAACzCgAQyQMAALIKADDKAwEA-QUAIcsDAQD5BQAh3wMBAPkFACGxBEAA_gUAIbUEAAD2BrUEIrYEAQD5BQAhtwQBAPkFACG4BCAA_AUAIQvHAwAAsgoAMMgDAACzCgAQyQMAALIKADDKAwEA-QUAIcsDAQD5BQAh3wMBAPkFACGxBEAA_gUAIbUEAAD2BrUEIrYEAQD5BQAhtwQBAPkFACG4BCAA_AUAIQfKAwEAoQcAId8DAQChBwAhsQRAAKUHACG1BAAAtQq1BCK2BAEAoQcAIbcEAQChBwAhuAQgAK4HACEB3AQAAAC1BAIHygMBAKEHACHfAwEAoQcAIbEEQAClBwAhtQQAALUKtQQitgQBAKEHACG3BAEAoQcAIbgEIACuBwAhB8oDAQAAAAHfAwEAAAABsQRAAAAAAbUEAAAAtQQCtgQBAAAAAbcEAQAAAAG4BCAAAAABDAMAAJkIACAFAACYCAAgCQAApwkAIMoDAQAAAAHjA0AAAAAB8QMBAAAAAYsEAQAAAAGUBAEAAAABlQQBAAAAAZYEAgAAAAGXBAIAAAABmAQBAAAAAQIAAAAwACA7AADACgAgAwAAADAAIDsAAMAKACA8AAC_CgAgATQAAKoNADACAAAAMAAgNAAAvwoAIAIAAACPCAAgNAAAvgoAIAnKAwEAoQcAIeMDQAClBwAh8QMBAK0HACGLBAEAoQcAIZQEAQChBwAhlQQBAK0HACGWBAIA0wcAIZcEAgCRCAAhmAQBAK0HACEMAwAAlQgAIAUAAJQIACAJAAClCQAgygMBAKEHACHjA0AApQcAIfEDAQCtBwAhiwQBAKEHACGUBAEAoQcAIZUEAQCtBwAhlgQCANMHACGXBAIAkQgAIZgEAQCtBwAhDAMAAJkIACAFAACYCAAgCQAApwkAIMoDAQAAAAHjA0AAAAAB8QMBAAAAAYsEAQAAAAGUBAEAAAABlQQBAAAAAZYEAgAAAAGXBAIAAAABmAQBAAAAARoDAADHCAAgBQAAxggAIBEAAMoIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKgAAyQgAICsAAOQIACAsAADLCAAgLQAAzQgAIMoDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAECAAAALAAgOwAAyQoAIAMAAAAsACA7AADJCgAgPAAAyAoAIAE0AACpDQAwAgAAACwAIDQAAMgKACACAAAAuQcAIDQAAMcKACAPygMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhlQQBAK0HACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIRoDAADABwAgBQAAvwcAIBEAAMMHACAWAADFBwAgGwAAxwcAIBwAAMgHACApAADBBwAgKgAAwgcAICsAAOIIACAsAADEBwAgLQAAxgcAIMoDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEaAwAAxwgAIAUAAMYIACARAADKCAAgFgAAzAgAIBsAAM4IACAcAADPCAAgKQAAyAgAICoAAMkIACArAADkCAAgLAAAywgAIC0AAM0IACDKAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAZUEAQAAAAGjBAEAAAABpAQBAAAAAaUEAQAAAAGmBBAAAAABpwQQAAAAAagEEAAAAAGpBBAAAAABqgQQAAAAAasEQAAAAAGsBEAAAAABEBMAAL0LACAUAAC-CwAgFgAAvwsAIMoDAQAAAAHmAwgAAAAB5wMIAAAAAfADAQAAAAGnBBAAAAABvgQBAAAAAcYEAQAAAAHHBAEAAAAByASAAAAAAckEIAAAAAHKBAgAAAABywQBAAAAAcwEAgAAAAECAAAACQAgOwAAvAsAIAMAAAAJACA7AAC8CwAgPAAA1AoAIAE0AACoDQAwFQQAAN4GACATAACYBwAgFAAAgAYAIBYAAIEGACDHAwAAlgcAMMgDAAAHABDJAwAAlgcAMMoDAQAAAAHmAwgA6QYAIecDCADpBgAh8AMBAPkFACGnBBAApAYAIb4EAQD6BQAhxQQBAPkFACHGBAEA-gUAIccEAQD5BQAhyAQAAJcHACDJBCAA_AUAIcoECAD5BgAhywQBAPkFACHMBAIApQYAIQIAAAAJACA0AADUCgAgAgAAANIKACA0AADTCgAgEccDAADRCgAwyAMAANIKABDJAwAA0QoAMMoDAQD5BQAh5gMIAOkGACHnAwgA6QYAIfADAQD5BQAhpwQQAKQGACG-BAEA-gUAIcUEAQD5BQAhxgQBAPoFACHHBAEA-QUAIcgEAACXBwAgyQQgAPwFACHKBAgA-QYAIcsEAQD5BQAhzAQCAKUGACERxwMAANEKADDIAwAA0goAEMkDAADRCgAwygMBAPkFACHmAwgA6QYAIecDCADpBgAh8AMBAPkFACGnBBAApAYAIb4EAQD6BQAhxQQBAPkFACHGBAEA-gUAIccEAQD5BQAhyAQAAJcHACDJBCAA_AUAIcoECAD5BgAhywQBAPkFACHMBAIApQYAIQ3KAwEAoQcAIeYDCADXCAAh5wMIANcIACHwAwEAoQcAIacEEACjBwAhvgQBAK0HACHGBAEArQcAIccEAQChBwAhyASAAAAAAckEIACuBwAhygQIAJkJACHLBAEAoQcAIcwEAgDTBwAhEBMAANUKACAUAADWCgAgFgAA1woAIMoDAQChBwAh5gMIANcIACHnAwgA1wgAIfADAQChBwAhpwQQAKMHACG-BAEArQcAIcYEAQCtBwAhxwQBAKEHACHIBIAAAAAByQQgAK4HACHKBAgAmQkAIcsEAQChBwAhzAQCANMHACELOwAA6goAMDwAAO8KADDZBAAA6woAMNoEAADsCgAw2wQAAO0KACDcBAAA7goAMN0EAADuCgAw3gQAAO4KADDfBAAA7goAMOAEAADwCgAw4QQAAPEKADALOwAA4QoAMDwAAOUKADDZBAAA4goAMNoEAADjCgAw2wQAAOQKACDcBAAAtQcAMN0EAAC1BwAw3gQAALUHADDfBAAAtQcAMOAEAADmCgAw4QQAALgHADALOwAA2AoAMDwAANwKADDZBAAA2QoAMNoEAADaCgAw2wQAANsKACDcBAAAiwgAMN0EAACLCAAw3gQAAIsIADDfBAAAiwgAMOAEAADdCgAw4QQAAI4IADAMAwAAmQgAIAkAAKcJACAVAACXCAAgygMBAAAAAcsDAQAAAAHjA0AAAAAB8QMBAAAAAYsEAQAAAAGVBAEAAAABlgQCAAAAAZcEAgAAAAGYBAEAAAABAgAAADAAIDsAAOAKACADAAAAMAAgOwAA4AoAIDwAAN8KACABNAAApw0AMAIAAAAwACA0AADfCgAgAgAAAI8IACA0AADeCgAgCcoDAQChBwAhywMBAKEHACHjA0AApQcAIfEDAQCtBwAhiwQBAKEHACGVBAEArQcAIZYEAgDTBwAhlwQCAJEIACGYBAEArQcAIQwDAACVCAAgCQAApQkAIBUAAJMIACDKAwEAoQcAIcsDAQChBwAh4wNAAKUHACHxAwEArQcAIYsEAQChBwAhlQQBAK0HACGWBAIA0wcAIZcEAgCRCAAhmAQBAK0HACEMAwAAmQgAIAkAAKcJACAVAACXCAAgygMBAAAAAcsDAQAAAAHjA0AAAAAB8QMBAAAAAYsEAQAAAAGVBAEAAAABlgQCAAAAAZcEAgAAAAGYBAEAAAABGgMAAMcIACARAADKCAAgFQAAxQgAIBYAAMwIACAbAADOCAAgHAAAzwgAICkAAMgIACAqAADJCAAgKwAA5AgAICwAAMsIACAtAADNCAAgygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGVBAEAAAABowQBAAAAAaQEAQAAAAGlBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAAQIAAAAsACA7AADpCgAgAwAAACwAIDsAAOkKACA8AADoCgAgATQAAKYNADACAAAALAAgNAAA6AoAIAIAAAC5BwAgNAAA5woAIA_KAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGVBAEArQcAIaMEAQChBwAhpAQBAK0HACGlBAEArQcAIaYEEACjBwAhpwQQAKMHACGoBBAAowcAIakEEACjBwAhqgQQAKMHACGrBEAApQcAIawEQAC8BwAhGgMAAMAHACARAADDBwAgFQAAvgcAIBYAAMUHACAbAADHBwAgHAAAyAcAICkAAMEHACAqAADCBwAgKwAA4ggAICwAAMQHACAtAADGBwAgygMBAKEHACHLAwEAoQcAIdADAAC7B5oEIuMDQAClBwAhlQQBAK0HACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIRoDAADHCAAgEQAAyggAIBUAAMUIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKgAAyQgAICsAAOQIACAsAADLCAAgLQAAzQgAIMoDAQAAAAHLAwEAAAAB0AMAAACaBALjA0AAAAABlQQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAEFEgAAuwsAIMoDAQAAAAHwAwEAAAABwgQCAAAAAcQEAAAAxAQCAgAAAA0AIDsAALoLACADAAAADQAgOwAAugsAIDwAAPUKACABNAAApQ0AMAoFAAD-BgAgEgAAlQcAIMcDAACTBwAwyAMAAAsAEMkDAACTBwAwygMBAAAAAfADAQD5BQAhlAQBAPkFACHCBAIApQYAIcQEAACUB8QEIgIAAAANACA0AAD1CgAgAgAAAPIKACA0AADzCgAgCMcDAADxCgAwyAMAAPIKABDJAwAA8QoAMMoDAQD5BQAh8AMBAPkFACGUBAEA-QUAIcIEAgClBgAhxAQAAJQHxAQiCMcDAADxCgAwyAMAAPIKABDJAwAA8QoAMMoDAQD5BQAh8AMBAPkFACGUBAEA-QUAIcIEAgClBgAhxAQAAJQHxAQiBMoDAQChBwAh8AMBAKEHACHCBAIA0wcAIcQEAAD0CsQEIgHcBAAAAMQEAgUSAAD2CgAgygMBAKEHACHwAwEAoQcAIcIEAgDTBwAhxAQAAPQKxAQiCzsAAPcKADA8AAD8CgAw2QQAAPgKADDaBAAA-QoAMNsEAAD6CgAg3AQAAPsKADDdBAAA-woAMN4EAAD7CgAw3wQAAPsKADDgBAAA_QoAMOEEAAD-CgAwChAAALgLACARAAC5CwAgygMBAAAAAc4DEAAAAAHwAwEAAAAB8QMBAAAAAb4EAQAAAAG_BCAAAAABwAQgAAAAAcEEAgAAAAECAAAAEQAgOwAAtwsAIAMAAAARACA7AAC3CwAgPAAAgQsAIAE0AACkDQAwDwYAAJEHACAQAACSBwAgEQAAgwcAIMcDAACQBwAwyAMAAA8AEMkDAACQBwAwygMBAAAAAc4DEACkBgAh8AMBAPkFACHxAwEA-gUAIb0EAQD5BQAhvgQBAPoFACG_BCAA_AUAIcAEIAD8BQAhwQQCAP0GACECAAAAEQAgNAAAgQsAIAIAAAD_CgAgNAAAgAsAIAzHAwAA_goAMMgDAAD_CgAQyQMAAP4KADDKAwEA-QUAIc4DEACkBgAh8AMBAPkFACHxAwEA-gUAIb0EAQD5BQAhvgQBAPoFACG_BCAA_AUAIcAEIAD8BQAhwQQCAP0GACEMxwMAAP4KADDIAwAA_woAEMkDAAD-CgAwygMBAPkFACHOAxAApAYAIfADAQD5BQAh8QMBAPoFACG9BAEA-QUAIb4EAQD6BQAhvwQgAPwFACHABCAA_AUAIcEEAgD9BgAhCMoDAQChBwAhzgMQAKMHACHwAwEAoQcAIfEDAQCtBwAhvgQBAK0HACG_BCAArgcAIcAEIACuBwAhwQQCAJEIACEKEAAAggsAIBEAAIMLACDKAwEAoQcAIc4DEACjBwAh8AMBAKEHACHxAwEArQcAIb4EAQCtBwAhvwQgAK4HACHABCAArgcAIcEEAgCRCAAhCzsAAI8LADA8AACUCwAw2QQAAJALADDaBAAAkQsAMNsEAACSCwAg3AQAAJMLADDdBAAAkwsAMN4EAACTCwAw3wQAAJMLADDgBAAAlQsAMOEEAACWCwAwCzsAAIQLADA8AACICwAw2QQAAIULADDaBAAAhgsAMNsEAACHCwAg3AQAAKoIADDdBAAAqggAMN4EAACqCAAw3wQAAKoIADDgBAAAiQsAMOEEAACtCAAwBwkAAI4LACALAADDCAAgygMBAAAAAYsEAQAAAAGgBAIAAAABoQQQAAAAAaIEAQAAAAECAAAAJQAgOwAAjQsAIAMAAAAlACA7AACNCwAgPAAAiwsAIAE0AACjDQAwAgAAACUAIDQAAIsLACACAAAArggAIDQAAIoLACAFygMBAKEHACGLBAEAoQcAIaAEAgDTBwAhoQQQAKMHACGiBAEArQcAIQcJAACMCwAgCwAAsggAIMoDAQChBwAhiwQBAKEHACGgBAIA0wcAIaEEEACjBwAhogQBAK0HACEFOwAAng0AIDwAAKENACDZBAAAnw0AINoEAACgDQAg3wQAACwAIAcJAACOCwAgCwAAwwgAIMoDAQAAAAGLBAEAAAABoAQCAAAAAaEEEAAAAAGiBAEAAAABAzsAAJ4NACDZBAAAnw0AIN8EAAAsACAFDwAAtgsAIMoDAQAAAAHfAwAAALwEAvADAQAAAAG8BCAAAAABAgAAABUAIDsAALULACADAAAAFQAgOwAAtQsAIDwAAJoLACABNAAAnQ0AMAoHAACGBwAgDwAAjwcAIMcDAACNBwAwyAMAABMAEMkDAACNBwAwygMBAAAAAd8DAACOB7wEIvADAQD5BQAhugQBAPkFACG8BCAA_AUAIQIAAAAVACA0AACaCwAgAgAAAJcLACA0AACYCwAgCMcDAACWCwAwyAMAAJcLABDJAwAAlgsAMMoDAQD5BQAh3wMAAI4HvAQi8AMBAPkFACG6BAEA-QUAIbwEIAD8BQAhCMcDAACWCwAwyAMAAJcLABDJAwAAlgsAMMoDAQD5BQAh3wMAAI4HvAQi8AMBAPkFACG6BAEA-QUAIbwEIAD8BQAhBMoDAQChBwAh3wMAAJkLvAQi8AMBAKEHACG8BCAArgcAIQHcBAAAALwEAgUPAACbCwAgygMBAKEHACHfAwAAmQu8BCLwAwEAoQcAIbwEIACuBwAhCzsAAJwLADA8AAChCwAw2QQAAJ0LADDaBAAAngsAMNsEAACfCwAg3AQAAKALADDdBAAAoAsAMN4EAACgCwAw3wQAAKALADDgBAAAogsAMOEEAACjCwAwBAsAALQLACDKAwEAAAAB4QMBAAAAAZ4EEAAAAAECAAAAGQAgOwAAswsAIAMAAAAZACA7AACzCwAgPAAApgsAIAE0AACcDQAwCQgAAIwHACALAACHBwAgxwMAAIsHADDIAwAAFwAQyQMAAIsHADDKAwEAAAAB4QMBAPkFACGeBBAApAYAIbkEAQD5BQAhAgAAABkAIDQAAKYLACACAAAApAsAIDQAAKULACAHxwMAAKMLADDIAwAApAsAEMkDAACjCwAwygMBAPkFACHhAwEA-QUAIZ4EEACkBgAhuQQBAPkFACEHxwMAAKMLADDIAwAApAsAEMkDAACjCwAwygMBAPkFACHhAwEA-QUAIZ4EEACkBgAhuQQBAPkFACEDygMBAKEHACHhAwEAoQcAIZ4EEACjBwAhBAsAAKcLACDKAwEAoQcAIeEDAQChBwAhngQQAKMHACELOwAAqAsAMDwAAKwLADDZBAAAqQsAMNoEAACqCwAw2wQAAKsLACDcBAAAtwgAMN0EAAC3CAAw3gQAALcIADDfBAAAtwgAMOAEAACtCwAw4QQAALoIADAEDQAAsgsAIMoDAQAAAAGcBAEAAAABngQQAAAAAQIAAAAdACA7AACxCwAgAwAAAB0AIDsAALELACA8AACvCwAgATQAAJsNADACAAAAHQAgNAAArwsAIAIAAAC7CAAgNAAArgsAIAPKAwEAoQcAIZwEAQChBwAhngQQAKMHACEEDQAAsAsAIMoDAQChBwAhnAQBAKEHACGeBBAAowcAIQU7AACWDQAgPAAAmQ0AINkEAACXDQAg2gQAAJgNACDfBAAAJQAgBA0AALILACDKAwEAAAABnAQBAAAAAZ4EEAAAAAEDOwAAlg0AINkEAACXDQAg3wQAACUAIAQLAAC0CwAgygMBAAAAAeEDAQAAAAGeBBAAAAABBDsAAKgLADDZBAAAqQsAMNsEAACrCwAg3wQAALcIADAFDwAAtgsAIMoDAQAAAAHfAwAAALwEAvADAQAAAAG8BCAAAAABBDsAAJwLADDZBAAAnQsAMNsEAACfCwAg3wQAAKALADAKEAAAuAsAIBEAALkLACDKAwEAAAABzgMQAAAAAfADAQAAAAHxAwEAAAABvgQBAAAAAb8EIAAAAAHABCAAAAABwQQCAAAAAQQ7AACPCwAw2QQAAJALADDbBAAAkgsAIN8EAACTCwAwBDsAAIQLADDZBAAAhQsAMNsEAACHCwAg3wQAAKoIADAFEgAAuwsAIMoDAQAAAAHwAwEAAAABwgQCAAAAAcQEAAAAxAQCBDsAAPcKADDZBAAA-AoAMNsEAAD6CgAg3wQAAPsKADAQEwAAvQsAIBQAAL4LACAWAAC_CwAgygMBAAAAAeYDCAAAAAHnAwgAAAAB8AMBAAAAAacEEAAAAAG-BAEAAAABxgQBAAAAAccEAQAAAAHIBIAAAAAByQQgAAAAAcoECAAAAAHLBAEAAAABzAQCAAAAAQQ7AADqCgAw2QQAAOsKADDbBAAA7QoAIN8EAADuCgAwBDsAAOEKADDZBAAA4goAMNsEAADkCgAg3wQAALUHADAEOwAA2AoAMNkEAADZCgAw2wQAANsKACDfBAAAiwgAMAQ7AADKCgAw2QQAAMsKADDbBAAAzQoAIN8EAADOCgAwBDsAAMEKADDZBAAAwgoAMNsEAADECgAg3wQAALUHADAEOwAAuAoAMNkEAAC5CgAw2wQAALsKACDfBAAAiwgAMAQ7AACrCgAw2QQAAKwKADDbBAAArgoAIN8EAACvCgAwBDsAAKAKADDZBAAAoQoAMNsEAACjCgAg3wQAAN0HADAEOwAAlQoAMNkEAACWCgAw2wQAAJgKACDfBAAAzQcAMAQ7AACKCgAw2QQAAIsKADDbBAAAjQoAIN8EAAD_CQAwBDsAAPsJADDZBAAA_AkAMNsEAAD-CQAg3wQAAP8JADAEOwAA7wkAMNkEAADwCQAw2wQAAPIJACDfBAAA8wkAMAQ7AADjCQAw2QQAAOQJADDbBAAA5gkAIN8EAADnCQAwBDsAANcJADDZBAAA2AkAMNsEAADaCQAg3wQAANsJADAEOwAAywkAMNkEAADMCQAw2wQAAM4JACDfBAAAzwkAMAQ7AAC_CQAw2QQAAMAJADDbBAAAwgkAIN8EAADDCQAwAzsAAJMJACDZBAAAlAkAIN8EAAABACAEOwAAhQkAMNkEAACGCQAw2wQAAIgJACDfBAAAiQkAMAAAAAAAAAAAAAAAAAcUAADQCwAgFQAAzwwAIBYAANELACAuAADODAAgywMAAKgHACDxAwAAqAcAIMoEAACoBwAgAAAAAAU7AACRDQAgPAAAlA0AINkEAACSDQAg2gQAAJMNACDfBAAAxAQAIAM7AACRDQAg2QQAAJINACDfBAAAxAQAIAAAAAAAAAAAAAAAAAAB3AQAAACQBAILOwAA8QsAMDwAAPULADDZBAAA8gsAMNoEAADzCwAw2wQAAPQLACDcBAAAtQcAMN0EAAC1BwAw3gQAALUHADDfBAAAtQcAMOAEAAD2CwAw4QQAALgHADAaAwAAxwgAIAUAAMYIACARAADKCAAgFQAAxQgAIBYAAMwIACAbAADOCAAgHAAAzwgAICkAAMgIACArAADkCAAgLAAAywgAIC0AAM0IACDKAwEAAAABywMBAAAAAdADAAAAmgQC4wNAAAAAAZQEAQAAAAGVBAEAAAABowQBAAAAAaUEAQAAAAGmBBAAAAABpwQQAAAAAagEEAAAAAGpBBAAAAABqgQQAAAAAasEQAAAAAGsBEAAAAABAgAAACwAIDsAAPkLACADAAAALAAgOwAA-QsAIDwAAPgLACABNAAAkA0AMAIAAAAsACA0AAD4CwAgAgAAALkHACA0AAD3CwAgD8oDAQChBwAhywMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhlQQBAK0HACGjBAEAoQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEaAwAAwAcAIAUAAL8HACARAADDBwAgFQAAvgcAIBYAAMUHACAbAADHBwAgHAAAyAcAICkAAMEHACArAADiCAAgLAAAxAcAIC0AAMYHACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGlBAEArQcAIaYEEACjBwAhpwQQAKMHACGoBBAAowcAIakEEACjBwAhqgQQAKMHACGrBEAApQcAIawEQAC8BwAhGgMAAMcIACAFAADGCAAgEQAAyggAIBUAAMUIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKwAA5AgAICwAAMsIACAtAADNCAAgygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGlBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAAQQ7AADxCwAw2QQAAPILADDbBAAA9AsAIN8EAAC1BwAwAAAAAAAAAAAFOwAAiw0AIDwAAI4NACDZBAAAjA0AINoEAACNDQAg3wQAACwAIAM7AACLDQAg2QQAAIwNACDfBAAALAAgAAAAAAAAAAAAAAAAAAAAAAAABTsAAIYNACA8AACJDQAg2QQAAIcNACDaBAAAiA0AIN8EAAA_ACADOwAAhg0AINkEAACHDQAg3wQAAD8AIAAAAAAAAAU7AACBDQAgPAAAhA0AINkEAACCDQAg2gQAAIMNACDfBAAAxAQAIAM7AACBDQAg2QQAAIINACDfBAAAxAQAIAAAAAAABTsAAPwMACA8AAD_DAAg2QQAAP0MACDaBAAA_gwAIN8EAAAVACADOwAA_AwAINkEAAD9DAAg3wQAABUAIAAAAAU7AAD3DAAgPAAA-gwAINkEAAD4DAAg2gQAAPkMACDfBAAAEQAgAzsAAPcMACDZBAAA-AwAIN8EAAARACAAAAAAAAU7AADyDAAgPAAA9QwAINkEAADzDAAg2gQAAPQMACDfBAAADQAgAzsAAPIMACDZBAAA8wwAIN8EAAANACAAAAAAAAU7AADtDAAgPAAA8AwAINkEAADuDAAg2gQAAO8MACDfBAAACQAgAzsAAO0MACDZBAAA7gwAIN8EAAAJACAAAAAAAAU7AADoDAAgPAAA6wwAINkEAADpDAAg2gQAAOoMACDfBAAAxAQAIAM7AADoDAAg2QQAAOkMACDfBAAAxAQAIAAAAAAAAAAAAAAHOwAA4wwAIDwAAOYMACDZBAAA5AwAINoEAADlDAAg3QQAAJEBACDeBAAAkQEAIN8EAADEBAAgAzsAAOMMACDZBAAA5AwAIN8EAADEBAAgABMUAADQCwAgFgAA0QsAIBcAAM8LACAYAADSCwAgGwAA0wsAIBwAANQLACAfAADVCwAgIAAA1QsAICIAANYLACAjAADXCwAgJAAA2AsAICUAANkLACAmAADaCwAgJwAA2wsAICgAANwLACDxAwAAqAcAIPIDAACoBwAg8wMAAKgHACD3AwAAqAcAIBADAADbCwAgBQAA0wwAIBEAANcMACAVAADPDAAgFgAA0QsAIBsAANMLACAcAADUCwAgKQAA1AwAICoAANUMACArAADWDAAgLAAA2AwAIC0AAM4MACCVBAAAqAcAIKQEAACoBwAgpQQAAKgHACCsBAAAqAcAIAMJAADQDAAgFQAAzwwAIBoAANIMACAABwQAAM8MACATAADiDAAgFAAA0AsAIBYAANELACC-BAAAqAcAIMYEAACoBwAgygQAAKgHACACFQAAzwwAICEAANALACABFAAA0AsAIAMUAADQCwAgFQAAzwwAIOADAACoBwAgAAAGBgAA3wwAIBAAAOAMACARAADXDAAg8QMAAKgHACC-BAAAqAcAIMEEAACoBwAgAAQJAADQDAAgCgAA2QwAIAsAANoMACCiBAAAqAcAIAIIAADdDAAgCwAA2gwAIAIHAADZDAAgDwAA3gwAIAACBQAA0wwAIBIAAOEMACAAAAAZFAAAwQsAIBYAAMILACAXAADACwAgGAAAwwsAIBsAAMQLACAcAADFCwAgHwAAxgsAICAAAMcLACAiAADICwAgIwAAyQsAICQAAMoLACAlAADLCwAgJgAAzAsAICgAAM4LACDKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAECAAAAxAQAIDsAAOMMACADAAAAkQEAIDsAAOMMACA8AADnDAAgGwAAAJEBACAUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgKAAAhAkAIDQAAOcMACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgIwAA_wgAICQAAIAJACAlAACBCQAgJgAAggkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAAwQsAIBYAAMILACAYAADDCwAgGwAAxAsAIBwAAMULACAfAADGCwAgIAAAxwsAICIAAMgLACAjAADJCwAgJAAAygsAICUAAMsLACAmAADMCwAgJwAAzQsAICgAAM4LACDKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAECAAAAxAQAIDsAAOgMACADAAAAkQEAIDsAAOgMACA8AADsDAAgGwAAAJEBACAUAAD3CAAgFgAA-AgAIBgAAPkIACAbAAD6CAAgHAAA-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIDQAAOwMACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBYAAPgIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACERBAAAwQwAIBQAAL4LACAWAAC_CwAgygMBAAAAAeYDCAAAAAHnAwgAAAAB8AMBAAAAAacEEAAAAAG-BAEAAAABxQQBAAAAAcYEAQAAAAHHBAEAAAAByASAAAAAAckEIAAAAAHKBAgAAAABywQBAAAAAcwEAgAAAAECAAAACQAgOwAA7QwAIAMAAAAHACA7AADtDAAgPAAA8QwAIBMAAAAHACAEAADADAAgFAAA1goAIBYAANcKACA0AADxDAAgygMBAKEHACHmAwgA1wgAIecDCADXCAAh8AMBAKEHACGnBBAAowcAIb4EAQCtBwAhxQQBAKEHACHGBAEArQcAIccEAQChBwAhyASAAAAAAckEIACuBwAhygQIAJkJACHLBAEAoQcAIcwEAgDTBwAhEQQAAMAMACAUAADWCgAgFgAA1woAIMoDAQChBwAh5gMIANcIACHnAwgA1wgAIfADAQChBwAhpwQQAKMHACG-BAEArQcAIcUEAQChBwAhxgQBAK0HACHHBAEAoQcAIcgEgAAAAAHJBCAArgcAIcoECACZCQAhywQBAKEHACHMBAIA0wcAIQYFAAC6DAAgygMBAAAAAfADAQAAAAGUBAEAAAABwgQCAAAAAcQEAAAAxAQCAgAAAA0AIDsAAPIMACADAAAACwAgOwAA8gwAIDwAAPYMACAIAAAACwAgBQAAuQwAIDQAAPYMACDKAwEAoQcAIfADAQChBwAhlAQBAKEHACHCBAIA0wcAIcQEAAD0CsQEIgYFAAC5DAAgygMBAKEHACHwAwEAoQcAIZQEAQChBwAhwgQCANMHACHEBAAA9ArEBCILBgAAswwAIBEAALkLACDKAwEAAAABzgMQAAAAAfADAQAAAAHxAwEAAAABvQQBAAAAAb4EAQAAAAG_BCAAAAABwAQgAAAAAcEEAgAAAAECAAAAEQAgOwAA9wwAIAMAAAAPACA7AAD3DAAgPAAA-wwAIA0AAAAPACAGAACyDAAgEQAAgwsAIDQAAPsMACDKAwEAoQcAIc4DEACjBwAh8AMBAKEHACHxAwEArQcAIb0EAQChBwAhvgQBAK0HACG_BCAArgcAIcAEIACuBwAhwQQCAJEIACELBgAAsgwAIBEAAIMLACDKAwEAoQcAIc4DEACjBwAh8AMBAKEHACHxAwEArQcAIb0EAQChBwAhvgQBAK0HACG_BCAArgcAIcAEIACuBwAhwQQCAJEIACEGBwAArAwAIMoDAQAAAAHfAwAAALwEAvADAQAAAAG6BAEAAAABvAQgAAAAAQIAAAAVACA7AAD8DAAgAwAAABMAIDsAAPwMACA8AACADQAgCAAAABMAIAcAAKsMACA0AACADQAgygMBAKEHACHfAwAAmQu8BCLwAwEAoQcAIboEAQChBwAhvAQgAK4HACEGBwAAqwwAIMoDAQChBwAh3wMAAJkLvAQi8AMBAKEHACG6BAEAoQcAIbwEIACuBwAhGRQAAMELACAWAADCCwAgFwAAwAsAIBsAAMQLACAcAADFCwAgHwAAxgsAICAAAMcLACAiAADICwAgIwAAyQsAICQAAMoLACAlAADLCwAgJgAAzAsAICcAAM0LACAoAADOCwAgygMBAAAAAeMDQAAAAAHuAwEAAAAB7wMBAAAAAfADAQAAAAHxAwEAAAAB8gOAAAAAAfMDgAAAAAH0AyAAAAAB9gMAAAD2AwL3AwEAAAABAgAAAMQEACA7AACBDQAgAwAAAJEBACA7AACBDQAgPAAAhQ0AIBsAAACRAQAgFAAA9wgAIBYAAPgIACAXAAD2CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACA0AACFDQAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhGRQAAPcIACAWAAD4CAAgFwAA9ggAIBsAAPoIACAcAAD7CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgIwAA_wgAICQAAIAJACAlAACBCQAgJgAAggkAICcAAIMJACAoAACECQAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhCAkAAKoKACAVAAD2BwAgygMBAAAAAcsDAQAAAAHQAwAAALQEAuMDQAAAAAGLBAEAAAABjgQAAACzBAICAAAAPwAgOwAAhg0AIAMAAAA9ACA7AACGDQAgPAAAig0AIAoAAAA9ACAJAACoCgAgFQAA5gcAIDQAAIoNACDKAwEAoQcAIcsDAQChBwAh0AMAAOQHtAQi4wNAAKUHACGLBAEAoQcAIY4EAADjB7MEIggJAACoCgAgFQAA5gcAIMoDAQChBwAhywMBAKEHACHQAwAA5Ae0BCLjA0AApQcAIYsEAQChBwAhjgQAAOMHswQiGwMAAMcIACAFAADGCAAgEQAAyggAIBUAAMUIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKgAAyQgAICsAAOQIACAtAADNCAAgygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAECAAAALAAgOwAAiw0AIAMAAAAqACA7AACLDQAgPAAAjw0AIB0AAAAqACADAADABwAgBQAAvwcAIBEAAMMHACAVAAC-BwAgFgAAxQcAIBsAAMcHACAcAADIBwAgKQAAwQcAICoAAMIHACArAADiCAAgLQAAxgcAIDQAAI8NACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEbAwAAwAcAIAUAAL8HACARAADDBwAgFQAAvgcAIBYAAMUHACAbAADHBwAgHAAAyAcAICkAAMEHACAqAADCBwAgKwAA4ggAIC0AAMYHACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEPygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGlBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAARkUAADBCwAgFgAAwgsAIBcAAMALACAYAADDCwAgGwAAxAsAIBwAAMULACAfAADGCwAgIAAAxwsAICIAAMgLACAjAADJCwAgJAAAygsAICUAAMsLACAmAADMCwAgJwAAzQsAIMoDAQAAAAHjA0AAAAAB7gMBAAAAAe8DAQAAAAHwAwEAAAAB8QMBAAAAAfIDgAAAAAHzA4AAAAAB9AMgAAAAAfYDAAAA9gMC9wMBAAAAAQIAAADEBAAgOwAAkQ0AIAMAAACRAQAgOwAAkQ0AIDwAAJUNACAbAAAAkQEAIBQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAbAAD6CAAgHAAA-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgNAAAlQ0AIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIRkUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIQgJAACOCwAgCgAAwggAIMoDAQAAAAGLBAEAAAABnwQBAAAAAaAEAgAAAAGhBBAAAAABogQBAAAAAQIAAAAlACA7AACWDQAgAwAAACMAIDsAAJYNACA8AACaDQAgCgAAACMAIAkAAIwLACAKAACxCAAgNAAAmg0AIMoDAQChBwAhiwQBAKEHACGfBAEAoQcAIaAEAgDTBwAhoQQQAKMHACGiBAEArQcAIQgJAACMCwAgCgAAsQgAIMoDAQChBwAhiwQBAKEHACGfBAEAoQcAIaAEAgDTBwAhoQQQAKMHACGiBAEArQcAIQPKAwEAAAABnAQBAAAAAZ4EEAAAAAEDygMBAAAAAeEDAQAAAAGeBBAAAAABBMoDAQAAAAHfAwAAALwEAvADAQAAAAG8BCAAAAABGwMAAMcIACAFAADGCAAgFQAAxQgAIBYAAMwIACAbAADOCAAgHAAAzwgAICkAAMgIACAqAADJCAAgKwAA5AgAICwAAMsIACAtAADNCAAgygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAECAAAALAAgOwAAng0AIAMAAAAqACA7AACeDQAgPAAAog0AIB0AAAAqACADAADABwAgBQAAvwcAIBUAAL4HACAWAADFBwAgGwAAxwcAIBwAAMgHACApAADBBwAgKgAAwgcAICsAAOIIACAsAADEBwAgLQAAxgcAIDQAAKINACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEbAwAAwAcAIAUAAL8HACAVAAC-BwAgFgAAxQcAIBsAAMcHACAcAADIBwAgKQAAwQcAICoAAMIHACArAADiCAAgLAAAxAcAIC0AAMYHACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEFygMBAAAAAYsEAQAAAAGgBAIAAAABoQQQAAAAAaIEAQAAAAEIygMBAAAAAc4DEAAAAAHwAwEAAAAB8QMBAAAAAb4EAQAAAAG_BCAAAAABwAQgAAAAAcEEAgAAAAEEygMBAAAAAfADAQAAAAHCBAIAAAABxAQAAADEBAIPygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGVBAEAAAABowQBAAAAAaQEAQAAAAGlBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAAQnKAwEAAAABywMBAAAAAeMDQAAAAAHxAwEAAAABiwQBAAAAAZUEAQAAAAGWBAIAAAABlwQCAAAAAZgEAQAAAAENygMBAAAAAeYDCAAAAAHnAwgAAAAB8AMBAAAAAacEEAAAAAG-BAEAAAABxgQBAAAAAccEAQAAAAHIBIAAAAAByQQgAAAAAcoECAAAAAHLBAEAAAABzAQCAAAAAQ_KAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAZUEAQAAAAGjBAEAAAABpAQBAAAAAaUEAQAAAAGmBBAAAAABpwQQAAAAAagEEAAAAAGpBBAAAAABqgQQAAAAAasEQAAAAAGsBEAAAAABCcoDAQAAAAHjA0AAAAAB8QMBAAAAAYsEAQAAAAGUBAEAAAABlQQBAAAAAZYEAgAAAAGXBAIAAAABmAQBAAAAAQfKAwEAAAAB3wMBAAAAAbEEQAAAAAG1BAAAALUEArYEAQAAAAG3BAEAAAABuAQgAAAAARsDAADHCAAgBQAAxggAIBEAAMoIACAVAADFCAAgFgAAzAgAIBwAAM8IACApAADICAAgKgAAyQgAICsAAOQIACAsAADLCAAgLQAAzQgAIMoDAQAAAAHLAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAZUEAQAAAAGjBAEAAAABpAQBAAAAAaUEAQAAAAGmBBAAAAABpwQQAAAAAagEEAAAAAGpBBAAAAABqgQQAAAAAasEQAAAAAGsBEAAAAABAgAAACwAIDsAAKwNACADAAAAKgAgOwAArA0AIDwAALANACAdAAAAKgAgAwAAwAcAIAUAAL8HACARAADDBwAgFQAAvgcAIBYAAMUHACAcAADIBwAgKQAAwQcAICoAAMIHACArAADiCAAgLAAAxAcAIC0AAMYHACA0AACwDQAgygMBAKEHACHLAwEAoQcAIdADAAC7B5oEIuMDQAClBwAhlAQBAKEHACGVBAEArQcAIaMEAQChBwAhpAQBAK0HACGlBAEArQcAIaYEEACjBwAhpwQQAKMHACGoBBAAowcAIakEEACjBwAhqgQQAKMHACGrBEAApQcAIawEQAC8BwAhGwMAAMAHACAFAAC_BwAgEQAAwwcAIBUAAL4HACAWAADFBwAgHAAAyAcAICkAAMEHACAqAADCBwAgKwAA4ggAICwAAMQHACAtAADGBwAgygMBAKEHACHLAwEAoQcAIdADAAC7B5oEIuMDQAClBwAhlAQBAKEHACGVBAEArQcAIaMEAQChBwAhpAQBAK0HACGlBAEArQcAIaYEEACjBwAhpwQQAKMHACGoBBAAowcAIakEEACjBwAhqgQQAKMHACGrBEAApQcAIawEQAC8BwAhBcoDAQAAAAHQAwAAALQEAuMDQAAAAAGLBAEAAAABjgQAAACzBAIbAwAAxwgAIAUAAMYIACARAADKCAAgFQAAxQgAIBYAAMwIACAbAADOCAAgKQAAyAgAICoAAMkIACArAADkCAAgLAAAywgAIC0AAM0IACDKAwEAAAABywMBAAAAAdADAAAAmgQC4wNAAAAAAZQEAQAAAAGVBAEAAAABowQBAAAAAaQEAQAAAAGlBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAAQIAAAAsACA7AACyDQAgAwAAACoAIDsAALINACA8AAC2DQAgHQAAACoAIAMAAMAHACAFAAC_BwAgEQAAwwcAIBUAAL4HACAWAADFBwAgGwAAxwcAICkAAMEHACAqAADCBwAgKwAA4ggAICwAAMQHACAtAADGBwAgNAAAtg0AIMoDAQChBwAhywMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhlQQBAK0HACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIRsDAADABwAgBQAAvwcAIBEAAMMHACAVAAC-BwAgFgAAxQcAIBsAAMcHACApAADBBwAgKgAAwgcAICsAAOIIACAsAADEBwAgLQAAxgcAIMoDAQChBwAhywMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhlQQBAK0HACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIQXKAwEAAAAB4wNAAAAAAYsEAQAAAAGMBAIAAAABjgQAAACOBAIZFAAAwQsAIBYAAMILACAXAADACwAgGAAAwwsAIBsAAMQLACAcAADFCwAgHwAAxgsAICIAAMgLACAjAADJCwAgJAAAygsAICUAAMsLACAmAADMCwAgJwAAzQsAICgAAM4LACDKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAECAAAAxAQAIDsAALgNACADAAAAkQEAIDsAALgNACA8AAC8DQAgGwAAAJEBACAUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIDQAALwNACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgHwAA_AgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEFygMBAAAAAdADAAAAiwQC4wNAAAAAAYgEAQAAAAGJBAEAAAABGRQAAMELACAWAADCCwAgFwAAwAsAIBgAAMMLACAbAADECwAgHAAAxQsAICAAAMcLACAiAADICwAgIwAAyQsAICQAAMoLACAlAADLCwAgJgAAzAsAICcAAM0LACAoAADOCwAgygMBAAAAAeMDQAAAAAHuAwEAAAAB7wMBAAAAAfADAQAAAAHxAwEAAAAB8gOAAAAAAfMDgAAAAAH0AyAAAAAB9gMAAAD2AwL3AwEAAAABAgAAAMQEACA7AAC-DQAgAwAAAJEBACA7AAC-DQAgPAAAwg0AIBsAAACRAQAgFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACA0AADCDQAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhGRQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAbAAD6CAAgHAAA-wgAICAAAP0IACAiAAD-CAAgIwAA_wgAICQAAIAJACAlAACBCQAgJgAAggkAICcAAIMJACAoAACECQAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhBcoDAQAAAAHQAwAAAIsEAuMDQAAAAAGHBAEAAAABiQQBAAAAAQfKAwEAAAAB4QMBAAAAAeIDIAAAAAHkAwEAAAAB5QMBAAAAAeYDCAAAAAHnAwgAAAABBsoDAQAAAAHfAwAAAN8DAuADAQAAAAHhAwEAAAAB4gMgAAAAAeMDQAAAAAEGygMBAAAAAc0DAAAAzQMCzgMQAAAAAdADAAAA0AMC0QNAAAAAAdIDQAAAAAEFygMBAAAAAeMDQAAAAAHrAwAAAOsDAuwDAQAAAAHtAwEAAAABBcoDAQAAAAHSA0AAAAAB4wNAAAAAAegDAQAAAAHpA0AAAAABGwMAAMcIACAFAADGCAAgEQAAyggAIBUAAMUIACAWAADMCAAgGwAAzggAIBwAAM8IACApAADICAAgKgAAyQgAICsAAOQIACAsAADLCAAgygMBAAAAAcsDAQAAAAHQAwAAAJoEAuMDQAAAAAGUBAEAAAABlQQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAECAAAALAAgOwAAyQ0AIAMAAAAqACA7AADJDQAgPAAAzQ0AIB0AAAAqACADAADABwAgBQAAvwcAIBEAAMMHACAVAAC-BwAgFgAAxQcAIBsAAMcHACAcAADIBwAgKQAAwQcAICoAAMIHACArAADiCAAgLAAAxAcAIDQAAM0NACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEbAwAAwAcAIAUAAL8HACARAADDBwAgFQAAvgcAIBYAAMUHACAbAADHBwAgHAAAyAcAICkAAMEHACAqAADCBwAgKwAA4ggAICwAAMQHACDKAwEAoQcAIcsDAQChBwAh0AMAALsHmgQi4wNAAKUHACGUBAEAoQcAIZUEAQCtBwAhowQBAKEHACGkBAEArQcAIaUEAQCtBwAhpgQQAKMHACGnBBAAowcAIagEEACjBwAhqQQQAKMHACGqBBAAowcAIasEQAClBwAhrARAALwHACEIygMBAAAAAdADAAAA0QQCiwQBAAAAAaoEEAAAAAHNBBAAAAABzgQQAAAAAc8EEAAAAAHRBEAAAAABD8oDAQAAAAHLAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAaMEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAEbAwAAxwgAIAUAAMYIACARAADKCAAgFQAAxQgAIBsAAM4IACAcAADPCAAgKQAAyAgAICoAAMkIACArAADkCAAgLAAAywgAIC0AAM0IACDKAwEAAAABywMBAAAAAdADAAAAmgQC4wNAAAAAAZQEAQAAAAGVBAEAAAABowQBAAAAAaQEAQAAAAGlBAEAAAABpgQQAAAAAacEEAAAAAGoBBAAAAABqQQQAAAAAaoEEAAAAAGrBEAAAAABrARAAAAAAQIAAAAsACA7AADQDQAgAwAAACoAIDsAANANACA8AADUDQAgHQAAACoAIAMAAMAHACAFAAC_BwAgEQAAwwcAIBUAAL4HACAbAADHBwAgHAAAyAcAICkAAMEHACAqAADCBwAgKwAA4ggAICwAAMQHACAtAADGBwAgNAAA1A0AIMoDAQChBwAhywMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhlQQBAK0HACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIRsDAADABwAgBQAAvwcAIBEAAMMHACAVAAC-BwAgGwAAxwcAIBwAAMgHACApAADBBwAgKgAAwgcAICsAAOIIACAsAADEBwAgLQAAxgcAIMoDAQChBwAhywMBAKEHACHQAwAAuweaBCLjA0AApQcAIZQEAQChBwAhlQQBAK0HACGjBAEAoQcAIaQEAQCtBwAhpQQBAK0HACGmBBAAowcAIacEEACjBwAhqAQQAKMHACGpBBAAowcAIaoEEACjBwAhqwRAAKUHACGsBEAAvAcAIQnKAwEAAAABywMBAAAAAeMDQAAAAAHxAwEAAAABiwQBAAAAAZQEAQAAAAGWBAIAAAABlwQCAAAAAZgEAQAAAAEIygMBAAAAAdADAAAAhQQC3wMAAACCBALjA0AAAAABggQBAAAAAYMEAQAAAAGFBAEAAAABhgRAAAAAARkUAADBCwAgFgAAwgsAIBcAAMALACAYAADDCwAgGwAAxAsAIBwAAMULACAfAADGCwAgIAAAxwsAICIAAMgLACAjAADJCwAgJAAAygsAICYAAMwLACAnAADNCwAgKAAAzgsAIMoDAQAAAAHjA0AAAAAB7gMBAAAAAe8DAQAAAAHwAwEAAAAB8QMBAAAAAfIDgAAAAAHzA4AAAAAB9AMgAAAAAfYDAAAA9gMC9wMBAAAAAQIAAADEBAAgOwAA1w0AIAMAAACRAQAgOwAA1w0AIDwAANsNACAbAAAAkQEAIBQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAbAAD6CAAgHAAA-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJgAAggkAICcAAIMJACAoAACECQAgNAAA2w0AIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIRkUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICYAAIIJACAnAACDCQAgKAAAhAkAIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIRkUAADBCwAgFgAAwgsAIBcAAMALACAYAADDCwAgGwAAxAsAIBwAAMULACAfAADGCwAgIAAAxwsAICIAAMgLACAjAADJCwAgJAAAygsAICUAAMsLACAnAADNCwAgKAAAzgsAIMoDAQAAAAHjA0AAAAAB7gMBAAAAAe8DAQAAAAHwAwEAAAAB8QMBAAAAAfIDgAAAAAHzA4AAAAAB9AMgAAAAAfYDAAAA9gMC9wMBAAAAAQIAAADEBAAgOwAA3A0AIAMAAACRAQAgOwAA3A0AIDwAAOANACAbAAAAkQEAIBQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAbAAD6CAAgHAAA-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICcAAIMJACAoAACECQAgNAAA4A0AIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIRkUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAnAACDCQAgKAAAhAkAIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIRkUAADBCwAgFgAAwgsAIBcAAMALACAYAADDCwAgGwAAxAsAIBwAAMULACAfAADGCwAgIAAAxwsAICMAAMkLACAkAADKCwAgJQAAywsAICYAAMwLACAnAADNCwAgKAAAzgsAIMoDAQAAAAHjA0AAAAAB7gMBAAAAAe8DAQAAAAHwAwEAAAAB8QMBAAAAAfIDgAAAAAHzA4AAAAAB9AMgAAAAAfYDAAAA9gMC9wMBAAAAAQIAAADEBAAgOwAA4Q0AIAgVAADQCAAgygMBAAAAAcsDAQAAAAHfAwAAAN8DAuADAQAAAAHhAwEAAAAB4gMgAAAAAeMDQAAAAAECAAAAVwAgOwAA4w0AIAMAAABVACA7AADjDQAgPAAA5w0AIAoAAABVACAVAACvBwAgNAAA5w0AIMoDAQChBwAhywMBAKEHACHfAwAArAffAyLgAwEArQcAIeEDAQChBwAh4gMgAK4HACHjA0AApQcAIQgVAACvBwAgygMBAKEHACHLAwEAoQcAId8DAACsB98DIuADAQCtBwAh4QMBAKEHACHiAyAArgcAIeMDQAClBwAhD8oDAQAAAAHLAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAZUEAQAAAAGkBAEAAAABpQQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAEDAAAAkQEAIDsAAOENACA8AADrDQAgGwAAAJEBACAUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIDQAAOsNACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgHwAA_AgAICAAAP0IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAAwQsAIBYAAMILACAXAADACwAgGAAAwwsAIBsAAMQLACAcAADFCwAgHwAAxgsAICAAAMcLACAiAADICwAgJAAAygsAICUAAMsLACAmAADMCwAgJwAAzQsAICgAAM4LACDKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAECAAAAxAQAIDsAAOwNACAIygMBAAAAAdIDQAAAAAHfAwAAAJAEAokEAQAAAAGQBBAAAAABkQQQAAAAAZIEAgAAAAGTBAIAAAABAgAAAOoDACA7AADuDQAgCRUAAOUIACDKAwEAAAABywMBAAAAAeEDAQAAAAHiAyAAAAAB5AMBAAAAAeUDAQAAAAHmAwgAAAAB5wMIAAAAAQIAAABRACA7AADwDQAgEBUAAM0MACAWAAC-CQAgLgAAvAkAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAeYDCAAAAAHnAwgAAAAB7gMBAAAAAe8DAQAAAAHwAwEAAAAB8QMBAAAAAcoECAAAAAHTBAAAANMEAtQEIAAAAAHVBCAAAAABAgAAAAEAIDsAAPINACARBAAAwQwAIBMAAL0LACAWAAC_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-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIDQAAJMOACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEJygMBAAAAAcsDAQAAAAHjA0AAAAAB8QMBAAAAAZQEAQAAAAGVBAEAAAABlgQCAAAAAZcEAgAAAAGYBAEAAAABEBQAAL0JACAVAADNDAAgFgAAvgkAIMoDAQAAAAHLAwEAAAAB4wNAAAAAAeYDCAAAAAHnAwgAAAAB7gMBAAAAAe8DAQAAAAHwAwEAAAAB8QMBAAAAAcoECAAAAAHTBAAAANMEAtQEIAAAAAHVBCAAAAABAgAAAAEAIDsAAJUOACADAAAAMgAgOwAAlQ4AIDwAAJkOACASAAAAMgAgFAAAmwkAIBUAAMwMACAWAACcCQAgNAAAmQ4AIMoDAQChBwAhywMBAK0HACHjA0AApQcAIeYDCADXCAAh5wMIANcIACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIcoECACZCQAh0wQAAJgJ0wQi1AQgAK4HACHVBCAArgcAIRAUAACbCQAgFQAAzAwAIBYAAJwJACDKAwEAoQcAIcsDAQCtBwAh4wNAAKUHACHmAwgA1wgAIecDCADXCAAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHKBAgAmQkAIdMEAACYCdMEItQEIACuBwAh1QQgAK4HACEIygMBAAAAAdADAAAA0QQClQQBAAAAAaoEEAAAAAHNBBAAAAABzgQQAAAAAc8EEAAAAAHRBEAAAAABGRQAAMELACAWAADCCwAgFwAAwAsAIBgAAMMLACAcAADFCwAgHwAAxgsAICAAAMcLACAiAADICwAgIwAAyQsAICQAAMoLACAlAADLCwAgJgAAzAsAICcAAM0LACAoAADOCwAgygMBAAAAAeMDQAAAAAHuAwEAAAAB7wMBAAAAAfADAQAAAAHxAwEAAAAB8gOAAAAAAfMDgAAAAAH0AyAAAAAB9gMAAAD2AwL3AwEAAAABAgAAAMQEACA7AACbDgAgBcoDAQAAAAH2AwAAALAEAq4EAQAAAAGwBAEAAAABsQRAAAAAAQMAAACRAQAgOwAAmw4AIDwAAKAOACAbAAAAkQEAIBQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAcAAD7CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgIwAA_wgAICQAAIAJACAlAACBCQAgJgAAggkAICcAAIMJACAoAACECQAgNAAAoA4AIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIRkUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgHAAA-wgAIB8AAPwIACAgAAD9CAAgIgAA_ggAICMAAP8IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIMoDAQChBwAh4wNAAKUHACHuAwEAoQcAIe8DAQChBwAh8AMBAKEHACHxAwEArQcAIfIDgAAAAAHzA4AAAAAB9AMgAK4HACH2AwAA9Qj2AyL3AwEArQcAIQXKAwEAAAABywMBAAAAAdADAAAAtAQC4wNAAAAAAY4EAAAAswQCGRQAAMELACAWAADCCwAgFwAAwAsAIBgAAMMLACAbAADECwAgHwAAxgsAICAAAMcLACAiAADICwAgIwAAyQsAICQAAMoLACAlAADLCwAgJgAAzAsAICcAAM0LACAoAADOCwAgygMBAAAAAeMDQAAAAAHuAwEAAAAB7wMBAAAAAfADAQAAAAHxAwEAAAAB8gOAAAAAAfMDgAAAAAH0AyAAAAAB9gMAAAD2AwL3AwEAAAABAgAAAMQEACA7AACiDgAgAwAAAJEBACA7AACiDgAgPAAApg4AIBsAAACRAQAgFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACA0AACmDgAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhGRQAAPcIACAWAAD4CAAgFwAA9ggAIBgAAPkIACAbAAD6CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgIwAA_wgAICQAAIAJACAlAACBCQAgJgAAggkAICcAAIMJACAoAACECQAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhBcoDAQAAAAHLAwEAAAAB4wNAAAAAAYwEAgAAAAGOBAAAAI4EAgMAAAB7ACA7AADuDQAgPAAAqg4AIAoAAAB7ACA0AACqDgAgygMBAKEHACHSA0AApQcAId8DAADvC5AEIokEAQChBwAhkAQQAKMHACGRBBAAowcAIZIEAgDTBwAhkwQCANMHACEIygMBAKEHACHSA0AApQcAId8DAADvC5AEIokEAQChBwAhkAQQAKMHACGRBBAAowcAIZIEAgDTBwAhkwQCANMHACEDAAAATwAgOwAA8A0AIDwAAK0OACALAAAATwAgFQAA2AgAIDQAAK0OACDKAwEAoQcAIcsDAQChBwAh4QMBAKEHACHiAyAArgcAIeQDAQChBwAh5QMBAKEHACHmAwgA1wgAIecDCADXCAAhCRUAANgIACDKAwEAoQcAIcsDAQChBwAh4QMBAKEHACHiAyAArgcAIeQDAQChBwAh5QMBAKEHACHmAwgA1wgAIecDCADXCAAhAwAAADIAIDsAAPINACA8AACwDgAgEgAAADIAIBUAAMwMACAWAACcCQAgLgAAmgkAIDQAALAOACDKAwEAoQcAIcsDAQCtBwAh4wNAAKUHACHmAwgA1wgAIecDCADXCAAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHKBAgAmQkAIdMEAACYCdMEItQEIACuBwAh1QQgAK4HACEQFQAAzAwAIBYAAJwJACAuAACaCQAgygMBAKEHACHLAwEArQcAIeMDQAClBwAh5gMIANcIACHnAwgA1wgAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAhygQIAJkJACHTBAAAmAnTBCLUBCAArgcAIdUEIACuBwAhAwAAAAcAIDsAAPQNACA8AACzDgAgEwAAAAcAIAQAAMAMACATAADVCgAgFgAA1woAIDQAALMOACDKAwEAoQcAIeYDCADXCAAh5wMIANcIACHwAwEAoQcAIacEEACjBwAhvgQBAK0HACHFBAEAoQcAIcYEAQCtBwAhxwQBAKEHACHIBIAAAAAByQQgAK4HACHKBAgAmQkAIcsEAQChBwAhzAQCANMHACERBAAAwAwAIBMAANUKACAWAADXCgAgygMBAKEHACHmAwgA1wgAIecDCADXCAAh8AMBAKEHACGnBBAAowcAIb4EAQCtBwAhxQQBAKEHACHGBAEArQcAIccEAQChBwAhyASAAAAAAckEIACuBwAhygQIAJkJACHLBAEAoQcAIcwEAgDTBwAhAwAAAJEBACA7AAD2DQAgPAAAtg4AIBsAAACRAQAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACA0AAC2DgAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhGRYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgIwAA_wgAICQAAIAJACAlAACBCQAgJgAAggkAICcAAIMJACAoAACECQAgygMBAKEHACHjA0AApQcAIe4DAQChBwAh7wMBAKEHACHwAwEAoQcAIfEDAQCtBwAh8gOAAAAAAfMDgAAAAAH0AyAArgcAIfYDAAD1CPYDIvcDAQCtBwAhD8oDAQAAAAHLAwEAAAAB0AMAAACaBALjA0AAAAABlAQBAAAAAZUEAQAAAAGjBAEAAAABpAQBAAAAAaYEEAAAAAGnBBAAAAABqAQQAAAAAakEEAAAAAGqBBAAAAABqwRAAAAAAawEQAAAAAEDAAAAkQEAIDsAAOwNACA8AAC6DgAgGwAAAJEBACAUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAkAACACQAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIDQAALoOACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgJAAAgAkAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAAwQsAIBYAAMILACAXAADACwAgGAAAwwsAIBsAAMQLACAcAADFCwAgHwAAxgsAICAAAMcLACAiAADICwAgIwAAyQsAICUAAMsLACAmAADMCwAgJwAAzQsAICgAAM4LACDKAwEAAAAB4wNAAAAAAe4DAQAAAAHvAwEAAAAB8AMBAAAAAfEDAQAAAAHyA4AAAAAB8wOAAAAAAfQDIAAAAAH2AwAAAPYDAvcDAQAAAAECAAAAxAQAIDsAALsOACADAAAAkQEAIDsAALsOACA8AAC_DgAgGwAAAJEBACAUAAD3CAAgFgAA-AgAIBcAAPYIACAYAAD5CAAgGwAA-ggAIBwAAPsIACAfAAD8CAAgIAAA_QgAICIAAP4IACAjAAD_CAAgJQAAgQkAICYAAIIJACAnAACDCQAgKAAAhAkAIDQAAL8OACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEZFAAA9wgAIBYAAPgIACAXAAD2CAAgGAAA-QgAIBsAAPoIACAcAAD7CAAgHwAA_AgAICAAAP0IACAiAAD-CAAgIwAA_wgAICUAAIEJACAmAACCCQAgJwAAgwkAICgAAIQJACDKAwEAoQcAIeMDQAClBwAh7gMBAKEHACHvAwEAoQcAIfADAQChBwAh8QMBAK0HACHyA4AAAAAB8wOAAAAAAfQDIACuBwAh9gMAAPUI9gMi9wMBAK0HACEFDAAmFI8BAxWSAQQWkAERLgYCAgMAAQkAAw0DegEFAAUMACURgAELFQAEFoUBERuHARQciAEXKQAZKnwiK38bLIQBJC2GAQIQDAAhFDcDFjgRFwoFGDwTG0AUHEkXH00YIE4YIlIZI1gbJF4dJWIeJmYfJ2cBKGsgBQQABAwAEhMOBhQtAxYxEQMFAAUMABASEgcEBgAGDAAPEBYIESYLAwcABwwADg8aCQMIAAgLHgoMAA0CDQALDgAJBAkAAwoABwsfCgwADAELIAABCyEAAQ8iAAIQJwARKAABEikABAMzAQUABQkAAxUABAMTNAAUNQAWNgABFQAEBAkAAwwAFhUABBpEFQEZABQBGkUAAgkAAxUABAIdAAQeAAQDDAAaFQAEIVMDASFUAAMMABwUWQMVAAQBFFoAARUABAEVAAQBFQAEARUABA4UbQAWbgAXbAAYbwAbcAAccQAfcgAgcwAidAAjdQAkdgAldwAmeAAoeQACDAAjFH0DARR-AAEJAAMGEYkBABaLAQAbjQEAHI4BACyKAQAtjAEAAxSUAQAWlQEALpMBAAABFaABBAEVpgEEBQwAK0EALEIALUMALkQALwAAAAAABQwAK0EALEIALUMALkQALwIDAAEJAAMCAwABCQADBQwANEEANUIANkMAN0QAOAAAAAAABQwANEEANUIANkMAN0QAOAEEAAQBBAAEBQwAPUEAPkIAP0MAQEQAQQAAAAAABQwAPUEAPkIAP0MAQEQAQQEFAAUBBQAFBQwARkEAR0IASEMASUQASgAAAAAABQwARkEAR0IASEMASUQASgEGAAYBBgAGBQwAT0EAUEIAUUMAUkQAUwAAAAAABQwAT0EAUEIAUUMAUkQAUwEHAAcBBwAHAwwAWEMAWUQAWgAAAAMMAFhDAFlEAFoBCAAIAQgACAUMAF9BAGBCAGFDAGJEAGMAAAAAAAUMAF9BAGBCAGFDAGJEAGMBFQAEARUABAMMAGhDAGlEAGoAAAADDABoQwBpRABqAgkAAxUABAIJAAMVAAQDDABvQwBwRABxAAAAAwwAb0MAcEQAcQEZABQBGQAUAwwAdkMAd0QAeAAAAAMMAHZDAHdEAHgGA_4CAQUABRUABCkAGSr_AiIrgAMbBgOGAwEFAAUVAAQpABkqhwMiK4gDGwUMAH1BAH5CAH9DAIABRACBAQAAAAAABQwAfUEAfkIAf0MAgAFEAIEBAgkAAwoABwIJAAMKAAcFDACGAUEAhwFCAIgBQwCJAUQAigEAAAAAAAUMAIYBQQCHAUIAiAFDAIkBRACKAQINAAsOAAkCDQALDgAJBQwAjwFBAJABQgCRAUMAkgFEAJMBAAAAAAAFDACPAUEAkAFCAJEBQwCSAUQAkwEBCQADAQkAAwMMAJgBQwCZAUQAmgEAAAADDACYAUMAmQFEAJoBBAPcAwEFAAUJAAMVAAQEA-IDAQUABQkAAxUABAUMAJ8BQQCgAUIAoQFDAKIBRACjAQAAAAAABQwAnwFBAKABQgChAUMAogFEAKMBAAAFDACoAUEAqQFCAKoBQwCrAUQArAEAAAAAAAUMAKgBQQCpAUIAqgFDAKsBRACsAQIJAAMVAAQCCQADFQAEBQwAsQFBALIBQgCzAUMAtAFEALUBAAAAAAAFDACxAUEAsgFCALMBQwC0AUQAtQECHQAEHgAEAh0ABB4ABAMMALoBQwC7AUQAvAEAAAADDAC6AUMAuwFEALwBARUABAEVAAQDDADBAUMAwgFEAMMBAAAAAwwAwQFDAMIBRADDAQAAAwwAyAFDAMkBRADKAQAAAAMMAMgBQwDJAUQAygEBFQAEARUABAMMAM8BQwDQAUQA0QEAAAADDADPAUMA0AFEANEBARUABAEVAAQDDADWAUMA1wFEANgBAAAAAwwA1gFDANcBRADYAQEVAAQBFQAEBQwA3QFBAN4BQgDfAUMA4AFEAOEBAAAAAAAFDADdAUEA3gFCAN8BQwDgAUQA4QEBFQAEARUABAMMAOYBQwDnAUQA6AEAAAADDADmAUMA5wFEAOgBARUABAEVAAQFDADtAUEA7gFCAO8BQwDwAUQA8QEAAAAAAAUMAO0BQQDuAUIA7wFDAPABRADxAS8CATCWAQExmAEBMpkBATOaAQE1nAEBNp4BJzefASg4ogEBOaQBJzqlASk9pwEBPqgBAT-pASdFrAEqRq0BMEeuAQJIrwECSbABAkqxAQJLsgECTLQBAk22ASdOtwExT7kBAlC7ASdRvAEyUr0BAlO-AQJUvwEnVcIBM1bDATlXxAEFWMUBBVnGAQVaxwEFW8gBBVzKAQVdzAEnXs0BOl_PAQVg0QEnYdIBO2LTAQVj1AEFZNUBJ2XYATxm2QFCZ9oBBmjbAQZp3AEGat0BBmveAQZs4AEGbeIBJ27jAUNv5QEGcOcBJ3HoAURy6QEGc-oBBnTrASd17gFFdu8BS3fwAQd48QEHefIBB3rzAQd79AEHfPYBB334ASd--QFMf_sBB4AB_QEngQH-AU2CAf8BB4MBgAIHhAGBAieFAYQCToYBhQJUhwGGAgiIAYcCCIkBiAIIigGJAgiLAYoCCIwBjAIIjQGOAieOAY8CVY8BkQIIkAGTAieRAZQCVpIBlQIIkwGWAgiUAZcCJ5UBmgJXlgGbAluXAZwCCZgBnQIJmQGeAgmaAZ8CCZsBoAIJnAGiAgmdAaQCJ54BpQJcnwGnAgmgAakCJ6EBqgJdogGrAgmjAawCCaQBrQInpQGwAl6mAbECZKcBsgITqAGzAhOpAbQCE6oBtQITqwG2AhOsAbgCE60BugInrgG7AmWvAb0CE7ABvwInsQHAAmayAcECE7MBwgITtAHDAie1AcYCZ7YBxwJrtwHIAhS4AckCFLkBygIUugHLAhS7AcwCFLwBzgIUvQHQAie-AdECbL8B0wIUwAHVAifBAdYCbcIB1wIUwwHYAhTEAdkCJ8UB3AJuxgHdAnLHAd4CFcgB3wIVyQHgAhXKAeECFcsB4gIVzAHkAhXNAeYCJ84B5wJzzwHpAhXQAesCJ9EB7AJ00gHtAhXTAe4CFdQB7wIn1QHyAnXWAfMCedcB9AID2AH1AgPZAfYCA9oB9wID2wH4AgPcAfoCA90B_AIn3gH9AnrfAYIDA-ABhAMn4QGFA3viAYkDA-MBigMD5AGLAyflAY4DfOYBjwOCAecBkAML6AGRAwvpAZIDC-oBkwML6wGUAwvsAZYDC-0BmAMn7gGZA4MB7wGbAwvwAZ0DJ_EBngOEAfIBnwML8wGgAwv0AaEDJ_UBpAOFAfYBpQOLAfcBpgMK-AGnAwr5AagDCvoBqQMK-wGqAwr8AawDCv0BrgMn_gGvA4wB_wGxAwqAArMDJ4ECtAONAYICtQMKgwK2AwqEArcDJ4UCugOOAYYCuwOUAYcCvAMkiAK9AySJAr4DJIoCvwMkiwLAAySMAsIDJI0CxAMnjgLFA5UBjwLHAySQAskDJ5ECygOWAZICywMkkwLMAySUAs0DJ5UC0AOXAZYC0QObAZcC0gMRmALTAxGZAtQDEZoC1QMRmwLWAxGcAtgDEZ0C2gMnngLbA5wBnwLeAxGgAuADJ6EC4QOdAaIC4wMRowLkAxGkAuUDJ6UC6AOeAaYC6QOkAacC6wMiqALsAyKpAu4DIqoC7wMiqwLwAyKsAvIDIq0C9AMnrgL1A6UBrwL3AyKwAvkDJ7EC-gOmAbIC-wMiswL8AyK0Av0DJ7UCgASnAbYCgQStAbcCggQXuAKDBBe5AoQEF7oChQQXuwKGBBe8AogEF70CigQnvgKLBK4BvwKNBBfAAo8EJ8ECkASvAcICkQQXwwKSBBfEApMEJ8UClgSwAcYClwS2AccCmAQYyAKZBBjJApoEGMoCmwQYywKcBBjMAp4EGM0CoAQnzgKhBLcBzwKjBBjQAqUEJ9ECpgS4AdICpwQY0wKoBBjUAqkEJ9UCrAS5AdYCrQS9AdcCrgQg2AKvBCDZArAEINoCsQQg2wKyBCDcArQEIN0CtgQn3gK3BL4B3wK5BCDgArsEJ-ECvAS_AeICvQQg4wK-BCDkAr8EJ-UCwgTAAeYCwwTEAecCxQQE6ALGBATpAsgEBOoCyQQE6wLKBATsAswEBO0CzgQn7gLPBMUB7wLRBATwAtMEJ_EC1ATGAfIC1QQE8wLWBAT0AtcEJ_UC2gTHAfYC2wTLAfcC3AQe-ALdBB75At4EHvoC3wQe-wLgBB78AuIEHv0C5AQn_gLlBMwB_wLnBB6AA-kEJ4ED6gTNAYID6wQegwPsBB6EA-0EJ4UD8ATOAYYD8QTSAYcD8gQfiAPzBB-JA_QEH4oD9QQfiwP2BB-MA_gEH40D-gQnjgP7BNMBjwP9BB-QA_8EJ5EDgAXUAZIDgQUfkwOCBR-UA4MFJ5UDhgXVAZYDhwXZAZcDiAUZmAOJBRmZA4oFGZoDiwUZmwOMBRmcA44FGZ0DkAUnngORBdoBnwOTBRmgA5UFJ6EDlgXbAaIDlwUZowOYBRmkA5kFJ6UDnAXcAaYDnQXiAacDngUbqAOfBRupA6AFG6oDoQUbqwOiBRusA6QFG60DpgUnrgOnBeMBrwOpBRuwA6sFJ7EDrAXkAbIDrQUbswOuBRu0A68FJ7UDsgXlAbYDswXpAbcDtAUduAO1BR25A7YFHboDtwUduwO4BR28A7oFHb0DvAUnvgO9BeoBvwO_BR3AA8EFJ8EDwgXrAcIDwwUdwwPEBR3EA8UFJ8UDyAXsAcYDyQXyAQ"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/infrastructure/databases/prismaClient.ts
var globalForPrisma = globalThis;
var prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL || ""
  })
});
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// src/infrastructure/frameworks/express/index.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";

// src/interfaces/middlewares/requireAdmin.ts
var createRequireAdmin = (requireAuth) => async (request, response, next) => {
  await new Promise((resolve) => requireAuth(request, response, () => resolve()));
  if (response.headersSent) return;
  if (request.user?.role !== "ADMIN") {
    response.status(403).json({ message: "Acc\xE8s r\xE9serv\xE9 aux administrateurs" });
    return;
  }
  next();
};

// src/interfaces/http/auth/index.ts
import { Router as Router6 } from "express";

// src/shared/Result.ts
var ok = (value) => ({ ok: true, value });
var failure = (error) => ({ ok: false, error });

// src/application/usecases/auth/TokenIssuer.ts
import crypto from "crypto";
var REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1e3;
var TokenIssuer = class {
  constructor(refreshTokenRepo, tokenService) {
    this.refreshTokenRepo = refreshTokenRepo;
    this.tokenService = tokenService;
  }
  refreshTokenRepo;
  tokenService;
  async issue(userId) {
    const accessToken = this.tokenService.signAccessToken(userId);
    const refreshToken = this.tokenService.signRefreshToken(userId);
    const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    const expiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_MS);
    await this.refreshTokenRepo.create({ userId, tokenHash, expiresAt });
    return { accessToken, refreshToken };
  }
};

// src/domain/errors/DomainError.ts
var DomainError = class extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};

// src/domain/errors/AuthErrors.ts
var EmailAlreadyInUseError = class extends DomainError {
  code = "EMAIL_ALREADY_IN_USE";
  constructor() {
    super("Cette adresse e-mail est d\xE9j\xE0 utilis\xE9e.");
  }
};
var PhoneAlreadyInUseError = class extends DomainError {
  code = "PHONE_ALREADY_IN_USE";
  constructor() {
    super("Ce num\xE9ro de t\xE9l\xE9phone est d\xE9j\xE0 utilis\xE9.");
  }
};
var InvalidCredentialsError = class extends DomainError {
  code = "INVALID_CREDENTIALS";
  constructor() {
    super("Identifiants incorrects.");
  }
};
var InvalidTokenError = class extends DomainError {
  code = "INVALID_TOKEN";
  constructor() {
    super("Token invalide ou expir\xE9.");
  }
};
var UserNotFoundError = class extends DomainError {
  code = "USER_NOT_FOUND";
  constructor() {
    super("Utilisateur introuvable.");
  }
};
var InvalidEmailError = class extends DomainError {
  code = "INVALID_EMAIL";
  constructor(email) {
    super(`"${email}" n'est pas une adresse e-mail valide.`);
  }
};

// src/domain/value-objects/Email.ts
var Email = class _Email {
  constructor(value) {
    this.value = value;
  }
  value;
  static create(raw2) {
    const trimmed = raw2.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      throw new InvalidEmailError(raw2);
    }
    return new _Email(trimmed);
  }
  equals(other) {
    return this.value === other.value;
  }
  toString() {
    return this.value;
  }
};

// src/application/usecases/auth/RegisterUserUseCase.ts
var RegisterUserUseCase = class {
  constructor(userRepo, tokenIssuer, passwordHasher) {
    this.userRepo = userRepo;
    this.tokenIssuer = tokenIssuer;
    this.passwordHasher = passwordHasher;
  }
  userRepo;
  tokenIssuer;
  passwordHasher;
  async execute(input) {
    const email = Email.create(input.email);
    if (await this.userRepo.findByEmail(email.value)) return failure(new EmailAlreadyInUseError());
    if (await this.userRepo.findByPhone(input.phone)) return failure(new PhoneAlreadyInUseError());
    const passwordHash = await this.passwordHasher.hash(input.password);
    const user = await this.userRepo.create(this.buildInput(input, passwordHash));
    const tokens = await this.tokenIssuer.issue(user.id);
    return ok({ user, tokens });
  }
  buildInput(input, passwordHash) {
    const base = { name: input.name, email: input.email, phone: input.phone, passwordHash };
    if (input.role === "RESTAURANT_OWNER") {
      return {
        ...base,
        role: "RESTAURANT_OWNER",
        restaurantProfile: {
          restaurantName: input.restaurantName,
          restaurantAddress: input.restaurantAddress,
          cuisineType: input.cuisineType
        }
      };
    }
    if (input.role === "DRIVER") {
      return { ...base, role: "DRIVER", driverProfile: { transportType: input.transportType } };
    }
    return { ...base, role: "CLIENT" };
  }
};

// src/application/usecases/auth/LoginUserUseCase.ts
var LoginUserUseCase = class {
  constructor(userRepo, tokenIssuer, passwordHasher) {
    this.userRepo = userRepo;
    this.tokenIssuer = tokenIssuer;
    this.passwordHasher = passwordHasher;
  }
  userRepo;
  tokenIssuer;
  passwordHasher;
  async execute(input) {
    const credentials = await this.userRepo.findCredentialsByEmail(input.email);
    if (!credentials) return failure(new InvalidCredentialsError());
    const valid = await this.passwordHasher.compare(input.password, credentials.passwordHash);
    if (!valid) return failure(new InvalidCredentialsError());
    const tokens = await this.tokenIssuer.issue(credentials.user.id);
    return ok({ user: credentials.user, tokens });
  }
};

// src/application/usecases/auth/RefreshTokenUseCase.ts
import crypto2 from "crypto";
var RefreshTokenUseCase = class {
  constructor(refreshTokenRepo, tokenService) {
    this.refreshTokenRepo = refreshTokenRepo;
    this.tokenService = tokenService;
    this.tokenIssuer = new TokenIssuer(refreshTokenRepo, tokenService);
  }
  refreshTokenRepo;
  tokenService;
  tokenIssuer;
  async execute(refreshToken) {
    let userId;
    try {
      ({ userId } = this.tokenService.verifyRefreshToken(refreshToken));
    } catch {
      return failure(new InvalidTokenError());
    }
    const hash = crypto2.createHash("sha256").update(refreshToken).digest("hex");
    const existing = await this.refreshTokenRepo.findByHash(hash);
    if (!existing || existing.revokedAt !== null || existing.expiresAt < /* @__PURE__ */ new Date()) {
      return failure(new InvalidTokenError());
    }
    await this.refreshTokenRepo.revoke(existing.id);
    return ok(await this.tokenIssuer.issue(userId));
  }
};

// src/application/usecases/auth/LogoutUseCase.ts
import crypto3 from "crypto";
var LogoutUseCase = class {
  constructor(refreshTokenRepo) {
    this.refreshTokenRepo = refreshTokenRepo;
  }
  refreshTokenRepo;
  async execute(refreshToken) {
    const hash = crypto3.createHash("sha256").update(refreshToken).digest("hex");
    const existing = await this.refreshTokenRepo.findByHash(hash);
    if (existing && existing.revokedAt === null) {
      await this.refreshTokenRepo.revoke(existing.id);
    }
  }
};

// src/interfaces/http/auth/registerEmailRoute.ts
import { Router } from "express";

// src/interfaces/middlewares/authRateLimiter.ts
import rateLimit from "express-rate-limit";
var loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many login attempts, please try again later" }
});
var registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1e3,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many registration attempts, please try again later" }
});

// src/interfaces/http/auth/schemas.ts
import { z } from "zod";
var passwordSchema = z.string().min(8, "Au moins 8 caract\xE8res").max(128, "Maximum 128 caract\xE8res").regex(/[A-Z]/, "Au moins une majuscule").regex(/[a-z]/, "Au moins une minuscule").regex(/[0-9]/, "Au moins un chiffre");
var baseRegister = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(30),
  password: passwordSchema
});
var registerSchema = z.discriminatedUnion("role", [
  baseRegister.extend({ role: z.literal("CLIENT") }),
  baseRegister.extend({
    role: z.literal("RESTAURANT_OWNER"),
    restaurantName: z.string().min(2).max(120),
    restaurantAddress: z.string().min(5).max(250),
    cuisineType: z.string().min(2).max(50)
  }),
  baseRegister.extend({
    role: z.literal("DRIVER"),
    transportType: z.enum(["bike", "scooter", "car"])
  })
]);
var loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});
var refreshSchema = z.object({
  refreshToken: z.string().min(10)
});

// src/interfaces/http/utils/domainErrorToStatus.ts
var domainErrorToStatus = (error) => {
  switch (error.code) {
    case "EMAIL_ALREADY_IN_USE":
    case "PHONE_ALREADY_IN_USE":
    case "DELIVERY_ALREADY_TAKEN":
      return 409;
    case "INVALID_CREDENTIALS":
    case "INVALID_TOKEN":
      return 401;
    case "USER_NOT_FOUND":
    case "ORDER_NOT_FOUND":
    case "DELIVERY_NOT_FOUND":
    case "PAYMENT_METHOD_NOT_FOUND":
    case "RESTAURANT_NOT_FOUND":
    case "DOCUMENT_NOT_FOUND":
    case "MENU_CATEGORY_NOT_FOUND":
    case "MENU_ITEM_NOT_FOUND":
    case "MENU_ITEM_OPTION_NOT_FOUND":
      return 404;
    case "RESTAURANT_NOT_OWNED":
    case "MENU_CATEGORY_NOT_OWNED":
    case "MENU_ITEM_NOT_OWNED":
    case "PAYMENT_METHOD_NOT_OWNED":
      return 403;
    case "MENU_ITEM_OUT_OF_STOCK":
    case "INVALID_MENU_CSV":
      return 422;
    case "INVALID_OPENING_HOURS":
      return 422;
    case "MAX_PAYMENT_METHODS_REACHED":
    case "PAYMENT_INTENT_CREATION_FAILED":
    case "SETUP_INTENT_CREATION_FAILED":
      return 422;
    case "UNAUTHORIZED_ORDER_ACTION":
      return 403;
    case "CART_DIFFERENT_RESTAURANT":
    case "CART_EMPTY":
    case "OUT_OF_STOCK":
    case "INVALID_ORDER_TRANSITION":
      return 422;
    default:
      return 400;
  }
};

// src/interfaces/presenters/UserPresenter.ts
var UserPresenter = class _UserPresenter {
  static toDto(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      photoUrl: user.photo_url,
      preferences: user.preferences ?? null,
      allergies: user.allergies ?? null,
      createdAt: user.created_at instanceof Date ? user.created_at.toISOString() : String(user.created_at)
    };
  }
  static toDtoList(users) {
    return users.map((user) => _UserPresenter.toDto(user));
  }
};

// src/interfaces/presenters/AuthPresenter.ts
var AuthPresenter = class _AuthPresenter {
  static toDto(user, tokens) {
    return {
      user: UserPresenter.toDto(user),
      tokens: _AuthPresenter.tokensToDto(tokens)
    };
  }
  static tokensToDto(tokens) {
    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken
    };
  }
};

// src/interfaces/http/auth/registerEmailRoute.ts
var createRegisterEmailRoute = (useCase) => {
  const router = Router();
  router.post("/register/email", registerLimiter, async (request, response) => {
    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }
    const result = await useCase.execute(parsed.data);
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(201).json(AuthPresenter.toDto(result.value.user, result.value.tokens));
  });
  return router;
};

// src/interfaces/http/auth/loginEmailRoute.ts
import { Router as Router2 } from "express";
var createLoginEmailRoute = (useCase) => {
  const router = Router2();
  router.post("/login/email", loginLimiter, async (request, response) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }
    const result = await useCase.execute(parsed.data);
    if (!result.ok) {
      response.status(401).json({ message: result.error.message });
      return;
    }
    response.status(200).json(AuthPresenter.toDto(result.value.user, result.value.tokens));
  });
  return router;
};

// src/interfaces/http/auth/refreshRoute.ts
import { Router as Router3 } from "express";
var createRefreshRoute = (useCase) => {
  const router = Router3();
  router.post("/refresh", async (request, response) => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }
    const result = await useCase.execute(parsed.data.refreshToken);
    if (!result.ok) {
      response.status(401).json({ message: result.error.message });
      return;
    }
    response.status(200).json(result.value);
  });
  return router;
};

// src/interfaces/http/auth/logoutRoute.ts
import { Router as Router4 } from "express";
var createLogoutRoute = (useCase) => {
  const router = Router4();
  router.post("/logout", async (request, response) => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }
    await useCase.execute(parsed.data.refreshToken);
    response.status(204).send();
  });
  return router;
};

// src/interfaces/http/auth/meRoute.ts
import { Router as Router5 } from "express";
var createMeRoute = (requireAuth) => {
  const router = Router5();
  router.get("/me", requireAuth, (request, response) => {
    response.status(200).json(UserPresenter.toDto(request.user));
  });
  return router;
};

// src/interfaces/http/auth/index.ts
var createAuthRoutes = (userRepo, refreshTokenRepo, tokenService, passwordHasher, requireAuth) => {
  const tokenIssuer = new TokenIssuer(refreshTokenRepo, tokenService);
  const registerUseCase = new RegisterUserUseCase(userRepo, tokenIssuer, passwordHasher);
  const loginUseCase = new LoginUserUseCase(userRepo, tokenIssuer, passwordHasher);
  const refreshUseCase = new RefreshTokenUseCase(refreshTokenRepo, tokenService);
  const logoutUseCase = new LogoutUseCase(refreshTokenRepo);
  const router = Router6();
  router.use(createRegisterEmailRoute(registerUseCase));
  router.use(createLoginEmailRoute(loginUseCase));
  router.use(createRefreshRoute(refreshUseCase));
  router.use(createLogoutRoute(logoutUseCase));
  router.use(createMeRoute(requireAuth));
  return router;
};

// src/interfaces/http/admin/adminDocumentRoutes.ts
import { Router as Router7 } from "express";
import { z as z2 } from "zod";

// src/interfaces/presenters/DocumentPresenter.ts
var DocumentPresenter = class _DocumentPresenter {
  static toDto(document) {
    return {
      id: document.id,
      userId: document.userId,
      type: document.type,
      status: document.status,
      mimeType: document.mimeType,
      createdAt: document.createdAt instanceof Date ? document.createdAt.toISOString() : String(document.createdAt)
    };
  }
  static toDtoList(documents) {
    return documents.map((document) => _DocumentPresenter.toDto(document));
  }
  static toAdminDto(document) {
    return {
      id: document.id,
      type: document.type,
      status: document.status,
      mimeType: document.mimeType,
      filePath: document.filePath,
      createdAt: document.createdAt instanceof Date ? document.createdAt.toISOString() : String(document.createdAt),
      ownerName: document.ownerName,
      ownerEmail: document.ownerEmail
    };
  }
  static toAdminDtoList(documents) {
    return documents.map((document) => _DocumentPresenter.toAdminDto(document));
  }
};

// src/interfaces/http/admin/adminDocumentRoutes.ts
var updateStatusSchema = z2.object({
  status: z2.enum(["approved", "rejected"])
});
var statusQuerySchema = z2.enum(["pending", "approved", "rejected"]).default("pending");
function createAdminDocumentRoutes(getPendingDocumentsUseCase2, getDocumentsByStatusUseCase2, updateDocumentStatusUseCase2, getAdminStatsUseCase2, requireAdmin) {
  const router = Router7();
  router.get("/stats", requireAdmin, async (_request, response) => {
    const stats = await getAdminStatsUseCase2.execute();
    response.json(stats);
  });
  router.get("/documents", requireAdmin, async (request, response) => {
    const parsed = statusQuerySchema.safeParse(request.query.status);
    const status = parsed.success ? parsed.data : "pending";
    const documents = status === "pending" ? await getPendingDocumentsUseCase2.execute() : await getDocumentsByStatusUseCase2.execute(status);
    response.json(DocumentPresenter.toAdminDtoList(documents));
  });
  router.patch("/documents/:id/status", requireAdmin, async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const parsed = updateStatusSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Statut invalide (approved | rejected)" });
      return;
    }
    const result = await updateDocumentStatusUseCase2.execute({
      documentId: id,
      status: parsed.data.status
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(DocumentPresenter.toDto(result.value));
  });
  return router;
}

// src/interfaces/http/documents/documentRoutes.ts
import { Router as Router8 } from "express";
import multer from "multer";
import path2 from "path";
import { mkdirSync } from "fs";
import { z as z3 } from "zod";
var UPLOADS_DIR = "uploads";
var ADMINS_ROOM = "admins";
mkdirSync(UPLOADS_DIR, { recursive: true });
var documentUploadStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const fileExtension = path2.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${fileExtension}`);
  }
});
var documentUploadMiddleware = multer({
  storage: documentUploadStorage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "application/pdf"];
    cb(null, allowedMimeTypes.includes(file.mimetype));
  }
});
var docTypeSchema = z3.enum([
  "kbis",
  "id_card",
  "driving_license",
  "vehicle_insurance",
  "vehicle_registration",
  "food_hygiene"
]);
function createDocumentRoutes(documentRepository2, requireAuth, notificationGateway) {
  const router = Router8();
  router.post(
    "/upload",
    requireAuth,
    documentUploadMiddleware.single("file"),
    async (request, response) => {
      const parsedDocumentType = docTypeSchema.safeParse(request.body.type);
      if (!parsedDocumentType.success) {
        response.status(400).json({ message: "Type de document invalide" });
        return;
      }
      if (!request.file) {
        response.status(400).json({ message: "Aucun fichier fourni" });
        return;
      }
      try {
        const documentRecord = await documentRepository2.create({
          userId: request.user.id,
          type: parsedDocumentType.data,
          filePath: request.file.path,
          mimeType: request.file.mimetype
        });
        notificationGateway?.broadcastToRoom(ADMINS_ROOM, "document:new", {
          documentId: documentRecord.id,
          type: documentRecord.type,
          userId: documentRecord.userId
        });
        response.status(201).json(DocumentPresenter.toDto(documentRecord));
      } catch {
        response.status(500).json({ message: "Erreur lors de l'enregistrement du document" });
      }
    }
  );
  router.get("/my", requireAuth, async (request, response) => {
    try {
      const documents = await documentRepository2.findByUserId(request.user.id);
      response.json(DocumentPresenter.toDtoList(documents));
    } catch {
      response.status(500).json({ message: "Erreur lors de la r\xE9cup\xE9ration des documents" });
    }
  });
  return router;
}

// src/interfaces/http/payment/index.ts
import { Router as Router13 } from "express";

// src/interfaces/http/payment/createPaymentIntentRoute.ts
import { Router as Router9 } from "express";
import { z as z4 } from "zod";

// src/interfaces/presenters/PaymentPresenter.ts
var PaymentPresenter = class _PaymentPresenter {
  static toPaymentMethodDto(paymentMethod) {
    return {
      id: paymentMethod.id,
      type: paymentMethod.type,
      brand: paymentMethod.brand,
      last4: paymentMethod.last4,
      expiryMonth: paymentMethod.expiryMonth,
      expiryYear: paymentMethod.expiryYear,
      isDefault: paymentMethod.isDefault,
      createdAt: paymentMethod.createdAt instanceof Date ? paymentMethod.createdAt.toISOString() : String(paymentMethod.createdAt)
    };
  }
  static toPaymentMethodDtoList(paymentMethods) {
    return paymentMethods.map((paymentMethod) => _PaymentPresenter.toPaymentMethodDto(paymentMethod));
  }
  static toPaymentIntentDto(result) {
    return {
      paymentIntentId: result.paymentIntentId,
      clientSecret: result.clientSecret,
      amount: result.amount,
      currency: result.currency
    };
  }
  static toSetupIntentDto(result) {
    return {
      setupIntentId: result.setupIntentId,
      clientSecret: result.clientSecret
    };
  }
};

// src/interfaces/http/payment/createPaymentIntentRoute.ts
var createPaymentIntentSchema = z4.object({
  amount: z4.number().int().positive(),
  currency: z4.string().length(3).default("eur"),
  orderId: z4.string().uuid().optional()
});
function createPaymentIntentRoute(createPaymentIntentUseCase2, requireAuth) {
  const router = Router9();
  router.post("/create-intent", requireAuth, async (request, response) => {
    const parsed = createPaymentIntentSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await createPaymentIntentUseCase2.execute({
      userId: request.user.id,
      userEmail: request.user.email,
      stripeCustomerId: request.user.stripe_customer_id ?? null,
      amount: parsed.data.amount,
      currency: parsed.data.currency,
      ...parsed.data.orderId !== void 0 && { orderId: parsed.data.orderId }
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(201).json(PaymentPresenter.toPaymentIntentDto(result.value));
  });
  return router;
}

// src/interfaces/http/payment/createSetupIntentRoute.ts
import { Router as Router10 } from "express";
function createSetupIntentRoute(createSetupIntentUseCase2, requireAuth) {
  const router = Router10();
  router.post("/setup-intent", requireAuth, async (request, response) => {
    const result = await createSetupIntentUseCase2.execute({
      userId: request.user.id,
      userEmail: request.user.email,
      stripeCustomerId: request.user.stripe_customer_id ?? null
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(201).json(PaymentPresenter.toSetupIntentDto(result.value));
  });
  return router;
}

// src/interfaces/http/payment/paymentMethodRoutes.ts
import { Router as Router11 } from "express";
import { z as z5 } from "zod";
var confirmPaymentMethodSchema = z5.object({
  stripePaymentMethodId: z5.string().min(1)
});
function createPaymentMethodRoutes(getSavedPaymentMethodsUseCase2, confirmPaymentMethodUseCase2, removePaymentMethodUseCase2, requireAuth) {
  const router = Router11();
  router.get("/", requireAuth, async (request, response) => {
    const paymentMethods = await getSavedPaymentMethodsUseCase2.execute(request.user.id);
    response.json(PaymentPresenter.toPaymentMethodDtoList(paymentMethods));
  });
  router.post("/confirm", requireAuth, async (request, response) => {
    const parsed = confirmPaymentMethodSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await confirmPaymentMethodUseCase2.execute({
      userId: request.user.id,
      stripePaymentMethodId: parsed.data.stripePaymentMethodId
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(201).json(PaymentPresenter.toPaymentMethodDto(result.value));
  });
  router.delete("/:id", requireAuth, async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const result = await removePaymentMethodUseCase2.execute({
      userId: request.user.id,
      paymentMethodId: id
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(204).send();
  });
  return router;
}

// src/interfaces/http/payment/stripeWebhookRoute.ts
import { Router as Router12 } from "express";
function createStripeWebhookRoute(paymentGateway, paymentMethodRepository2) {
  const router = Router12();
  router.post(
    "/webhook",
    async (request, response) => {
      const signature = request.headers["stripe-signature"];
      if (!signature || typeof signature !== "string") {
        response.status(400).json({ message: "Signature Stripe manquante" });
        return;
      }
      let event;
      try {
        event = paymentGateway.constructWebhookEvent(
          request.rawBody ?? JSON.stringify(request.body),
          signature
        );
      } catch {
        response.status(400).json({ message: "Signature Stripe invalide" });
        return;
      }
      switch (event.type) {
        case "setup_intent.succeeded": {
          const setupIntent = event.data.object;
          const userId = setupIntent.metadata?.userId;
          if (userId && setupIntent.payment_method) {
            const existingCount = await paymentMethodRepository2.countByUserId(userId);
            const existing = await paymentMethodRepository2.findByStripePaymentMethodId(
              setupIntent.payment_method
            );
            if (!existing && existingCount < 5) {
              await paymentMethodRepository2.save({
                userId,
                stripePaymentMethodId: setupIntent.payment_method,
                type: "card",
                brand: "unknown",
                last4: "0000",
                expiryMonth: 0,
                expiryYear: 0,
                isDefault: existingCount === 0
              });
            }
          }
          break;
        }
        case "payment_intent.succeeded":
          break;
        case "payment_intent.payment_failed":
          break;
      }
      response.json({ received: true });
    }
  );
  return router;
}

// src/interfaces/http/payment/index.ts
function createPaymentRoutes(createPaymentIntentUseCase2, createSetupIntentUseCase2, getSavedPaymentMethodsUseCase2, confirmPaymentMethodUseCase2, removePaymentMethodUseCase2, paymentGateway, paymentMethodRepository2, requireAuth) {
  const router = Router13();
  router.use(createPaymentIntentRoute(createPaymentIntentUseCase2, requireAuth));
  router.use(createSetupIntentRoute(createSetupIntentUseCase2, requireAuth));
  router.use("/methods", createPaymentMethodRoutes(
    getSavedPaymentMethodsUseCase2,
    confirmPaymentMethodUseCase2,
    removePaymentMethodUseCase2,
    requireAuth
  ));
  router.use(createStripeWebhookRoute(paymentGateway, paymentMethodRepository2));
  return router;
}

// src/interfaces/http/restaurants/restaurantRoutes.ts
import { Router as Router14 } from "express";
import multer2 from "multer";
import path3 from "path";
import { mkdirSync as mkdirSync2 } from "fs";
import { z as z6 } from "zod";

// src/interfaces/presenters/RestaurantPresenter.ts
var RestaurantPresenter = class _RestaurantPresenter {
  static toDto(restaurant) {
    return {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      logoUrl: restaurant.logoUrl,
      address: restaurant.address,
      cuisineType: restaurant.cuisineType,
      prepTimeMin: restaurant.prepTimeMin,
      deliveryFee: restaurant.deliveryFee,
      isActive: restaurant.isActive,
      ratingAvg: restaurant.ratingAvg,
      openingHours: restaurant.openingHours
    };
  }
  static toDtoList(restaurants) {
    return restaurants.map((restaurant) => _RestaurantPresenter.toDto(restaurant));
  }
};

// src/interfaces/http/restaurants/restaurantRoutes.ts
var LOGOS_DIR = "uploads/logos";
mkdirSync2(LOGOS_DIR, { recursive: true });
var logoStorage = multer2.diskStorage({
  destination: (_req, _file, cb) => cb(null, LOGOS_DIR),
  filename: (_req, file, cb) => {
    cb(null, `logo-${Date.now()}-${Math.random().toString(36).slice(2)}${path3.extname(file.originalname)}`);
  }
});
var uploadLogo = multer2({
  storage: logoStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    cb(null, ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype));
  }
});
var timeSlotSchema = z6.object({
  open: z6.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  close: z6.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/)
}).nullable();
var openingHoursSchema = z6.object({
  monday: timeSlotSchema.optional(),
  tuesday: timeSlotSchema.optional(),
  wednesday: timeSlotSchema.optional(),
  thursday: timeSlotSchema.optional(),
  friday: timeSlotSchema.optional(),
  saturday: timeSlotSchema.optional(),
  sunday: timeSlotSchema.optional()
});
var createRestaurantSchema = z6.object({
  name: z6.string().min(2),
  description: z6.string().optional(),
  address: z6.string().min(5),
  lat: z6.number(),
  lng: z6.number(),
  cuisineType: z6.string().min(1),
  prepTimeMin: z6.number().int().positive(),
  deliveryFee: z6.number().min(0)
});
var updateProfileSchema = z6.object({
  name: z6.string().min(2).optional(),
  description: z6.string().optional(),
  address: z6.string().min(5).optional(),
  cuisineType: z6.string().min(1).optional(),
  prepTimeMin: z6.number().int().positive().optional(),
  deliveryFee: z6.number().min(0).optional()
});
function createRestaurantRoutes(getOwnerRestaurantsUseCase2, createRestaurantUseCase2, updateRestaurantProfileUseCase2, updateOpeningHoursUseCase2, toggleRestaurantStatusUseCase2, restaurantRepository2, requireAuth) {
  const router = Router14();
  router.get("/active", async (_request, response) => {
    const restaurants = await restaurantRepository2.findAllActive();
    response.json(RestaurantPresenter.toDtoList(restaurants));
  });
  router.get("/:id/public", async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const restaurant = await restaurantRepository2.findById(id);
    if (!restaurant) {
      response.status(404).json({ message: "Restaurant introuvable" });
      return;
    }
    response.json(RestaurantPresenter.toDto(restaurant));
  });
  router.get("/", requireAuth, async (request, response) => {
    const restaurants = await getOwnerRestaurantsUseCase2.execute(request.user.id);
    response.json(RestaurantPresenter.toDtoList(restaurants));
  });
  router.post("/", requireAuth, async (request, response) => {
    const parsed = createRestaurantSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await createRestaurantUseCase2.execute({
      ownerId: request.user.id,
      ...parsed.data
    });
    response.status(201).json(RestaurantPresenter.toDto(result.value));
  });
  router.patch("/:id", requireAuth, async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const parsed = updateProfileSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await updateRestaurantProfileUseCase2.execute({
      ownerId: request.user.id,
      restaurantId: id,
      input: parsed.data
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(RestaurantPresenter.toDto(result.value));
  });
  router.patch("/:id/opening-hours", requireAuth, async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const parsed = z6.object({ openingHours: openingHoursSchema }).safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Horaires invalides", errors: parsed.error.issues });
      return;
    }
    const result = await updateOpeningHoursUseCase2.execute({
      ownerId: request.user.id,
      restaurantId: id,
      openingHours: parsed.data.openingHours
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(RestaurantPresenter.toDto(result.value));
  });
  router.post("/:id/logo", requireAuth, uploadLogo.single("logo"), async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    if (!request.file) {
      response.status(400).json({ message: "Aucune image fournie" });
      return;
    }
    const restaurant = await restaurantRepository2.findById(id);
    if (!restaurant) {
      response.status(404).json({ message: "Restaurant introuvable" });
      return;
    }
    if (restaurant.ownerId !== request.user.id) {
      response.status(403).json({ message: "Acc\xE8s refus\xE9" });
      return;
    }
    const updated = await restaurantRepository2.updateLogoUrl(id, request.file.path);
    response.json(RestaurantPresenter.toDto(updated));
  });
  router.patch("/:id/status", requireAuth, async (request, response) => {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const parsed = z6.object({ isActive: z6.boolean() }).safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    const result = await toggleRestaurantStatusUseCase2.execute({
      ownerId: request.user.id,
      restaurantId: id,
      isActive: parsed.data.isActive
    });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(RestaurantPresenter.toDto(result.value));
  });
  return router;
}

// src/interfaces/http/users/userRoutes.ts
import { Router as Router15 } from "express";
import multer3 from "multer";
import path4 from "path";
import { mkdirSync as mkdirSync3 } from "fs";
import { z as z7 } from "zod";
var UPLOADS_DIR2 = "uploads";
mkdirSync3(UPLOADS_DIR2, { recursive: true });
var avatarStorage = multer3.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR2),
  filename: (_req, file, cb) => {
    const fileExtension = path4.extname(file.originalname);
    cb(null, `avatar-${Date.now()}-${Math.random().toString(36).slice(2)}${fileExtension}`);
  }
});
var uploadAvatar = multer3({
  storage: avatarStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
    cb(null, allowedMimeTypes.includes(file.mimetype));
  }
});
var updateProfileSchema2 = z7.object({
  name: z7.string().min(1).optional(),
  phone: z7.string().min(1).optional()
});
var dietSchema = z7.enum(["none", "vegetarian", "vegan", "gluten_free", "halal", "kosher"]);
var allergySchema = z7.enum(["gluten", "lactose", "peanuts", "eggs", "shellfish", "tree_nuts", "soy", "fish"]);
var cuisineSchema = z7.enum(["french", "italian", "asian", "japanese", "indian", "mexican", "american", "mediterranean"]);
var updatePreferencesSchema = z7.object({
  diet: dietSchema,
  allergies: z7.array(allergySchema),
  cuisines: z7.array(cuisineSchema)
});
function createUserRoutes(userRepository2, requireAuth) {
  const router = Router15();
  router.patch("/me", requireAuth, async (request, response) => {
    const parsedProfileUpdate = updateProfileSchema2.safeParse(request.body);
    if (!parsedProfileUpdate.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    if (!parsedProfileUpdate.data.name && !parsedProfileUpdate.data.phone) {
      response.status(400).json({ message: "Aucune donn\xE9e \xE0 mettre \xE0 jour" });
      return;
    }
    try {
      const updateInput = {
        ...parsedProfileUpdate.data.name ? { name: parsedProfileUpdate.data.name } : {},
        ...parsedProfileUpdate.data.phone ? { phone: parsedProfileUpdate.data.phone } : {}
      };
      const updated = await userRepository2.update(request.user.id, updateInput);
      response.json(UserPresenter.toDto(updated));
    } catch {
      response.status(500).json({ message: "Erreur lors de la mise \xE0 jour" });
    }
  });
  router.get("/me/preferences", requireAuth, async (request, response) => {
    try {
      const user = await userRepository2.findById(request.user.id);
      if (!user) {
        response.status(404).json({ message: "Utilisateur introuvable" });
        return;
      }
      response.json({ diet: user.preferences?.diet ?? "none", cuisines: user.preferences?.cuisines ?? [], allergies: user.allergies ?? [] });
    } catch {
      response.status(500).json({ message: "Erreur lors de la r\xE9cup\xE9ration des pr\xE9f\xE9rences" });
    }
  });
  router.patch("/me/preferences", requireAuth, async (request, response) => {
    const parsedPreferencesUpdate = updatePreferencesSchema.safeParse(request.body);
    if (!parsedPreferencesUpdate.success) {
      response.status(400).json({ message: "Pr\xE9f\xE9rences invalides", errors: parsedPreferencesUpdate.error.issues });
      return;
    }
    try {
      const { diet, allergies, cuisines } = parsedPreferencesUpdate.data;
      const updated = await userRepository2.update(request.user.id, {
        preferences: { diet, cuisines },
        allergies
      });
      response.json(UserPresenter.toDto(updated));
    } catch {
      response.status(500).json({ message: "Erreur lors de la mise \xE0 jour des pr\xE9f\xE9rences" });
    }
  });
  router.post(
    "/me/avatar",
    requireAuth,
    uploadAvatar.single("avatar"),
    async (request, response) => {
      if (!request.file) {
        response.status(400).json({ message: "Aucune image fournie" });
        return;
      }
      try {
        const updated = await userRepository2.update(request.user.id, {
          photo_url: request.file.filename
        });
        response.json(UserPresenter.toDto(updated));
      } catch {
        response.status(500).json({ message: "Erreur lors de la mise \xE0 jour de l'avatar" });
      }
    }
  );
  return router;
}

// src/interfaces/http/orders/orderRoutes.ts
import { Router as Router16 } from "express";
import { z as z8 } from "zod";
var orderItemSchema = z8.object({
  menuItemId: z8.string().uuid(),
  name: z8.string().min(1),
  unitPrice: z8.number().min(0),
  quantity: z8.number().int().positive(),
  notes: z8.string().optional(),
  optionValueIds: z8.array(z8.string().uuid()).optional()
});
var createOrderSchema = z8.object({
  restaurantId: z8.string().uuid(),
  deliveryStreet: z8.string().min(3),
  deliveryCity: z8.string().min(1),
  items: z8.array(orderItemSchema).min(1),
  deliveryFee: z8.number().min(0),
  paymentMethodId: z8.string().uuid().optional()
});
function createOrderRoutes(createOrderUseCase2, getUserOrdersUseCase2, getRestaurantOrdersUseCase2, updateOrderStatusUseCase2, paymentMethodRepository2, requireAuth) {
  const router = Router16();
  router.get("/", requireAuth, async (request, response) => {
    try {
      const result = await getUserOrdersUseCase2.execute(request.user.id);
      response.status(200).json(result.value);
    } catch (error) {
      console.error("[GET /orders]", error);
      response.status(500).json({ message: "Erreur lors de la r\xE9cup\xE9ration des commandes" });
    }
  });
  router.get("/restaurant", requireAuth, async (request, response) => {
    try {
      const orders = await getRestaurantOrdersUseCase2.execute(request.user.id);
      response.status(200).json(orders);
    } catch (error) {
      console.error("[GET /orders/restaurant]", error);
      response.status(500).json({ message: "Erreur lors de la r\xE9cup\xE9ration des commandes" });
    }
  });
  router.patch("/:orderId/status", requireAuth, async (request, response) => {
    const { orderId } = request.params;
    const { status } = request.body;
    if (!status) {
      response.status(400).json({ message: "Statut requis" });
      return;
    }
    try {
      const result = await updateOrderStatusUseCase2.execute(orderId, status, request.user.id);
      if (!result.success) {
        response.status(403).json({ message: result.message });
        return;
      }
      response.status(200).json({ message: "Statut mis \xE0 jour" });
    } catch (error) {
      console.error("[PATCH /orders/:id/status]", error);
      response.status(500).json({ message: "Erreur lors de la mise \xE0 jour" });
    }
  });
  router.post("/", requireAuth, async (request, response) => {
    const parsed = createOrderSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const userId = request.user.id;
    const savedPaymentMethods = await paymentMethodRepository2.findAllByUserId(userId);
    const defaultPaymentMethod = savedPaymentMethods.find((method) => method.isDefault) ?? savedPaymentMethods[0];
    const resolvedPaymentMethodId = parsed.data.paymentMethodId ?? defaultPaymentMethod?.id;
    if (!resolvedPaymentMethodId) {
      response.status(422).json({ message: "Aucun moyen de paiement enregistr\xE9" });
      return;
    }
    const result = await createOrderUseCase2.execute({
      userId,
      restaurantId: parsed.data.restaurantId,
      deliveryStreet: parsed.data.deliveryStreet,
      deliveryCity: parsed.data.deliveryCity,
      items: parsed.data.items,
      deliveryFee: parsed.data.deliveryFee,
      paymentMethodId: resolvedPaymentMethodId
    });
    response.status(201).json(result.value);
  });
  return router;
}

// src/interfaces/http/driver/driverRoutes.ts
import { Router as Router17 } from "express";
import { z as z9 } from "zod";
var DRIVERS_ONLINE_ROOM = "drivers:online";
function createDriverRoutes(toggleDriverStatusUseCase2, getAvailableDeliveriesUseCase2, acceptDeliveryUseCase2, createDriverProfileUseCase2, getDriverProfileUseCase2, getActiveDeliveryUseCase2, pickupDeliveryUseCase2, completeDeliveryUseCase2, notificationGateway, requireAuth) {
  const router = Router17();
  router.patch("/status", requireAuth, async (request, response) => {
    const parsed = z9.object({ isOnline: z9.boolean() }).safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    const result = await toggleDriverStatusUseCase2.execute(request.user.id, parsed.data.isOnline);
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(result.value);
  });
  router.get("/deliveries/available", requireAuth, async (_request, response) => {
    const deliveries = await getAvailableDeliveriesUseCase2.execute();
    response.json(deliveries);
  });
  router.post("/deliveries/:orderId/accept", requireAuth, async (request, response) => {
    const { orderId } = request.params;
    if (!orderId) {
      response.status(400).json({ message: "Identifiant manquant" });
      return;
    }
    const result = await acceptDeliveryUseCase2.execute(request.user.id, orderId);
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    notificationGateway.broadcastToRoom(DRIVERS_ONLINE_ROOM, "delivery:taken", { orderId });
    response.status(204).send();
  });
  router.get("/me", requireAuth, async (request, response) => {
    try {
      const profile = await getDriverProfileUseCase2.execute(request.user.id);
      response.json(profile ?? null);
    } catch (error) {
      console.error("[GET /driver/me]", error);
      response.status(500).json({ message: "Erreur serveur" });
    }
  });
  router.post("/profile", requireAuth, async (request, response) => {
    const parsed = z9.object({
      name: z9.string().min(1),
      email: z9.string().email(),
      phone: z9.string().min(1),
      transportType: z9.enum(["bike", "scooter", "car"])
    }).safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    try {
      const profile = await createDriverProfileUseCase2.execute(
        request.user.id,
        parsed.data.name,
        parsed.data.email,
        parsed.data.phone,
        parsed.data.transportType
      );
      response.status(201).json(profile);
    } catch (error) {
      console.error("[POST /driver/profile]", error);
      response.status(500).json({ message: "Erreur lors de la cr\xE9ation du profil" });
    }
  });
  router.get("/deliveries/active", requireAuth, async (request, response) => {
    try {
      const result = await getActiveDeliveryUseCase2.execute(request.user.id);
      if (!result.ok) {
        response.status(404).json({ message: result.error.message });
        return;
      }
      response.json(result.value);
    } catch (error) {
      console.error("[GET /driver/deliveries/active]", error);
      response.status(500).json({ message: "Erreur serveur" });
    }
  });
  router.post("/deliveries/:orderId/pickup", requireAuth, async (request, response) => {
    const { orderId } = request.params;
    try {
      const result = await pickupDeliveryUseCase2.execute(request.user.id, orderId);
      if (!result.ok) {
        response.status(403).json({ message: result.error.message });
        return;
      }
      response.status(200).json({ message: "Commande r\xE9cup\xE9r\xE9e" });
    } catch (error) {
      console.error("[POST /driver/deliveries/:id/pickup]", error);
      response.status(500).json({ message: "Erreur serveur" });
    }
  });
  router.post("/deliveries/:orderId/complete", requireAuth, async (request, response) => {
    const { orderId } = request.params;
    try {
      const result = await completeDeliveryUseCase2.execute(request.user.id, orderId);
      if (!result.ok) {
        response.status(403).json({ message: result.error.message });
        return;
      }
      response.status(200).json({ message: "Commande livr\xE9e" });
    } catch (error) {
      console.error("[POST /driver/deliveries/:id/complete]", error);
      response.status(500).json({ message: "Erreur serveur" });
    }
  });
  return router;
}

// src/interfaces/http/menu/menuRoutes.ts
import { Router as Router18 } from "express";
import multer4 from "multer";
import path5 from "path";
import { mkdirSync as mkdirSync4 } from "fs";
import { z as z10 } from "zod";

// src/interfaces/presenters/MenuPresenter.ts
var MenuPresenter = class _MenuPresenter {
  static toCategoryDto(category) {
    return {
      id: category.id,
      restaurantId: category.restaurantId,
      name: category.name,
      position: category.position,
      availability: category.availability,
      items: category.items.map((item) => _MenuPresenter.toItemDto(item))
    };
  }
  static toCategoryDtoList(categories) {
    return categories.map((category) => _MenuPresenter.toCategoryDto(category));
  }
  static toItemDto(item) {
    return {
      id: item.id,
      categoryId: item.categoryId,
      name: item.name,
      description: item.description,
      photoUrl: item.photoUrl,
      price: item.price,
      isAvailable: item.isAvailable,
      isPopular: item.isPopular,
      dailyStock: item.dailyStock,
      options: item.options.map((option) => _MenuPresenter.toOptionDto(option))
    };
  }
  static toOptionDto(option) {
    return {
      id: option.id,
      name: option.name,
      type: option.type,
      isRequired: option.isRequired,
      values: option.values.map((value) => ({
        id: value.id,
        label: value.label,
        extraPrice: value.extraPrice
      }))
    };
  }
};

// src/interfaces/http/menu/menuRoutes.ts
var PHOTOS_DIR = "uploads/menu";
mkdirSync4(PHOTOS_DIR, { recursive: true });
var photoStorage = multer4.diskStorage({
  destination: (_req, _file, cb) => cb(null, PHOTOS_DIR),
  filename: (_req, file, cb) => {
    cb(null, `menu-${Date.now()}-${Math.random().toString(36).slice(2)}${path5.extname(file.originalname)}`);
  }
});
var uploadPhoto = multer4({ storage: photoStorage, limits: { fileSize: 5 * 1024 * 1024 } });
var uploadCsv = multer4({ storage: multer4.memoryStorage(), limits: { fileSize: 1 * 1024 * 1024 } });
var availabilitySchema = z10.enum(["always", "lunch", "dinner", "weekend"]);
var createCategorySchema = z10.object({
  name: z10.string().min(1),
  availability: availabilitySchema.default("always")
});
var updateCategorySchema = z10.object({
  name: z10.string().min(1).optional(),
  availability: availabilitySchema.optional(),
  position: z10.number().int().min(0).optional()
});
var reorderSchema = z10.object({ orderedIds: z10.array(z10.string().uuid()) });
var createItemSchema = z10.object({
  categoryId: z10.string().uuid(),
  name: z10.string().min(1),
  description: z10.string().optional(),
  price: z10.number().min(0),
  isAvailable: z10.boolean().default(true),
  isPopular: z10.boolean().default(false),
  dailyStock: z10.number().int().min(0).optional()
});
var updateItemSchema = z10.object({
  name: z10.string().min(1).optional(),
  description: z10.string().optional(),
  price: z10.number().min(0).optional(),
  isAvailable: z10.boolean().optional(),
  isPopular: z10.boolean().optional(),
  dailyStock: z10.number().int().min(0).nullable().optional()
});
var createOptionSchema = z10.object({
  name: z10.string().min(1),
  type: z10.enum(["single", "multiple"]),
  isRequired: z10.boolean().default(false),
  values: z10.array(z10.object({ label: z10.string().min(1), extraPrice: z10.number().min(0) })).min(1)
});
function createMenuRoutes(getRestaurantMenuUseCase2, createMenuCategoryUseCase2, updateMenuCategoryUseCase2, deleteMenuCategoryUseCase2, createMenuItemUseCase2, updateMenuItemUseCase2, deleteMenuItemUseCase2, toggleMenuItemAvailabilityUseCase2, updateMenuItemStockUseCase2, createMenuItemOptionUseCase2, exportMenuCsvUseCase2, importMenuCsvUseCase2, menuItemRepository2, menuCategoryRepository2, requireAuth) {
  const router = Router18({ mergeParams: true });
  const rid = (req) => req.params.restaurantId;
  const iid = (req) => req.params.itemId;
  const cid = (req) => req.params.categoryId;
  router.get("/", async (request, response) => {
    const menu = await getRestaurantMenuUseCase2.execute(rid(request));
    response.json(MenuPresenter.toCategoryDtoList(menu));
  });
  router.post("/categories", requireAuth, async (request, response) => {
    const parsed = createCategorySchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await createMenuCategoryUseCase2.execute({ restaurantId: rid(request), ...parsed.data });
    response.status(201).json(MenuPresenter.toCategoryDto(result.value));
  });
  router.patch("/categories/reorder", requireAuth, async (request, response) => {
    const parsed = reorderSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    await menuCategoryRepository2.reorder(rid(request), parsed.data.orderedIds);
    response.status(204).send();
  });
  router.patch("/categories/:categoryId", requireAuth, async (request, response) => {
    const parsed = updateCategorySchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    const result = await updateMenuCategoryUseCase2.execute({ restaurantId: rid(request), categoryId: cid(request), input: parsed.data });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(MenuPresenter.toCategoryDto(result.value));
  });
  router.delete("/categories/:categoryId", requireAuth, async (request, response) => {
    const result = await deleteMenuCategoryUseCase2.execute({ restaurantId: rid(request), categoryId: cid(request) });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(204).send();
  });
  router.post("/items", requireAuth, async (request, response) => {
    const parsed = createItemSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await createMenuItemUseCase2.execute({ restaurantId: rid(request), input: parsed.data });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(201).json(MenuPresenter.toItemDto(result.value));
  });
  router.patch("/items/:itemId", requireAuth, async (request, response) => {
    const parsed = updateItemSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    const result = await updateMenuItemUseCase2.execute({ restaurantId: rid(request), itemId: iid(request), input: parsed.data });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(MenuPresenter.toItemDto(result.value));
  });
  router.delete("/items/:itemId", requireAuth, async (request, response) => {
    const result = await deleteMenuItemUseCase2.execute({ restaurantId: rid(request), itemId: iid(request) });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(204).send();
  });
  router.patch("/items/:itemId/availability", requireAuth, async (request, response) => {
    const parsed = z10.object({ isAvailable: z10.boolean() }).safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    const result = await toggleMenuItemAvailabilityUseCase2.execute({ restaurantId: rid(request), itemId: iid(request), isAvailable: parsed.data.isAvailable });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(MenuPresenter.toItemDto(result.value));
  });
  router.patch("/items/:itemId/stock", requireAuth, async (request, response) => {
    const parsed = z10.object({ dailyStock: z10.number().int().min(0).nullable() }).safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides" });
      return;
    }
    const result = await updateMenuItemStockUseCase2.execute({ restaurantId: rid(request), itemId: iid(request), dailyStock: parsed.data.dailyStock });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.json(MenuPresenter.toItemDto(result.value));
  });
  router.post("/items/:itemId/photo", requireAuth, uploadPhoto.single("photo"), async (request, response) => {
    if (!request.file) {
      response.status(400).json({ message: "Aucune photo fournie" });
      return;
    }
    const updated = await menuItemRepository2.updatePhotoUrl(iid(request), request.file.path);
    response.json(MenuPresenter.toItemDto(updated));
  });
  router.post("/items/:itemId/options", requireAuth, async (request, response) => {
    const parsed = createOptionSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Donn\xE9es invalides", errors: parsed.error.issues });
      return;
    }
    const result = await createMenuItemOptionUseCase2.execute({ restaurantId: rid(request), input: { itemId: iid(request), ...parsed.data } });
    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }
    response.status(201).json(MenuPresenter.toOptionDto(result.value));
  });
  router.delete("/options/:optionId", requireAuth, async (request, response) => {
    await menuItemRepository2.removeOption(request.params.optionId);
    response.status(204).send();
  });
  router.get("/export", requireAuth, async (request, response) => {
    const csv = await exportMenuCsvUseCase2.execute(rid(request));
    response.setHeader("Content-Type", "text/csv; charset=utf-8");
    response.setHeader("Content-Disposition", `attachment; filename="menu-${rid(request)}.csv"`);
    response.send("\uFEFF" + csv);
  });
  router.post("/import", requireAuth, uploadCsv.single("file"), async (request, response) => {
    if (!request.file) {
      response.status(400).json({ message: "Aucun fichier fourni" });
      return;
    }
    const result = await importMenuCsvUseCase2.execute(rid(request), request.file.buffer.toString("utf-8"));
    if (!result.ok) {
      response.status(422).json({ message: result.error.message });
      return;
    }
    response.json(result.value);
  });
  return router;
}

// src/infrastructure/frameworks/express/index.ts
var createExpressApp = (dependencies) => {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: dependencies.corsOrigin }));
  app.use("/payment/webhook", express.raw({ type: "application/json" }));
  app.use(express.json());
  app.use("/uploads", express.static("uploads"));
  app.use(
    "/auth",
    createAuthRoutes(
      dependencies.userRepository,
      dependencies.refreshTokenRepository,
      dependencies.tokenService,
      dependencies.passwordHasher,
      dependencies.requireAuthentication
    )
  );
  app.use("/documents", createDocumentRoutes(dependencies.documentRepository, dependencies.requireAuthentication, dependencies.notificationGateway));
  app.use("/users", createUserRoutes(dependencies.userRepository, dependencies.requireAuthentication));
  app.use(
    "/orders",
    createOrderRoutes(
      dependencies.createOrderUseCase,
      dependencies.getUserOrdersUseCase,
      dependencies.getRestaurantOrdersUseCase,
      dependencies.updateOrderStatusUseCase,
      dependencies.paymentMethodRepository,
      dependencies.requireAuthentication
    )
  );
  app.use(
    "/payment",
    createPaymentRoutes(
      dependencies.createPaymentIntentUseCase,
      dependencies.createSetupIntentUseCase,
      dependencies.getSavedPaymentMethodsUseCase,
      dependencies.confirmPaymentMethodUseCase,
      dependencies.removePaymentMethodUseCase,
      dependencies.paymentGateway,
      dependencies.paymentMethodRepository,
      dependencies.requireAuthentication
    )
  );
  app.use(
    "/restaurants",
    createRestaurantRoutes(
      dependencies.getOwnerRestaurantsUseCase,
      dependencies.createRestaurantUseCase,
      dependencies.updateRestaurantProfileUseCase,
      dependencies.updateOpeningHoursUseCase,
      dependencies.toggleRestaurantStatusUseCase,
      dependencies.restaurantRepository,
      dependencies.requireAuthentication
    )
  );
  app.use(
    "/restaurants/:restaurantId/menu",
    createMenuRoutes(
      dependencies.getRestaurantMenuUseCase,
      dependencies.createMenuCategoryUseCase,
      dependencies.updateMenuCategoryUseCase,
      dependencies.deleteMenuCategoryUseCase,
      dependencies.createMenuItemUseCase,
      dependencies.updateMenuItemUseCase,
      dependencies.deleteMenuItemUseCase,
      dependencies.toggleMenuItemAvailabilityUseCase,
      dependencies.updateMenuItemStockUseCase,
      dependencies.createMenuItemOptionUseCase,
      dependencies.exportMenuCsvUseCase,
      dependencies.importMenuCsvUseCase,
      dependencies.menuItemRepository,
      dependencies.menuCategoryRepository,
      dependencies.requireAuthentication
    )
  );
  app.use("/driver", createDriverRoutes(
    dependencies.toggleDriverStatusUseCase,
    dependencies.getAvailableDeliveriesUseCase,
    dependencies.acceptDeliveryUseCase,
    dependencies.createDriverProfileUseCase,
    dependencies.getDriverProfileUseCase,
    dependencies.getActiveDeliveryUseCase,
    dependencies.pickupDeliveryUseCase,
    dependencies.completeDeliveryUseCase,
    dependencies.notificationGateway,
    dependencies.requireAuthentication
  ));
  const requireAdmin = createRequireAdmin(dependencies.requireAuthentication);
  app.use("/admin", createAdminDocumentRoutes(
    dependencies.getPendingDocumentsUseCase,
    dependencies.getDocumentsByStatusUseCase,
    dependencies.updateDocumentStatusUseCase,
    dependencies.getAdminStatsUseCase,
    requireAdmin
  ));
  app.get("/", (_request, response) => response.json({ message: "EcoEats API \u2014 Express" }));
  app.get("/health", (_request, response) => response.json({ status: "ok", framework: "express" }));
  app.use((error, _request, response, _next) => {
    console.error("[error]:", error.message);
    response.status(500).json({ message: "Erreur interne du serveur" });
  });
  return app;
};

// src/infrastructure/frameworks/fastify/index.ts
import Fastify from "fastify";
import cors2 from "@fastify/cors";
import helmet2 from "@fastify/helmet";

// src/application/usecases/auth/GetCurrentUserUseCase.ts
var GetCurrentUserUseCase = class {
  constructor(userRepo, tokenService) {
    this.userRepo = userRepo;
    this.tokenService = tokenService;
  }
  userRepo;
  tokenService;
  async execute(accessToken) {
    let userId;
    try {
      ({ userId } = this.tokenService.verifyAccessToken(accessToken));
    } catch {
      return failure(new InvalidTokenError());
    }
    const user = await this.userRepo.findById(userId);
    if (!user) return failure(new UserNotFoundError());
    return ok(user);
  }
};

// src/infrastructure/frameworks/fastify/index.ts
import { z as z11 } from "zod";
var updateStatusSchema2 = z11.object({
  status: z11.enum(["approved", "rejected"])
});
function mapDomainErrorToStatus(code) {
  switch (code) {
    case "USER_ALREADY_EXISTS":
    case "INVALID_CREDENTIALS":
    case "INVALID_REFRESH_TOKEN":
    case "PASSWORD_REQUIRED":
    case "INVALID_TOKEN":
    case "TOKEN_EXPIRED":
      return 401;
    case "NOT_FOUND":
      return 404;
    default:
      return 400;
  }
}
function createFastifyApp(deps) {
  const {
    userRepo,
    refreshTokenRepo,
    tokenService,
    passwordHasher,
    getPendingDocumentsUseCase: getPendingDocumentsUseCase2,
    updateDocumentStatusUseCase: updateDocumentStatusUseCase2,
    corsOrigin
  } = deps;
  const tokenIssuer = new TokenIssuer(refreshTokenRepo, tokenService);
  const registerUseCase = new RegisterUserUseCase(userRepo, tokenIssuer, passwordHasher);
  const loginUseCase = new LoginUserUseCase(userRepo, tokenIssuer, passwordHasher);
  const refreshUseCase = new RefreshTokenUseCase(refreshTokenRepo, tokenService);
  const logoutUseCase = new LogoutUseCase(refreshTokenRepo);
  const getCurrentUserUseCase2 = new GetCurrentUserUseCase(userRepo, tokenService);
  const fastifyApp = Fastify({ logger: false });
  fastifyApp.register(helmet2);
  fastifyApp.register(cors2, { origin: corsOrigin });
  const resolveCurrentUser = async (authorizationHeader) => {
    const accessToken = (authorizationHeader ?? "").replace("Bearer ", "");
    if (!accessToken) return null;
    const result = await getCurrentUserUseCase2.execute(accessToken);
    return result.ok ? result.value : null;
  };
  const requireAdmin = async (authorizationHeader) => {
    const currentUser = await resolveCurrentUser(authorizationHeader);
    if (!currentUser) {
      return { ok: false, status: 401, message: "Token invalide" };
    }
    if (currentUser.role !== "ADMIN") {
      return { ok: false, status: 403, message: "Acc\xE8s r\xE9serv\xE9 aux administrateurs" };
    }
    return { ok: true, user: currentUser };
  };
  fastifyApp.post("/auth/register/email", async (request, reply) => {
    const result = await registerUseCase.execute(request.body);
    if (!result.ok) return reply.code(mapDomainErrorToStatus(result.error.code)).send({ message: result.error.message });
    return reply.code(201).send(result.value);
  });
  fastifyApp.post("/auth/login/email", async (request, reply) => {
    const result = await loginUseCase.execute(request.body);
    if (!result.ok) return reply.code(mapDomainErrorToStatus(result.error.code)).send({ message: result.error.message });
    return reply.send(result.value);
  });
  fastifyApp.post("/auth/refresh", async (request, reply) => {
    const result = await refreshUseCase.execute(request.body.refreshToken ?? "");
    if (!result.ok) return reply.code(401).send({ message: result.error.message });
    return reply.send(result.value);
  });
  fastifyApp.post("/auth/logout", async (request, reply) => {
    await logoutUseCase.execute(request.body.refreshToken ?? "");
    return reply.code(204).send();
  });
  fastifyApp.get("/auth/me", async (request, reply) => {
    const accessToken = (request.headers.authorization ?? "").replace("Bearer ", "");
    const result = await getCurrentUserUseCase2.execute(accessToken);
    if (!result.ok) return reply.code(401).send({ message: result.error.message });
    return reply.send(result.value);
  });
  fastifyApp.get("/health", async (_request, reply) => reply.send({ status: "ok", framework: "fastify" }));
  fastifyApp.get("/admin/documents", async (request, reply) => {
    const adminAccess = await requireAdmin(request.headers.authorization);
    if (!adminAccess.ok) {
      return reply.code(adminAccess.status).send({ message: adminAccess.message });
    }
    const documents = await getPendingDocumentsUseCase2.execute();
    return reply.send(DocumentPresenter.toAdminDtoList(documents));
  });
  fastifyApp.patch(
    "/admin/documents/:id/status",
    async (request, reply) => {
      const adminAccess = await requireAdmin(request.headers.authorization);
      if (!adminAccess.ok) {
        return reply.code(adminAccess.status).send({ message: adminAccess.message });
      }
      const { id } = request.params;
      if (!id) {
        return reply.code(400).send({ message: "Identifiant manquant" });
      }
      const parsed = updateStatusSchema2.safeParse(request.body);
      if (!parsed.success) {
        return reply.code(400).send({ message: "Statut invalide (approved | rejected)" });
      }
      const result = await updateDocumentStatusUseCase2.execute({
        documentId: id,
        status: parsed.data.status
      });
      if (!result.ok) {
        return reply.code(404).send({ message: result.error.message });
      }
      return reply.send(DocumentPresenter.toDto(result.value));
    }
  );
  return fastifyApp;
}

// src/infrastructure/repositories/PrismaUserRepository.ts
var USER_SELECT = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  photo_url: true,
  created_at: true,
  preferences: true,
  allergies: true,
  stripe_customer_id: true
};
var PrismaUserRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async getStatsByRole() {
    const groups = await this.prismaClient.user.groupBy({
      by: ["role"],
      _count: { role: true }
    });
    const map = Object.fromEntries(groups.map((group) => [group.role, group._count.role]));
    return {
      total: Object.values(map).reduce((sum, count) => sum + count, 0),
      clients: map["CLIENT"] ?? 0,
      restaurantOwners: map["RESTAURANT_OWNER"] ?? 0,
      drivers: map["DRIVER"] ?? 0
    };
  }
  async findById(id) {
    return this.prismaClient.user.findUnique({ where: { id }, select: USER_SELECT });
  }
  async findByEmail(email) {
    return this.prismaClient.user.findUnique({ where: { email }, select: { id: true } });
  }
  async findByPhone(phone) {
    return this.prismaClient.user.findFirst({ where: { phone }, select: { id: true } });
  }
  async findCredentialsByEmail(email) {
    const identity = await this.prismaClient.authIdentity.findUnique({
      where: {
        provider_provider_user_id: {
          provider: AuthProvider.password,
          provider_user_id: email
        }
      },
      include: { user: { select: USER_SELECT } }
    });
    if (!identity?.password_hash) return null;
    return { user: identity.user, passwordHash: identity.password_hash };
  }
  async create(input) {
    const baseData = {
      name: input.name,
      email: input.email,
      phone: input.phone,
      phone_verified: false,
      role: input.role,
      auth_identities: {
        create: {
          provider: AuthProvider.password,
          provider_user_id: input.email,
          password_hash: input.passwordHash
        }
      }
    };
    if (input.role === "RESTAURANT_OWNER" && input.restaurantProfile) {
      const { restaurantName, restaurantAddress, cuisineType } = input.restaurantProfile;
      return this.prismaClient.user.create({
        data: {
          ...baseData,
          restaurants: {
            create: {
              name: restaurantName,
              address: restaurantAddress,
              cuisine_type: cuisineType,
              is_active: false,
              opening_hours: {},
              lat: 0,
              lng: 0,
              delivery_fee: 0,
              prep_time_min: 30
            }
          }
        },
        select: USER_SELECT
      });
    }
    if (input.role === "DRIVER" && input.driverProfile) {
      return this.prismaClient.user.create({
        data: {
          ...baseData,
          driver_profile: {
            create: {
              name: input.name,
              email: input.email,
              phone: input.phone,
              transport_type: input.driverProfile.transportType,
              is_online: false,
              is_verified: false,
              lat: 0,
              lng: 0
            }
          }
        },
        select: USER_SELECT
      });
    }
    return this.prismaClient.user.create({ data: baseData, select: USER_SELECT });
  }
  async update(id, input) {
    return this.prismaClient.user.update({
      where: { id },
      data: input,
      select: USER_SELECT
    });
  }
};

// src/infrastructure/repositories/PrismaRefreshTokenRepository.ts
var PrismaRefreshTokenRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async create(input) {
    await this.prismaClient.refreshToken.create({
      data: {
        user_id: input.userId,
        token_hash: input.tokenHash,
        expires_at: input.expiresAt
      }
    });
  }
  async findByHash(hash) {
    const record = await this.prismaClient.refreshToken.findUnique({
      where: { token_hash: hash },
      select: { id: true, user_id: true, expires_at: true, revoked_at: true }
    });
    if (!record) return null;
    return {
      id: record.id,
      userId: record.user_id,
      expiresAt: record.expires_at,
      revokedAt: record.revoked_at
    };
  }
  async revoke(id) {
    await this.prismaClient.refreshToken.update({
      where: { id },
      data: { revoked_at: /* @__PURE__ */ new Date() }
    });
  }
  async pruneExpired() {
    const { count } = await this.prismaClient.refreshToken.deleteMany({
      where: { expires_at: { lt: /* @__PURE__ */ new Date() } }
    });
    return count;
  }
};

// src/infrastructure/security/JwtTokenService.ts
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
var JwtTokenService = class {
  constructor(config2) {
    this.config = config2;
  }
  config;
  signAccessToken(userId) {
    return jwt.sign({ sub: userId, type: "access" }, this.config.jwtAccessSecret, {
      expiresIn: "30d"
    });
  }
  signRefreshToken(userId) {
    return jwt.sign({ sub: userId, type: "refresh" }, this.config.jwtRefreshSecret, {
      expiresIn: "7d",
      jwtid: randomUUID()
    });
  }
  verifyAccessToken(token) {
    const payload = jwt.verify(token, this.config.jwtAccessSecret);
    if (payload.type !== "access") throw new Error("Invalid token type");
    return { userId: payload.sub };
  }
  verifyRefreshToken(token) {
    const payload = jwt.verify(token, this.config.jwtRefreshSecret);
    if (payload.type !== "refresh") throw new Error("Invalid token type");
    return { userId: payload.sub };
  }
};

// src/infrastructure/security/BcryptPasswordHasher.ts
import bcrypt from "bcryptjs";
var BcryptPasswordHasher = class {
  saltRounds = 12;
  async hash(password) {
    return bcrypt.hash(password, this.saltRounds);
  }
  async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }
};

// src/application/usecases/auth/PruneExpiredRefreshTokensUseCase.ts
var PruneExpiredRefreshTokensUseCase = class {
  constructor(refreshTokenRepo) {
    this.refreshTokenRepo = refreshTokenRepo;
  }
  refreshTokenRepo;
  execute() {
    return this.refreshTokenRepo.pruneExpired();
  }
};

// src/interfaces/http/auth/utils.ts
var authHeaderToToken = (header) => {
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  return header.slice(7);
};

// src/interfaces/middlewares/requireAuth.ts
var createRequireAuth = (getCurrentUserUseCase2) => async (request, response, next) => {
  const token = authHeaderToToken(request.headers.authorization);
  if (!token) {
    response.status(401).json({ message: "Missing access token" });
    return;
  }
  const result = await getCurrentUserUseCase2.execute(token);
  if (!result.ok) {
    response.status(401).json({ message: "Invalid access token" });
    return;
  }
  request.user = result.value;
  next();
};

// src/infrastructure/repositories/PrismaDocumentRepository.ts
var PrismaDocumentRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async getStatsByStatus() {
    const [pending, approved, rejected] = await Promise.all([
      this.prismaClient.document.groupBy({ by: ["user_id"], where: { status: "pending" } }),
      this.prismaClient.document.groupBy({ by: ["user_id"], where: { status: "approved" } }),
      this.prismaClient.document.groupBy({ by: ["user_id"], where: { status: "rejected" } })
    ]);
    return {
      pending: pending.length,
      approved: approved.length,
      rejected: rejected.length
    };
  }
  async create(input) {
    const createdDocument = await this.prismaClient.document.create({
      data: {
        user_id: input.userId,
        type: input.type,
        file_path: input.filePath,
        mime_type: input.mimeType
      }
    });
    return this.toRecord(createdDocument);
  }
  async findByUserId(userId) {
    const documents = await this.prismaClient.document.findMany({
      where: { user_id: userId },
      orderBy: { created_at: "desc" }
    });
    return documents.map((rawDocument) => this.toRecord(rawDocument));
  }
  async findAllPending() {
    const documents = await this.prismaClient.document.findMany({
      where: { status: "pending" },
      orderBy: { created_at: "asc" },
      include: { user: { select: { name: true, email: true } } }
    });
    return documents.map((rawDocument) => ({
      ...this.toRecord(rawDocument),
      ownerName: rawDocument.user.name,
      ownerEmail: rawDocument.user.email
    }));
  }
  async findAllByStatus(status) {
    const documents = await this.prismaClient.document.findMany({
      where: { status },
      orderBy: { created_at: "desc" },
      include: { user: { select: { name: true, email: true } } }
    });
    return documents.map((rawDocument) => ({
      ...this.toRecord(rawDocument),
      ownerName: rawDocument.user.name,
      ownerEmail: rawDocument.user.email
    }));
  }
  async updateStatus(id, status) {
    const updated = await this.prismaClient.document.update({
      where: { id },
      data: { status }
    });
    return this.toRecord(updated);
  }
  toRecord(rawDocument) {
    return {
      id: rawDocument.id,
      userId: rawDocument.user_id,
      type: rawDocument.type,
      filePath: rawDocument.file_path,
      mimeType: rawDocument.mime_type,
      status: rawDocument.status,
      createdAt: rawDocument.created_at
    };
  }
};

// src/infrastructure/payment/StripePaymentGateway.ts
import Stripe from "stripe";
var StripePaymentGateway = class {
  constructor(secretKey, webhookSecret) {
    this.webhookSecret = webhookSecret;
    this.stripe = new Stripe(secretKey, { apiVersion: "2026-04-22.dahlia" });
  }
  webhookSecret;
  stripe;
  async getOrCreateCustomer(userId, email) {
    const existing = await this.stripe.customers.search({
      query: `metadata["userId"]:"${userId}"`,
      limit: 1
    });
    const existingCustomer = existing.data[0];
    if (existingCustomer) return existingCustomer.id;
    const customer = await this.stripe.customers.create({
      email,
      metadata: { userId }
    });
    return customer.id;
  }
  async createPaymentIntent(input) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: input.amount,
      currency: input.currency,
      metadata: input.metadata ?? {},
      automatic_payment_methods: { enabled: true },
      ...input.stripeCustomerId && { customer: input.stripeCustomerId }
    });
    return {
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency
    };
  }
  async createSetupIntent(stripeCustomerId) {
    const setupIntent = await this.stripe.setupIntents.create({
      customer: stripeCustomerId,
      payment_method_types: ["card"]
    });
    return {
      setupIntentId: setupIntent.id,
      clientSecret: setupIntent.client_secret
    };
  }
  async getPaymentMethodDetails(stripePaymentMethodId) {
    const paymentMethod = await this.stripe.paymentMethods.retrieve(stripePaymentMethodId);
    return {
      stripePaymentMethodId: paymentMethod.id,
      type: "card",
      brand: paymentMethod.card?.brand ?? "unknown",
      last4: paymentMethod.card?.last4 ?? "0000",
      expiryMonth: paymentMethod.card?.exp_month ?? 0,
      expiryYear: paymentMethod.card?.exp_year ?? 0
    };
  }
  async listSavedPaymentMethods(stripeCustomerId) {
    const paymentMethods = await this.stripe.customers.listPaymentMethods(stripeCustomerId, {
      type: "card"
    });
    return paymentMethods.data.map((stripePaymentMethod) => ({
      id: stripePaymentMethod.id,
      userId: stripePaymentMethod.metadata?.userId ?? "",
      stripePaymentMethodId: stripePaymentMethod.id,
      type: "card",
      brand: stripePaymentMethod.card?.brand ?? "unknown",
      last4: stripePaymentMethod.card?.last4 ?? "0000",
      expiryMonth: stripePaymentMethod.card?.exp_month ?? 0,
      expiryYear: stripePaymentMethod.card?.exp_year ?? 0,
      isDefault: false,
      createdAt: new Date(stripePaymentMethod.created * 1e3)
    }));
  }
  async detachPaymentMethod(stripePaymentMethodId) {
    await this.stripe.paymentMethods.detach(stripePaymentMethodId);
  }
  async setDefaultPaymentMethod(stripeCustomerId, stripePaymentMethodId) {
    await this.stripe.customers.update(stripeCustomerId, {
      invoice_settings: { default_payment_method: stripePaymentMethodId }
    });
  }
  constructWebhookEvent(rawBody, signature) {
    const event = this.stripe.webhooks.constructEvent(rawBody, signature, this.webhookSecret);
    return {
      type: event.type,
      data: { object: event.data.object }
    };
  }
};

// src/infrastructure/repositories/PrismaPaymentMethodRepository.ts
var PAYMENT_METHOD_SELECT = {
  id: true,
  user_id: true,
  stripe_token: true,
  type: true,
  label: true,
  is_default: true,
  created_at: true
};
var PrismaPaymentMethodRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async findAllByUserId(userId) {
    const records = await this.prismaClient.paymentMethod.findMany({
      where: { user_id: userId },
      select: PAYMENT_METHOD_SELECT,
      orderBy: [{ is_default: "desc" }, { created_at: "asc" }]
    });
    return records.map((record) => this.toSavedPaymentMethod(record));
  }
  async findById(id) {
    const record = await this.prismaClient.paymentMethod.findUnique({
      where: { id },
      select: PAYMENT_METHOD_SELECT
    });
    return record ? this.toSavedPaymentMethod(record) : null;
  }
  async findByStripePaymentMethodId(stripePaymentMethodId) {
    const record = await this.prismaClient.paymentMethod.findFirst({
      where: { stripe_token: stripePaymentMethodId },
      select: PAYMENT_METHOD_SELECT
    });
    return record ? this.toSavedPaymentMethod(record) : null;
  }
  async countByUserId(userId) {
    return this.prismaClient.paymentMethod.count({ where: { user_id: userId } });
  }
  async save(input) {
    const record = await this.prismaClient.paymentMethod.create({
      data: {
        user_id: input.userId,
        stripe_token: input.stripePaymentMethodId,
        type: this.toPrismaPaymentType(input.type),
        label: `${input.brand} \u2022\u2022\u2022\u2022 ${input.last4}`,
        is_default: input.isDefault
      },
      select: PAYMENT_METHOD_SELECT
    });
    return this.toSavedPaymentMethod(record);
  }
  async remove(id) {
    await this.prismaClient.paymentMethod.delete({ where: { id } });
  }
  async setDefault(userId, paymentMethodId) {
    const [, updated] = await this.prismaClient.$transaction([
      this.prismaClient.paymentMethod.updateMany({
        where: { user_id: userId },
        data: { is_default: false }
      }),
      this.prismaClient.paymentMethod.update({
        where: { id: paymentMethodId },
        data: { is_default: true },
        select: PAYMENT_METHOD_SELECT
      })
    ]);
    return this.toSavedPaymentMethod(updated);
  }
  toSavedPaymentMethod(record) {
    const parts = record.label.split(" \u2022\u2022\u2022\u2022 ");
    return {
      id: record.id,
      userId: record.user_id,
      stripePaymentMethodId: record.stripe_token ?? "",
      type: this.toDomainPaymentMethodType(record.type),
      brand: parts[0] ?? "unknown",
      last4: parts[1] ?? "0000",
      expiryMonth: 0,
      expiryYear: 0,
      isDefault: record.is_default,
      createdAt: record.created_at
    };
  }
  // Isolation infrastructure : empêche les valeurs Prisma de fuir dans le domaine
  toPrismaPaymentType(type) {
    const mapping = {
      card: PaymentType.cb,
      paypal: PaymentType.paypal
    };
    return mapping[type];
  }
  toDomainPaymentMethodType(prismaType) {
    const mapping = {
      [PaymentType.cb]: "card",
      [PaymentType.paypal]: "paypal",
      [PaymentType.apple]: "card",
      [PaymentType.google]: "card"
    };
    return mapping[prismaType] ?? "card";
  }
};

// src/domain/errors/PaymentErrors.ts
var PaymentIntentCreationError = class extends DomainError {
  code = "PAYMENT_INTENT_CREATION_FAILED";
  constructor() {
    super("Failed to create payment intent");
  }
};
var SetupIntentCreationError = class extends DomainError {
  code = "SETUP_INTENT_CREATION_FAILED";
  constructor() {
    super("Failed to create setup intent");
  }
};
var PaymentMethodNotFoundError = class extends DomainError {
  code = "PAYMENT_METHOD_NOT_FOUND";
  constructor() {
    super("Payment method not found");
  }
};
var PaymentMethodNotOwnedError = class extends DomainError {
  code = "PAYMENT_METHOD_NOT_OWNED";
  constructor() {
    super("This payment method does not belong to you");
  }
};
var MaxPaymentMethodsReachedError = class extends DomainError {
  code = "MAX_PAYMENT_METHODS_REACHED";
  constructor() {
    super("Maximum of 5 payment methods allowed per account");
  }
};

// src/application/usecases/payment/CreatePaymentIntentUseCase.ts
var CreatePaymentIntentUseCase = class {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }
  paymentGateway;
  async execute(input) {
    try {
      const stripeCustomerId = input.stripeCustomerId ?? await this.paymentGateway.getOrCreateCustomer(input.userId, input.userEmail);
      const paymentIntent = await this.paymentGateway.createPaymentIntent({
        amount: input.amount,
        currency: input.currency,
        stripeCustomerId,
        ...input.orderId ? { metadata: { orderId: input.orderId } } : {}
      });
      return ok(paymentIntent);
    } catch {
      return failure(new PaymentIntentCreationError());
    }
  }
};

// src/application/usecases/payment/CreateSetupIntentUseCase.ts
var CreateSetupIntentUseCase = class {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }
  paymentGateway;
  async execute(input) {
    try {
      const stripeCustomerId = input.stripeCustomerId ?? await this.paymentGateway.getOrCreateCustomer(input.userId, input.userEmail);
      const setupIntent = await this.paymentGateway.createSetupIntent(stripeCustomerId);
      return ok(setupIntent);
    } catch {
      return failure(new SetupIntentCreationError());
    }
  }
};

// src/application/usecases/payment/GetSavedPaymentMethodsUseCase.ts
var GetSavedPaymentMethodsUseCase = class {
  constructor(paymentMethodRepository2) {
    this.paymentMethodRepository = paymentMethodRepository2;
  }
  paymentMethodRepository;
  async execute(userId) {
    return this.paymentMethodRepository.findAllByUserId(userId);
  }
};

// src/application/payment/types.ts
var MAX_SAVED_PAYMENT_METHODS = 5;

// src/application/usecases/payment/ConfirmPaymentMethodUseCase.ts
var ConfirmPaymentMethodUseCase = class {
  constructor(paymentMethodRepository2, paymentGateway) {
    this.paymentMethodRepository = paymentMethodRepository2;
    this.paymentGateway = paymentGateway;
  }
  paymentMethodRepository;
  paymentGateway;
  async execute(input) {
    const existingCount = await this.paymentMethodRepository.countByUserId(input.userId);
    if (existingCount >= MAX_SAVED_PAYMENT_METHODS) {
      return failure(new MaxPaymentMethodsReachedError());
    }
    const alreadySaved = await this.paymentMethodRepository.findByStripePaymentMethodId(
      input.stripePaymentMethodId
    );
    if (alreadySaved) return ok(alreadySaved);
    const details = await this.paymentGateway.getPaymentMethodDetails(input.stripePaymentMethodId);
    const savedPaymentMethod = await this.paymentMethodRepository.save({
      userId: input.userId,
      stripePaymentMethodId: details.stripePaymentMethodId,
      type: details.type,
      brand: details.brand,
      last4: details.last4,
      expiryMonth: details.expiryMonth,
      expiryYear: details.expiryYear,
      isDefault: existingCount === 0
    });
    return ok(savedPaymentMethod);
  }
};

// src/application/usecases/payment/RemovePaymentMethodUseCase.ts
var RemovePaymentMethodUseCase = class {
  constructor(paymentMethodRepository2, paymentGateway) {
    this.paymentMethodRepository = paymentMethodRepository2;
    this.paymentGateway = paymentGateway;
  }
  paymentMethodRepository;
  paymentGateway;
  async execute(input) {
    const paymentMethod = await this.paymentMethodRepository.findById(input.paymentMethodId);
    if (!paymentMethod) return failure(new PaymentMethodNotFoundError());
    if (paymentMethod.userId !== input.userId) return failure(new PaymentMethodNotOwnedError());
    await this.paymentGateway.detachPaymentMethod(paymentMethod.stripePaymentMethodId);
    await this.paymentMethodRepository.remove(input.paymentMethodId);
    if (paymentMethod.isDefault) {
      const remaining = await this.paymentMethodRepository.findAllByUserId(input.userId);
      const nextDefault = remaining[0];
      if (nextDefault) {
        await this.paymentMethodRepository.setDefault(input.userId, nextDefault.id);
      }
    }
    return ok(void 0);
  }
};

// src/infrastructure/repositories/PrismaRestaurantRepository.ts
var RESTAURANT_SELECT = {
  id: true,
  owner_id: true,
  name: true,
  description: true,
  logo_url: true,
  address: true,
  lat: true,
  lng: true,
  opening_hours: true,
  is_active: true,
  rating_avg: true,
  cuisine_type: true,
  prep_time_min: true,
  delivery_fee: true
};
var PrismaRestaurantRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async findAllActive() {
    const records = await this.prismaClient.restaurant.findMany({
      where: { is_active: true },
      select: RESTAURANT_SELECT,
      orderBy: { rating_avg: "desc" }
    });
    return records.map((record) => this.toRestaurant(record));
  }
  async getStats() {
    const [total, active] = await Promise.all([
      this.prismaClient.restaurant.count(),
      this.prismaClient.restaurant.count({ where: { is_active: true } })
    ]);
    return { total, active };
  }
  async findAllByOwnerId(ownerId) {
    const records = await this.prismaClient.restaurant.findMany({
      where: { owner_id: ownerId },
      select: RESTAURANT_SELECT,
      orderBy: { is_active: "desc" }
    });
    return records.map((record) => this.toRestaurant(record));
  }
  async findById(id) {
    const record = await this.prismaClient.restaurant.findUnique({
      where: { id },
      select: RESTAURANT_SELECT
    });
    return record ? this.toRestaurant(record) : null;
  }
  async create(input) {
    const record = await this.prismaClient.restaurant.create({
      data: {
        owner_id: input.ownerId,
        name: input.name,
        description: input.description ?? null,
        address: input.address,
        lat: input.lat,
        lng: input.lng,
        cuisine_type: input.cuisineType,
        prep_time_min: input.prepTimeMin,
        delivery_fee: input.deliveryFee,
        opening_hours: {},
        is_active: false
      },
      select: RESTAURANT_SELECT
    });
    return this.toRestaurant(record);
  }
  async updateProfile(id, input) {
    const record = await this.prismaClient.restaurant.update({
      where: { id },
      data: {
        ...input.name !== void 0 && { name: input.name },
        ...input.description !== void 0 && { description: input.description },
        ...input.address !== void 0 && { address: input.address },
        ...input.cuisineType !== void 0 && { cuisine_type: input.cuisineType },
        ...input.prepTimeMin !== void 0 && { prep_time_min: input.prepTimeMin },
        ...input.deliveryFee !== void 0 && { delivery_fee: input.deliveryFee }
      },
      select: RESTAURANT_SELECT
    });
    return this.toRestaurant(record);
  }
  async updateOpeningHours(id, openingHours) {
    const record = await this.prismaClient.restaurant.update({
      where: { id },
      data: { opening_hours: openingHours },
      select: RESTAURANT_SELECT
    });
    return this.toRestaurant(record);
  }
  async updateStatus(id, isActive) {
    const record = await this.prismaClient.restaurant.update({
      where: { id },
      data: { is_active: isActive },
      select: RESTAURANT_SELECT
    });
    return this.toRestaurant(record);
  }
  async updateLogoUrl(id, logoUrl) {
    const record = await this.prismaClient.restaurant.update({
      where: { id },
      data: { logo_url: logoUrl },
      select: RESTAURANT_SELECT
    });
    return this.toRestaurant(record);
  }
  toRestaurant(record) {
    return {
      id: record.id,
      ownerId: record.owner_id,
      name: record.name,
      description: record.description,
      logoUrl: record.logo_url,
      address: record.address,
      lat: record.lat,
      lng: record.lng,
      openingHours: record.opening_hours ?? {},
      isActive: record.is_active,
      ratingAvg: record.rating_avg,
      cuisineType: record.cuisine_type,
      prepTimeMin: record.prep_time_min,
      deliveryFee: Number(record.delivery_fee)
    };
  }
};

// src/application/usecases/restaurant/GetOwnerRestaurantsUseCase.ts
var GetOwnerRestaurantsUseCase = class {
  constructor(restaurantRepository2) {
    this.restaurantRepository = restaurantRepository2;
  }
  restaurantRepository;
  async execute(ownerId) {
    return this.restaurantRepository.findAllByOwnerId(ownerId);
  }
};

// src/application/usecases/restaurant/CreateRestaurantUseCase.ts
var CreateRestaurantUseCase = class {
  constructor(restaurantRepository2) {
    this.restaurantRepository = restaurantRepository2;
  }
  restaurantRepository;
  async execute(input) {
    const restaurant = await this.restaurantRepository.create(input);
    return ok(restaurant);
  }
};

// src/domain/errors/RestaurantErrors.ts
var RestaurantNotFoundError = class extends DomainError {
  code = "RESTAURANT_NOT_FOUND";
  constructor() {
    super("Restaurant not found");
  }
};
var RestaurantNotOwnedError = class extends DomainError {
  code = "RESTAURANT_NOT_OWNED";
  constructor() {
    super("This restaurant does not belong to you");
  }
};
var InvalidOpeningHoursError = class extends DomainError {
  code = "INVALID_OPENING_HOURS";
  constructor(message) {
    super(message);
  }
};

// src/application/usecases/restaurant/UpdateRestaurantProfileUseCase.ts
var UpdateRestaurantProfileUseCase = class {
  constructor(restaurantRepository2) {
    this.restaurantRepository = restaurantRepository2;
  }
  restaurantRepository;
  async execute(command) {
    const restaurant = await this.restaurantRepository.findById(command.restaurantId);
    if (!restaurant) return failure(new RestaurantNotFoundError());
    if (restaurant.ownerId !== command.ownerId) return failure(new RestaurantNotOwnedError());
    const updated = await this.restaurantRepository.updateProfile(command.restaurantId, command.input);
    return ok(updated);
  }
};

// src/domain/value-objects/OpeningHours.ts
var OpeningHours = class _OpeningHours {
  constructor(value) {
    this.value = value;
  }
  value;
  static create(raw2) {
    for (const [day, slot] of Object.entries(raw2)) {
      if (!slot) continue;
      _OpeningHours.validateTimeSlot(day, slot);
    }
    return new _OpeningHours(raw2);
  }
  static validateTimeSlot(day, slot) {
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
    if (!timePattern.test(slot.open)) {
      throw new InvalidOpeningHoursError(
        `Heure d'ouverture invalide pour ${day} : ${slot.open}`
      );
    }
    if (!timePattern.test(slot.close)) {
      throw new InvalidOpeningHoursError(
        `Heure de fermeture invalide pour ${day} : ${slot.close}`
      );
    }
    if (slot.open >= slot.close) {
      throw new InvalidOpeningHoursError(
        `L'heure d'ouverture doit \xEAtre avant la fermeture pour ${day}`
      );
    }
  }
  toPlainObject() {
    return { ...this.value };
  }
};

// src/application/usecases/restaurant/UpdateOpeningHoursUseCase.ts
var UpdateOpeningHoursUseCase = class {
  constructor(restaurantRepository2) {
    this.restaurantRepository = restaurantRepository2;
  }
  restaurantRepository;
  async execute(command) {
    const restaurant = await this.restaurantRepository.findById(command.restaurantId);
    if (!restaurant) return failure(new RestaurantNotFoundError());
    if (restaurant.ownerId !== command.ownerId) return failure(new RestaurantNotOwnedError());
    try {
      const validatedHours = OpeningHours.create(command.openingHours);
      const updated = await this.restaurantRepository.updateOpeningHours(
        command.restaurantId,
        validatedHours.toPlainObject()
      );
      return ok(updated);
    } catch (error) {
      if (error instanceof InvalidOpeningHoursError) return failure(error);
      throw error;
    }
  }
};

// src/application/usecases/restaurant/ToggleRestaurantStatusUseCase.ts
var ToggleRestaurantStatusUseCase = class {
  constructor(restaurantRepository2) {
    this.restaurantRepository = restaurantRepository2;
  }
  restaurantRepository;
  async execute(command) {
    const restaurant = await this.restaurantRepository.findById(command.restaurantId);
    if (!restaurant) return failure(new RestaurantNotFoundError());
    if (restaurant.ownerId !== command.ownerId) return failure(new RestaurantNotOwnedError());
    const updated = await this.restaurantRepository.updateStatus(command.restaurantId, command.isActive);
    return ok(updated);
  }
};

// src/application/usecases/document/GetPendingDocumentsUseCase.ts
var GetPendingDocumentsUseCase = class {
  constructor(documentRepository2) {
    this.documentRepository = documentRepository2;
  }
  documentRepository;
  async execute() {
    return this.documentRepository.findAllPending();
  }
};

// src/application/usecases/document/GetDocumentsByStatusUseCase.ts
var GetDocumentsByStatusUseCase = class {
  constructor(documentRepository2) {
    this.documentRepository = documentRepository2;
  }
  documentRepository;
  async execute(status) {
    return this.documentRepository.findAllByStatus(status);
  }
};

// src/domain/errors/DocumentErrors.ts
var DocumentNotFoundError = class extends DomainError {
  code = "DOCUMENT_NOT_FOUND";
  constructor() {
    super("Document not found");
  }
};

// src/application/usecases/document/UpdateDocumentStatusUseCase.ts
var DOC_TYPE_LABELS = {
  kbis: "Extrait Kbis",
  id_card: "Pi\xE8ce d'identit\xE9",
  driving_license: "Permis de conduire",
  vehicle_insurance: "Assurance v\xE9hicule",
  vehicle_registration: "Carte grise",
  food_hygiene: "Attestation d'hygi\xE8ne"
};
var UpdateDocumentStatusUseCase = class {
  constructor(documentRepository2, notificationGateway) {
    this.documentRepository = documentRepository2;
    this.notificationGateway = notificationGateway;
  }
  documentRepository;
  notificationGateway;
  async execute(input) {
    const updated = await this.documentRepository.updateStatus(input.documentId, input.status);
    if (!updated) return failure(new DocumentNotFoundError());
    this.sendNotification(updated);
    const allDocuments = await this.documentRepository.findByUserId(updated.userId);
    const requiredTypes = this.getRequiredTypes(allDocuments);
    const allApproved = requiredTypes.length > 0 && requiredTypes.every(
      (type) => allDocuments.find((doc) => doc.type === type)?.status === "approved"
    );
    if (allApproved) {
      this.notificationGateway?.notifyUser(updated.userId, {
        type: "account_activated",
        title: "Compte activ\xE9 \u{1F389}",
        message: "Tous vos documents ont \xE9t\xE9 valid\xE9s. Vous pouvez maintenant mener vos activit\xE9s."
      });
    }
    return ok(updated);
  }
  sendNotification(document) {
    if (!this.notificationGateway) return;
    const label = DOC_TYPE_LABELS[document.type] ?? document.type;
    if (document.status === "approved") {
      this.notificationGateway.notifyUser(document.userId, {
        type: "document_validated",
        title: "Document valid\xE9 \u2713",
        message: `Votre ${label} a \xE9t\xE9 valid\xE9 par notre \xE9quipe.`
      });
    } else if (document.status === "rejected") {
      this.notificationGateway.notifyUser(document.userId, {
        type: "document_rejected",
        title: "Document refus\xE9",
        message: `Votre ${label} a \xE9t\xE9 refus\xE9. Veuillez le soumettre \xE0 nouveau.`
      });
    }
  }
  getRequiredTypes(documents) {
    const types = [...new Set(documents.map((doc) => doc.type))];
    const hasKbis = types.includes("kbis");
    if (hasKbis) return ["kbis", "id_card", "food_hygiene"];
    const hasLicense = types.includes("driving_license");
    if (hasLicense) return ["id_card", "driving_license", "vehicle_insurance", "vehicle_registration"];
    return [];
  }
};

// src/application/usecases/admin/GetAdminStatsUseCase.ts
var GetAdminStatsUseCase = class {
  constructor(documentRepository2, userRepository2, restaurantRepository2) {
    this.documentRepository = documentRepository2;
    this.userRepository = userRepository2;
    this.restaurantRepository = restaurantRepository2;
  }
  documentRepository;
  userRepository;
  restaurantRepository;
  async execute() {
    const [documentStats, userStats, restaurantStats] = await Promise.all([
      this.documentRepository.getStatsByStatus(),
      this.userRepository.getStatsByRole(),
      this.restaurantRepository.getStats()
    ]);
    return {
      documents: documentStats,
      users: userStats,
      restaurants: restaurantStats
    };
  }
};

// src/infrastructure/repositories/PrismaOrderRepository.ts
var TAXES_RATE = 0.1;
var ESTIMATED_MINUTES = 45;
var PrismaOrderRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async create(input) {
    const subtotal = input.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const taxes = Math.round(subtotal * TAXES_RATE * 100) / 100;
    const total = subtotal + input.deliveryFee + taxes;
    const estimatedAt = new Date(Date.now() + ESTIMATED_MINUTES * 60 * 1e3);
    const address = await this.prismaClient.userAddress.create({
      data: {
        user: { connect: { id: input.userId } },
        label: "Commande",
        street: input.deliveryStreet,
        city: input.deliveryCity,
        lat: 0,
        lng: 0,
        is_default: false
      }
    });
    const order = await this.prismaClient.order.create({
      data: {
        user: { connect: { id: input.userId } },
        restaurant: { connect: { id: input.restaurantId } },
        delivery_address: { connect: { id: address.id } },
        payment_method: { connect: { id: input.paymentMethodId } },
        status: "created",
        subtotal,
        delivery_fee: input.deliveryFee,
        taxes,
        tip_amount: 0,
        total,
        estimated_delivery_at: estimatedAt,
        order_items: {
          create: input.items.map((item) => ({
            menu_item: { connect: { id: item.menuItemId } },
            quantity: item.quantity,
            unit_price: item.unitPrice,
            notes: item.notes ?? null,
            ...item.optionValueIds?.length ? {
              selections: {
                create: item.optionValueIds.map((optionValueId) => ({
                  option_value: { connect: { id: optionValueId } },
                  extra_price: 0
                }))
              }
            } : {}
          }))
        }
      }
    });
    return {
      id: order.id,
      status: order.status,
      subtotal: Number(order.subtotal),
      deliveryFee: Number(order.delivery_fee),
      total: Number(order.total),
      estimatedAt: order.estimated_delivery_at.toISOString()
    };
  }
  async findAllByUserId(userId) {
    const orders = await this.prismaClient.order.findMany({
      where: { user_id: userId },
      orderBy: { created_at: "desc" },
      include: {
        restaurant: { select: { id: true, name: true, logo_url: true } },
        delivery_address: { select: { street: true, city: true } },
        order_items: {
          include: {
            menu_item: { select: { name: true, description: true, photo_url: true } }
          }
        }
      }
    });
    return orders.map((order) => ({
      id: order.id,
      restaurantId: order.restaurant.id,
      restaurantName: order.restaurant.name,
      restaurantLogoUrl: order.restaurant.logo_url ?? null,
      status: order.status,
      hasDriver: order.driver_id !== null,
      items: order.order_items.map((item) => ({
        id: item.id,
        name: item.menu_item?.name ?? "Article supprim\xE9",
        description: item.menu_item?.description ?? null,
        photoUrl: item.menu_item?.photo_url ?? null,
        unitPrice: Number(item.unit_price),
        quantity: item.quantity,
        notes: item.notes ?? null
      })),
      deliveryStreet: order.delivery_address?.street ?? "",
      deliveryCity: order.delivery_address?.city ?? "",
      subtotal: Number(order.subtotal),
      deliveryFee: Number(order.delivery_fee),
      total: Number(order.total),
      estimatedAt: order.estimated_delivery_at.toISOString(),
      createdAt: order.created_at.toISOString()
    }));
  }
  async findAllByRestaurantId(restaurantId) {
    const orders = await this.prismaClient.order.findMany({
      where: { restaurant_id: restaurantId },
      orderBy: { created_at: "desc" },
      include: {
        user: { select: { name: true } },
        delivery_address: { select: { street: true, city: true } },
        order_items: {
          include: {
            menu_item: { select: { name: true, photo_url: true } }
          }
        }
      }
    });
    return orders.map((order) => ({
      id: order.id,
      restaurantId,
      clientName: order.user.name,
      status: order.status,
      hasDriver: order.driver_id !== null,
      items: order.order_items.map((item) => ({
        id: item.id,
        name: item.menu_item?.name ?? "Article supprim\xE9",
        photoUrl: item.menu_item?.photo_url ?? null,
        quantity: item.quantity,
        unitPrice: Number(item.unit_price),
        notes: item.notes ?? null
      })),
      deliveryStreet: order.delivery_address?.street ?? "",
      deliveryCity: order.delivery_address?.city ?? "",
      subtotal: Number(order.subtotal),
      deliveryFee: Number(order.delivery_fee),
      total: Number(order.total),
      createdAt: order.created_at.toISOString(),
      estimatedAt: order.estimated_delivery_at.toISOString()
    }));
  }
  async findById(orderId) {
    const order = await this.prismaClient.order.findUnique({
      where: { id: orderId },
      select: {
        id: true,
        restaurant_id: true,
        user_id: true,
        status: true,
        restaurant: { select: { owner_id: true } }
      }
    });
    if (!order) return null;
    return {
      id: order.id,
      restaurantId: order.restaurant_id,
      restaurantOwnerId: order.restaurant.owner_id,
      clientUserId: order.user_id,
      status: order.status
    };
  }
  async updateStatus(orderId, status) {
    await this.prismaClient.order.update({
      where: { id: orderId },
      data: { status }
    });
  }
};

// src/application/usecases/order/CreateOrderUseCase.ts
var CreateOrderUseCase = class {
  constructor(orderRepository2) {
    this.orderRepository = orderRepository2;
  }
  orderRepository;
  async execute(input) {
    const order = await this.orderRepository.create(input);
    return ok(order);
  }
};

// src/application/usecases/order/GetUserOrdersUseCase.ts
var GetUserOrdersUseCase = class {
  constructor(orderRepository2) {
    this.orderRepository = orderRepository2;
  }
  orderRepository;
  async execute(userId) {
    const orders = await this.orderRepository.findAllByUserId(userId);
    return ok(orders);
  }
};

// src/application/usecases/order/GetRestaurantOrdersUseCase.ts
var GetRestaurantOrdersUseCase = class {
  constructor(orderRepository2, restaurantRepository2) {
    this.orderRepository = orderRepository2;
    this.restaurantRepository = restaurantRepository2;
  }
  orderRepository;
  restaurantRepository;
  async execute(userId) {
    const restaurants = await this.restaurantRepository.findAllByOwnerId(userId);
    if (restaurants.length === 0) return [];
    const allOrders = [];
    for (const restaurant of restaurants) {
      const orders = await this.orderRepository.findAllByRestaurantId(restaurant.id);
      allOrders.push(...orders);
    }
    return allOrders.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
};

// src/application/usecases/order/UpdateOrderStatusUseCase.ts
var ALLOWED_TRANSITIONS = {
  created: ["confirmed", "cancelled"],
  confirmed: ["prepared", "cancelled"],
  prepared: ["delivered"]
};
var STATUS_NOTIFICATIONS = {
  confirmed: {
    type: "order_confirmed",
    title: "Commande accept\xE9e ! \u{1F389}",
    message: "Le restaurant a accept\xE9 votre commande et commence la pr\xE9paration."
  },
  prepared: {
    type: "order_prepared",
    title: "Commande pr\xEAte ! \u{1F37D}\uFE0F",
    message: "Votre commande est pr\xEAte, un livreur va la prendre en charge."
  },
  cancelled: {
    type: "order_cancelled",
    title: "Commande annul\xE9e \u274C",
    message: "Votre commande a \xE9t\xE9 annul\xE9e par le restaurant."
  }
};
var UpdateOrderStatusUseCase = class {
  constructor(orderRepository2, restaurantRepository2, notificationGateway) {
    this.orderRepository = orderRepository2;
    this.restaurantRepository = restaurantRepository2;
    this.notificationGateway = notificationGateway;
  }
  orderRepository;
  restaurantRepository;
  notificationGateway;
  async execute(orderId, newStatus, userId) {
    const order = await this.orderRepository.findById(orderId);
    if (!order) return { success: false, message: "Commande introuvable" };
    const restaurants = await this.restaurantRepository.findAllByOwnerId(userId);
    const ownsRestaurant = restaurants.some((r) => r.id === order.restaurantId);
    if (!ownsRestaurant) return { success: false, message: "Non autoris\xE9" };
    const allowed = ALLOWED_TRANSITIONS[order.status] ?? [];
    if (!allowed.includes(newStatus)) {
      return { success: false, message: `Transition invalide : ${order.status} \u2192 ${newStatus}` };
    }
    await this.orderRepository.updateStatus(orderId, newStatus);
    const notif = STATUS_NOTIFICATIONS[newStatus];
    if (notif) {
      this.notificationGateway.notifyUser(order.clientUserId, {
        type: notif.type,
        title: notif.title,
        message: notif.message
      });
    }
    this.notificationGateway.broadcastToRoom(
      `user:${order.clientUserId}`,
      "order:update",
      { orderId, status: newStatus, hasDriver: false }
    );
    return { success: true };
  }
};

// src/infrastructure/repositories/PrismaDriverRepository.ts
var PrismaDriverRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async findByUserId(userId) {
    const driver = await this.prismaClient.driver.findUnique({
      where: { user_id: userId },
      select: { id: true, user_id: true, name: true, transport_type: true, is_online: true, is_verified: true }
    });
    if (!driver) return null;
    return {
      id: driver.id,
      userId: driver.user_id ?? "",
      name: driver.name,
      transportType: driver.transport_type,
      isOnline: driver.is_online,
      isVerified: driver.is_verified
    };
  }
  async toggleOnlineStatus(driverId, isOnline) {
    const driver = await this.prismaClient.driver.update({
      where: { id: driverId },
      data: { is_online: isOnline },
      select: { id: true, user_id: true, name: true, transport_type: true, is_online: true, is_verified: true }
    });
    return {
      id: driver.id,
      userId: driver.user_id ?? "",
      name: driver.name,
      transportType: driver.transport_type,
      isOnline: driver.is_online,
      isVerified: driver.is_verified
    };
  }
  async getAvailableDeliveries() {
    const orders = await this.prismaClient.order.findMany({
      where: { status: { in: ["confirmed", "prepared"] }, driver_id: null },
      orderBy: { created_at: "asc" },
      include: {
        restaurant: { select: { name: true, address: true } },
        delivery_address: { select: { street: true, label: true } },
        order_items: { select: { id: true } }
      }
    });
    return orders.map((order) => ({
      orderId: order.id,
      restaurantName: order.restaurant.name,
      restaurantAddress: order.restaurant.address,
      deliveryAddress: `${order.delivery_address.street} \u2014 ${order.delivery_address.label}`,
      itemCount: order.order_items.length,
      total: Number(order.total),
      estimatedAt: order.estimated_delivery_at.toISOString(),
      createdAt: order.created_at.toISOString()
    }));
  }
  async createProfile(input) {
    const driver = await this.prismaClient.driver.create({
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        transport_type: input.transportType,
        is_online: false,
        lat: 0,
        lng: 0,
        is_verified: false,
        user: { connect: { id: input.userId } }
      },
      select: { id: true, user_id: true, name: true, transport_type: true, is_online: true, is_verified: true }
    });
    return {
      id: driver.id,
      userId: driver.user_id ?? "",
      name: driver.name,
      transportType: driver.transport_type,
      isOnline: driver.is_online,
      isVerified: driver.is_verified
    };
  }
  async acceptDelivery(orderId, driverId) {
    const result = await this.prismaClient.order.updateMany({
      where: { id: orderId, driver_id: null, status: { in: ["confirmed", "prepared"] } },
      data: { driver_id: driverId }
    });
    return { accepted: result.count > 0 };
  }
  async getActiveDelivery(driverId) {
    const order = await this.prismaClient.order.findFirst({
      where: {
        driver_id: driverId,
        status: { notIn: ["delivered", "cancelled"] }
      },
      include: {
        restaurant: { select: { name: true, address: true } },
        delivery_address: { select: { street: true, city: true } },
        user: { select: { name: true } },
        order_items: { select: { id: true } }
      }
    });
    if (!order) return null;
    return {
      orderId: order.id,
      restaurantName: order.restaurant.name,
      restaurantAddress: order.restaurant.address,
      clientName: order.user.name,
      deliveryStreet: order.delivery_address?.street ?? "",
      deliveryCity: order.delivery_address?.city ?? "",
      itemCount: order.order_items.length,
      total: Number(order.total),
      estimatedAt: order.estimated_delivery_at.toISOString(),
      orderStatus: order.status
    };
  }
  async pickupDelivery(orderId, driverId) {
    const order = await this.prismaClient.order.findUnique({
      where: { id: orderId },
      select: { driver_id: true, status: true }
    });
    if (!order) return { success: false, message: "Commande introuvable" };
    if (order.driver_id !== driverId) return { success: false, message: "Non autoris\xE9" };
    if (!["confirmed", "prepared"].includes(order.status)) return { success: false, message: "Statut invalide pour la r\xE9cup\xE9ration" };
    await this.prismaClient.order.update({
      where: { id: orderId },
      data: { status: "delivering" }
    });
    return { success: true };
  }
  async completeDelivery(orderId, driverId) {
    const order = await this.prismaClient.order.findUnique({
      where: { id: orderId },
      select: { driver_id: true, status: true }
    });
    if (!order) return { success: false, message: "Commande introuvable" };
    if (order.driver_id !== driverId) return { success: false, message: "Non autoris\xE9" };
    if (order.status === "delivered") return { success: false, message: "D\xE9j\xE0 livr\xE9e" };
    await this.prismaClient.order.update({
      where: { id: orderId },
      data: { status: "delivered", delivered_at: /* @__PURE__ */ new Date() }
    });
    return { success: true };
  }
};

// src/application/usecases/driver/ToggleDriverStatusUseCase.ts
var DriverNotFoundError = class extends DomainError {
  code = "DRIVER_NOT_FOUND";
  constructor() {
    super("Driver profile not found");
  }
};
var ToggleDriverStatusUseCase = class {
  constructor(driverRepository2) {
    this.driverRepository = driverRepository2;
  }
  driverRepository;
  async execute(userId, isOnline) {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());
    const updated = await this.driverRepository.toggleOnlineStatus(driver.id, isOnline);
    return ok(updated);
  }
};

// src/application/usecases/driver/GetAvailableDeliveriesUseCase.ts
var GetAvailableDeliveriesUseCase = class {
  constructor(driverRepository2) {
    this.driverRepository = driverRepository2;
  }
  driverRepository;
  async execute() {
    return this.driverRepository.getAvailableDeliveries();
  }
};

// src/application/usecases/driver/AcceptDeliveryUseCase.ts
var DeliveryAlreadyTakenError = class extends DomainError {
  code = "DELIVERY_ALREADY_TAKEN";
  constructor() {
    super("Cette commande a d\xE9j\xE0 \xE9t\xE9 prise en charge par un autre livreur.");
  }
};
var AcceptDeliveryUseCase = class {
  constructor(driverRepository2, orderRepository2, notificationGateway) {
    this.driverRepository = driverRepository2;
    this.orderRepository = orderRepository2;
    this.notificationGateway = notificationGateway;
  }
  driverRepository;
  orderRepository;
  notificationGateway;
  async execute(userId, orderId) {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());
    const order = await this.orderRepository.findById(orderId);
    const result = await this.driverRepository.acceptDelivery(orderId, driver.id);
    if (!result.accepted) return failure(new DeliveryAlreadyTakenError());
    if (order) {
      this.notificationGateway.notifyUser(order.clientUserId, {
        type: "order_driver_assigned",
        title: "Livreur en route \u{1F6F5}",
        message: "Un livreur a accept\xE9 votre commande et se dirige vers le restaurant."
      });
      this.notificationGateway.broadcastToRoom(`user:${order.clientUserId}`, "order:update", {
        orderId,
        status: order.status,
        hasDriver: true
      });
      this.notificationGateway.broadcastToRoom(`user:${order.restaurantOwnerId}`, "order:restaurant_update", {
        orderId,
        driverName: driver.name
      });
    }
    return ok(void 0);
  }
};

// src/application/usecases/driver/CreateDriverProfileUseCase.ts
var CreateDriverProfileUseCase = class {
  constructor(driverRepository2) {
    this.driverRepository = driverRepository2;
  }
  driverRepository;
  async execute(userId, name, email, phone, transportType) {
    return this.driverRepository.createProfile({ userId, name, email, phone, transportType });
  }
};

// src/application/usecases/driver/GetDriverProfileUseCase.ts
var GetDriverProfileUseCase = class {
  constructor(driverRepository2) {
    this.driverRepository = driverRepository2;
  }
  driverRepository;
  async execute(userId) {
    return this.driverRepository.findByUserId(userId);
  }
};

// src/application/usecases/driver/GetActiveDeliveryUseCase.ts
var GetActiveDeliveryUseCase = class {
  constructor(driverRepository2) {
    this.driverRepository = driverRepository2;
  }
  driverRepository;
  async execute(userId) {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());
    const delivery = await this.driverRepository.getActiveDelivery(driver.id);
    return ok(delivery);
  }
};

// src/application/usecases/driver/PickupDeliveryUseCase.ts
var PickupError = class extends DomainError {
  code = "PICKUP_FAILED";
  constructor(message) {
    super(message);
  }
};
var PickupDeliveryUseCase = class {
  constructor(driverRepository2, orderRepository2, notificationGateway) {
    this.driverRepository = driverRepository2;
    this.orderRepository = orderRepository2;
    this.notificationGateway = notificationGateway;
  }
  driverRepository;
  orderRepository;
  notificationGateway;
  async execute(userId, orderId) {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());
    const order = await this.orderRepository.findById(orderId);
    const result = await this.driverRepository.pickupDelivery(orderId, driver.id);
    if (!result.success) return failure(new PickupError(result.message ?? "Erreur lors de la r\xE9cup\xE9ration"));
    if (order) {
      this.notificationGateway.notifyUser(order.clientUserId, {
        type: "order_delivering",
        title: "Commande r\xE9cup\xE9r\xE9e \u{1F6B4}",
        message: "Le livreur a r\xE9cup\xE9r\xE9 votre commande et est en route vers vous !"
      });
      this.notificationGateway.broadcastToRoom(
        `user:${order.clientUserId}`,
        "order:update",
        { orderId, status: "delivering", hasDriver: true }
      );
    }
    return ok(void 0);
  }
};

// src/application/usecases/driver/CompleteDeliveryUseCase.ts
var CompleteError = class extends DomainError {
  code = "COMPLETE_FAILED";
  constructor(message) {
    super(message);
  }
};
var CompleteDeliveryUseCase = class {
  constructor(driverRepository2, orderRepository2, notificationGateway) {
    this.driverRepository = driverRepository2;
    this.orderRepository = orderRepository2;
    this.notificationGateway = notificationGateway;
  }
  driverRepository;
  orderRepository;
  notificationGateway;
  async execute(userId, orderId) {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());
    const order = await this.orderRepository.findById(orderId);
    const result = await this.driverRepository.completeDelivery(orderId, driver.id);
    if (!result.success) return failure(new CompleteError(result.message ?? "Erreur lors de la validation"));
    if (order) {
      this.notificationGateway.notifyUser(order.clientUserId, {
        type: "order_delivered",
        title: "Commande livr\xE9e ! \u{1F389}",
        message: "Votre commande a bien \xE9t\xE9 livr\xE9e. Bon app\xE9tit !"
      });
      this.notificationGateway.broadcastToRoom(
        `user:${order.clientUserId}`,
        "order:update",
        { orderId, status: "delivered", hasDriver: true }
      );
    }
    return ok(void 0);
  }
};

// src/index.ts
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";

// src/infrastructure/frameworks/websocket/SocketIOGateway.ts
var SocketIOGateway = class {
  constructor(io) {
    this.io = io;
  }
  io;
  notifyUser(userId, payload) {
    this.io.to(`user:${userId}`).emit("notification", payload);
  }
  broadcastToRoom(room, event, data) {
    this.io.to(room).emit(event, data);
  }
};

// src/interfaces/adapters/websocket/notificationAdapter.ts
var DRIVERS_ONLINE_ROOM2 = "drivers:online";
var ADMINS_ROOM2 = "admins";
function setupNotificationAdapter(io, tokenService, userRepository2) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      next(new Error("Authentification requise"));
      return;
    }
    try {
      const { userId } = tokenService.verifyAccessToken(token);
      socket.data.userId = userId;
      next();
    } catch {
      next(new Error("Token invalide ou expir\xE9"));
    }
  });
  io.on("connection", async (socket) => {
    const userId = socket.data.userId;
    socket.join(`user:${userId}`);
    if (userRepository2) {
      const user = await userRepository2.findById(userId);
      if (user?.role === "ADMIN") {
        socket.join(ADMINS_ROOM2);
      }
    }
    socket.on("driver:online", () => socket.join(DRIVERS_ONLINE_ROOM2));
    socket.on("driver:offline", () => socket.leave(DRIVERS_ONLINE_ROOM2));
    socket.on("disconnect", () => {
      socket.leave(`user:${userId}`);
      socket.leave(DRIVERS_ONLINE_ROOM2);
      socket.leave(ADMINS_ROOM2);
    });
  });
}

// src/infrastructure/repositories/PrismaMenuCategoryRepository.ts
var PrismaMenuCategoryRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async findAllByRestaurantId(restaurantId) {
    const records = await this.prismaClient.menuCategory.findMany({
      where: { restaurant_id: restaurantId },
      orderBy: { position: "asc" },
      include: {
        menu_items: {
          orderBy: { name: "asc" },
          include: {
            options: {
              include: { values: { orderBy: { extra_price: "asc" } } }
            }
          }
        }
      }
    });
    return records.map((record) => this.toMenuCategory(record));
  }
  async findById(id) {
    const record = await this.prismaClient.menuCategory.findUnique({
      where: { id },
      include: { menu_items: { include: { options: { include: { values: true } } } } }
    });
    return record ? this.toMenuCategory(record) : null;
  }
  async create(input) {
    const maxPosition = await this.prismaClient.menuCategory.count({
      where: { restaurant_id: input.restaurantId }
    });
    const record = await this.prismaClient.menuCategory.create({
      data: {
        restaurant_id: input.restaurantId,
        name: input.name,
        availability: input.availability,
        position: maxPosition
      },
      include: { menu_items: { include: { options: { include: { values: true } } } } }
    });
    return this.toMenuCategory(record);
  }
  async update(id, input) {
    const record = await this.prismaClient.menuCategory.update({
      where: { id },
      data: {
        ...input.name !== void 0 && { name: input.name },
        ...input.availability !== void 0 && { availability: input.availability },
        ...input.position !== void 0 && { position: input.position }
      },
      include: { menu_items: { include: { options: { include: { values: true } } } } }
    });
    return this.toMenuCategory(record);
  }
  async remove(id) {
    await this.prismaClient.menuCategory.delete({ where: { id } });
  }
  async reorder(restaurantId, orderedIds) {
    await this.prismaClient.$transaction(
      orderedIds.map(
        (id, index) => this.prismaClient.menuCategory.update({
          where: { id, restaurant_id: restaurantId },
          data: { position: index }
        })
      )
    );
  }
  toMenuCategory(record) {
    return {
      id: record.id,
      restaurantId: record.restaurant_id,
      name: record.name,
      position: record.position,
      availability: record.availability,
      items: record.menu_items.map((item) => this.toMenuItem(item))
    };
  }
  toMenuItem(item) {
    return {
      id: item.id,
      categoryId: item.category_id,
      name: item.name,
      description: item.description,
      photoUrl: item.photo_url,
      price: Number(item.price),
      isAvailable: item.is_available,
      isPopular: item.is_popular,
      dailyStock: item.daily_stock,
      options: item.options.map((option) => this.toOption(option))
    };
  }
  toOption(option) {
    return {
      id: option.id,
      itemId: option.item_id,
      name: option.name,
      type: option.type,
      isRequired: option.is_required,
      values: option.values.map((value) => ({
        id: value.id,
        optionId: value.option_id,
        label: value.label,
        extraPrice: Number(value.extra_price)
      }))
    };
  }
};

// src/infrastructure/repositories/PrismaMenuItemRepository.ts
var PrismaMenuItemRepository = class {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  prismaClient;
  async findById(id, withOptions = true) {
    const record = await this.prismaClient.menuItem.findUnique({
      where: { id },
      include: withOptions ? { options: { include: { values: { orderBy: { extra_price: "asc" } } } } } : void 0
    });
    if (!record) return null;
    return this.toMenuItem({ ...record, options: record.options ?? [] });
  }
  async findByCategoryId(categoryId) {
    const records = await this.prismaClient.menuItem.findMany({
      where: { category_id: categoryId },
      orderBy: { name: "asc" },
      include: { options: { include: { values: true } } }
    });
    return records.map((record) => this.toMenuItem(record));
  }
  async create(input) {
    const record = await this.prismaClient.menuItem.create({
      data: {
        category_id: input.categoryId,
        name: input.name,
        description: input.description ?? null,
        price: input.price,
        is_available: input.isAvailable,
        is_popular: input.isPopular,
        daily_stock: input.dailyStock ?? null
      },
      include: { options: { include: { values: true } } }
    });
    return this.toMenuItem(record);
  }
  async update(id, input) {
    const record = await this.prismaClient.menuItem.update({
      where: { id },
      data: {
        ...input.name !== void 0 && { name: input.name },
        ...input.description !== void 0 && { description: input.description },
        ...input.price !== void 0 && { price: input.price },
        ...input.isAvailable !== void 0 && { is_available: input.isAvailable },
        ...input.isPopular !== void 0 && { is_popular: input.isPopular },
        ...input.dailyStock !== void 0 && { daily_stock: input.dailyStock }
      },
      include: { options: { include: { values: true } } }
    });
    return this.toMenuItem(record);
  }
  async remove(id) {
    await this.prismaClient.menuItem.delete({ where: { id } });
  }
  async updatePhotoUrl(id, photoUrl) {
    const record = await this.prismaClient.menuItem.update({
      where: { id },
      data: { photo_url: photoUrl },
      include: { options: { include: { values: true } } }
    });
    return this.toMenuItem(record);
  }
  async decrementStock(id) {
    const record = await this.prismaClient.menuItem.update({
      where: { id },
      data: {
        daily_stock: { decrement: 1 }
      },
      include: { options: { include: { values: true } } }
    });
    if (record.daily_stock !== null && record.daily_stock <= 0) {
      return this.update(id, { isAvailable: false, dailyStock: 0 });
    }
    return this.toMenuItem(record);
  }
  async createOption(input) {
    const record = await this.prismaClient.menuItemOption.create({
      data: {
        item_id: input.itemId,
        name: input.name,
        type: input.type,
        is_required: input.isRequired,
        values: {
          create: input.values.map((value) => ({
            label: value.label,
            extra_price: value.extraPrice
          }))
        }
      },
      include: { values: { orderBy: { extra_price: "asc" } } }
    });
    return {
      id: record.id,
      itemId: record.item_id,
      name: record.name,
      type: record.type,
      isRequired: record.is_required,
      values: record.values.map((value) => ({
        id: value.id,
        optionId: value.option_id,
        label: value.label,
        extraPrice: Number(value.extra_price)
      }))
    };
  }
  async removeOption(optionId) {
    await this.prismaClient.menuItemOption.delete({ where: { id: optionId } });
  }
  toMenuItem(record) {
    return {
      id: record.id,
      categoryId: record.category_id,
      name: record.name,
      description: record.description,
      photoUrl: record.photo_url,
      price: Number(record.price),
      isAvailable: record.is_available,
      isPopular: record.is_popular,
      dailyStock: record.daily_stock,
      options: (record.options ?? []).map((option) => ({
        id: option.id,
        itemId: option.item_id,
        name: option.name,
        type: option.type,
        isRequired: option.is_required,
        values: option.values.map((value) => ({
          id: value.id,
          optionId: value.option_id,
          label: value.label,
          extraPrice: Number(value.extra_price)
        }))
      }))
    };
  }
};

// src/application/usecases/menu/GetRestaurantMenuUseCase.ts
var GetRestaurantMenuUseCase = class {
  constructor(menuCategoryRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
  }
  menuCategoryRepository;
  async execute(restaurantId) {
    return this.menuCategoryRepository.findAllByRestaurantId(restaurantId);
  }
};

// src/application/usecases/menu/CreateMenuCategoryUseCase.ts
var CreateMenuCategoryUseCase = class {
  constructor(menuCategoryRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
  }
  menuCategoryRepository;
  async execute(input) {
    const category = await this.menuCategoryRepository.create(input);
    return ok(category);
  }
};

// src/domain/errors/MenuErrors.ts
var MenuCategoryNotFoundError = class extends DomainError {
  code = "MENU_CATEGORY_NOT_FOUND";
  constructor() {
    super("Menu category not found");
  }
};
var MenuCategoryNotOwnedError = class extends DomainError {
  code = "MENU_CATEGORY_NOT_OWNED";
  constructor() {
    super("This menu category does not belong to your restaurant");
  }
};
var MenuItemNotFoundError = class extends DomainError {
  code = "MENU_ITEM_NOT_FOUND";
  constructor() {
    super("Menu item not found");
  }
};
var MenuItemNotOwnedError = class extends DomainError {
  code = "MENU_ITEM_NOT_OWNED";
  constructor() {
    super("This menu item does not belong to your restaurant");
  }
};
var InvalidMenuCsvError = class extends DomainError {
  code = "INVALID_MENU_CSV";
  constructor(message) {
    super(message);
  }
};

// src/application/usecases/menu/UpdateMenuCategoryUseCase.ts
var UpdateMenuCategoryUseCase = class {
  constructor(menuCategoryRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
  }
  menuCategoryRepository;
  async execute(command) {
    const category = await this.menuCategoryRepository.findById(command.categoryId);
    if (!category) return failure(new MenuCategoryNotFoundError());
    if (category.restaurantId !== command.restaurantId) return failure(new MenuCategoryNotOwnedError());
    const updated = await this.menuCategoryRepository.update(command.categoryId, command.input);
    return ok(updated);
  }
};

// src/application/usecases/menu/DeleteMenuCategoryUseCase.ts
var DeleteMenuCategoryUseCase = class {
  constructor(menuCategoryRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
  }
  menuCategoryRepository;
  async execute(command) {
    const category = await this.menuCategoryRepository.findById(command.categoryId);
    if (!category) return failure(new MenuCategoryNotFoundError());
    if (category.restaurantId !== command.restaurantId) return failure(new MenuCategoryNotOwnedError());
    await this.menuCategoryRepository.remove(command.categoryId);
    return ok(void 0);
  }
};

// src/application/usecases/menu/CreateMenuItemUseCase.ts
var CreateMenuItemUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(command) {
    const category = await this.menuCategoryRepository.findById(command.input.categoryId);
    if (!category) return failure(new MenuCategoryNotFoundError());
    if (category.restaurantId !== command.restaurantId) return failure(new MenuCategoryNotOwnedError());
    const item = await this.menuItemRepository.create(command.input);
    return ok(item);
  }
};

// src/application/usecases/menu/UpdateMenuItemUseCase.ts
var UpdateMenuItemUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(command) {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());
    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }
    const updated = await this.menuItemRepository.update(command.itemId, command.input);
    return ok(updated);
  }
};

// src/application/usecases/menu/DeleteMenuItemUseCase.ts
var DeleteMenuItemUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(command) {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());
    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }
    await this.menuItemRepository.remove(command.itemId);
    return ok(void 0);
  }
};

// src/application/usecases/menu/ToggleMenuItemAvailabilityUseCase.ts
var ToggleMenuItemAvailabilityUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(command) {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());
    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }
    const updated = await this.menuItemRepository.update(command.itemId, {
      isAvailable: command.isAvailable
    });
    return ok(updated);
  }
};

// src/application/usecases/menu/UpdateMenuItemStockUseCase.ts
var UpdateMenuItemStockUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(command) {
    const item = await this.menuItemRepository.findById(command.itemId);
    if (!item) return failure(new MenuItemNotFoundError());
    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }
    const isAvailable = command.dailyStock === null || command.dailyStock > 0;
    const updated = await this.menuItemRepository.update(command.itemId, {
      dailyStock: command.dailyStock,
      isAvailable
    });
    return ok(updated);
  }
};

// src/application/usecases/menu/CreateMenuItemOptionUseCase.ts
var CreateMenuItemOptionUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(command) {
    const item = await this.menuItemRepository.findById(command.input.itemId);
    if (!item) return failure(new MenuItemNotFoundError());
    const category = await this.menuCategoryRepository.findById(item.categoryId);
    if (!category || category.restaurantId !== command.restaurantId) {
      return failure(new MenuItemNotOwnedError());
    }
    const option = await this.menuItemRepository.createOption(command.input);
    return ok(option);
  }
};

// src/application/usecases/menu/ExportMenuCsvUseCase.ts
var CSV_HEADER = "categorie,disponibilite,nom,description,prix,disponible,populaire,stock_journalier";
var ExportMenuCsvUseCase = class {
  constructor(menuCategoryRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
  }
  menuCategoryRepository;
  async execute(restaurantId) {
    const categories = await this.menuCategoryRepository.findAllByRestaurantId(restaurantId);
    const rows = [CSV_HEADER];
    for (const category of categories) {
      for (const item of category.items) {
        const row = [
          this.escape(category.name),
          category.availability,
          this.escape(item.name),
          this.escape(item.description ?? ""),
          item.price.toFixed(2),
          item.isAvailable ? "1" : "0",
          item.isPopular ? "1" : "0",
          item.dailyStock !== null ? String(item.dailyStock) : ""
        ].join(",");
        rows.push(row);
      }
    }
    return rows.join("\n");
  }
  escape(value) {
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
};

// src/application/usecases/menu/ImportMenuCsvUseCase.ts
var VALID_AVAILABILITY = ["always", "lunch", "dinner", "weekend"];
var ImportMenuCsvUseCase = class {
  constructor(menuCategoryRepository2, menuItemRepository2) {
    this.menuCategoryRepository = menuCategoryRepository2;
    this.menuItemRepository = menuItemRepository2;
  }
  menuCategoryRepository;
  menuItemRepository;
  async execute(restaurantId, csvContent) {
    const lines = csvContent.trim().split("\n").filter(Boolean);
    if (lines.length < 2) return failure(new InvalidMenuCsvError("Le fichier CSV est vide"));
    const [header, ...dataLines] = lines;
    const columns = header?.split(",").map((column) => column.trim().toLowerCase()) ?? [];
    const required = ["categorie", "nom", "prix"];
    for (const field of required) {
      if (!columns.includes(field)) {
        return failure(new InvalidMenuCsvError(`Colonne manquante : ${field}`));
      }
    }
    const categoryCache = /* @__PURE__ */ new Map();
    let categoriesCreated = 0;
    let itemsCreated = 0;
    for (const line of dataLines) {
      const values = this.parseCsvLine(line);
      const get = (field) => values[columns.indexOf(field)] ?? "";
      const categoryName = get("categorie").trim();
      const availability = get("disponibilite").trim() || "always";
      const itemName = get("nom").trim();
      const priceRaw = parseFloat(get("prix").replace(",", "."));
      const isAvailable = get("disponible") !== "0";
      const isPopular = get("populaire") === "1";
      const stockRaw = get("stock_journalier").trim();
      const dailyStock = stockRaw !== "" ? parseInt(stockRaw) : null;
      if (!categoryName || !itemName || isNaN(priceRaw)) continue;
      if (!VALID_AVAILABILITY.includes(availability)) continue;
      let categoryId = categoryCache.get(categoryName);
      if (!categoryId) {
        const category = await this.menuCategoryRepository.create({
          restaurantId,
          name: categoryName,
          availability
        });
        categoryId = category.id;
        categoryCache.set(categoryName, categoryId);
        categoriesCreated++;
      }
      await this.menuItemRepository.create({
        categoryId,
        name: itemName,
        description: get("description").trim() || void 0,
        price: priceRaw,
        isAvailable,
        isPopular,
        ...dailyStock !== null && { dailyStock }
      });
      itemsCreated++;
    }
    return ok({ categoriesCreated, itemsCreated });
  }
  parseCsvLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  }
};

// src/index.ts
var userRepository = new PrismaUserRepository(prisma);
var refreshTokenRepository = new PrismaRefreshTokenRepository(prisma);
var jwtTokenService = new JwtTokenService(env);
var bcryptPasswordHasher = new BcryptPasswordHasher();
var getCurrentUserUseCase = new GetCurrentUserUseCase(userRepository, jwtTokenService);
var pruneExpiredRefreshTokensUseCase = new PruneExpiredRefreshTokensUseCase(refreshTokenRepository);
var requireAuthentication = createRequireAuth(getCurrentUserUseCase);
var documentRepository = new PrismaDocumentRepository(prisma);
var stripePaymentGateway = new StripePaymentGateway(env.stripeSecretKey, env.stripeWebhookSecret);
var paymentMethodRepository = new PrismaPaymentMethodRepository(prisma);
var createPaymentIntentUseCase = new CreatePaymentIntentUseCase(stripePaymentGateway);
var createSetupIntentUseCase = new CreateSetupIntentUseCase(stripePaymentGateway);
var getSavedPaymentMethodsUseCase = new GetSavedPaymentMethodsUseCase(paymentMethodRepository);
var confirmPaymentMethodUseCase = new ConfirmPaymentMethodUseCase(paymentMethodRepository, stripePaymentGateway);
var removePaymentMethodUseCase = new RemovePaymentMethodUseCase(paymentMethodRepository, stripePaymentGateway);
var orderRepository = new PrismaOrderRepository(prisma);
var createOrderUseCase = new CreateOrderUseCase(orderRepository);
var getUserOrdersUseCase = new GetUserOrdersUseCase(orderRepository);
var restaurantRepository = new PrismaRestaurantRepository(prisma);
var getOwnerRestaurantsUseCase = new GetOwnerRestaurantsUseCase(restaurantRepository);
var getRestaurantOrdersUseCase = new GetRestaurantOrdersUseCase(orderRepository, restaurantRepository);
var createRestaurantUseCase = new CreateRestaurantUseCase(restaurantRepository);
var updateRestaurantProfileUseCase = new UpdateRestaurantProfileUseCase(restaurantRepository);
var updateOpeningHoursUseCase = new UpdateOpeningHoursUseCase(restaurantRepository);
var toggleRestaurantStatusUseCase = new ToggleRestaurantStatusUseCase(restaurantRepository);
var menuCategoryRepository = new PrismaMenuCategoryRepository(prisma);
var menuItemRepository = new PrismaMenuItemRepository(prisma);
var getRestaurantMenuUseCase = new GetRestaurantMenuUseCase(menuCategoryRepository);
var createMenuCategoryUseCase = new CreateMenuCategoryUseCase(menuCategoryRepository);
var updateMenuCategoryUseCase = new UpdateMenuCategoryUseCase(menuCategoryRepository);
var deleteMenuCategoryUseCase = new DeleteMenuCategoryUseCase(menuCategoryRepository);
var createMenuItemUseCase = new CreateMenuItemUseCase(menuCategoryRepository, menuItemRepository);
var updateMenuItemUseCase = new UpdateMenuItemUseCase(menuCategoryRepository, menuItemRepository);
var deleteMenuItemUseCase = new DeleteMenuItemUseCase(menuCategoryRepository, menuItemRepository);
var toggleMenuItemAvailabilityUseCase = new ToggleMenuItemAvailabilityUseCase(menuCategoryRepository, menuItemRepository);
var updateMenuItemStockUseCase = new UpdateMenuItemStockUseCase(menuCategoryRepository, menuItemRepository);
var createMenuItemOptionUseCase = new CreateMenuItemOptionUseCase(menuCategoryRepository, menuItemRepository);
var exportMenuCsvUseCase = new ExportMenuCsvUseCase(menuCategoryRepository);
var importMenuCsvUseCase = new ImportMenuCsvUseCase(menuCategoryRepository, menuItemRepository);
var resolvedGateway = null;
var notificationGatewayProxy = {
  notifyUser: (userId, payload) => resolvedGateway?.notifyUser(userId, payload),
  broadcastToRoom: (room, event, data) => resolvedGateway?.broadcastToRoom(room, event, data)
};
var updateOrderStatusUseCase = new UpdateOrderStatusUseCase(orderRepository, restaurantRepository, notificationGatewayProxy);
var driverRepository = new PrismaDriverRepository(prisma);
var toggleDriverStatusUseCase = new ToggleDriverStatusUseCase(driverRepository);
var getAvailableDeliveriesUseCase = new GetAvailableDeliveriesUseCase(driverRepository);
var acceptDeliveryUseCase = new AcceptDeliveryUseCase(driverRepository, orderRepository, notificationGatewayProxy);
var createDriverProfileUseCase = new CreateDriverProfileUseCase(driverRepository);
var getDriverProfileUseCase = new GetDriverProfileUseCase(driverRepository);
var getActiveDeliveryUseCase = new GetActiveDeliveryUseCase(driverRepository);
var pickupDeliveryUseCase = new PickupDeliveryUseCase(driverRepository, orderRepository, notificationGatewayProxy);
var completeDeliveryUseCase = new CompleteDeliveryUseCase(driverRepository, orderRepository, notificationGatewayProxy);
var getPendingDocumentsUseCase = new GetPendingDocumentsUseCase(documentRepository);
var getDocumentsByStatusUseCase = new GetDocumentsByStatusUseCase(documentRepository);
var updateDocumentStatusUseCase = new UpdateDocumentStatusUseCase(documentRepository, notificationGatewayProxy);
var getAdminStatsUseCase = new GetAdminStatsUseCase(documentRepository, userRepository, restaurantRepository);
setInterval(async () => {
  const count = await pruneExpiredRefreshTokensUseCase.execute();
  if (count > 0) console.log(`[cleanup]: ${count} refresh tokens expir\xE9s supprim\xE9s`);
}, 24 * 60 * 60 * 1e3);
var startServer = async () => {
  if (env.httpFramework === "fastify") {
    const fastifyApp = createFastifyApp({
      userRepo: userRepository,
      refreshTokenRepo: refreshTokenRepository,
      tokenService: jwtTokenService,
      passwordHasher: bcryptPasswordHasher,
      getPendingDocumentsUseCase,
      updateDocumentStatusUseCase,
      corsOrigin: env.corsOrigins
    });
    await fastifyApp.listen({
      port: Number(env.port),
      host: "0.0.0.0"
    });
    console.log(`[fastify]: http://localhost:${env.port}`);
    return;
  }
  const expressApp = createExpressApp({
    userRepository,
    refreshTokenRepository,
    tokenService: jwtTokenService,
    passwordHasher: bcryptPasswordHasher,
    documentRepository,
    createOrderUseCase,
    getUserOrdersUseCase,
    getRestaurantOrdersUseCase,
    updateOrderStatusUseCase,
    paymentGateway: stripePaymentGateway,
    paymentMethodRepository,
    createPaymentIntentUseCase,
    createSetupIntentUseCase,
    getSavedPaymentMethodsUseCase,
    confirmPaymentMethodUseCase,
    removePaymentMethodUseCase,
    restaurantRepository,
    getOwnerRestaurantsUseCase,
    createRestaurantUseCase,
    updateRestaurantProfileUseCase,
    updateOpeningHoursUseCase,
    toggleRestaurantStatusUseCase,
    getPendingDocumentsUseCase,
    getDocumentsByStatusUseCase,
    updateDocumentStatusUseCase,
    getAdminStatsUseCase,
    menuCategoryRepository,
    menuItemRepository,
    getRestaurantMenuUseCase,
    createMenuCategoryUseCase,
    updateMenuCategoryUseCase,
    deleteMenuCategoryUseCase,
    createMenuItemUseCase,
    updateMenuItemUseCase,
    deleteMenuItemUseCase,
    toggleMenuItemAvailabilityUseCase,
    updateMenuItemStockUseCase,
    createMenuItemOptionUseCase,
    exportMenuCsvUseCase,
    importMenuCsvUseCase,
    toggleDriverStatusUseCase,
    getAvailableDeliveriesUseCase,
    acceptDeliveryUseCase,
    createDriverProfileUseCase,
    getDriverProfileUseCase,
    getActiveDeliveryUseCase,
    pickupDeliveryUseCase,
    completeDeliveryUseCase,
    notificationGateway: notificationGatewayProxy,
    requireAuthentication,
    corsOrigin: env.corsOrigins
  });
  const httpServer = createServer(expressApp);
  const socketIOServer = new SocketIOServer(httpServer, {
    cors: { origin: process.env.CORS_ORIGIN ?? "http://localhost:3000", credentials: true }
  });
  resolvedGateway = new SocketIOGateway(socketIOServer);
  setupNotificationAdapter(socketIOServer, jwtTokenService, userRepository);
  httpServer.listen(env.port, () => {
    console.log(`[express]:   http://localhost:${env.port}`);
    console.log(`[socket.io]: ws://localhost:${env.port}`);
  });
};
startServer().catch((error) => {
  console.error("[bootstrap-error]:", error);
  process.exit(1);
});
//# sourceMappingURL=index.js.map