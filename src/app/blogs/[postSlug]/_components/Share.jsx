"use client"

import { CopyBoldIcon } from "@/ui/Icons"

export default function Share({post}) {
    return (
        <div className="w-auto flex items-center gap-2 text-secondary-700 text-xs border border-secondary-700/20 p-2 rounded-md">
            {window.location.origin}/{post.slug}
            <CopyBoldIcon className="w-4 h-4 !text-secondary-900/20"/>
        </div>
    )
}
