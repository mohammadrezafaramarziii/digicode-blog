import { Suspense } from "react"
import PostList from "../_components/PostList"
import PostListLoading from "../_components/PostListLoading"
import Image from "next/image"
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

//*  for re-build page
// export const revalidate = 10;

//* convert to dynamic page and not statis
// export const revalidate = 0; 

//* ISR => incremental static re-generation

// export const experimental_ppr = true

async function BlogPage({ searchParams }) {
    // await new Promise((res) => setTimeout(() => res(), 3000));
    const queries = queryString.stringify(await searchParams);
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
    const { posts, totalPages } = await getPosts(queries, options);

    return (
        <PostList posts={posts} totalPages={totalPages}/>
    )
}

export default BlogPage
