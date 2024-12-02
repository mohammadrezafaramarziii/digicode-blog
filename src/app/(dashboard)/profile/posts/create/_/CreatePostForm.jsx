"use client"
import TitleDot from "@/app/(dashboard)/_components/TitleDot";
import CoverImage from "@/app/(site)/blogs/_components/CoverImage";
import useCategories from "@/hooks/useCategories";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import { CloseIcon, EditIcon, PhotoIcon } from "@/ui/Icons";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import TextField from "@/ui/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form"
import * as Yup from "yup";
import useCreatePost from "./useCreatePost";
import { useRouter } from "next/navigation";
import RHFTextArea from "@/ui/RHFTextArea";
import useEditPost from "./useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";
import useMoveBack from "@/hooks/useMoveBack";

const schema = Yup
    .object({
        title: Yup
            .string()
            .min(5, "حداقل ۵ کاراکتر را وارد کنید")
            .required("عنوان را وارد کنید"),
        briefText: Yup
            .string()
            .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
            .required("توضیحات را وارد کنید"),
        text: Yup
            .string()
            .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
            .required("توضیحات ضروری است"),
        slug: Yup.string().required("اسلاگ را وارد کنید"),
        readingTime: Yup
            .number()
            .positive()
            .integer()
            .required("زمان مطالعه را وارد کنید")
            .typeError("یک عدد وارد کنید"),
        category: Yup.string().required("دسته بندی را انتخاب کنید"),
    })
    .required();

export default function CreatePostForm({ postToEdit = {} }) {
    const { _id: editId, title, text, slug, briefText, coverImageUrl: prevCoverImageUrl, coverImage, category, readingTime } = postToEdit;
    const isEditSession = Boolean(editId);

    let editValues = {};
    if (isEditSession) {
        editValues = {
            title,
            text,
            slug,
            briefText,
            coverImage,
            category: category._id,
            readingTime
        }
    }

    const { categories, isLoading } = useCategories();
    const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
    const { createPost, isCreating } = useCreatePost();
    const { updatePost, isUpdating } = useEditPost();
    const router = useRouter();
    const moveBack = useMoveBack();

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

    useEffect(() => {
        async function fetchMyApi() {
            const file = await imageUrlToFile(prevCoverImageUrl);
            setValue("coverImage", file);
        }

        if (isEditSession) {
            fetchMyApi();
        }
    }, [editId])

    const onSubmit = (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        if (isEditSession) {
            updatePost({ id: editId, data: formData }, {
                onSuccess: () => {
                    reset();
                    router.replace("/profile/posts");
                }
            })
        } else {
            createPost(formData, {
                onSuccess: () => {
                    router.replace("/profile/posts");
                }
            });
        }
    }

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full bg-background p-6 rounded-lg">
                <TitleDot title={"کاور مقاله"} />

                <div className="w-full md:w-1/2 mt-6 relative overflow-hidden">
                    <div className="aspect-w-16 aspect-h-11 rounded-2xl overflow-hidden border border-secondary-900/10">
                        {coverImageUrl ?
                            <Image
                                src={coverImageUrl}
                                alt={""}
                                fill
                                priority
                                className="w-full h-full object-cover object-center"
                            />
                            :
                            <label htmlFor="coverImage" className="w-full cursor-pointer h-full flex items-center justify-center flex-col gap-4 text-sm text-secondary-900/60 font-medium">
                                <PhotoIcon className="w-10 h-10 text-secondary-900/30" />
                                برای انتخاب تصویر کلیک کنید
                            </label>
                        }
                    </div>

                    {coverImageUrl &&
                        <div className="w-full rounded-t-2xl absolute left-0 top-0 flex justify-end p-6 bg-gradient-to-b from-secondary-900/50 to-transparent">
                            <ButtonIcon type="button" className="!bg-primary-900 !text-primary-800" noHover={true}>
                                <label htmlFor="coverImage" className="cursor-pointer">
                                    <EditIcon className="!w-6 !h-6" />
                                </label>
                            </ButtonIcon>
                        </div>
                    }
                </div>

                {errors && errors.coverImage &&
                    <span className="text-red-600 block text-xs mt-2">
                        {errors.coverImage?.message}
                    </span>
                }

                <Controller
                    name="coverImage"
                    control={control}
                    rules={{ required: "کاور مقاله را انتخاب کنید" }}
                    render={({ field: { value, onChange, ...rest } }) => {
                        return (
                            <input
                                type="file"
                                hidden
                                id="coverImage"
                                {...rest}
                                accept="images/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    onChange(file);
                                    setCoverImageUrl(URL.createObjectURL(file));
                                    e.target.files = null;
                                }}
                            />
                        )
                    }}
                />
            </div>

            <div className="w-full bg-background p-6 rounded-lg">
                <TitleDot title={"اطلاعات مقاله"} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                    <RHFTextField
                        label={'عنوان'}
                        errors={errors}
                        register={register}
                        name={'title'}
                        isRequired
                    />
                    <RHFTextField
                        label={'متن کوتاه'}
                        errors={errors}
                        register={register}
                        name={'briefText'}
                        isRequired
                    />
                    <RHFTextField
                        label={'اسلاگ'}
                        errors={errors}
                        register={register}
                        name={'slug'}
                        isRequired
                    />
                    <RHFTextField
                        label={'زمان مطالعه'}
                        errors={errors}
                        register={register}
                        name={'readingTime'}
                        isRequired
                        type="number"
                    />
                    <RHFSelect
                        label={'دسته بندی'}
                        errors={errors}
                        register={register}
                        name={'category'}
                        options={[{ value: "", label: "دسته بندی را انتخاب کنید..." }, ...categories || []]}
                    />
                    <div className="lg:col-span-2">
                        <RHFTextArea
                            label={'متن'}
                            errors={errors}
                            register={register}
                            name={'text'}
                            isRequired
                        />
                    </div>
                </div>
            </div>

            <div className="absolute left-0 -top-4 flex items-center gap-3">
                <Button onClick={moveBack} type="button" varint="danger">
                    لغو
                </Button>
                <Button type="submit" disabled={isCreating || isUpdating}>
                    {isCreating || isUpdating ? isEditSession ? "در حال ویرایش..." : "در حال ذخیره..." : isEditSession ? "ویرایش" : "ذخیره"}
                </Button>
            </div>
        </form>
    )
}
