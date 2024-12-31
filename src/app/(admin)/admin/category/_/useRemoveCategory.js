import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { removeCategoryApi } from "@/services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useRemoveCategory() {
  const queryClient = useQueryClient();

  const { isPending: isRemoving, mutate: removeCategory } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isRemoving, removeCategory };
}
