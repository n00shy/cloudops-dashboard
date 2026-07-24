import { Card } from "@/components/ui/card";

interface Props {
  title: string;
  value: string;
  status?: string;
}

export default function ResourceCard({
  title,
  value,
  status
}: Props) {

return (
<Card className="p-6">

<h3 className="text-sm text-gray-500">
{title}
</h3>

<p className="text-3xl font-bold mt-2">
{value}
</p>

{status && (
<p className="text-sm mt-2 text-green-600">
{status}
</p>
)}

</Card>
)

}
