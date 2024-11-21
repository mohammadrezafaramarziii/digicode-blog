import { fetchCardData } from "@/lib/data";
import Title from "../_components/Title";
import Card from "../_components/Card";

export default async function Dashboard() {
    const {
        numberOfComments,
        numberOfPosts,
        numberOfUsers,
    } = await fetchCardData();

    return (
        <div>
            <Title title={'داشبورد'} />

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 bg-white p-8 rounded-xl mt-6">
                <Card title={'کاربران'} value={`${numberOfUsers} کاربر`} type={"users"}/>
                <Card title={'نظرات'} value={`${numberOfComments} نظر`} type={"comments"}/>
                <Card title={'پست ها'} value={`${numberOfPosts} پست`} type={"posts"}/>
            </div>
        </div>
    )
}
