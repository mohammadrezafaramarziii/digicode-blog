import { getCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    value: item.englishTitle,
    label: item.title,
  }));

  return { isLoading, categories, transformedCategories, rawCategories };
}
