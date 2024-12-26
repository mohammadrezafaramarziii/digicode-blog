import { fetchCardData } from "@/lib/data";
import Card from "../../(admin)/_components/Card";

export default async function CardWrapper() {
    const {
        numberOfComments,
        numberOfPosts,
        numberOfUsers,
    } = await fetchCardData();
    // await new Promise(resolve => setTimeout((resolve), 3000))

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-background p-8 rounded-xl mt-6">
            <Card title={'کاربران'} value={`${numberOfUsers} کاربر`} type={"users"} />
            <Card title={'نظرات'} value={`${numberOfComments} نظر`} type={"comments"} />
            <Card title={'پست ها'} value={`${numberOfPosts} پست`} type={"posts"} />
        </div>
    )
}
