"use client"
import Empty from "@/ui/Empty";
import Comment from "./Comment";
import { ChatDotsBoldIcon } from "@/ui/Icons";
import { useAuth } from "@/context/AuthContext";
import Title from "@/app/(dashboard)/_components/Title";
import flattenComments from "@/utils/flattenComments";


export default function CommentList({ comments }) {
    const { user } = useAuth();
    const flattenedComments = flattenComments(comments);
    const commentsData = flattenedComments.filter((c) => c.user._id === user?._id)

    if (!commentsData.length) {
        return (
            <Empty text="کامنتی ثبت نکرده اید!">
                <ChatDotsBoldIcon className="w-16 h-16 !text-secondary-900/20" />
            </Empty>
        )
    }

    return (
        <>
            <Title title={"نظرات من"} />
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 pt-6">
                {commentsData.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}
            </div>
        </>
    )
}
