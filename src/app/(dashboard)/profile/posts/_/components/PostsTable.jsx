import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import PostRow from "./PostRow";

export default async function PostsTable() {
    const posts = await getPosts();

    if (!posts.length) return null

    return (
        <div className="w-full mt-6">
            <Table>
                <Table.Header>
                    <th>#</th>
                    <th>عنوان</th>
                    <th>دسته بندی</th>
                    <th>نویسنده</th>
                    <th>تاریخ ایجاد</th>
                    <th>نوع</th>
                    <th></th>
                </Table.Header>
                <Table.Body>
                    {posts.map((post, index) => (
                        <PostRow key={post._id} index={index} post={post}/>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
