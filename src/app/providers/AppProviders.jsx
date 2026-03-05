import AuthProvider from "../../features/auth/context/AuthContext";

function AppProviders({children}) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AppProviders;