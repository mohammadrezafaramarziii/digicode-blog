import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import PostCard from "./PostCard";
import Empty from "@/ui/Empty";
import { PostsOutlineIcon } from "@/ui/Icons";

export default async function PostsTable({ query = "" }) {
    const { posts } = await getPosts(query);
    // await new Promise(resolve => setTimeout((resolve), 5000))

    if (!posts.length) return (
        <Empty text={"مقاله ای یافت نشد!"}>
            <PostsOutlineIcon className="w-16 h-16 !text-secondary-900/20" />
        </Empty>
    )

    return (
        <div className="w-full mt-6">
            <div className="hidden lg:block">
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
                            <PostRow key={post._id} index={index} post={post} />
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <div className="lg:hidden flex flex-col gap4">
                {posts.map((post, index) => (
                    <PostCard key={post._id} index={index} post={post} />
                ))}
            </div>
        </div>
    )
}
