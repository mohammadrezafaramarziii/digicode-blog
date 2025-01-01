"use client";
import Button from "@/ui/Button"
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { ScreenLoading } from "@/ui/DotSpinnerLoading";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const schema = Yup.object({
    name: Yup.string().max(20, "نام و نام خانوادگی باید حداکثر 20 کارکتر باشد").required("نام و نام خانوادگی را وارد کنید"),
    email: Yup.string().email("ایمیل وارد شده نامعتبر است").required("ایمیل را وارد کنید"),
    password: Yup.string().min(8, "حداقل 8 کارکتر را وارد کنید").required("رمز عبور را وارد کنید"),
}).required();

export default function SignUpForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    });
    const { signup } = useAuth();
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async (values) => {
        await signup(values);
    }

    return (
        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center">
            {isSubmitting && <ScreenLoading />}
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-3xl text-center font-black text-primary-900">
                    عضویت در دیجی کد
                </h1>
                <p className="text-sm text-center font-medium text-secondary-800/70">
                    به دیجی کد خوش اومدی! برای ثبت نام فرم زیر رو تکمیل کن.
                </p>
            </div>

            <form className="w-full py-7 px-4 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    label={'نام و نام خانوادگی'}
                    name={'name'}
                    register={register}
                    errors={errors}
                />
                <RHFTextField
                    label={'ایمیل'}
                    name={'email'}
                    dir="ltr"
                    register={register}
                    errors={errors}
                />
                <RHFTextField
                    label={'رمز عبور'}
                    name={'password'}
                    register={register}
                    type={showPass ? "text" : "password"}
                    errors={errors}
                    isPass={true}
                    showPass={showPass}
                    setShowPass={() => setShowPass(!showPass)}
                />
                <div className="pt-4">
                    <Button type="submit" className={'!w-full'}>
                        ثبت نام
                    </Button>
                </div>
            </form>

            <div className="text-center text-xs text-secondary-900/50 ">
                با ثبت نام در دیجی کد شما با قوانین و مقررات ما موافقت می‌کنید
            </div>
        </div>
    )
}
