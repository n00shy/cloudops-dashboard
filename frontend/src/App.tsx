import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";
import SystemStatus from "./components/dashboard/SystemStatus";
import CpuChart from "./components/dashboard/CpuChart";
import MemoryChart from "./components/dashboard/MemoryChart";
import PodStatus from "./components/dashboard/PodStatus";

import Users from "./pages/Users";
import Infrastructure from "./pages/Infrastructure";

function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <SystemStatus />
    </>
  );
}

function MonitoringPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Monitoring
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            CPU Usage
          </h2>

          <CpuChart />
        </div>

        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Memory Usage
          </h2>

          <MemoryChart />
        </div>

        <div className="bg-white rounded-xl border p-5 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Kubernetes Pods
          </h2>

          <PodStatus />
        </div>

      </div>
    </>
  );
}

function App() {
  return (
    <DashboardLayout>
      <Routes>

        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/infrastructure"
          element={<Infrastructure />}
        />

        <Route
          path="/monitoring"
          element={<MonitoringPage />}
        />

      </Routes>
    </DashboardLayout>
  );
}

export default App;
