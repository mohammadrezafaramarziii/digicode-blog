"use client";

import Button from "@/ui/Button";
import Image from "next/image";

export default function Error({ error, reset }) {
    return (
        <div className="w-full flex flex-col items-center justify-center pt-16">
            <div className="">
                <Image src="/images/error.png" alt="not found" width={300} height={300} />
            </div>
            <h1 className="text-error font-bold text-lg md:text-2xl pt-6 text-center">
                مشکلی پیش آمده!
            </h1>
            <p className="text-sm text-secondary-900 pt-2">
                لطفا مجدد تلاش کنید و در صورت حل نشدن مشکل به پشتیبانی اطلاع دهید
            </p>
            <div className="pt-4">
                <Button onClick={reset}>
                    تلاش مجدد
                </Button>
            </div>
        </div>
    )
}
