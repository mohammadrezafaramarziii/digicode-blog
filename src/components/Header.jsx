"use client";
import { useAuth } from "@/context/AuthContext";
import Button from "@/ui/Button";
import Link from "next/link";
import { DigiCodeLogoLg, DigiCodeLogoSm } from "./DigiCodeLogo";

export default function Header() {
    const { user, isLoading } = useAuth();
    return (
        <div className="w-full flex items-center justify-between pt-7 whitespace-nowrap gap-2">
            <DigiCodeLogoLg classNameText={"max-[360px]:text-lg"} classNameIcon={'max-[360px]:w-7 max-[360px]:w-7'}/>
            <div className={`${isLoading ? "blur-sm opacity-50" : ""} duration-150`}>
                {!isLoading && !user ?
                    <>
                        <Link href={'/signin'} className={"btn !font-medium"}>
                            وارد شوید
                        </Link>
                        <Link href={'/signup'} className="btn btn--primary">
                            ثبت نام
                        </Link>
                    </>
                    :
                    <Link href={user?.role === "ADMIN" ? "/admin" : "/profile"} className="btn btn--primary">
                        {user?.role === "ADMIN" ? "پنل ادمین" : "پروفایل"}
                    </Link>
                }
            </div>
        </div>
    )
}
