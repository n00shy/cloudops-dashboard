import { Card } from "@/components/ui/card";


export default function Dashboard(){

 return (

  <div className="grid grid-cols-4 gap-6">


    <Card className="p-6">

      <p className="text-sm text-gray-500">
        CPU Usage
      </p>

      <h2 className="text-3xl font-bold">
        45%
      </h2>

    </Card>



    <Card className="p-6">

      <p className="text-sm text-gray-500">
        Memory
      </p>

      <h2 className="text-3xl font-bold">
        62%
      </h2>

    </Card>



    <Card className="p-6">

      <p className="text-sm text-gray-500">
        Containers
      </p>

      <h2 className="text-3xl font-bold">
        12
      </h2>

    </Card>



    <Card className="p-6">

      <p className="text-sm text-gray-500">
        Deployments
      </p>

      <h2 className="text-3xl font-bold">
        5
      </h2>

    </Card>


  </div>

 )

}
