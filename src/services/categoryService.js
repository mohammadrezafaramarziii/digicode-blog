import http from "./httpService";

export async function getCategories(options) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  // const { data } = await res.json();
  // const { categories } = data || {};

  // return categories;

  return http.get("/category/list", options).then(({ data }) => data.data);
}

export async function createCategoryApi(data) {
  return http.post(`/category/add`, data).then(({ data }) => data.data);
}

export async function updateCategoryApi({ id, data }) {
  return http
    .patch(`/category/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function removeCategoryApi(id) {
  return http.delete(`/category/remove/${id}`).then(({ data }) => data.data);
}
