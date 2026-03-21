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

import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// 🔥 INTERCEPTOR
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;