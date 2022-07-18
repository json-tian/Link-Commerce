import axios from "axios";
import { API_BASE } from "../constants";

export function getApiData(url) {
  return axios.get(API_BASE + "/api/v1/" + url).then((response) => response.data);
}

export function deleteApiData(url) {
  return axios.delete(API_BASE + "/api/v1/" + url).then((response) => response.data);
}

export function patchApiData(url, body) {
  return axios.patch(API_BASE + "/api/v1/" + url, body).then((response) => response.data);
}

export function postSignin() {
  return axios.get(API_BASE + "/users/sign_in").then((response) => {
    console.log(response);
    return response.data
  });
}
