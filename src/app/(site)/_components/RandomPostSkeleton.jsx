import PostCardSkeleton from "./PostCardSkeleton";

export default function RandomPostSkeleton() {
    return Array(3).fill({}).map((_, index) => (
        <PostCardSkeleton key={index} />
    ))
}
