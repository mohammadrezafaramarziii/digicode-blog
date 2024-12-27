"use client"

import { CopyBoldIcon } from "@/ui/Icons"
import { usePathname } from "next/navigation"
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";

export default function Share() {
    const pathname = usePathname();

    return (
        <div className="w-full max-w-max flex items-center gap-2 text-secondary-700 text-xs border border-secondary-700/20 p-2 rounded-md">
            <p className="truncate flex-1">
                {process.env.NEXT_PUBLIC_DOMAIN_URL}{pathname}
            </p>

            <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${pathname}`}
                onCopy={() => toast.success("کپی شد")}
            >
                <CopyBoldIcon className="w-5 h-5 !text-secondary-900/20" />
            </CopyToClipboard>
        </div>
    )
}
