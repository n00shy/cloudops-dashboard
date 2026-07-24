import MetricCard from "../components/MetricCard";


export default function Dashboard(){

 return (

  <div className="space-y-6">


    <div>
      <h1 className="text-3xl font-bold">
        CloudOps Dashboard
      </h1>

      <p className="text-muted-foreground">
        Infrastructure overview
      </p>
    </div>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


      <MetricCard
        title="CPU Usage"
        value="45%"
        description="Current utilization"
      />


      <MetricCard
        title="Memory"
        value="62%"
        description="RAM usage"
      />


      <MetricCard
        title="Containers"
        value="12"
        description="Running containers"
      />


      <MetricCard
        title="Deployments"
        value="5"
        description="Active deployments"
      />


    </div>


  </div>

 )

}
