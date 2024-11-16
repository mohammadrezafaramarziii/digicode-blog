import { BookBlogsBoldDuotoneIcon, ClockCircleOutlineIcon, UserLinearIcon } from "@/ui/Icons";
import Link from "next/link";

export default function RelatedPost({ posts }) {
    return (
        <div className="w-full bg-primary-800 p-6 rounded-xl">
            <div className="flex items-center gap-1">
                <BookBlogsBoldDuotoneIcon className="w-5 h-5 text-primary-900/30" />
                <h3 className="font-bold text-secondary-800">
                    مطالب مرتبط
                </h3>
            </div>
            <div className="w-full flex flex-col gap-4 pt-5">
                {posts.map((post) => (
                    <div key={post._id} className="w-full bg-background rounded-lg p-4">
                        <div className="w-full flex items-center gap-3">
                            <div className="-mr-4 bg-primary-900 w-1.5 h-9 rounded-l-full"></div>
                            <Link href={`/blogs/${post.slug}`} className="text-sm font-bold text-secondary-900 duration-200 hover:text-primary-900">
                                {post.title}
                            </Link>
                        </div>
                        <div className="w-full flex items-center justify-end pt-4">
                            <div className="flex items-center gap-1 text-[10px] text-secondary-700 border-l border-secondary-700/50 pl-2 ml-2">
                                <UserLinearIcon className="w-3 h-3" />
                                <div>
                                    {post.author.name}
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-secondary-700">
                                <ClockCircleOutlineIcon className="w-3 h-3" />
                                <div className="flex items-center gap-0.5">
                                    زمان مطالعه:
                                    <span>
                                        {post.readingTime}
                                    </span>
                                    دقیقه
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
