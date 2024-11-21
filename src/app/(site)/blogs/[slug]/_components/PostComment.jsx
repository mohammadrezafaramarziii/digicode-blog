"use client"
import Button from "@/ui/Button";
import Comment from "./Comment";
import { useAuth } from "@/context/AuthContext";
import Alert from "@/ui/Alert";
import Link from "next/link";
import { useState } from "react";
import CreateCommentForm from "./CreateCommentForm";
import { ChatDotsOutlineIcon } from "@/ui/Icons";

export default function PostComment({ post: { comments, _id: postId } }) {
    const { isAuthenticated, isLoading } = useAuth();
    const [isAddComment, setAddComment] = useState(false);
    const [parent, setParent] = useState();
    
    const addNewCommentHandler = (parent) => {
        setParent(parent);
        setAddComment(true);
    }

    return (
        <div className="w-full bg-primary-800 p-6 rounded-xl">
            <div className="w-full flex items-center justify-between pb-10">
                <h3 className="font-bold text-primary-900 text-2xl">
                    نظرات
                </h3>

                {!isLoading && isAuthenticated &&
                    <Button onClick={() => addNewCommentHandler(null)}>
                        نظر جدید
                    </Button>
                }
            </div>

            {!isLoading && !isAuthenticated &&
                <div className="pb-6">
                    <Alert>
                        <div className="flex items-center justify-between w-full">
                            برای ارسال نظر ابتدا وارد حساب کاربری خود شوید

                            <Link href={'/signin'} className="text-base underline">
                                ورود به حساب کاربری
                            </Link>
                        </div>
                    </Alert>
                </div>
            }

            {isAddComment &&
                <CreateCommentForm onClose={() => setAddComment(false)} parent={parent} postId={postId}/>
            }

            <div>
                {comments.length > 0 ?
                    comments.map((comment) => (
                        <div key={comment._id} className="post-comment mb-6">
                            <div className="bg-background rounded-xl mb-6">
                                <Comment
                                    comment={comment}
                                    isAuth={isAuthenticated}
                                    onAddComment={() => addNewCommentHandler(comment)}
                                />
                            </div>

                            {comment.answers.length > 0 &&
                                <div className="pr-12 flex flex-col gap-6 post-comment__answer relative">
                                    {comment.answers.map((answerComment) => (
                                        <div key={answerComment._id} className="asnwer-item relative bg-background rounded-xl">
                                            <Comment comment={answerComment} isAuth={isAuthenticated} />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    ))
                    :
                    <div className="w-full text-primary-900/50 py-14 flex flex-col gap-4 items-center justify-center">
                        <ChatDotsOutlineIcon className="w-14 h-14"/>
                        <div className="text-lg font-bold">
                            نظری ثبت نشده است!
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
