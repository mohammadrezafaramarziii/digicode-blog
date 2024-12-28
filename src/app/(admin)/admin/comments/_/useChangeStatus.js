import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { changeStatusApi } from "@/services/commentService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useChangeStatus() {
  const { isPending: isChanging, mutate: changeStatus } = useMutation({
    mutationFn: changeStatusApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isChanging, changeStatus };
}
