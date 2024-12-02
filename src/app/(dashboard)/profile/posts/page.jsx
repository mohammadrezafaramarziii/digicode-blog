import { Suspense } from "react";
import Title from "../../_components/Title";
import PostsTable from "./_/components/PostsTable";
import PostTableSkeleton from "./_/components/PostTableSkeleton";
import Search from "@/ui/Search";
import queryString from "query-string";
import Link from "next/link";
import Button from "@/ui/Button";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/postServices";

export default async function PostsPage({ searchParams }) {
    const query = queryString.stringify(searchParams);
    const { totalPages } = await getPosts(query);

    return (
        <div className="w-full">
            <Title title={'لیست مقالات'} />

            <div className="w-full flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between pt-4 gap-4">
                <div>
                    <Search inputClassName={"!bg-background"} btnClassName={"!bg-primary-800"} />
                </div>
                <Link href={'/profile/posts/create'}>
                    <Button>
                        مقاله جدید
                    </Button>
                </Link>
            </div>

            <Suspense fallback={<PostTableSkeleton />} key={query}>
                <PostsTable query={query} />
            </Suspense>

            <div className="w-full flex justify-center pt-6">
                <Pagination totalPages={totalPages}/>
            </div>
        </div>
    )
}
