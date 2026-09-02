import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (

    <div className="app-shell flex h-screen">

      <Sidebar />

      <div className="app-main flex flex-1 flex-col">

        <Header />

        <main className="app-content flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>

  );
}

export default DashboardLayout;