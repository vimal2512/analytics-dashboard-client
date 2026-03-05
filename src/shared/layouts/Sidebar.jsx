import { NavLink } from "react-router-dom";

function Sidebar() {
    const linkClass = "block px-4 py-2 rounded hover:bg-gray-700 transition"
    return(
        <div className="w-64 bg-gray-900 text-white h-screen p-4">
           <h1 className="text-xl font-bold mb-6">Analytics SaaS</h1>

           <nav className="space-y-2">
            <NavLink className={linkClass} to="/dashboard">
                Dashboard
            </NavLink>

            <NavLink className={linkClass} to="/websites">
                Websites
            </NavLink>

            <NavLink className={linkClass} to="analytics">
                Analytics
            </NavLink>

            <NavLink className={linkClass} to="settings">
                Settings
            </NavLink>
           </nav>
        </div>
    )
}

export default Sidebar;