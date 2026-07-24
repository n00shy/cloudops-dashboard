import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Server,
  Activity
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        CloudOps
      </h1>

      <nav className="space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 transition-colors ${
              isActive ? "bg-slate-700" : "hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 transition-colors ${
              isActive ? "bg-slate-700" : "hover:bg-slate-800"
            }`
          }
        >
          <Users size={20} />
          Users
        </NavLink>

        <NavLink
          to="/infrastructure"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 transition-colors ${
              isActive ? "bg-slate-700" : "hover:bg-slate-800"
            }`
          }
        >
          <Server size={20} />
          Infrastructure
        </NavLink>

        <NavLink
          to="/monitoring"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 transition-colors ${
              isActive ? "bg-slate-700" : "hover:bg-slate-800"
            }`
          }
        >
          <Activity size={20} />
          Monitoring
        </NavLink>

      </nav>

    </aside>
  );
}
