"use client"
import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full flex flex-col items-center justify-center pt-16">
            <div className="">
                <Image src="/images/404.png" alt="not found" width={300} height={300}/>
            </div>
            <h1 className="text-error font-bold text-lg md:text-2xl pt-6 text-center">
                هیچ پستی با این مشخصات یافت نشد یا حذف شده است!
            </h1>
            <div className="pt-4">
                <Link href={'/blogs'} className="btn btn--primary">
                    رفتن به صفحه پست ها
                </Link>
            </div>
        </div>
    )
}
