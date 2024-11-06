import { Suspense } from "react"
import PostList from "../_components/PostList"
import PostListLoading from "../_components/PostListLoading"
import Image from "next/image"

function page() {
    return (
        <div className="w-full">
            <div className="pb-8 pr-2 flex items-center gap-3">
                <Image
                    src={'/images/blog-pic.png'}
                    alt="مقالات"
                    width={50}
                    height={50}
                />
                <h1 className="text-4xl font-black text-primary-900 ">
                    مقالات
                </h1>
            </div>

            <Suspense fallback={<PostListLoading />}>
                <PostList />
            </Suspense>
        </div>
    )
}

export default page
