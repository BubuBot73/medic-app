/*
  Warnings:

  - You are about to drop the `PatientHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PatientHistory";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PatientInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dr_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "curp" TEXT,
    "schoolarity" TEXT,
    "occupation" TEXT,
    "address" TEXT NOT NULL,
    "procedence" TEXT NOT NULL,
    "father_name" TEXT,
    "mother_name" TEXT,
    "emergency_contact_name" TEXT NOT NULL,
    "emergency_contact_phone" TEXT NOT NULL,
    "on_emergency_instructions" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "first_visit" DATETIME NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_PatientInfo" ("address", "birth_date", "blood_type", "create_date", "curp", "dr_name", "email", "emergency_contact_name", "emergency_contact_phone", "father_name", "first_visit", "gender", "id", "mother_name", "name", "occupation", "on_emergency_instructions", "phone", "procedence", "schoolarity") SELECT "address", "birth_date", "blood_type", "create_date", "curp", "dr_name", "email", "emergency_contact_name", "emergency_contact_phone", "father_name", "first_visit", "gender", "id", "mother_name", "name", "occupation", "on_emergency_instructions", "phone", "procedence", "schoolarity" FROM "PatientInfo";
DROP TABLE "PatientInfo";
ALTER TABLE "new_PatientInfo" RENAME TO "PatientInfo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
