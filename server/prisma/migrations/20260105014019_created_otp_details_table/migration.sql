-- CreateEnum
CREATE TYPE "OtpPurpose" AS ENUM ('FORGOT_PASSWORD', 'RESET_PASSWORD');

-- CreateTable
CREATE TABLE "Otpdetails" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "otpHash" TEXT NOT NULL,
    "purpose" "OtpPurpose" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Otpdetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Otpdetails_userId_idx" ON "Otpdetails"("userId");

-- AddForeignKey
ALTER TABLE "Otpdetails" ADD CONSTRAINT "Otpdetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
