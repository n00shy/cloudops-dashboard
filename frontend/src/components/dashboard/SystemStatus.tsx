"use client";

import { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import CpuChart from "./CpuChart";
import MemoryChart from "./MemoryChart";
import PodStatus from "./PodStatus";

interface Metrics {
  cpu: string;
  memory: string;
  pods: number;
}

export default function SystemStatus() {

  const [metrics, setMetrics] = useState<Metrics>({
    cpu: "0%",
    memory: "0%",
    pods: 0,
  });

  const fetchMetrics = () => {
    fetch("http://localhost:8081/api/metrics")
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data);
      })
      .catch((err) => {
        console.error("Failed to fetch metrics:", err);
      });
  };

  useEffect(() => {

    // أول تحميل
    fetchMetrics();

    // تحديث كل 5 ثوانٍ
    const interval = setInterval(fetchMetrics, 5000);

    // تنظيف الـ interval عند إغلاق الصفحة
    return () => clearInterval(interval);

  }, []);

  return (

    <div>

      <div className="grid grid-cols-3 gap-6">

        <ResourceCard
          title="CPU Usage"
          value={metrics.cpu}
          status="Healthy"
        />

        <ResourceCard
          title="Memory Usage"
          value={metrics.memory}
          status="Normal"
        />

        <ResourceCard
          title="Kubernetes Pods"
          value={metrics.pods.toString()}
          status="Running"
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        <CpuChart />

        <MemoryChart />

        <PodStatus />

      </div>

    </div>

  );
}
