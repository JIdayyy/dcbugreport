/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Bug` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bug_number_key" ON "Bug"("number");
