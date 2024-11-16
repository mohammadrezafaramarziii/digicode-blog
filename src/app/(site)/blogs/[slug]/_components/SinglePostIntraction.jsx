"use client"
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkLinearIcon, BookmarkSolidIcon, ChatDotsOutlineIcon, HeartLinearIcon, HeartSolidIcon } from "@/ui/Icons";

export default function SinglePostIntraction({ post }) {
    const { likePost, bookmarkPost } = useAuth();

    const likeHandler = async (postId) => {
        await likePost(postId);
    }

    const bookmarkHandler = async (postId) => {
        await bookmarkPost(postId);
    }

    return (
        <div className="flex items-center gap-2 justify-end">
            <ButtonIcon variant="yellow" className={'!bg-transparent !gap-2 !text-base'} noHover={true}>
                <ChatDotsOutlineIcon className="!w-6 !h-6" />
                <span>
                    {post.commentsCount}
                </span>
            </ButtonIcon>
            <ButtonIcon onClick={() => likeHandler(post._id)} variant="red" className={'!bg-transparent !gap-2 !text-base'} noHover={true}>
                {post.isLiked ? <HeartSolidIcon className="!w-6 !h-6" /> : <HeartLinearIcon className="!w-6 !h-6" />}
                <span>
                    {post.likesCount}
                </span>
            </ButtonIcon>
            <ButtonIcon onClick={() => bookmarkHandler(post._id)} className={'!bg-transparent !gap-2 !text-base'} noHover={true}>
                {post.isBookmarked ? <BookmarkSolidIcon className="!w-6 !h-6" /> : <BookmarkLinearIcon className="!w-6 !h-6" />}
            </ButtonIcon>
        </div>
    )
}
