import SkeletonLoading from '@/ui/SkeletonLoading'

export default function LatestPostSkeleton() {
    return (
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 mt-28 max-w-screen-lg mx-auto">
            <div className="flex flex-col items-start">
                <div className="mb-4">
                    <SkeletonLoading containerClassName="!block !w-[74px] !h-[28px]" className="!rounded-md !w-full !h-full" />
                </div>
                <div className='w-full mb-[18px]'>
                    <div className='w-full mb-2'>
                        <SkeletonLoading containerClassName="!block !w-full !h-8" className="!rounded-lg !w-full !h-full" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded !w-full !h-full" />
                        <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded !w-full !h-full" />
                        <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded !w-full !h-full" />
                        <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded !w-full !h-full" />
                        <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded !w-full !h-full" />
                        <SkeletonLoading containerClassName="!block !w-full !h-4" className="!rounded !w-full !h-full" />
                        <SkeletonLoading containerClassName="!block !w-[20%] !h-4" className="!rounded !w-full !h-full" />
                    </div>
                </div>
            </div>

            <div className='aspect-w-16 aspect-h-11 '>
                <SkeletonLoading containerClassName="!block !w-full !h-full" className="!rounded-3xl !w-full !h-full" />
            </div>
        </div>
    )
}
