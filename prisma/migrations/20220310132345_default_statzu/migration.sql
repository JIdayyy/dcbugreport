-- AlterTable
ALTER TABLE "Bug" ALTER COLUMN "status" SET DEFAULT E'OPEN';

-- DropEnum
DROP TYPE "Status_Notification";
