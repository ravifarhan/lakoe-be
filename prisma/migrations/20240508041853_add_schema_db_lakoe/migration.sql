-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT,
    "rolesId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profiles" (
    "id" TEXT NOT NULL,
    "locations" TEXT,
    "usersId" TEXT,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "attachments" TEXT,
    "is_active" BOOLEAN,
    "variants" TEXT,
    "size" INTEGER,
    "minimum_order" INTEGER,
    "storesId" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "productsId" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variants" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "is_active" BOOLEAN,
    "productsId" TEXT,

    CONSTRAINT "Variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variant_Options" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "variantsId" TEXT,

    CONSTRAINT "Variant_Options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variant_Option_Values" (
    "id" TEXT NOT NULL,
    "sku" TEXT,
    "weight" INTEGER,
    "stock" INTEGER,
    "price" INTEGER,
    "is_active" BOOLEAN,
    "variant_OptionsId" TEXT,

    CONSTRAINT "Variant_Option_Values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carts" (
    "id" TEXT NOT NULL,
    "price" INTEGER,
    "discount" INTEGER,
    "usersId" TEXT,
    "storesId" TEXT,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart_Items" (
    "id" TEXT NOT NULL,
    "qty" INTEGER,
    "price" INTEGER,
    "cartsId" TEXT,
    "usersId" TEXT,
    "storesId" TEXT,
    "variant_Option_ValuesId" TEXT,

    CONSTRAINT "Cart_Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoices" (
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

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" TEXT NOT NULL,
    "bank" TEXT,
    "amount" INTEGER,
    "status" TEXT,
    "moota_transaction_id" TEXT,
    "usersId" TEXT,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Couriers" (
    "id" TEXT NOT NULL,
    "courier_code" TEXT,
    "courier_service_name" TEXT,
    "courier_service_code" TEXT,
    "price" INTEGER,
    "order_id" TEXT,
    "invoicesId" TEXT,

    CONSTRAINT "Couriers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Confirmation_Payment" (
    "id" TEXT NOT NULL,
    "amount" INTEGER,
    "bank" TEXT,
    "invoicesId" TEXT,

    CONSTRAINT "Confirmation_Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice_Histories" (
    "id" TEXT NOT NULL,
    "status" TEXT,
    "created_at" TIMESTAMP(3),
    "invoicesId" TEXT,

    CONSTRAINT "Invoice_Histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stores" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "slogan" TEXT,
    "description" TEXT,
    "domain" TEXT,
    "logo_attachment" TEXT,
    "banner_attachment" TEXT,

    CONSTRAINT "Stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank_Account" (
    "id" TEXT NOT NULL,
    "bank" TEXT,
    "acc_number" INTEGER,
    "acc_name" TEXT,
    "storesId" TEXT,

    CONSTRAINT "Bank_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store_on_Decoration" (
    "id" TEXT NOT NULL,
    "decorationId" TEXT,
    "storesId" TEXT,

    CONSTRAINT "Store_on_Decoration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Decoration" (
    "id" TEXT NOT NULL,
    "type" TEXT,

    CONSTRAINT "Decoration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operation_Hours" (
    "id" TEXT NOT NULL,
    "day" TEXT,
    "open_at" TIMESTAMP(3),
    "close_at" TIMESTAMP(3),
    "is_off" BOOLEAN,
    "storesId" TEXT,

    CONSTRAINT "Operation_Hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message_Templates" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "content" TEXT,
    "storesId" TEXT,

    CONSTRAINT "Message_Templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locations" (
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

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_id_key" ON "Roles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_id_key" ON "Profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_usersId_key" ON "Profiles"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Categories_id_key" ON "Categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Variants_id_key" ON "Variants"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_Options_id_key" ON "Variant_Options"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_Option_Values_id_key" ON "Variant_Option_Values"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Carts_id_key" ON "Carts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_Items_id_key" ON "Cart_Items"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_id_key" ON "Invoices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_paymentsId_key" ON "Invoices"("paymentsId");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_id_key" ON "Payments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Couriers_id_key" ON "Couriers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Couriers_invoicesId_key" ON "Couriers"("invoicesId");

-- CreateIndex
CREATE UNIQUE INDEX "Confirmation_Payment_id_key" ON "Confirmation_Payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_Histories_id_key" ON "Invoice_Histories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stores_id_key" ON "Stores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_Account_id_key" ON "Bank_Account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Store_on_Decoration_id_key" ON "Store_on_Decoration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Decoration_id_key" ON "Decoration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Operation_Hours_id_key" ON "Operation_Hours"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Message_Templates_id_key" ON "Message_Templates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Locations_id_key" ON "Locations"("id");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variants" ADD CONSTRAINT "Variants_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant_Options" ADD CONSTRAINT "Variant_Options_variantsId_fkey" FOREIGN KEY ("variantsId") REFERENCES "Variants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant_Option_Values" ADD CONSTRAINT "Variant_Option_Values_variant_OptionsId_fkey" FOREIGN KEY ("variant_OptionsId") REFERENCES "Variant_Options"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carts" ADD CONSTRAINT "Carts_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carts" ADD CONSTRAINT "Carts_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Items" ADD CONSTRAINT "Cart_Items_cartsId_fkey" FOREIGN KEY ("cartsId") REFERENCES "Carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Items" ADD CONSTRAINT "Cart_Items_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Items" ADD CONSTRAINT "Cart_Items_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Items" ADD CONSTRAINT "Cart_Items_variant_Option_ValuesId_fkey" FOREIGN KEY ("variant_Option_ValuesId") REFERENCES "Variant_Option_Values"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_cartsId_fkey" FOREIGN KEY ("cartsId") REFERENCES "Carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_paymentsId_fkey" FOREIGN KEY ("paymentsId") REFERENCES "Payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Couriers" ADD CONSTRAINT "Couriers_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "Invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Confirmation_Payment" ADD CONSTRAINT "Confirmation_Payment_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "Invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice_Histories" ADD CONSTRAINT "Invoice_Histories_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "Invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account" ADD CONSTRAINT "Bank_Account_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store_on_Decoration" ADD CONSTRAINT "Store_on_Decoration_decorationId_fkey" FOREIGN KEY ("decorationId") REFERENCES "Decoration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store_on_Decoration" ADD CONSTRAINT "Store_on_Decoration_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation_Hours" ADD CONSTRAINT "Operation_Hours_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message_Templates" ADD CONSTRAINT "Message_Templates_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_profilesId_fkey" FOREIGN KEY ("profilesId") REFERENCES "Profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
