import http from "./httpService";

export async function getUsers() {
  return http.get("/user/list").then(({ data }) => data.data);
}
