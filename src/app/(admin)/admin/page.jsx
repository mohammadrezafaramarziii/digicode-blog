import PostsTable from "./posts/_/components/PostsTable";
import { Suspense } from "react";
import CardWrapper from "../_components/CardWrapper";
import CardWrapperSkeleton from "../_components/CardWrapperSkeleton";
import PostTableSkeleton from "./posts/_/components/PostTableSkeleton";
import Title from "@/app/(dashboard)/_components/Title";
import TitleDot from "@/app/(dashboard)/_components/TitleDot";

export default async function AdminDashboard() {
    return (
        <div>
            <Title title={'پیشخوان سایت'} />
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
