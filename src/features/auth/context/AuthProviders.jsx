// import { useState, useEffect } from "react";
// import { AuthContext } from "./authContext";


// function AuthProvider({ children }) {

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         loading
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;


import { useEffect, useState } from "react";
import axios from "axios";
import { setAccessToken, clearAccessToken, getAccessToken } from "../store/authStore";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hydrateAuth = async () => {
      try {
        const savedToken = getAccessToken();

        if (savedToken) {
          setAccessToken(savedToken);
          setIsLoading(false);
          return;
        }

        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const token = res.data.accessToken;
        setAccessToken(token);
      } catch {
        clearAccessToken();
      } finally {
        setIsLoading(false);
      }
    };

    hydrateAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

