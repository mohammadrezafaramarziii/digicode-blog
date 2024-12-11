import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import Title from "../../_components/Title";
import PostSaveItem from "../bookmarks/_components/PostSaveItem";
import Empty from "@/ui/Empty";
import { HeartSolidIcon } from "@/ui/Icons";

export default async function LikedPage() {
    const storeCookie = await cookies();
    const options = setCookieOnReq(storeCookie);
    const { posts } = await getPosts("limit=50", options);
    const likedData = posts?.filter((p) => p.isLiked === true);

    if(!likedData.length){
        return(
            <Empty text="مقاله ای را لایک نکرده اید!">
                <HeartSolidIcon className="w-16 h-16 !text-secondary-900/20"/>
            </Empty>
        )
    }

    return (
        <div>
            <Title title={"لایک شده های من"} />
            <div className="w-full grid grid-cols-1 min-[372px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-6 gap-2">
                {likedData.map((item) => (
                    <PostSaveItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}
