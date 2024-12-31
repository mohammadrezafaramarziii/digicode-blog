import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { createCategoryApi } from "@/services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isCreating, createCategory };
}
