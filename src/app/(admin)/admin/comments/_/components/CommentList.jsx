"use client"
import Empty from "@/ui/Empty";
import Comment from "./Comment";
import { ChatDotsBoldIcon } from "@/ui/Icons";
import Title from "@/app/(dashboard)/_components/Title";
import flattenComments from "@/utils/flattenComments";

export default function CommentList({ comments }) {
    const flattenedComments = flattenComments(comments);

    if (!flattenedComments.length) {
        return (
            <Empty text="کامنتی ثبت نشده!">
                <ChatDotsBoldIcon className="w-16 h-16 !text-secondary-900/20" />
            </Empty>
        )
    }

    return (
        <>
            <Title title={"نظرات ثبت شده"} />
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 pt-6">
                {flattenedComments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}
            </div>
        </>
    )
}
