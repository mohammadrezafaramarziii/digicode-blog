import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { deletePostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeletePost() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isDeleting, deletePost };
}
