import SkeletonLoading from "@/ui/SkeletonLoading";

export default function PostTableSkeleton() {
    return (
        <div className="w-full h-[156px] lg:h-[380px] mt-6">
            <SkeletonLoading containerClassName="!block !w-full !h-full" className="!rounded-xl !w-full !h-full"/>
        </div>
    )
}
