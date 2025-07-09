import LatestPost from "@/app/(site)/_components/latest/LatestPost";
import RandomPosts from "@/app/(site)/_components/RandomPosts";
import { Suspense } from "react";
import BannerSliderContainer from "./banner/BannerSliderContainer";
import BannerSliderSkeleton from "./banner/BannerSliderSkeleton";
import Link from "next/link";
import Button from "@/ui/Button";
import PopularPosts from "./popular/PopularPosts";
import PopularPostsSkeleton from "./popular/PopularPostsSkeleton";
import LatestPostSkeleton from "./latest/LatestPostSkeleton";
import RandomPostSkeleton from "./RandomPostSkeleton";


export default function HomePosts() {
    return (
        <>
            <Suspense fallback={<BannerSliderSkeleton />}>
                <BannerSliderContainer />
            </Suspense>
            <div className="pt-16 max-w-screen-lg mx-auto">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>

                    </div>
                    <h4 className="text-2xl font-bold text-primary-900 sm:pr-[110px]">
                        محبوبترین مقالات
                    </h4>
                    <Link href={'/blogs'}>
                        <Button varint="secondary">
                            مشاهده همه
                        </Button>
                    </Link>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                    <Suspense fallback={<PopularPostsSkeleton />}>
                        <PopularPosts />
                    </Suspense>
                </div>
            </div>
            <Suspense fallback={<LatestPostSkeleton />}>
                <LatestPost />
            </Suspense>

            <div className="pt-16 max-w-screen-lg mx-auto">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                    <Suspense fallback={<RandomPostSkeleton />}>
                        <RandomPosts />
                    </Suspense>
                </div>
            </div>

        </>
    )

}
