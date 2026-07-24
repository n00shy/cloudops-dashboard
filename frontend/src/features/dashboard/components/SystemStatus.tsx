import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const services = [
  {
    name: "Spring Boot API",
    status: "Running"
  },
  {
    name: "PostgreSQL",
    status: "Healthy"
  },
  {
    name: "Frontend",
    status: "Running"
  },
  {
    name: "Kubernetes",
    status: "Pending"
  }
];


export default function SystemStatus(){

 return (

  <Card>

    <CardHeader>
      <CardTitle>
        System Status
      </CardTitle>
    </CardHeader>


    <CardContent className="space-y-4">

      {
        services.map((service)=>(
          
          <div
            key={service.name}
            className="flex justify-between items-center"
          >

            <span>
              {service.name}
            </span>


            <Badge>
              {service.status}
            </Badge>


          </div>

        ))
      }


    </CardContent>


  </Card>

 )

}
