import SkeletonLoading from "@/ui/SkeletonLoading";

export default function PostCardSkeleton() {
    return (
        <div className="w-full flex flex-col">
            <div className={`aspect-w-16 aspect-h-11`}>
                <SkeletonLoading containerClassName="!block !w-full !h-full" className="!rounded-2xl !w-full !h-full" />
            </div>

            <div className="w-full flex-1 flex flex-col justify-between pt-4">
                <div className="flex flex-col items-start">
                    <div className="mb-4">
                        <SkeletonLoading containerClassName="!block !w-[50px] !h-7" className="!rounded-md !w-full !h-full" />
                    </div>
                    <div className="w-full mb-[18px]">
                        <div className="w-full mb-4">
                            <SkeletonLoading containerClassName="!block !w-[70%] !h-6" className="!rounded-lg !w-full !h-full" />
                        </div>
                        <div className="w-full flex flex-col h-10 items-start justify-between">
                            <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded-md !w-full !h-full" />
                            <SkeletonLoading containerClassName="!block !w-[85%] !h-4" className="!rounded-md !w-full !h-full" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <SkeletonLoading containerClassName="!block !w-[35px] !h-[35px]" className="!rounded-full !w-full !h-full" />
                        <div className="flex flex-col items-start gap-px">
                            <SkeletonLoading containerClassName="!block !w-[80px] !h-4" className="!rounded-md !w-full !h-full" />
                            <SkeletonLoading containerClassName="!block !w-[50px] !h-4" className="!rounded-md !w-full !h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
