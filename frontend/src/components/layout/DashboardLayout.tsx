import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({children}: Props) {

return (
<div className="flex min-h-screen">

    <Sidebar />

    <div className="flex-1">

        <Navbar />

        <main className="p-6 bg-slate-100 min-h-screen">
            {children}
        </main>

    </div>

</div>
)

}
