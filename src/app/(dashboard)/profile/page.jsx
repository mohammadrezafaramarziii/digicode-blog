import Title from "../_components/Title";
import PostsTable from "./posts/_/components/PostsTable";
import { Suspense } from "react";
import CardWrapper from "../_components/CardWrapper";
import CardWrapperSkeleton from "../_components/CardWrapperSkeleton";
import TitleDot from "../_components/TitleDot";
import PostTableSkeleton from "./posts/_/components/PostTableSkeleton";

export default async function Dashboard() {

    return (
        <div>
            <Title title={'داشبورد'} />
            <Suspense fallback={<CardWrapperSkeleton />}>
                <CardWrapper />
            </Suspense>


            <div className="pt-10">
                <TitleDot title={'آخرین مقالات'} />
            </div>
            <Suspense fallback={<PostTableSkeleton />}>
                <PostsTable query="sort=latest&limit=5" />
            </Suspense>
        </div>
    )
}
