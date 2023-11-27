-- CreateTable
CREATE TABLE "PatientInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dr_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "curp" TEXT NOT NULL,
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
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "first_visit" DATETIME NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PatientHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "weight" REAL NOT NULL,
    "height" REAL NOT NULL,
    "temperature" REAL NOT NULL,
    "blood_pressure" REAL NOT NULL,
    "heart_rate" REAL NOT NULL,
    "observations" TEXT
);
