// import axios from "axios"
import { API } from "./axiosConfig";
import getErrorMessage, { reportError } from "../lib/utils/errorHandler";

export async function fetchData() {
  try {
    // const jsonplaceholder = await axios("https://jsonplaceholder.typicode.com/albums");
    const res = await API.get("/users/me");
    return res.data;
  } catch (error) {
    reportError({ message: getErrorMessage(error) });
  }
}
