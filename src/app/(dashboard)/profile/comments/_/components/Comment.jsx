"use client"
import { toPersianDateLong } from "@/utils/dateFormatter";
import { DeleteButton } from "./Buttons";
import Link from "next/link";

const statusStyle = {
    0: {
        label: "نظر شما توسط ادمین سایت رد شد",
        className: "text-red-500",
    },
    1: {
        label: "نظر شما پس از تایید نمایش داده خواهد شد",
        className: "text-primary-900",
    },
}

export default function Comment({ comment }) {

    return (
        <>
            <div className={`w-full bg-background flex flex-col rounded-lg p4 relative transform duration-300`}>
                <div className="flex-1 p-4">
                    <div className="w-full">
                        <div className="text-secondary-900 font-bold w-full whitespace-pre-wrap break-all">
                            {comment.content.text}
                        </div>
                        {!comment.openToComment &&
                            <div className="w-full bg-primary-800 p-3 rounded-lg flex flex-col gap-2 mt-2">
                                <div className="text-xs text-secondary-800">
                                    در پاسخ به {comment.parentComment.name}
                                </div>
                                <p className="text-sm font-medium text-secondary-900 whitespace-pre-wrap break-all">
                                    متن نظر: {comment.parentComment.text}
                                </p>
                            </div>
                        }
                    </div>

                    {comment.status !== 2 &&
                        <div className="pt-4">
                            <span className={`${statusStyle[comment.status].className} text-sm font-medium`}>
                                {statusStyle[comment.status].label}
                            </span>
                        </div>
                    }

                    <div className="w-full flex items-end justify-between pt-2">
                        <div className="flex items-center gap-4 text-sm">
                            <Link href={`/blogs/${comment?.post?.slug || comment?.parentComment?.slug}`} className="text-primary-900">
                                جزئیات پست
                            </Link>

                            <DeleteButton id={comment._id} />
                        </div>
                        <div className="text-xs text-secondary-700">
                            {toPersianDateLong(comment.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
