"use client"

import { CopyBoldIcon } from "@/ui/Icons"
import { usePathname } from "next/navigation"

export default function Share() {
    const pathname = usePathname();

    return (
        <div className="w-auto flex items-center gap-2 text-secondary-700 text-xs border border-secondary-700/20 p-2 rounded-md">
            {process.env.NEXT_PUBLIC_DOMAIN_URL}{pathname}
            <CopyBoldIcon className="w-4 h-4 !text-secondary-900/20" />
        </div>
    )
}
