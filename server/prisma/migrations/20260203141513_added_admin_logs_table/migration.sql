-- CreateEnum
CREATE TYPE "AdminAction" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "AdminEntityType" AS ENUM ('EVENT', 'ORGANIZATION', 'USER');

-- CreateTable
CREATE TABLE "AdminLogs" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "action" "AdminAction" NOT NULL,
    "entityId" TEXT NOT NULL,
    "entityType" "AdminEntityType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdminLogs_adminId_idx" ON "AdminLogs"("adminId");

-- CreateIndex
CREATE INDEX "AdminLogs_createdAt_idx" ON "AdminLogs"("createdAt");

-- AddForeignKey
ALTER TABLE "AdminLogs" ADD CONSTRAINT "AdminLogs_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
