import apiClient from "../../infrastructure/api/apiClient";
import { clearAccessToken } from "../../features/auth/store/authStore";

function Header() {

  const handleLogout = async () => {
    try {
      await apiClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout request failed", error);
    } finally {
      clearAccessToken();
      window.location.href = "/login";
    }
  };

  return (

    <div className="topbar-shell flex items-center justify-between px-8">

      {/* Page Title */}

      <div>
        <p className="topbar-kicker">Workspace overview</p>
        <h2 className="topbar-title text-lg font-semibold">Dashboard</h2>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">
        <span className="user-avatar">WU</span>

        <span className="hidden text-sm text-slate-600 sm:block">
          Welcome, User
        </span>

        <button 
          onClick={handleLogout}
          className="logout-button rounded-md px-3 py-2 text-xs font-semibold"
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Header;