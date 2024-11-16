import SkeletonLoading from "@/ui/SkeletonLoading";

export default function PostListLoading() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array(6).fill({}).map((item, index) => (
                <div key={index} className="w-full bg-primary-800/40 rounded-3xl">
                    <div className="aspect-w-16 aspect-h-11 rounded-3xl overflow-hidden">
                        <SkeletonLoading containerClassName="!w-full !h-full !block" className="!w-full !h-full !block !rounded-3xl" />
                    </div>

                    <div className="w-full p-4">
                        <SkeletonLoading className="!w-10/12 !h-7 !rounded-lg !mb-1" />
                        <SkeletonLoading className="!w-1/2 !h-5 !rounded-lg !mb-[18px]" />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <SkeletonLoading containerClassName="!w-[35px] !h-[35px] !block" className="!w-[35px] !h-[35px] !rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <SkeletonLoading containerClassName="!block !w-[62px] !h-4 !rounded" className="!w-[62px] !h-4 !rounded" />
                                    <SkeletonLoading containerClassName="!block !w-[50px] !h-4 !rounded" className="!w-[50px] !h-4 !rounded" />
                                </div>
                            </div>
                            <SkeletonLoading className="!w-[73px] !h-7 !rounded-md" />
                        </div>
                        <div className="pt-4 flex items-center gap-2 justify-end">
                            <SkeletonLoading className="!w-7 !h-7 !rounded-lg" />
                            <SkeletonLoading className="!w-7 !h-7 !rounded-lg" />
                            <SkeletonLoading className="!w-7 !h-7 !rounded-lg" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
