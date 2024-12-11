import { cookies } from "next/headers";
import PostList from "../../../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import { PostsOutlineIcon } from "@/ui/Icons";

export default async function CategorySlug({ params, searchParams }) {
    const { categorySlug } = await params;
    const queries = `${queryString.stringify(await searchParams)}&categorySlug=${categorySlug}`;
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
    const { posts, totalPages } = await getPosts(queries, options);

    return (
        <div>
            {posts.length === 0 ?
                <Empty text="پستی پیدا نشد!">
                    <PostsOutlineIcon className="w-16 h-16 !text-secondary-900/20" />
                </Empty>
                :
                <PostList posts={posts} totalPages={totalPages} />
            }
        </div>
    )
}
