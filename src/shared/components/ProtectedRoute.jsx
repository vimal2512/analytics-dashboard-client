// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../features/auth/hooks/useAuth";

// function ProtectedRoute({children}) {
    
//     const { user, loading } = useAuth();

//     if(loading){
//         return <div>Loading...</div>
//     }

//     if(!user) {
//         return <Navigate to="/login"/>;
//     }

//     return children;
// }

// export default ProtectedRoute;



// function ProtectedRoute({ children }) {

//   return children;

// }

// export default ProtectedRoute;



// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../features/auth/store/authStore";

function ProtectedRoute({ children }) {

  const token = getAccessToken(); // ✅ SAME SOURCE

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;