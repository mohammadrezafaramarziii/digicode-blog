import { createCategoryApi } from "@/services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useCreateCategory() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      router.replace(pathname, { scroll: false });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isCreating, createCategory };
}
