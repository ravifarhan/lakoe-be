/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "height" INTEGER,
ADD COLUMN     "long" INTEGER,
ADD COLUMN     "price" INTEGER,
ADD COLUMN     "sku" TEXT,
ADD COLUMN     "stock" INTEGER,
ADD COLUMN     "url" TEXT,
ADD COLUMN     "weight" INTEGER,
ADD COLUMN     "wide" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "products_url_key" ON "products"("url");
