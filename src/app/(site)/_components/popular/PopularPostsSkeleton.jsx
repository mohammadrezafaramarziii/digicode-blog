import PostCardSkeleton from "../PostCardSkeleton";

export default function PopularPostsSkeleton() {
    return Array(3).fill({}).map((_, index) => (
        <PostCardSkeleton key={index} />
    ))
}
