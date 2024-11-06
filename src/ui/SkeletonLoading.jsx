import Skeleton from "react-loading-skeleton";

export default function SkeletonLoading({ ...rest }) {
    // #F4F5F7 baseColor for ligth
    // #001E3D baseColor for dark

    // highlightColor for ligth #1111110d
    // highlightColor for dark #FFFFFF0d

    return (
        <Skeleton {...rest} baseColor="#F4F5F7" highlightColor="#1111110d" />
    )
}
