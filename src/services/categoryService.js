import http from "./httpService";

export async function getCategories(options) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  // const { data } = await res.json();
  // const { categories } = data || {};

  // return categories;

  return http.get("/category/list", options).then(({ data }) => data.data);
}
