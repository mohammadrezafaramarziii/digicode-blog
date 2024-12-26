import { BookmarkLinearIcon, ChatDotsOutlineIcon, HeartLinearIcon } from "@/ui/Icons"

const iconType = {
    likes: HeartLinearIcon,
    comments: ChatDotsOutlineIcon,
    bookmarks: BookmarkLinearIcon
}

export default function Card({ title, value, type }) {
    const Icon = iconType[type];

    return (
        <div className="flex items-center gap-4 md:border-l border-l-secondary-900/10 last:border-l-0">
            <div>
                <div className={`text-background bg-primary-900 flex items-center justify-center !rounded-2xl !w-12 !h-12`}>
                    {Icon ? <Icon className="w-6 h-6" /> : null}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-xs text-secondary-700 font-medium">
                    {title}
                </div>
                <div className="text-xl text-secondary-900 font-bold">
                    {value}
                </div>
            </div>
        </div>
    )
}
