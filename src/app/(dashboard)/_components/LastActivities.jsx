import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import PostSaveItem from "../profile/bookmarks/_components/PostSaveItem";
import LastLikes from "./LastLikes";
import TitleDot from "./TitleDot";
import LastBookmarks from "./LastBookmarks";

export default async function LastActivities() {
    const storeCookie = await cookies();
    const options = setCookieOnReq(storeCookie);
    const { posts } = await getPosts("limit=50", options);
    const likedData = posts?.filter((p) => p.isLiked === true);
    const bookmarkedData = posts?.filter((p) => p.isBookmarked === true);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {likedData.length > 0 &&
                <div className="flex flex-col gap-4 bg-background p-6 rounded-lg">
                    <TitleDot title={"آخرین لایک شده ها"} />
                    <LastLikes likes={likedData} />
                </div>
            }
            {bookmarkedData.length > 0 &&
                <div className="flex flex-col gap-4 bg-background p-6 rounded-lg">
                    <TitleDot title={"آخرین ذخیره شده ها"} />
                    <LastBookmarks bookmarks={bookmarkedData} />
                </div>
            }
        </div>
    )
}
