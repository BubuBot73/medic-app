/*
  Warnings:

  - You are about to drop the column `procedence` on the `PatientInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PatientInfo" DROP COLUMN "procedence",
ADD COLUMN     "consult_reason" TEXT,
ADD COLUMN     "current_ill" TEXT,
ADD COLUMN     "diagnostics" TEXT,
ADD COLUMN     "marcha" TEXT,
ADD COLUMN     "physical_ex" TEXT,
ADD COLUMN     "posture_val" TEXT,
ADD COLUMN     "record_pato" TEXT,
ALTER COLUMN "dr_name" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "birth_date" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "emergency_contact_name" DROP NOT NULL,
ALTER COLUMN "emergency_contact_phone" DROP NOT NULL,
ALTER COLUMN "on_emergency_instructions" DROP NOT NULL,
ALTER COLUMN "blood_type" DROP NOT NULL,
ALTER COLUMN "first_visit" DROP NOT NULL;
