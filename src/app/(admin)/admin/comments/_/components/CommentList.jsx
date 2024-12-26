"use client"
import Empty from "@/ui/Empty";
import Comment from "./Comment";
import { ChatDotsBoldIcon } from "@/ui/Icons";
import Title from "@/app/(dashboard)/_components/Title";
import flattenComments from "@/utils/flattenComments";
import TabGroup from "@/ui/TabGroup";

export default function CommentList({ comments }) {
    const flattenedComments = flattenComments(comments);
    const sortedCommnets = flattenedComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (!flattenedComments.length) {
        return (
            <Empty text="کامنتی ثبت نشده!">
                <ChatDotsBoldIcon className="w-16 h-16 !text-secondary-900/20" />
            </Empty>
        )
    }

    return (
        <div className="space-y-8">
            <Title title={"نظرات ثبت شده"} />
            <TabGroup tabs={["همه", "در انتظار تایید", "تایید شده", "رد شده"]}>
                <TabGroup.Item>
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                        {sortedCommnets.map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </div>
                </TabGroup.Item>
                <TabGroup.Item>
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                        {sortedCommnets.filter((c) => c.status === 1).map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </div>
                </TabGroup.Item>
                <TabGroup.Item>
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                        {sortedCommnets.filter((c) => c.status === 2).map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </div>
                </TabGroup.Item>
                <TabGroup.Item>
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                        {sortedCommnets.filter((c) => c.status === 0).map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </div>
                </TabGroup.Item>
            </TabGroup>
        </div>
    )
}
