"use client"
import { toPersianDateLong } from "@/utils/dateFormatter";
import { DeleteButton } from "./Buttons";

export default function Comment({ comment, isReplay = false }) {
    return (
        <>
            <div className={`w-full bg-white  rounded-lg p4 relative transform duration-300`}>
                <div className="p-4">
                    <div className="w-full flex items-center justify-between">
                        <div className="text-secondary-900 font-bold">
                            {comment.content.text}
                        </div>
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="text-xs text-secondary-700">
                            {isReplay && "در پاسخ به کاربر دیگر"}
                        </div>
                    </div>

                    <div className="flex items-end justify-between pt-6">
                        <div className="flex items-center gap-4 text-sm">
                            <DeleteButton id={comment._id} />
                        </div>
                        <div className="text-xs text-secondary-700">
                            {toPersianDateLong(comment.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
            {comment.answers && comment.answers.length !== 0 && comment.answers.map((item) => (
                <Comment key={item._id} comment={item} isReplay />
            ))}
        </>
    )
}
