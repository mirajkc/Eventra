/*
  Warnings:

  - A unique constraint covering the columns `[checkInToken]` on the table `EventParticipants` will be added. If there are existing duplicate values, this will fail.
  - Made the column `checkInToken` on table `EventParticipants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "EventParticipants" ALTER COLUMN "checkInToken" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EventParticipants_checkInToken_key" ON "EventParticipants"("checkInToken");
