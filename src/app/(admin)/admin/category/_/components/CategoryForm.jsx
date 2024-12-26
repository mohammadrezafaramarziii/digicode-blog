"use client";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import useCreateCategory from "../useCreateCategory";
import ButtonIcon from "@/ui/ButtonIcon";
import { EditIcon } from "@/ui/Icons";
import useEditCategory from "../useEditCategory";


const schema = Yup
    .object({
        title: Yup
            .string()
            .required("عنوان دسته بندی را وارد کنید")
            .min(5, "حداقل ۵ کاراکتر را وارد کنید"),
        englishTitle: Yup
            .string()
            .required("عنوان انگلیسی را وارد کنید")
            .min(5, "حداقل ۵ کاراکتر را وارد کنید")
            .matches(/^[a-zA-Z0-9]+$/, "فقط از اعداد و حروف انگلیسی استفاده کنید"),
        description: Yup
            .string()
            .required("توضیحات دسته بندی را بنویسید"),
    })
    .required();

export default function CategoryForm({ category }) {
    const [open, setOpen] = useState(false);
    const { createCategory, isCreating } = useCreateCategory();
    const { updateCategory, isUpdating } = useEditCategory();
    const isEdit = Boolean(category);

    let editValues = {};
    if (isEdit) {
        editValues = {
            title: category.title,
            englishTitle: category.englishTitle,
            description: category.description
        }
    }

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        reset,
        watch,
        setValue
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        defaultValues: editValues
    });

    const submitCategoryHandler = (values) => {
        if (isEdit) {
            updateCategory({ id: category._id, data: values }, {
                onSuccess: () => {
                    setOpen(false);
                    reset();
                }
            });
        } else {
            createCategory(values, {
                onSuccess: () => {
                    setOpen(false);
                    reset();
                }
            });
        }
    }

    return (
        <>
            {
                isEdit ?
                    <ButtonIcon onClick={() => setOpen(true)}>
                        <EditIcon className="!w-6 !h-6" />
                    </ButtonIcon>
                    :
                    <Button onClick={() => setOpen(true)}>
                        دسته بندی جدید
                    </Button>
            }

            <Modal open={open} onClose={() => setOpen(false)} title={isEdit ? "ویرایش" : "دسته بندی جدید"}>
                <form onSubmit={handleSubmit(submitCategoryHandler)}>
                    <div className="w-full space-y-4 pt-4">
                        <RHFTextField
                            label={'عنوان'}
                            errors={errors}
                            register={register}
                            name={'title'}
                            isRequired
                        />
                        {!isEdit &&
                            <RHFTextField
                                label={'عنوان انگلیسی'}
                                errors={errors}
                                register={register}
                                name={'englishTitle'}
                                isRequired
                            />
                        }
                        <RHFTextField
                            label={'توضیحات'}
                            errors={errors}
                            register={register}
                            name={'description'}
                            isRequired
                        />
                    </div>

                    <div className="w-full pt-6 grid grid-cols-2 gap-3">
                        <Button onClick={() => setOpen(false)} type="button" varint="danger">
                            لغو
                        </Button>
                        <Button type="submit">
                            {isCreating || isUpdating ? "در حال ثبت..." : isEdit ? "ویرایش" : "تایید"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
