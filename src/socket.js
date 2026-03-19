// import { io } from "socket.io-client";

// export const socket = io("https://analytics-dashboard-server.onrender.com");


import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

console.log("SOCKET URL:", SOCKET_URL);

export const socket = io(SOCKET_URL, {
  withCredentials: true
});