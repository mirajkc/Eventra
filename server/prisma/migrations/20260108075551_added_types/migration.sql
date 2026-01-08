/*
  Warnings:

  - Added the required column `type` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrganizationType" AS ENUM ('INDIVIDUAL', 'COMPANY', 'EDUCATIONAL', 'COMMUNITY', 'NON_PROFIT', 'GOVERNMENT');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('WORKSHOP', 'MEETUP', 'CONFERENCE', 'WEBINAR', 'HACKATHON', 'COMPETITION');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "type" "EventType" NOT NULL;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "type" "OrganizationType" NOT NULL DEFAULT 'INDIVIDUAL';
