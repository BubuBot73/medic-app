import Forms from "@/components/Forms/Forms"

export default function EditForm({ params }) {
  return <Forms writeMode="edit" patientId={params.id} />
}
