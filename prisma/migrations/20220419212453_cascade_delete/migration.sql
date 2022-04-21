-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'WIDGET';

-- DropForeignKey
ALTER TABLE "Bug" DROP CONSTRAINT "Bug_websiteId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_bugId_fkey";

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_bugId_fkey" FOREIGN KEY ("bugId") REFERENCES "Bug"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bug" ADD CONSTRAINT "Bug_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE CASCADE ON UPDATE CASCADE;
