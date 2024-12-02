"use client"
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import { EditIcon, EyeBoldIcon, TrashBoldIcon } from "@/ui/Icons";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDeletePost from "../useDeletePost";
import { useRouter } from "next/navigation";
import { AlertTimer } from "@/ui/Alert";

export function UpdateButton({ id }) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <div className="hidden lg:block">
                <ButtonIcon>
                    <EditIcon className="!w-6 !h-6" />
                </ButtonIcon>
            </div>
            <button className="text-primary-900 lg:hidden">
                ویرایش
            </button>
        </Link>
    )
}

export function DeleteButton({ post: { _id, title }, setStepDelete }) {
    const [open, setOpen] = useState(false);
    const { deletePost, isDeleting } = useDeletePost();

    const [deleteState, setDeleteState] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const router = useRouter();

    // const deleteHandler = () => {
    //     deletePost(_id, {
    //         onSuccess: () => {
    //             setOpen(false);
    //             router.push("/profile/posts", { scroll: false });
    //         }
    //     })
    // }

    const deleteHandler = () => {
        setOpen(false);
        setOpenAlert(true);
        setStepDelete(1);
        setTimeout(() => {
            setStepDelete(2)
            setTimeout(() => {
                setStepDelete(3)
            }, 500);
        }, 1000);
    }

    const cancelDeleteHandler = () => {
        setOpen(false);
        setOpenAlert(false);
        setStepDelete(0);
    }

    const callDeleteApi = () => {
        deletePost(_id, {
            onSuccess: () => {
                setOpen(false);
                router.push("/profile/posts", { scroll: false });
            }
        })
    }

    useEffect(() => {
        if (deleteState) {
            callDeleteApi();
        }
    }, [deleteState])

    return (
        <>
            <div className="hidden lg:block">
                <ButtonIcon disabled={isDeleting} onClick={() => setOpen(true)} variant="red">
                    <TrashBoldIcon className="!w-6 !h-6" />
                </ButtonIcon>
            </div>
            <button disabled={isDeleting} onClick={() => setOpen(true)} className="text-error lg:hidden">
                حذف
            </button>
            <AlertTimer
                setReturned={(e) => setDeleteState((e))}
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                onCancel={cancelDeleteHandler}
            >
                لغو حذف
            </AlertTimer>

            <Modal open={open} onClose={() => setOpen(false)} title={"حذف مقاله"}>
                <div>
                    <div className="font-medium py-5">
                        {`آیا از حذف "${title}" مطمئن هستید؟`}
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Button onClick={deleteHandler} varint="danger">
                            حذف
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

export function PreviewButton({ slug }) {
    return (
        <Link href={`/blogs/${slug}`}>
            <div className="hidden lg:block">
                <ButtonIcon>
                    <EyeBoldIcon className="!w-6 !h-6" />
                </ButtonIcon>
            </div>
            <button className="text-primary-900 lg:hidden">
                مشاهده
            </button>
        </Link>
    )
}
