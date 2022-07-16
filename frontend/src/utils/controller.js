import axios from "axios";
import { API_BASE } from "../constants";

export function getApiData(url) {
  return axios.get(API_BASE + url).then((response) => response.data);
}

export function deleteApiData(url) {
  return axios.delete(API_BASE + url).then((response) => response.data);
}