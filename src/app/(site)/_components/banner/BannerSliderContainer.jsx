import { getPosts } from "@/services/postServices";
import BannerSliderList from "./BannerSliderList";

export const revalidate = 0;

export default async function BannerSliderContainer() {
    const { posts } = await getPosts();

    return (
        <div className="mt-10 lg:mt-16 max-w-screen-lg mx-auto">
            <BannerSliderList posts={posts} />
        </div>
    )
}
