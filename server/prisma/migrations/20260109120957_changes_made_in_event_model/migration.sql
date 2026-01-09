/*
  Warnings:

  - You are about to drop the column `type` on the `Event` table. All the data in the column will be lost.
  - The `category` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
ALTER TYPE "EventType" ADD VALUE 'OTHERS';

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "type",
ADD COLUMN     "registeredCount" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "category",
ADD COLUMN     "category" "EventType" NOT NULL DEFAULT 'OTHERS',
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EventParticipants" ADD COLUMN     "cancelledAt" TIMESTAMP(3),
ADD COLUMN     "checkInToken" TEXT,
ADD COLUMN     "checkedInAt" TIMESTAMP(3),
ADD COLUMN     "isCancelled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tokenExpiresAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Event_category_idx" ON "Event"("category");

-- CreateIndex
CREATE INDEX "EventParticipants_attended_idx" ON "EventParticipants"("attended");
