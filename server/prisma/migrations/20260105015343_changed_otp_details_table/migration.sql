/*
  Warnings:

  - You are about to drop the column `otpHash` on the `Otpdetails` table. All the data in the column will be lost.
  - Added the required column `otp` to the `Otpdetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Otpdetails" DROP COLUMN "otpHash",
ADD COLUMN     "otp" TEXT NOT NULL;
