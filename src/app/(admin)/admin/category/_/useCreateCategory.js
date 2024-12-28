import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
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
      ToastSuccess(data.message);
      router.replace(pathname, { scroll: false });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isCreating, createCategory };
}
