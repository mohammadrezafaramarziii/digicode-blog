import SkeletonLoading from "@/ui/SkeletonLoading";

export default function CardWrapperSkeleton() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-background p-8 rounded-xl mt-6">
            {Array(3).fill({}).map((item, index) => (
                <div key={index} className="flex items-center gap-4 md:border-l border-l-secondary-900/10 last:border-l-0">
                    <div>
                        <SkeletonLoading containerClassName="!block !w-12 !h-12" className={` !rounded-2xl !w-full !h-full !block`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <SkeletonLoading containerClassName="!block !rounded-md !w-10 !h-4" className={`!block !rounded-md !w-full !h-full`} />
                        <SkeletonLoading containerClassName="!block !rounded-md !w-20 !h-7" className={`!block !rounded-md !w-full !h-full`} />
                    </div>
                </div>
            ))}
        </div>
    )
}
