import http from "./httpService";

export async function signupApi(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signinApi(data) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi(options) {
  return http.get("/user/profile", options).then(({ data }) => data.data);
}

export async function getAllUsersApi(options = {}) {
  return http.get("/user/list", options).then(({ data }) => data.data);
}

export async function uploadAvatar(data) {
  return http.post("/user/upload-avatar", data).then(({ data }) => data.data);
}

export async function updateProfile(data) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export async function logoutApi() {
  return http.post("/user/logout");
}
