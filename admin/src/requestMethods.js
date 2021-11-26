import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";
const user = JSON.parse(localStorage.getItem("persist:root"))?.login;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
