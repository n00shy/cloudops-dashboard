import { Card, CardContent } from "@/components/ui/card";


interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
}


export default function MetricCard({
  title,
  value,
  description
}: MetricCardProps) {

  return (
    <Card>

      <CardContent className="p-6">

        <p className="text-sm text-muted-foreground">
          {title}
        </p>


        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>


        {description && (
          <p className="text-xs mt-2 text-muted-foreground">
            {description}
          </p>
        )}

      </CardContent>

    </Card>
  )
}
