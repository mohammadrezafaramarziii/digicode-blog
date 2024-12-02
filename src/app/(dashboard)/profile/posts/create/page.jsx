import Title from "@/app/(dashboard)/_components/Title"
import CreatePostForm from "./_/CreatePostForm"

export default function CreatePost() {
    return (
        <div className="relative">
            <Title title={'مقاله جدید'} />
            <CreatePostForm />
        </div>
    )
}
