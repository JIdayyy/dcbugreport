-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "widgetsId" TEXT;

-- CreateTable
CREATE TABLE "Keys" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "websiteId" TEXT NOT NULL,
    "api_key" TEXT NOT NULL,
    "secret_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Keys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Keys" ADD CONSTRAINT "Keys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Keys" ADD CONSTRAINT "Keys_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
