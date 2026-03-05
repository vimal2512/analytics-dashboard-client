function Header() {
    return(
        <div className="h-16 bg-white border-b flex items-center justify-between px-6">
            <h2 className="text-lg font-semibold">Dashboard</h2>

            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    Welcome, User
                </span>

                <button className="px-3 py-1 bg-gray-900 text-white rounded">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Header;