"use client"
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashBoldIcon } from "@/ui/Icons";
import { useState } from "react";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";
import useRemoveCategory from "../useRemoveCategory";

export function DeleteCategory({ id, title, notRemove }) {
    const [open, setOpen] = useState(false);
    const { removeCategory, isRemoving } = useRemoveCategory();

    const removeCategoryHandler = () => {
        removeCategory(id, {
            onSuccess: () => {
                setOpen(false);
            }
        })
    }

    return (
        <>
            <ButtonIcon onClick={() => setOpen(true)} variant="red">
                <TrashBoldIcon className="!w-6 !h-6" />
            </ButtonIcon>

            <Modal open={open} onClose={() => setOpen(false)} title="حذف دسته بندی">
                <div className="pt-4 space-y-4">

                    {
                        !notRemove ?
                            <>
                                <p className="text-secondary-900 font-medium">
                                    {`آیا از حذف دسته بندی "${title}" مطمئن هستید؟`}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <Button onClick={removeCategoryHandler} varint="danger">
                                        حذف
                                    </Button>
                                    <Button onClick={() => setOpen(false)}>
                                        لغو
                                    </Button>
                                </div>
                            </>
                            :
                            <div className="flex flex-col gap-2 items-center py-4">
                                <p className="text-secondary-900 font-medium">
                                    {`امکان حذف دسته بندی "${title}" وجود ندارد!`}
                                </p>
                                <span className="text-error text-sm">
                                    ابتدا مقالات مربوط به این دسته بندی را حذف کنید!
                                </span>
                            </div>
                    }
                </div>
            </Modal >
        </>
    )
}
