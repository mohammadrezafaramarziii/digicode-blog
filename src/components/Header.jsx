import Button from "@/ui/Button";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full flex items-center justify-between pt-7">
            <div className="text-2xl text-primary-900 font-black">
                <Link href={"/"}>
                    دیجی کد
                </Link>
            </div>
            <div>
                <Button>
                    ورود | ثبت نام
                </Button>
            </div>
        </div>
    )
}
