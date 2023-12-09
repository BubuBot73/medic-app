/*
  Warnings:

  - You are about to drop the column `current_ill` on the `PatientInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PatientInfo" DROP COLUMN "current_ill",
ADD COLUMN     "current_illness" TEXT;
