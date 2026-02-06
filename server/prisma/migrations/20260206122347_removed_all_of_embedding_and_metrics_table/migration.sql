/*
  Warnings:

  - You are about to drop the `AdminPrediction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventEmbedding` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventMetrics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEmbedding` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserInteraction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventEmbedding" DROP CONSTRAINT "EventEmbedding_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventMetrics" DROP CONSTRAINT "EventMetrics_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserEmbedding" DROP CONSTRAINT "UserEmbedding_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserInteraction" DROP CONSTRAINT "UserInteraction_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserInteraction" DROP CONSTRAINT "UserInteraction_userId_fkey";

-- DropTable
DROP TABLE "AdminPrediction";

-- DropTable
DROP TABLE "EventEmbedding";

-- DropTable
DROP TABLE "EventMetrics";

-- DropTable
DROP TABLE "UserEmbedding";

-- DropTable
DROP TABLE "UserInteraction";
