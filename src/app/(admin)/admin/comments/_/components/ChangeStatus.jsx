"use client"
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import Select from "@/ui/Select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useChangeStatus from "../useChangeStatus";

const optinos = [
    { value: 0, label: "رد شده" },
    { value: 1, label: "در انتظار تایید" },
    { value: 2, label: "تایید شده" },
]

export default function ChangeStatus({ id, currentStatus }) {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(currentStatus);
    const { changeStatus, isChanging } = useChangeStatus();
    const router = useRouter();

    const changeStatusCommentHandler = (commentId) => {
        changeStatus({ id: commentId, data: { status } }, {
            onSuccess: (data) => {
                console.log(data);

                setOpen(false);
                router.push("/admin/comments", { scroll: false });
            }
        })
    }
    return (
        <>
            <button type="button" onClick={() => setOpen(true)} className="text-error" >
                تغییر وضعیت
            </button>

            <Modal open={open} onClose={() => setOpen(false)} title={"تغییر وضعیت نظر"}>
                <div>
                    <div className="font-medium py-5">
                        <Select options={optinos} value={status} onChange={(e) => setStatus(e.target.value)} />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Button onClick={() => changeStatusCommentHandler(id)} varint="danger">
                            {isChanging ? "در حال ثبت..." : "ثبت"}
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
