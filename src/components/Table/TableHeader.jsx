"use client"
import "./Table.css"
import { useRouter } from "next/navigation"

export default function TableHeader() {
  const router = useRouter()
  const HandleSubmit = (e) => {
    e.preventDefault()
    let filterWord = e.target.filter.value
    if (filterWord === "") {
      return
    }

    router.push("?filterWord=" + filterWord)
  }

  return (
    <div className="TableHeader">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Busqueda por nombre"
          id="filter"
          name="filter"
          className="searchBar"
        />
        <button type="submit" className="filterTable">
          Buscar
        </button>
        <button
          type="button"
          className="clearFilter"
          onClick={() => router.push("/")}
        >
          Ver todos
        </button>
      </form>
    </div>
  )
}
