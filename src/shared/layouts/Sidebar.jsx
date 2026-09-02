import { NavLink } from "react-router-dom";

function Sidebar() {

  const linkClass = ({ isActive }) =>
    `sidebar-link flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
    ${
      isActive
        ? "sidebar-link-active"
        : ""
    }`;

  return (
    <div className="sidebar-shell flex h-screen flex-col">

      {/* Logo */}

      <div className="border-b border-white/10 px-5 py-6">
        <h1 className="brand-mark text-xl font-bold text-white">
          <span className="brand-dot" />Pulseboard
        </h1>
        <p className="sidebar-copy mt-1 pl-5 text-xs text-slate-400">Product intelligence</p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-3 py-7">
        <p className="sidebar-nav-label px-3 pb-2">Workspace</p>

        <NavLink to="/dashboard" className={linkClass}>
          <span className="sidebar-icon">◈</span><span className="sidebar-copy">Dashboard</span>
        </NavLink>

        <NavLink to="/websites" className={linkClass}>
          <span className="sidebar-icon">⌁</span><span className="sidebar-copy">Websites</span>
        </NavLink>

        <NavLink to="/analytics" className={linkClass}>
          <span className="sidebar-icon">↗</span><span className="sidebar-copy">Analytics</span>
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <span className="sidebar-icon">⊙</span><span className="sidebar-copy">Settings</span>
        </NavLink>

      </nav>

      {/* Footer */}

      <div className="sidebar-footer border-t border-white/10 px-5 py-4 text-xs">
        <span className="sidebar-copy">Pulseboard workspace</span><span className="float-right">v1.0</span>
      </div>

    </div>
  );
}

export default Sidebar;