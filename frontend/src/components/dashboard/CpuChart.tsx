"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface CpuData {
  time: string;
  cpu: number;
  memory: number;
}

export default function CpuChart() {

  const [data, setData] = useState<CpuData[]>([]);

  const fetchHistory = () => {
    fetch("http://localhost:8081/api/metrics/history")
      .then((res) => res.json())
      .then((json) => {

        const formattedData: CpuData[] = json.map((item: any) => ({
          time: new Date(item.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          cpu: item.cpu,
          memory: item.memory,
        }));

        setData(formattedData);
      })
      .catch((err) => console.error("Failed to fetch CPU history:", err));
  };

  useEffect(() => {

    fetchHistory();

    const interval = setInterval(fetchHistory, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>

        <XAxis dataKey="time" />

        <YAxis domain={[0, 100]} />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="cpu"
          stroke="#8b5cf6"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
        />

      </LineChart>
    </ResponsiveContainer>
  );
}
