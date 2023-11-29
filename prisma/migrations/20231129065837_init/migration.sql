-- CreateTable
CREATE TABLE "PatientInfo" (
    "id" SERIAL NOT NULL,
    "dr_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "procedence" TEXT NOT NULL,
    "emergency_contact_name" TEXT NOT NULL,
    "emergency_contact_phone" TEXT NOT NULL,
    "on_emergency_instructions" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "first_visit" TIMESTAMP(3) NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PatientInfo_pkey" PRIMARY KEY ("id")
);
