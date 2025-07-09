import CoverImage from "@/app/(site)/blogs/_components/CoverImage";
import { getPosts } from "@/services/postServices";
import Avatar from "@/ui/Avatar";
import Link from "next/link";

export const revalidate = 0;

export default async function PopularPosts() {
    const { posts } = await getPosts("sort=popular");

    return (
        posts.slice(0, 3).map((post) => (
            <div key={post._id} className="w-full flex flex-col">
                <Link href={`/blogs/${post.slug}`} className="block">
                    <CoverImage {...post} className="!rounded-2xl" />
                </Link>

                {/* post content */}
                <div className="w-full flex-1 flex flex-col justify-between pt-4">
                    <div className="flex flex-col items-start">
                        <div className="mb-4">
                            <Link href={`/blogs/category/${post.category.slug}`} className="badge badge--deep-red !text-xs">
                                {post.category.title}
                            </Link>
                        </div>
                        <div>
                            <Link href={`/blogs/${post.slug}`}>
                                <h2 className="text-start text-secondary-900 line-clamp-1 font-semibold mb-1 hover:text-primary-900 duration-100">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-start mb-[18px] text-sm text-secondary-700 line-clamp-2">
                                {post.briefText}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <Avatar avatar={post.author.avatarUrl} name={post.author.name} width={35} />
                            <div className="flex flex-col items-start gap-px">
                                <h6 className="text-xs text-secondary-900 font-semibold">
                                    {post.author.name}
                                </h6>
                                <span className="text-xs text-secondary-700">
                                    {new Date(post.createdAt).toLocaleDateString("fa-IR", { year: "numeric", month: "2-digit", day: "2-digit" })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}
