import { getAllCommentsApi } from "@/services/commentService";
import CommentList from "./_/components/CommentList";

export const revalidate = 0;

export default async function CommentsPage() {
    const { comments } = await getAllCommentsApi();

    return (
        <div>
            <CommentList comments={comments} />
        </div>
    )
}
