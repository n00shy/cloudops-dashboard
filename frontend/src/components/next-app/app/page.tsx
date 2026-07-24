import MetricsCard from "@/components/dashboard/MetricsCard";
import CpuChart from "@/components/dashboard/CpuChart";
import MemoryChart from "@/components/dashboard/MemoryChart";
import PodStatus from "@/components/dashboard/PodStatus";

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <MetricsCard title="CPU Usage Over Time">
        <CpuChart />
      </MetricsCard>

      <MetricsCard title="Memory Usage Over Time">
        <MemoryChart />
      </MetricsCard>

      <MetricsCard title="Pod Status">
        <PodStatus />
      </MetricsCard>

    </div>
  );
}
