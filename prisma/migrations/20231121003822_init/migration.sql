/*
  Warnings:

  - You are about to drop the column `curp` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `father_name` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `mother_name` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `PatientInfo` table. All the data in the column will be lost.
  - You are about to drop the column `schoolarity` on the `PatientInfo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PatientInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dr_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "procedence" TEXT NOT NULL,
    "emergency_contact_name" TEXT NOT NULL,
    "emergency_contact_phone" TEXT NOT NULL,
    "on_emergency_instructions" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "first_visit" DATETIME NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_PatientInfo" ("address", "birth_date", "blood_type", "create_date", "dr_name", "emergency_contact_name", "emergency_contact_phone", "first_visit", "gender", "id", "name", "on_emergency_instructions", "procedence") SELECT "address", "birth_date", "blood_type", "create_date", "dr_name", "emergency_contact_name", "emergency_contact_phone", "first_visit", "gender", "id", "name", "on_emergency_instructions", "procedence" FROM "PatientInfo";
DROP TABLE "PatientInfo";
ALTER TABLE "new_PatientInfo" RENAME TO "PatientInfo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
