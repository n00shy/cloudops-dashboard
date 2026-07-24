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
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to fetch CPU history:", err));
  };

  useEffect(() => {

    // أول تحميل
    fetchHistory();

    // تحديث كل 5 ثوانٍ
    const interval = setInterval(fetchHistory, 5000);

    // تنظيف الـ Interval
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
