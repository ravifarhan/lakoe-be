/*
  Warnings:

  - You are about to drop the column `postal_id` on the `locations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "locations" DROP COLUMN "postal_id",
ADD COLUMN     "postal_code" TEXT;
