import { updateCategoryApi } from "@/services/categoryService";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useEditCategory() {
  const router = useRouter();
  const pathname = usePathname();

  const { isPending: isUpdating, mutate: updateCategory } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      router.replace(pathname, { scroll: false });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, updateCategory };
}
