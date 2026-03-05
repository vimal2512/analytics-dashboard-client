import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

// Attach token automatically
apiClient.interceptors.request.use((config) => {

  const user = localStorage.getItem("user");

  if (user) {
    const token = JSON.parse(user).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});

export default apiClient;