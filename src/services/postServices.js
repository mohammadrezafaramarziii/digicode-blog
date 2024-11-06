export async function getPostBySlug(postSlug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${postSlug}`
  );
  const { data } = await res.json();
  const { post } = data || {};

  return post;
}
