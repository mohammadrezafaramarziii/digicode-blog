import http from "./httpService";

export async function createCommentApi(data, options) {
  return http.post(`/comment/add`, data, options).then(({ data }) => data.data);
}

export async function getAllCommentsApi(options = {}) {
  return http.get(`/comment/list`, options).then(({ data }) => data.data);
}

export async function removeCommentApi(id) {
  return http.delete(`/comment/remove/${id}`).then(({ data }) => data.data);
}

export async function changeStatusApi({ id, data }) {
  return http
    .patch(`/comment/update/${id}`, data)
    .then(({ data }) => data.data);
}
