import AuthProvider from "../../features/auth/context/AuthProviders";
import QueryProvider from "./QueryProvider";

function AppProviders({ children }) {
  return (
    <QueryProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryProvider>
  );
}

export default AppProviders;