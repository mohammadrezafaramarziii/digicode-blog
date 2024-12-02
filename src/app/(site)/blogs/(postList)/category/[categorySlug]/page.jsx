import { cookies } from "next/headers";
import PostList from "../../../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";

export default async function CategorySlug({ params, searchParams }) {
    const { categorySlug } = await params;
    const queries = `${queryString.stringify(await searchParams)}&categorySlug=${categorySlug}`;
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
    const {posts} = await getPosts(queries, options);

    return (
        <div>
            {posts.length === 0 ?
                <p>پستی یافت نشد</p>
                :
                <PostList posts={posts} />
            }
        </div>
    )
}
