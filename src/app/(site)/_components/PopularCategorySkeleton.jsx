import SkeletonLoading from '@/ui/SkeletonLoading'

export default function PopularCategorySkeleton() {
    return Array(7).fill({}).map((_, index) => (
        <SkeletonLoading key={index} containerClassName="!block !w-[62px] !h-8" className="!rounded-md !w-full !h-full" />
    ))
}
