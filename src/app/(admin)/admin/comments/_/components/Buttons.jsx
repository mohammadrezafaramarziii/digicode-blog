"use client"
import Modal from "@/ui/Modal";
import useDeleteComment from "../useDeleteComment";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import { useState } from "react";

export function DeleteButton({ id }) {
    const { removeComment, isDeleting } = useDeleteComment();
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const removeCommentHandler = (commentId) => {
        removeComment(id = commentId, {
            onSuccess: () => {
                setOpen(false);
                router.push("/profile/comments", { scroll: false });
            }
        })
    }

    return (
        <>
            <button type="button" onClick={() => setOpen(true)} className="text-error" disabled={isDeleting}>
                حذف کامنت
            </button>

            <Modal open={open} onClose={() => setOpen(false)} title={"حذف کامنت"}>
                <div>
                    <div className="font-medium py-5">
                        {`آیا از حذف این کامنت مطمئن هستید؟`}
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Button onClick={() => removeCommentHandler(id)} varint="danger">
                            {isDeleting ? "در حال حذف..." : "حذف"}
                        </Button>
                        <Button onClick={() => setOpen(false)}>
                            لغو
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}