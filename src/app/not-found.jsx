"use client"
import useMoveBack from "@/hooks/useMoveBack";
import Button from "@/ui/Button";
import Image from "next/image";

export default function NotFound() {
    const moveBack = useMoveBack();

    return (
        <div className="w-full flex flex-col items-center justify-center pt-16">
            <div className="">
                <Image src="/images/404.png" alt="not found" width={300} height={300}/>
            </div>
            <h1 className="text-primary-900 font-bold text-lg md:text-2xl pt-6 text-center">
                صفحه ای که دنبال آن بودید وجود ندارد!
            </h1>
            <div className="pt-4">
                <Button onClick={moveBack}>
                    رفتن به صفحه اصلی
                </Button>
            </div>
        </div>
    )
}
