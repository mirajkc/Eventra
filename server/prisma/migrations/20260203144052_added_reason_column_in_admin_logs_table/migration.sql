/*
  Warnings:

  - Added the required column `reason` to the `AdminLogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdminLogs" ADD COLUMN     "reason" TEXT NOT NULL;
