import CoverImage from "./CoverImage";
import Link from "next/link";
import Avatar from "@/ui/Avatar";
import PostInteraction from "./PostInteraction";
import Pagination from "@/ui/Pagination";

async function PostList({ posts, totalPages }) {
    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post._id} className="w-full flex flex-col bg-primary-800 rounded-3xl">
                        <Link href={`/blogs/${post.slug}`} className="block">
                            <CoverImage {...post} />
                        </Link>

                        {/* post content */}
                        <div className="w-full flex-1 flex flex-col justify-between p-4">

                            <div>
                                <Link href={`/blogs/${post.slug}`}>
                                    <h2 className="text-secondary-900 text-lg line-clamp-1 font-semibold mb-1 hover:text-primary-900 duration-100">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="mb-[18px] text-sm text-secondary-700 line-clamp-2">
                                    {post.briefText}
                                </p>
                            </div>
                            <div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <Avatar avatar={post.author.avatarUrl} name={post.author.name} width={35} />
                                        <div className="flex flex-col gap-px">
                                            <h6 className="text-xs text-secondary-900 font-semibold">
                                                {post.author.name}
                                            </h6>
                                            <span className="text-xs text-secondary-700">
                                                {new Date(post.createdAt).toLocaleDateString("fa-IR", { year: "numeric", month: "2-digit", day: "2-digit" })}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={`/blogs/${post.category.slug}`} className="badge badge--deep-red !text-xs">
                                            {post.category.title}
                                        </Link>
                                    </div>
                                </div>
                                <PostInteraction post={post} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center pt-6">
                <Pagination totalPages={totalPages} />
            </div>

        </>
    )
}

export default PostList
