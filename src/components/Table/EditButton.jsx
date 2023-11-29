"use client"
import "./Table.css"
import { useRouter } from "next/navigation"

export default function EditButton({ patientId }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/edit/${patientId}`)
  }

  return (
    <button className="edit-btn" onClick={handleClick}>
      Editar
    </button>
  )
}
