/*
  Warnings:

  - You are about to drop the `Bank_Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart_Items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Confirmation_Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Couriers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Decoration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice_Histories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message_Templates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Operation_Hours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Store_on_Decoration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Variant_Option_Values` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Variant_Options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Variants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bank_Account" DROP CONSTRAINT "Bank_Account_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Cart_Items" DROP CONSTRAINT "Cart_Items_cartsId_fkey";

-- DropForeignKey
ALTER TABLE "Cart_Items" DROP CONSTRAINT "Cart_Items_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Cart_Items" DROP CONSTRAINT "Cart_Items_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Cart_Items" DROP CONSTRAINT "Cart_Items_variant_Option_ValuesId_fkey";

-- DropForeignKey
ALTER TABLE "Carts" DROP CONSTRAINT "Carts_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Carts" DROP CONSTRAINT "Carts_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_productsId_fkey";

-- DropForeignKey
ALTER TABLE "Confirmation_Payment" DROP CONSTRAINT "Confirmation_Payment_invoicesId_fkey";

-- DropForeignKey
ALTER TABLE "Couriers" DROP CONSTRAINT "Couriers_invoicesId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice_Histories" DROP CONSTRAINT "Invoice_Histories_invoicesId_fkey";

-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_cartsId_fkey";

-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_paymentsId_fkey";

-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Locations" DROP CONSTRAINT "Locations_profilesId_fkey";

-- DropForeignKey
ALTER TABLE "Locations" DROP CONSTRAINT "Locations_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Message_Templates" DROP CONSTRAINT "Message_Templates_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Operation_Hours" DROP CONSTRAINT "Operation_Hours_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Profiles" DROP CONSTRAINT "Profiles_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Store_on_Decoration" DROP CONSTRAINT "Store_on_Decoration_decorationId_fkey";

-- DropForeignKey
ALTER TABLE "Store_on_Decoration" DROP CONSTRAINT "Store_on_Decoration_storesId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_rolesId_fkey";

-- DropForeignKey
ALTER TABLE "Variant_Option_Values" DROP CONSTRAINT "Variant_Option_Values_variant_OptionsId_fkey";

-- DropForeignKey
ALTER TABLE "Variant_Options" DROP CONSTRAINT "Variant_Options_variantsId_fkey";

-- DropForeignKey
ALTER TABLE "Variants" DROP CONSTRAINT "Variants_productsId_fkey";

-- DropTable
DROP TABLE "Bank_Account";

-- DropTable
DROP TABLE "Cart_Items";

-- DropTable
DROP TABLE "Carts";

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "Confirmation_Payment";

-- DropTable
DROP TABLE "Couriers";

-- DropTable
DROP TABLE "Decoration";

-- DropTable
DROP TABLE "Invoice_Histories";

-- DropTable
DROP TABLE "Invoices";

-- DropTable
DROP TABLE "Locations";

-- DropTable
DROP TABLE "Message_Templates";

-- DropTable
DROP TABLE "Operation_Hours";

-- DropTable
DROP TABLE "Payments";

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Profiles";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Store_on_Decoration";

-- DropTable
DROP TABLE "Stores";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Variant_Option_Values";

-- DropTable
DROP TABLE "Variant_Options";

-- DropTable
DROP TABLE "Variants";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT,
    "rolesId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "locations" TEXT,
    "usersId" TEXT,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "attachments" TEXT,
    "is_active" BOOLEAN,
    "variants" TEXT,
    "size" INTEGER,
    "minimum_order" INTEGER,
    "storesId" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productsId" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variants" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "is_active" BOOLEAN,
    "productsId" TEXT,

    CONSTRAINT "variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant_options" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "variantsId" TEXT,

    CONSTRAINT "variant_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant_option_values" (
    "id" TEXT NOT NULL,
    "sku" TEXT,
    "weight" INTEGER,
    "stock" INTEGER,
    "price" INTEGER,
    "is_active" BOOLEAN,
    "variant_OptionsId" TEXT,

    CONSTRAINT "variant_option_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,
    "price" INTEGER,
    "discount" INTEGER,
    "usersId" TEXT,
    "storesId" TEXT,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_items" (
    "id" TEXT NOT NULL,
    "qty" INTEGER,
    "price" INTEGER,
    "cartsId" TEXT,
    "usersId" TEXT,
    "storesId" TEXT,
    "variant_Option_ValuesId" TEXT,

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "price" INTEGER,
    "service_charge" INTEGER,
    "status" TEXT,
    "receiver_longitude" TEXT,
    "receiver_latitude" TEXT,
    "receiver_district" TEXT,
    "receiver_phone" TEXT,
    "receiver_address" TEXT,
    "receiver_name" TEXT,
    "invoice_number" TEXT,
    "cartsId" TEXT,
    "paymentsId" TEXT,
    "usersId" TEXT,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "bank" TEXT,
    "amount" INTEGER,
    "status" TEXT,
    "moota_transaction_id" TEXT,
    "usersId" TEXT,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "couriers" (
    "id" TEXT NOT NULL,
    "courier_code" TEXT,
    "courier_service_name" TEXT,
    "courier_service_code" TEXT,
    "price" INTEGER,
    "order_id" TEXT,
    "invoicesId" TEXT,

    CONSTRAINT "couriers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "confirmation_payment" (
    "id" TEXT NOT NULL,
    "amount" INTEGER,
    "bank" TEXT,
    "invoicesId" TEXT,

    CONSTRAINT "confirmation_payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_histories" (
    "id" TEXT NOT NULL,
    "status" TEXT,
    "created_at" TIMESTAMP(3),
    "invoicesId" TEXT,

    CONSTRAINT "invoice_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "slogan" TEXT,
    "description" TEXT,
    "domain" TEXT,
    "logo_attachment" TEXT,
    "banner_attachment" TEXT,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_account" (
    "id" TEXT NOT NULL,
    "bank" TEXT,
    "acc_number" INTEGER,
    "acc_name" TEXT,
    "storesId" TEXT,

    CONSTRAINT "bank_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_on_decoration" (
    "id" TEXT NOT NULL,
    "decorationId" TEXT,
    "storesId" TEXT,

    CONSTRAINT "store_on_decoration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decorations" (
    "id" TEXT NOT NULL,
    "type" TEXT,

    CONSTRAINT "decorations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operation_hours" (
    "id" TEXT NOT NULL,
    "day" TEXT,
    "open_at" TIMESTAMP(3),
    "close_at" TIMESTAMP(3),
    "is_off" BOOLEAN,
    "storesId" TEXT,

    CONSTRAINT "operation_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "content" TEXT,
    "storesId" TEXT,

    CONSTRAINT "message_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "postal_id" TEXT,
    "city_district" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "is_main_location" BOOLEAN,
    "storesId" TEXT,
    "profilesId" TEXT,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_id_key" ON "roles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_key" ON "profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_usersId_key" ON "profiles"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_id_key" ON "categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "variants_id_key" ON "variants"("id");

-- CreateIndex
CREATE UNIQUE INDEX "variant_options_id_key" ON "variant_options"("id");

-- CreateIndex
CREATE UNIQUE INDEX "variant_option_values_id_key" ON "variant_option_values"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carts_id_key" ON "carts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cart_items_id_key" ON "cart_items"("id");

-- CreateIndex
CREATE UNIQUE INDEX "invoices_id_key" ON "invoices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "invoices_paymentsId_key" ON "invoices"("paymentsId");

-- CreateIndex
CREATE UNIQUE INDEX "payments_id_key" ON "payments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "couriers_id_key" ON "couriers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "couriers_invoicesId_key" ON "couriers"("invoicesId");

-- CreateIndex
CREATE UNIQUE INDEX "confirmation_payment_id_key" ON "confirmation_payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_histories_id_key" ON "invoice_histories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_id_key" ON "stores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bank_account_id_key" ON "bank_account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "store_on_decoration_id_key" ON "store_on_decoration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "decorations_id_key" ON "decorations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "operation_hours_id_key" ON "operation_hours"("id");

-- CreateIndex
CREATE UNIQUE INDEX "message_templates_id_key" ON "message_templates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "locations_id_key" ON "locations"("id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variants" ADD CONSTRAINT "variants_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant_options" ADD CONSTRAINT "variant_options_variantsId_fkey" FOREIGN KEY ("variantsId") REFERENCES "variants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant_option_values" ADD CONSTRAINT "variant_option_values_variant_OptionsId_fkey" FOREIGN KEY ("variant_OptionsId") REFERENCES "variant_options"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_cartsId_fkey" FOREIGN KEY ("cartsId") REFERENCES "carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_variant_Option_ValuesId_fkey" FOREIGN KEY ("variant_Option_ValuesId") REFERENCES "variant_option_values"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_cartsId_fkey" FOREIGN KEY ("cartsId") REFERENCES "carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_paymentsId_fkey" FOREIGN KEY ("paymentsId") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "couriers" ADD CONSTRAINT "couriers_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "confirmation_payment" ADD CONSTRAINT "confirmation_payment_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_histories" ADD CONSTRAINT "invoice_histories_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_on_decoration" ADD CONSTRAINT "store_on_decoration_decorationId_fkey" FOREIGN KEY ("decorationId") REFERENCES "decorations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_on_decoration" ADD CONSTRAINT "store_on_decoration_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operation_hours" ADD CONSTRAINT "operation_hours_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_templates" ADD CONSTRAINT "message_templates_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_profilesId_fkey" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
