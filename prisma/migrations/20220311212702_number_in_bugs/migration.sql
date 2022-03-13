/*
  Warnings:

  - Made the column `websiteId` on table `Bug` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Bug" DROP CONSTRAINT "Bug_websiteId_fkey";

-- AlterTable
ALTER TABLE "Bug" ADD COLUMN     "number" SERIAL NOT NULL,
ALTER COLUMN "websiteId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
