import { prisma } from "@/libs/prisma"
import TableHeader from "@/components/Table/TableHeader"
import TableBody from "@/components/Table/TableBody"

async function loadPatients() {
  return await prisma.PatientInfo.findMany()
}

export const dynamic = "force-dynamic"

export default async function HomePage({ searchParams }) {
  const allPatients = await loadPatients()
  return (
    <section className="home__section">
      <TableHeader />
      {allPatients.length !== 0 && (
        <TableBody
          allPatients={allPatients}
          filterWord={searchParams.filterWord}
        />
      )}
    </section>
  )
}
