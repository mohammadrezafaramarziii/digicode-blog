"use client"
import { toPersianDateLong } from "@/utils/dateFormatter";
import { DeleteButton } from "./Buttons";
import ChangeStatus from "./ChangeStatus";
import Link from "next/link";

const statusStyle = {
    0: {
        label: "رد شده",
        className: "badge--danger",
    },
    1: {
        label: "در انتظار تایید",
        className: "badge--primary",
    },
    2: {
        label: "تایید شده",
        className: "badge--success",
    }
}

export default function Comment({ comment }) {
    return (
        <>
            <div className={`w-full bg-background flex flex-col rounded-lg p4 relative transform duration-300`}>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div className="w-full">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex-1 text-secondary-900 font-bold flex flex-col gap-1">
                                {comment.content.text}
                                <span className="text-sm font-medium">
                                    {comment.user.name}
                                </span>
                            </div>
                            <span className={`badge ${statusStyle[comment.status].className}`}>
                                {statusStyle[comment.status].label}
                            </span>
                        </div>
                        {!comment.openToComment &&
                            <div className="w-full bg-primary-800 p-3 rounded-lg flex flex-col gap-2 mt-2">
                                <div className="text-xs text-secondary-800">
                                    در پاسخ به {comment.parentComment.name}
                                </div>
                                <p className="text-sm font-medium text-secondary-900">
                                    متن نظر: {comment.parentComment.text}
                                </p>
                            </div>
                        }
                    </div>



                    <div className="flex items-end justify-between pt-6">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href={`/blogs/${comment?.post?.slug || comment?.parentComment?.slug}`} className="text-primary-900">
                                جزئیات پست
                            </Link>
                            <ChangeStatus id={comment._id} currentStatus={comment.status} />
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
