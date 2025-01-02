import CoverImage from "@/app/(site)/blogs/_components/CoverImage";
import Link from "next/link";

export default function LatestPost({ post }) {
    return (
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 mt-28 max-w-screen-lg mx-auto">
            <div className="flex flex-col items-start">
                <div className="mb-4">
                    <Link href={`/blogs/${post.category.slug}`} className="badge badge--deep-red !text-xs">
                        {post.category.title}
                    </Link>
                </div>
                <div>
                    <Link href={`/blogs/${post.slug}`}>
                        <h2 className="text-start text-secondary-900 text-2xl line-clamp-1 font-bold mb-1 hover:text-primary-900 duration-100">
                            {post.title}
                        </h2>
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: post.text }} className="text-start mb-[18px] text-secondary-700 line-clamp-6 w-full">
                    </div>
                </div>
            </div>

            <Link href={`/blogs/${post.slug}`} className="block">
                <CoverImage {...post} className="!rounded-2xl" />
            </Link>
        </div>
    )
}
