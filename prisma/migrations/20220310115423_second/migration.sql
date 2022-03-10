/*
  Warnings:

  - Added the required column `isPreview` to the `Website` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Website` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bug" ADD COLUMN     "categoryId" TEXT;

-- AlterTable
ALTER TABLE "Website" ADD COLUMN     "isPreview" BOOLEAN NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_disabled" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
