import ResourceCard from "../components/dashboard/ResourceCard";

export default function Infrastructure() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Infrastructure
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <ResourceCard
          title="Backend API"
          value="Running"
          status="Healthy"
        />

        <ResourceCard
          title="PostgreSQL"
          value="Connected"
          status="Healthy"
        />

        <ResourceCard
          title="Docker Engine"
          value="Active"
          status="Running"
        />

        <ResourceCard
          title="Containers"
          value="2"
          status="Running"
        />

      </div>

      <div className="bg-white rounded-xl border p-6">

        <h2 className="text-xl font-semibold mb-4">
          Infrastructure Summary
        </h2>

        <div className="space-y-3 text-gray-700">

          <div className="flex justify-between border-b pb-2">
            <span>Backend Service</span>
            <span className="text-green-600 font-medium">Running</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Database</span>
            <span className="text-green-600 font-medium">Connected</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Docker</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>

          <div className="flex justify-between">
            <span>Application Status</span>
            <span className="text-green-600 font-medium">Healthy</span>
          </div>

        </div>

      </div>

    </div>
  );
}
