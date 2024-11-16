export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const { data } = await res.json();
  const { categories } = data || {};

  return categories;
}
