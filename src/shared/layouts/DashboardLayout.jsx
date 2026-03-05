import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return(
        <div className="flex h-screen">

            <Sidebar/>

            <div className="flex-1 flex flex-col">
                <Header/>

                <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
                    <Outlet/>
                </main>
            </div>
            
        </div>
    )
}

export default DashboardLayout;