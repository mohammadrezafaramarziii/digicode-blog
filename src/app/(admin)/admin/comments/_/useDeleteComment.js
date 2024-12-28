import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { removeCommentApi } from "@/services/commentService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const { isPending: isDeleting, mutate: removeComment } = useMutation({
    mutationFn: removeCommentApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isDeleting, removeComment };
}
