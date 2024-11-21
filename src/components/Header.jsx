"use client";
import { useAuth } from "@/context/AuthContext";
import Button from "@/ui/Button";
import Link from "next/link";

export default function Header() {
    const { user, isLoading } = useAuth();
    return (
        <div className="w-full flex items-center justify-between pt-7">
            <div className="text-2xl text-primary-900 font-black">
                <Link href={"/"}>
                    دیجی کد
                </Link>
            </div>
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
                    <Link href={'/profile'} className="btn btn--primary">
                        پروفایل
                    </Link>
                }
            </div>
        </div>
    )
}
