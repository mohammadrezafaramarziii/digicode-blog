import SkeletonLoading from "@/ui/SkeletonLoading";

export default function BannerSliderSkeleton() {
    return (
        <div className="mt-10 lg:mt-16 max-w-screen-lg mx-auto">
            <div className="aspect-w-10 aspect-h-5">
                <SkeletonLoading containerClassName="!block !w-full !h-full" className="!rounded-3xl !w-full !h-full" />
            </div>
        </div>
    )
}
