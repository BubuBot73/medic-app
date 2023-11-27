import { prisma } from "@/libs/prisma"
import TableHeader from "@/components/Table/TableHeader"
import TableBody from "@/components/Table/TableBody"

async function loadPatients() {
  const data = await prisma.PatientInfo.findMany()
  console.log(data)
}

export default function HomePage() {
  loadPatients()
  return (
    <section className="home__section">
      <TableHeader />
      <TableBody />
    </section>
  )
}
