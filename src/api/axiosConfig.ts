import axios from "axios";
import { auth } from "../firebaseInit";

// Request Configs
// • Set the Base URL
let BASE_URL;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:5000/api";
} else {
  BASE_URL = "https://abbyhq.up.railway.app/api";
  // BASE_URL = "https://abbyhq.cyclic.app/api";
}

// • Apply the Base URL
export const API = axios.create({ baseURL: BASE_URL });

// • Attach the user's jwt to each request.
//   Pass the token through the verifyToken
//   middleware. This should remove the need
//   for firebase-admin on the server!
//   https://axios-http.com/docs/interceptors
API.interceptors.request.use(
  async (req) => {
    try {
      if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
        req.headers.Authorization = `Bearer ${token}`;
      }

      return req;
    } catch (error) {
      // console.error({ error });
      return Promise.reject(error);
    }
  },
  (error) => {
    // console.error({ message: "Cannot make API request.", error });
    return Promise.reject(error);
  }
);
