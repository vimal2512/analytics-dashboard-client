// import AppRouter from "./app/router/AppRouter";

// function App() {
//   return <AppRouter/>
// }

// export default App;

import { useAuth } from "./features/auth/hooks/useAuthProvider";
import AppRouter from "./app/router/AppRouter";

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
          <p className="text-sm font-medium text-gray-600">Loading app...</p>
        </div>
      </div>
    );
  }

  return <AppRouter />;
}

export default App;