import axios from "axios";
import { API_BASE } from "../constants";

const backendApi = "/api/v1/"

export function addApiData(url, body) {
  return axios.post(API_BASE + backendApi + url, body).then((response) => response.data);
}

export function getApiData(url) {
  return axios.get(API_BASE + backendApi + url).then((response) => response.data);
}

export function patchApiData(url, body) {
  return axios.patch(API_BASE + backendApi + url, body).then((response) => response.data);
}

export function deleteApiData(url) {
  return axios.delete(API_BASE + backendApi + url).then((response) => response.data);
}

export function postSignin() {
  return axios.get(API_BASE + "/users/sign_in").then((response) => {
    console.log(response);
    return response.data
  });
}
