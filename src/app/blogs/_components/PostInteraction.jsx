import ButtonIcon from "@/ui/ButtonIcon"
import { BookmarkLinearIcon, ChatDotsOutlineIcon, HeartLinearIcon } from "@/ui/Icons"

function PostInteraction({ post }) {
    return (
        <div className="w-full flex items-center gap-2 justify-end pt-4">
            <ButtonIcon variant="yellow" noHover={true}>
                <ChatDotsOutlineIcon />
                <span>
                    {post.commentsCount}
                </span>
            </ButtonIcon>
            <ButtonIcon variant="red">
                <HeartLinearIcon />
                <span>
                    {post.likesCount}
                </span>
            </ButtonIcon>
            <ButtonIcon>
                <BookmarkLinearIcon />
            </ButtonIcon>
        </div>
    )
}

export default PostInteraction
