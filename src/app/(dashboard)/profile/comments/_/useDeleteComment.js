import { removeCommentApi } from "@/services/commentService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const { isPending: isDeleting, mutate: removeComment } = useMutation({
    mutationFn: removeCommentApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isDeleting, removeComment };
}
