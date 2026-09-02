// let accessToken = null;

// export function setAccessToken(token) {
//   accessToken = token;
// }

// export function getAccessToken() {
//   return accessToken;
// }

// export function clearAccessToken() {
//   accessToken = null;
// }


import axios from "axios";
import { jwtDecode } from "jwt-decode";

const STORAGE_KEY = "analytics_access_token";

let accessToken = localStorage.getItem(STORAGE_KEY) || null;
let refreshTimeout = null;

/*
SET TOKEN
*/
export function setAccessToken(token) {
  accessToken = token;

  if (token) {
    localStorage.setItem(STORAGE_KEY, token);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }

  scheduleRefresh(token);
}

/*
GET TOKEN
*/
export function getAccessToken() {
  if (!accessToken) {
    accessToken = localStorage.getItem(STORAGE_KEY) || null;
  }

  return accessToken;
}

/*
CLEAR TOKEN
*/
export function clearAccessToken() {
  accessToken = null;
  localStorage.removeItem(STORAGE_KEY);

  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
    refreshTimeout = null;
  }
}

/*
🔄 SILENT REFRESH LOGIC
*/
function scheduleRefresh(token) {
  if (!token) {
    clearAccessToken();
    return;
  }

  try {
    const decoded = jwtDecode(token);

    const expiryTime = decoded.exp * 1000;
    const currentTime = Date.now();

    const delay = expiryTime - currentTime - 60 * 1000;

    if (delay <= 0) return;

    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    refreshTimeout = setTimeout(async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        setAccessToken(res.data.accessToken);
      } catch {
        clearAccessToken();
      }
    }, delay);
  } catch {
    clearAccessToken();
  }
}
