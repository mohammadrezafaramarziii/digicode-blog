"use client"
import { toPersianDateLong } from "@/utils/dateFormatter";
import { DeleteButton, PreviewButton, UpdateButton } from "./Buttons";
import { useState } from "react";
import { AlertTimer } from "@/ui/Alert";

const typeStyle = {
    free: {
        label: "رایگان",
        className: "badge--success",
    },
    premium: {
        label: "پولی",
        className: "badge--primary",
    }
}

export default function PostCard({ index, post }) {
    const { title, category, author, createdAt, type, _id, slug } = post;
    const [stepDelete, setStepDelete] = useState(0);

    return (
        <div className={`w-full bg-background ${stepDelete >= 2 ? "max-h-0 mb-0" : "max-h-[156px] mb-4"} rounded-lg p4 relative transform duration-300 ${stepDelete >= 1 ? "removed-item-animate" : ""}`}>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <div>
                        <div className="text-lg font-bold text-secondary-900 w-12 h-12 flex items-center justify-center bg-primary-800 rounded-full">
                            {index + 1}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-secondary-900 font-bold line-clamp-1">
                            {title}
                        </div>
                        <div className="text-xs text-secondary-700">
                            {category.title}
                        </div>
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <div className="text-xs text-secondary-700">
                        {author.name}
                    </div>
                    <span className={`badge ${typeStyle[type].className}`}>
                        {typeStyle[type].label}
                    </span>
                </div>

                <div className="flex items-end justify-between pt-6">
                    <div className="flex items-center gap-4 text-sm">
                        <PreviewButton slug={slug} />
                        <UpdateButton id={_id} />
                        <DeleteButton post={post} setStepDelete={(e) => setStepDelete(e)} />
                    </div>
                    <div className="text-xs text-secondary-700">
                        {toPersianDateLong(createdAt)}
                    </div>
                </div>
            </div>
        </div>
    )
}
