function Header() {
  return (

    <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">

      {/* Page Title */}

      <h2 className="text-lg font-semibold text-gray-800">
        Dashboard
      </h2>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        <span className="text-sm text-gray-500">
          Welcome, User
        </span>

        <button className="px-4 py-1.5 bg-gray-900 text-white rounded-lg text-sm hover:bg-black transition">
          Logout
        </button>

      </div>

    </div>

  );
}

export default Header;