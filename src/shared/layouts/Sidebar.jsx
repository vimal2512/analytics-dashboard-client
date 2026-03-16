import { NavLink } from "react-router-dom";

function Sidebar() {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition
    ${
      isActive
        ? "bg-gray-800 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <div className="w-64 bg-gray-950 text-white h-screen flex flex-col">

      {/* Logo */}

      <div className="px-6 py-5 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">
          Analytics SaaS
        </h1>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6 space-y-2">

        <NavLink to="/dashboard" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/websites" className={linkClass}>
          🌐 Websites
        </NavLink>

        <NavLink to="/analytics" className={linkClass}>
          📈 Analytics
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          ⚙️ Settings
        </NavLink>

      </nav>

      {/* Footer */}

      <div className="px-6 py-4 border-t border-gray-800 text-sm text-gray-400">
        v1.0 Analytics
      </div>

    </div>
  );
}

export default Sidebar;