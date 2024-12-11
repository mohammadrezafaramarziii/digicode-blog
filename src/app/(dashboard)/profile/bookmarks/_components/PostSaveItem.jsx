"use client"
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkLinearIcon, BookmarkSolidIcon, ChatDotsOutlineIcon, HeartLinearIcon, HeartSolidIcon } from "@/ui/Icons";
import Image from "next/image";
import Link from "next/link";

export default function PostSaveItem({ item }) {
    const { likePost, bookmarkPost } = useAuth();

    const likeHandler = async (postId) => {
        await likePost(postId);
    }

    const bookmarkHandler = async (postId) => {
        await bookmarkPost(postId);
    }


    return (
        <div key={item._id} className="border border-secondary-900/20 rounded-lg overflow-hidden">
            <Link href={`/blogs/${item.slug}`}>
                <div className="aspect-w-6 aspect-h-6 relative">
                    <Image
                        src={item.coverImageUrl}
                        alt=""
                        fill
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </Link>
            <div className="flex items-center justify-between gap-3 p-3">
                <div className="flex items-center gap-2">
                    <ButtonIcon className="!p-0" variant="none" onClick={() => likeHandler(item._id)}>
                        {item.isLiked ? <HeartSolidIcon className="!w-5 !h-5 !text-red-500" /> : <HeartLinearIcon className="!w-5 !h-5 !text-secondary-900" />}
                        <span className="!text-secondary-900">
                            {item.likesCount}
                        </span>
                    </ButtonIcon>
                    <ButtonIcon className="!p-0" variant="none" noHover={true}>
                        <ChatDotsOutlineIcon className="!w-5 !h-5 !text-secondary-900" />
                        <span className="!text-secondary-900">
                            {item.commentsCount}
                        </span>
                    </ButtonIcon>
                </div>
                <ButtonIcon className="!p-0" variant="none" onClick={() => bookmarkHandler(item._id)}>
                    {item.isBookmarked ? <BookmarkSolidIcon className="!w-5 !h-5 !text-primary-900" /> : <BookmarkLinearIcon className="!w-5 !h-5 !text-secondary-900" />}
                </ButtonIcon>
            </div>
        </div>
    )
}
