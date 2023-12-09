/*
  Warnings:

  - You are about to drop the column `physical_ex` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `posture_val` on the `PatientInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PatientInfo" DROP COLUMN "physical_ex",
DROP COLUMN "posture_val",
ADD COLUMN     "physical_exam" TEXT,
ADD COLUMN     "posture_valoration" TEXT;
