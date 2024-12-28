import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { removeCategoryApi } from "@/services/categoryService";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useRemoveCategory() {
  const router = useRouter();
  const pathname = usePathname();

  const { isPending: isRemoving, mutate: removeCategory } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: (data) => {
      ToastSuccess(data.message);
      router.replace(pathname, { scroll: false });
    },
    onError: (error) => {
      ToastError(error?.response?.data?.message);
    },
  });

  return { isRemoving, removeCategory };
}
