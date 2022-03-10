/*
  Warnings:

  - The `priority` column on the `Bug` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "BugPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "Bug" DROP COLUMN "priority",
ADD COLUMN     "priority" "BugPriority" NOT NULL DEFAULT E'MEDIUM';
