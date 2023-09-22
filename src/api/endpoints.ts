import axios from "axios";

import { API } from "./axiosConfig";
import getErrorMessage, { reportError } from "../lib/utils/errorHandler";
import { JsonPlaceholderAlbum } from "../lib/types";

export async function fetchData(): Promise<JsonPlaceholderAlbum[]> {
  try {
    // const res = await API.get("/users/me");
    // return res.data;
    const jsonplaceholder = await axios(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return jsonplaceholder.data;
  } catch (error) {
    return reportError({ message: getErrorMessage(error) });
  }
}

export async function fetchMongoData() {
  try {
    const res = await API.get("/users/me");
    return res.data;
  } catch (error) {
    return reportError({ message: getErrorMessage(error) });
  }
}
