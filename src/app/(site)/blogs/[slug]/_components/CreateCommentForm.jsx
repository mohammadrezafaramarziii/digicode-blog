"use client"
import { useAuth } from "@/context/AuthContext"
import { createComment } from "@/lib/actions";
import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { useState, useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const initialState = {
    error: "",
    message: ""
}

export default function CreateCommentForm({ onClose, postId, parent }) {
    const { user, isLoading } = useAuth();
    const parentId = parent?._id || null;
    const [text, setText] = useState("");
    const [state, formAction, isPending] = useActionState(createComment, initialState);
    

    useEffect(() => {
        if (state.error) {
            toast.error(state.error);
        }

        if (state.message) {
            toast.success(state.message);
            onClose();
            setText("");
        }
    }, [state])

    if (isLoading) return null

    return (
        <form
            action={async (formData) => {
                await formAction({ formData, postId, parentId })
            }}
            className="w-full bg-white rounded-lg p-4 mb-5"
            id="add-comment"
        >
            <div className="flex items-center gap-2 pb-3">
                <Avatar
                    name={user.name}
                    avatar={user.avatarUrl}
                    width={60}
                />
                <div className="flex flex-col">
                    <div className="text-lg font-bold text-secondary-900">
                        {user.name}
                    </div>
                    <span className="text-secondary-700">
                        {user.email}
                    </span>
                </div>
            </div>

            <TextArea
                placeholder={parent ? `در پاسخ به نظر ${parent.user.name}` : "متن نظر خود را بنویسید..."}
                name={'text'}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="w-full flex items-center gap-2 pt-4">
                {isPending ?

                    <Button>
                        در حال ارسال ...
                    </Button>
                    :
                    <>
                        <Button type="submit">
                            ثبت نظر
                        </Button>
                        <Button varint="secondary" onClick={onClose}>
                            لغو
                        </Button>
                    </>
                }
            </div>
        </form>
    )
}
