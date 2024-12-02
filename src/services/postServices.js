import http from "./httpService";

export async function getPostBySlug(postSlug, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${postSlug}`,
    options
  );
  const { data } = await res.json();
  const { post } = data || {};

  return post;
}

export async function getPosts(qs, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${qs}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};

  return { posts, totalPages };
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function updatePostApi({ id, data }) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function getPostById(id) {
  return http.get(`/post/${id}`).then(({ data }) => data.data);
}

export async function deletePostApi(id) {
  return http.delete(`/post/remove/${id}`).then(({ data }) => data.data);
}
