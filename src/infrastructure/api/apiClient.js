// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true
// });

// // Attach token automatically
// apiClient.interceptors.request.use((config) => {

//   const user = localStorage.getItem("user");

//   if (user) {
//     const token = JSON.parse(user).token;
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;

// });

// export default apiClient;



// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true
// });

// // Attach token automatically
// apiClient.interceptors.request.use((config) => {

//   const user = localStorage.getItem("user");

//   if (user) {
//     const token = JSON.parse(user).token;
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;

// });

// export default apiClient;



// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_URL
// });

// // 🔥 INTERCEPTOR
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token && token !== "undefined") {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default apiClient;




// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true // 🔥 important for future refresh token
// });

// /*
// REQUEST INTERCEPTOR
// → attach token
// */
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// /*
// RESPONSE INTERCEPTOR
// → handle errors globally
// */
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {

//     if (error.response?.status === 401) {

//       console.warn("Unauthorized - logging out");

//       localStorage.removeItem("token");

//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;




// import axios from "axios";
// import {
//   getAccessToken,
//   setAccessToken,
//   clearAccessToken
// } from "../../features/auth/store/authStore";

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true // required for refresh cookie
// });

// /*
// REQUEST INTERCEPTOR
// → attach access token
// */
// apiClient.interceptors.request.use(
//   (config) => {

//     const token = getAccessToken();

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient.interceptors.response.use(
//   (response) => response,

//   async (error) => {

//     const originalRequest = error.config;

//     console.log("FAILED REQUEST:", originalRequest.url);

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry &&
//       !originalRequest.url.includes("/auth/refresh")
//     ) {

//       originalRequest._retry = true;

//       try {
//         console.log("REFRESH CALLED");

//         const res = await axios.post(
//           `${import.meta.env.VITE_API_URL}/auth/refresh`,
//           {},
//           { withCredentials: true }
//         );

//         const newAccessToken = res.data.accessToken;

//         setAccessToken(newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//         return apiClient(originalRequest);

//       } catch (refreshError) {

//         console.log("REFRESH FAILED", refreshError.response?.data);

//         clearAccessToken();

//         // window.location.href = "/login";

//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
// export default apiClient;



import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  clearAccessToken
} from "../../features/auth/store/authStore";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true // 🔥 REQUIRED for cookies
});

/*
REQUEST INTERCEPTOR
→ attach access token
*/
apiClient.interceptors.request.use(
  (config) => {

    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/*
RESPONSE INTERCEPTOR
→ auto refresh + retry
*/
apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    const isRefreshCall = originalRequest.url?.includes("/auth/refresh");

    console.log("FAILED REQUEST:", originalRequest.url);

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshCall
    ) {

      originalRequest._retry = true;

      try {
        console.log("REFRESH CALLED");

        // ✅ FIXED: use apiClient (NOT axios)
        const res = await apiClient.post("/auth/refresh");

        const newAccessToken = res.data.accessToken;

        // 🔥 store new token
        setAccessToken(newAccessToken);

        // 🔥 retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return apiClient(originalRequest);

      } catch (refreshError) {

        console.log("REFRESH FAILED", refreshError.response?.data);

        clearAccessToken();

        // 🔥 STOP infinite loop
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;