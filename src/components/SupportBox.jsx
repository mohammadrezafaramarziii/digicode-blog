import { SupportBoldDuotoneIcon, SupportIcon } from "@/ui/Icons";
import Link from "next/link";

export default function SupportBox() {
    return (
        <div className="fixed bottom-4 left-4 lg:bottom-10 lg:left-10 z-50">
            <span className="support-animate-ping absolute z-10 inline-flex w-14 h-14 rounded-full bg-[#444bff] opacity-75"></span>
            <Link href={'/support'} className="relative z-20 w-14 h-14 hover:scale-110 group duration-150 flex items-center justify-center rounded-full bg-[#444bff] shadow-md text-primary-800">
                <SupportBoldDuotoneIcon className="w-7 h-7" />

                <div className="group-hover:opacity-100 opacity-0 duration-200 absolute text-sm -top-10 font-bold bg-[#444bff] text-primary-800 px-2 py-1 rounded-lg">
                    پشتیبانی
                </div>
            </Link>
        </div>
    )
}
