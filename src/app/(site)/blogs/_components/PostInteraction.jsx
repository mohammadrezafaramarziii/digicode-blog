"use client"
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon"
import { BookmarkLinearIcon, BookmarkSolidIcon, ChatDotsOutlineIcon, HeartLinearIcon, HeartSolidIcon } from "@/ui/Icons"

function PostInteraction({ post }) {
    const { likePost, bookmarkPost } = useAuth();

    const likeHandler = async (postId) => {
        await likePost(postId);
    }

    const bookmarkHandler = async (postId) => {
        await bookmarkPost(postId);
    }

    return (
        <div className="w-full flex items-center gap-2 justify-end pt-4">
            <ButtonIcon variant="yellow" noHover={true}>
                <ChatDotsOutlineIcon />
                <span>
                    {post.commentsCount}
                </span>
            </ButtonIcon>
            <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
                {post.isLiked ? <HeartSolidIcon /> : <HeartLinearIcon />}
                <span>
                    {post.likesCount}
                </span>
            </ButtonIcon>
            <ButtonIcon onClick={() => bookmarkHandler(post._id)}>
                {post.isBookmarked ? <BookmarkSolidIcon /> : <BookmarkLinearIcon />}
            </ButtonIcon>
        </div>
    )
}

export default PostInteraction
