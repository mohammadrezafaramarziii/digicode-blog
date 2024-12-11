"use client"
import { useSettings } from "@/context/SettingsContext";
import Skeleton from "react-loading-skeleton";

export default function SkeletonLoading({ ...rest }) {
    const { darkMode } = useSettings();
    // #F4F5F7 baseColor for ligth
    // #001E3D baseColor for dark

    // highlightColor for ligth #1111110d
    // highlightColor for dark #FFFFFF0d

    return (
        <Skeleton {...rest} baseColor={darkMode ? "#001E3D" : "#F4F5F7"} highlightColor={darkMode ? "#FFFFFF0d" : "#1111110d"} />
    )
}
