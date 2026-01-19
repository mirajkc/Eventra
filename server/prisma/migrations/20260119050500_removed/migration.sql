/*
  Warnings:

  - You are about to drop the column `slug` on the `Event` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Event_slug_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "slug";
