import { changeStatusApi } from "@/services/commentService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useChangeStatus() {
  const { isPending: isChanging, mutate: changeStatus } = useMutation({
    mutationFn: changeStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isChanging, changeStatus };
}
