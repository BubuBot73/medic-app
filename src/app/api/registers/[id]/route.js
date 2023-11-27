import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET(_requests, { params }) {
  const currentPatient = await prisma.patientInfo.findUnique({
    where: {
      id: Number(params.id),
    },
  })
  return NextResponse.json(currentPatient)
}

export async function PUT(request, { params }) {
  const data = await request.json()

  const patientUpdated = await prisma.patientInfo.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  })

  return NextResponse.json(patientUpdated)
}

export async function DELETE(_requests, { params }) {
  try {
    const deletedPatient = await prisma.patientInfo.delete({
      where: {
        id: Number(params.id),
      },
    })
    return NextResponse.json(deletedPatient)
  } catch (error) {
    return NextResponse.json(error.message)
  }
}
