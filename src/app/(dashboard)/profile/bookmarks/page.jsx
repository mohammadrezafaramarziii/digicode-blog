import { getPosts } from "@/services/postServices";
import Title from "../../_components/Title";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostSaveItem from "./_components/PostSaveItem";
import { BookmarkSolidIcon } from "@/ui/Icons";
import Empty from "@/ui/Empty";

export default async function BookmarksPage() {
    const storeCookie = await cookies();
    const options = setCookieOnReq(storeCookie);
    const { posts } = await getPosts("limit=50", options);
    const bookmarkedData = posts?.filter((p) => p.isBookmarked === true);

    if (!bookmarkedData.length) {
        return (
            <Empty text="مقاله ای را ذخیره نکرده اید!">
                <BookmarkSolidIcon className="w-16 h-16 !text-secondary-900/20" />
            </Empty>
        )
    }

    return (
        <div>
            <Title title={"ذخیره شده ها"} />
            <div className="w-full grid grid-cols-1 min-[372px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-6 gap-2">
                {bookmarkedData.map((item) => (
                    <PostSaveItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}
