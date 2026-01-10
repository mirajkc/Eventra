/*
  Warnings:

  - You are about to drop the column `cancelledAt` on the `EventParticipants` table. All the data in the column will be lost.
  - You are about to drop the column `isCancelled` on the `EventParticipants` table. All the data in the column will be lost.
  - You are about to drop the column `tokenExpiresAt` on the `EventParticipants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[checkInToken]` on the table `EventParticipants` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "registeredCount" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "EventParticipants" DROP COLUMN "cancelledAt",
DROP COLUMN "isCancelled",
DROP COLUMN "tokenExpiresAt";

-- CreateIndex
CREATE UNIQUE INDEX "EventParticipants_checkInToken_key" ON "EventParticipants"("checkInToken");
