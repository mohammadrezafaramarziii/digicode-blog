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
  const { posts } = data || {};

  return posts;
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
