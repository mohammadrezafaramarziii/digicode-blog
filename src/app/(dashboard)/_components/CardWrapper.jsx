import { fetchCardUserNormal } from "@/lib/dataUserNormal";
import Card from "./Card";

export default async function CardWrapper() {
    const { numberOfBookmarks, numberOfComments, numberOfLikes } = await fetchCardUserNormal();

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-background p-8 rounded-xl mt-6">
            <Card title={'لایک شده'} value={`${numberOfLikes} پست`} type={"likes"} />
            <Card title={'ذخیره شده'} value={`${numberOfBookmarks} پست`} type={"bookmarks"} />
            <Card title={'نظرات'} value={`${numberOfComments} نظر`} type={"comments"} />
        </div>
    )
}
