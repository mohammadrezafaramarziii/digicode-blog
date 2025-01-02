"use client"
import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

    return (
        <div className="w-full flex flex-col items-center justify-center pt-16">
            <div className="">
                <Image src="/images/404.png" alt="not found" width={300} height={300} />
            </div>
            <h1 className="text-primary-900 font-bold text-lg md:text-2xl pt-6 text-center">
                صفحه ای که دنبال آن بودید وجود ندارد!
            </h1>
            <div className="pt-4">
                <Link href={'/profile'}>
                    <Button>
                        رفتن به داشبورد
                    </Button>
                </Link>
            </div>
        </div>
    )
}
