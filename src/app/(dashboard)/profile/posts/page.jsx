import Title from "../../_components/Title";
import PostsTable from "./_/components/PostsTable";

export default function PostsPage() {
    return (
        <div className="w-full">
            <Title title={'پست ها'} />
            <PostsTable />
        </div>
    )
}
