import Title from "@/app/(dashboard)/_components/Title";
import CreatePostForm from "../../create/_/CreatePostForm";
import { getPostById } from "@/services/postServices";

export default async function UpdatePage({ params: { postId } }) {
    const { post } = await getPostById(postId);

    if (!post) {
        throw new Error()
    }

    return (
        <div className="relative">
            <Title title={'ویرایش مقاله'} />
            <CreatePostForm postToEdit={post} />
        </div>
    )
}
