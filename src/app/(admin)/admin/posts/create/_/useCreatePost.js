import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreatePost() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isCreating, createPost };
}
