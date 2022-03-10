/*
  Warnings:

  - Changed the type of `status` on the `Bug` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `severity` on the `Bug` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BugStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'CLOSED');

-- CreateEnum
CREATE TYPE "BugSeverity" AS ENUM ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW');

-- AlterTable
ALTER TABLE "Bug" DROP COLUMN "status",
ADD COLUMN     "status" "BugStatus" NOT NULL,
DROP COLUMN "severity",
ADD COLUMN     "severity" "BugSeverity" NOT NULL;
