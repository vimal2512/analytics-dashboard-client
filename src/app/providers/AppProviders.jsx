import AuthProvider from "../../features/auth/context/AuthProviders";
import QueryProvider from "./QueryProvider";

import { SelectedWebsiteProvider } from "../../features/websites/context/SelectedWebsiteContext";

function AppProviders({ children }) {
  return (
    <QueryProvider>
      <AuthProvider>

        <SelectedWebsiteProvider>

          {children}

        </SelectedWebsiteProvider>
        
      </AuthProvider>
    </QueryProvider>
  );
}

export default AppProviders;