import "./Table.css"

export default function TableBody({ allPatients, filterWord }) {
  const columns = Object.keys(allPatients[0])
  console.log(filterWord)

  return (
    <table>
      <thead>
        <tr>
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
              {columns.map((column, index) => (
                <td key={index}>{String(patient[column])}</td>
              ))}
            </tr>
          ) : null,
        )}
      </tbody>
    </table>
  )
}
