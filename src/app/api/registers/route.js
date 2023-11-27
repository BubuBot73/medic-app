import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET() {
  const patientsData = await prisma.PatientInfo.findMany()
  return NextResponse.json(patientsData)
}

export async function POST(request) {
  const data = await request.json()
  const newPatient = await prisma.PatientInfo.create({
    data: {
      ...data,
    },
  })
  return NextResponse.json(newPatient)
}
