import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import { ForwardLeftOutlineIcon } from "@/ui/Icons";
import Link from "next/link";

export default function Comment({ comment, isAuth, onAddComment }) {
    return (
        <div className="p-6">
            <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-b-primary-800">
                <div className="flex items-center gap-2">
                    <Avatar
                        name={comment.user.name}
                        avatar={comment.user.avatarUrl}
                        width={44}
                    />
                    <div className="flex flex-col">
                        <div className="font-bold text-secondary-900">
                            {comment.user.name}
                        </div>
                        <span className="text-xs text-secondary-700">
                            {comment.createdAt || "همین الان"}
                        </span>
                    </div>
                </div>

                <div>
                    {comment.openToComment && isAuth &&
                        <ButtonIcon onClick={onAddComment}>
                            <Link href="#add-comment">
                                <ForwardLeftOutlineIcon className="!w-5 !h-5" />
                            </Link>
                        </ButtonIcon>
                    }
                </div>
            </div>

            <p className="text-sm font-bold text-secondary-800">
                {comment.content.text}
            </p>
        </div>
    )
}
