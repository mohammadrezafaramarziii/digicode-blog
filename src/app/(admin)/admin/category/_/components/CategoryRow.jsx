import Table from "@/ui/Table";
import { toPersianDateLong } from "@/utils/dateFormatter";
import { DeleteCategory, UpdateCategory } from "./CategoryButtons";
import CategoryForm from "./CategoryForm";
import { getPosts } from "@/services/postServices";

export default async function CategoryRow({ category, index }) {
    const { title, englishTitle, createdAt, _id } = category;
    const { posts } = await getPosts(`&categorySlug=${category.englishTitle}`);

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{englishTitle}</td>
            <td>{toPersianDateLong(createdAt)}</td>
            <td>
                <div className="flex items-center justify-end gap-2">
                    <CategoryForm category={category} />
                    <DeleteCategory id={_id} title={title} notRemove={posts.length > 0} />
                </div>
            </td>
        </Table.Row>
    )
}
