/*
  Warnings:

  - A unique constraint covering the columns `[otp]` on the table `Otpdetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Otpdetails_otp_key" ON "Otpdetails"("otp");
