"use client"
import Avatar from "@/ui/Avatar";
import { useAuth } from "@/context/AuthContext";
import { Controller, useForm } from "react-hook-form";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { updateProfile, uploadAvatar } from "@/services/authService";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { CameraBoldIcon } from "@/ui/Icons";
import Title from "@/app/(dashboard)/_components/Title";
import ToastSuccess from "@/components/toasts/ToastSuccess";

const schema = Yup
    .object({
        name: Yup.string().required("نام و نام خانوادگی را وارد کنید").max(20, "نام و نام خانوادگی باید حداکثر 20 کارکتر باشد"),
        email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل وارد شده نامعتبر است"),
    })
    .required();

export default function Me() {
    const { user, getUser } = useAuth();
    const [avatarUrl, setAavatarUrl] = useState();
    const { mutateAsync: mutateUploadAvatar, isPending: isUploading } = useMutation({ mutationFn: uploadAvatar });
    const { mutateAsync: mutateUpdate, isPending: isUpdating } = useMutation({ mutationFn: updateProfile });
    const [isChangeAvatar, setIsChangeAvatar] = useState(false);

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
        defaultValues: { avatar: user?.avatar, name: user?.name, email: user?.email }
    });

    const submitHandler = async (values) => {
        const formData = new FormData();
        formData.append("avatar", values.avatar);

        try {
            const { message } = await mutateUpdate({ name: values.name, email: values.email });
            if (message) {
                try {
                    if (isChangeAvatar) {
                        const res = await mutateUploadAvatar(formData);
                        setIsChangeAvatar(false);
                    }
                    await getUser();
                    ToastSuccess(message);
                } catch (error) { }
            }
        } catch (error) { }
    }

    useEffect(() => {
        async function fetchMyApi() {
            if (user.avatarUrl) {
                const file = await imageUrlToFile(user.avatarUrl);
                setValue("avatar", file);
            }
            setValue("name", user.name);
            setValue("email", user.email);
            setAavatarUrl(user.avatarUrl || "");
        }

        if (user) {
            fetchMyApi();
        }
    }, [user])

    return (
        <div className="relative">
            <Title title={"اطلاعات من"} />

            <form onSubmit={handleSubmit(submitHandler)} className="w-full pt-8">
                <div>
                    <div className="w-auto inline-block rounded-full relative overflow-hidden">
                        <Avatar avatar={avatarUrl} name={user?.name} width={100} />
                        <label htmlFor="avatar" className="w-full flex items-center justify-center text-white absolute bottom-0 right-0 bg-black/50 py-2 cursor-pointer">
                            <CameraBoldIcon className="w-6 h-6" />
                        </label>
                    </div>

                    <Controller
                        name="avatar"
                        control={control}
                        render={({ field: { value, onChange, ...rest } }) => {
                            return (
                                <input
                                    type="file"
                                    hidden
                                    id="avatar"
                                    {...rest}
                                    accept="images/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        onChange(file);
                                        setAavatarUrl(URL.createObjectURL(file));
                                        setIsChangeAvatar(true);
                                        e.target.files = null;
                                    }}
                                />
                            )
                        }}
                    />
                </div>

                <div className="w-full grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 bg-background p-6 rounded-lg">
                    <RHFTextField
                        label={'نام و نام خانوادگی'}
                        name={'name'}
                        register={register}
                        errors={errors}
                    />
                    <RHFTextField
                        label={'ایمیل'}
                        name={'email'}
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="absolute left-0 -top-4">
                    <Button type="submit" disabled={isUploading || isUpdating}>
                        {isUploading || isUpdating ? "در حال ثبت..." : "ثبت"}
                    </Button>
                </div>
            </form>
        </div>
    )
}
