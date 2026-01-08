/*
  Warnings:

  - You are about to drop the column `link` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `entityType` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('EVENT_CREATED', 'EVENT_UPDATED', 'EVENT_REMINDER', 'EVENT_CANCELLED', 'ORG_APPROVED', 'PAYMENT_SUCCESS');

-- CreateEnum
CREATE TYPE "NotificationEntity" AS ENUM ('EVENT', 'ORGANIZATION', 'USER', 'PAYMENT');

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "link",
ADD COLUMN     "entityId" TEXT,
ADD COLUMN     "entityType" "NotificationEntity" NOT NULL,
ADD COLUMN     "type" "NotificationType" NOT NULL;
