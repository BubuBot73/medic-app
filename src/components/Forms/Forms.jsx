"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Forms({ writeMode, patientId }) {
  const router = useRouter()
  const [patient, setPatient] = useState({})
  const mode = writeMode || "new"

  useEffect(() => {
    if (mode === "new") return
    fetch(`/api/registers/${patientId}`)
      .then((res) => res.json())
      .then((data) => {
        setPatient(data)
      })
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    const dataSent = {
      dr_name: e.target.dr_name.value,
      name: e.target.name.value,
      gender: e.target.gender.value,
      birth_date: e.target.birth_date.value + "T00:00:00.000Z",
      procedence: e.target.procedence.value,
      address: e.target.address.value,
      blood_type: e.target.blood_type.value,
      emergency_contact_name: e.target.emergency_contact_name.value,
      emergency_contact_phone: e.target.emergency_contact_phone.value,
      on_emergency_instructions: e.target.on_emergency_instructions.value,
      first_visit: "2023-11-20T00:00:00.000Z",
    }

    if (mode === "new") {
      const res = await fetch("/api/registers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSent),
      })
    } else if (mode === "edit") {
      const res = await fetch("/api/registers/" + patient.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSent),
      })
    }

    router.refresh()
    router.push("/")
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col border border-slate-50 rounded-md shadow-md p-8 bg-slate-900 relative"
      >
        <button
          className="bg-slate-500 border-white rounded absolute p-1"
          onChange={() => {
            router.refresh()
            router.push("/")
          }}
        >
          Inicio
        </button>
        {mode === "edit" && (
          <button
            className="bg-slate-500 border-white rounded absolute p-1 right-3"
            onClick={() => {
              if (mode === "new") return
              fetch("/api/registers/" + patient.id, {
                method: "DELETE",
              })
              router.refresh()
              router.push("/")
            }}
          >
            Borrar
          </button>
        )}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="register_id"
              className="block text-sm font-medium leading-6 text-white"
            >
              Número de registro
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="register_id"
                id="register_id"
                className="block w-1/2 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                disabled
                value={patient ? patient.id : null}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="dr_name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Atiende Dr.
            </label>
            <div className="mt-2">
              <select
                id="dr_name"
                name="dr_name"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={patient ? patient.dr_name : null}
                onChange={(e) =>
                  setPatient({ ...patient, dr_name: e.target.value })
                }
              >
                <option>Rodolfo Gomez Perez</option>
                <option>Gabriela Gonzalez</option>
                <option>Juan Perez</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Nombre del paciente
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.name : null}
                onChange={(e) =>
                  setPatient({ ...patient, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="gender"
              className="block text-sm font-medium leading-6 text-white"
            >
              Sexo
            </label>
            <div className="mt-2">
              <select
                id="gender"
                name="gender"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={patient ? patient.gender : null}
                onChange={(e) =>
                  setPatient({ ...patient, gender: e.target.value })
                }
              >
                <option>Femenino</option>
                <option>Masculino</option>
                <option>Otro</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="birth_date"
              className="block text-sm font-medium leading-6 text-white"
            >
              Fecha de nacimiento
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="birth_date"
                id="birth_date"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.birth_date?.split("T")[0] : null}
                onChange={(e) =>
                  setPatient({ ...patient, birth_date: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="procedence"
              className="block text-sm font-medium leading-6 text-white"
            >
              Ciuad y estado
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="procedence"
                id="procedence"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.procedence : null}
                onChange={(e) =>
                  setPatient({ ...patient, procedence: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-white"
            >
              Dirección
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                id="address"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.address : null}
                onChange={(e) =>
                  setPatient({ ...patient, address: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="blood_type"
              className="block text-sm font-medium leading-6 text-white"
            >
              Tipo de sangre
            </label>
            <div className="mt-2">
              <select
                type="text"
                name="blood_type"
                id="blood_type"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.blood_type : null}
                onChange={(e) =>
                  setPatient({ ...patient, blood_type: e.target.value })
                }
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="emergency_contact_name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Contacto de emergencia
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="emergency_contact_name"
                id="emergency_contact_name"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.emergency_contact_name : null}
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    emergency_contact_name: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="emergency_contact_phone"
              className="block text-sm font-medium leading-6 text-white"
            >
              Teléfono
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="emergency_contact_phone"
                id="emergency_contact_phone"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.emergency_contact_phone : null}
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    emergency_contact_phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="on_emergency_instructions"
              className="block text-sm font-medium leading-6 text-white"
            >
              Instrucciones en caso de emergencia
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="on_emergency_instructions"
                id="on_emergency_instructions"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={patient ? patient.on_emergency_instructions : null}
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    on_emergency_instructions: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          {mode === "new" ? "Registrar paciente" : "Actualizar datos"}
        </button>
      </form>
    </div>
  )
}
