import "./Table.css"
import EditButton from "./EditButton"

export default function TableBody({ allPatients, filterWord }) {
  const columns = Object.keys(allPatients[0])

  return (
    <table>
      <thead>
        <tr>
          <th className="edit-btn"></th>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allPatients.map((patient) =>
          !filterWord ||
          patient.name.toLowerCase().includes(filterWord.toLowerCase()) ? (
            <tr key={patient.id}>
              <>
                <td>
                  <EditButton patientId={patient.id} />
                </td>
                {columns.map((column, index) => (
                  <td key={index}>{String(patient[column])}</td>
                ))}
              </>
            </tr>
          ) : null,
        )}
      </tbody>
    </table>
  )
}
