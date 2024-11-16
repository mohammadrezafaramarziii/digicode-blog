"use client";
import Button from "@/ui/Button"
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { ScreenLoading } from "@/ui/DotSpinnerLoading";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const schema = Yup.object({
    email: Yup.string().email("ایمیل وارد شده نامعتبر است").required("ایمیل را وارد کنید"),
    password: Yup.string().min(8, "حداقل 8 کارکتر را وارد کنید").required("رمز عبور را وارد کنید"),
}).required();

export default function Signin() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    });
    const { signin } = useAuth();

    const onSubmit = async (values) => {
        await signin(values);
    }

    return (
        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center">
            {isSubmitting && <ScreenLoading />}
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-3xl text-center font-black text-primary-900">
                    سلام دوست من!
                </h1>
                <p className="text-sm text-center font-medium text-secondary-800/70">
                    خوش اومدی! اگه عضو دیجی کد هستی وارد شو.
                </p>
            </div>

            <form className="w-full py-10 px-4 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
                    type="password"
                    errors={errors}
                />
                <div className="pt-4">
                    <Button type="submit" className={'!w-full'}>
                        ورود
                    </Button>
                    <Link href={'/signup'} className="text-sm block w-full text-primary-900 !p-4 text-center">
                        ساخت حساب کاربری
                    </Link>
                </div>
            </form>
        </div>
    )
}
