import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { updateCategoryApi } from "@/services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditCategory() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCategory } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isUpdating, updateCategory };
}
