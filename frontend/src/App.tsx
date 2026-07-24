import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";
import SystemStatus from "./components/dashboard/SystemStatus";
import Users from "./pages/Users";


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


function InfrastructurePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Infrastructure
      </h1>

      <div className="bg-white rounded-xl border p-6">
        Infrastructure page
      </div>
    </>
  );
}


function MonitoringPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Monitoring
      </h1>

      <div className="bg-white rounded-xl border p-6">
        Monitoring page
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
          element={<InfrastructurePage />}
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
