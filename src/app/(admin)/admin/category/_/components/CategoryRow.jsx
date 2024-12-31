"use client"
import Table from "@/ui/Table";
import { toPersianDateLong } from "@/utils/dateFormatter";
import { DeleteCategory, UpdateCategory } from "./CategoryButtons";
import CategoryForm from "./CategoryForm";
import { getPosts } from "@/services/postServices";
import { useEffect, useState } from "react";

export default function CategoryRow({ category, index }) {
    const { title, englishTitle, createdAt, _id } = category;
    const [postsLength, setPostsLength] = useState(0);
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                const { posts } = await getPosts(`&categorySlug=${category.englishTitle}`);
                setPostsLength(posts.length);
            } catch (error) {
                setPostsLength(0);
            }
        }

        fetchPosts();
    }, [category.englishTitle])

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{englishTitle}</td>
            <td>{toPersianDateLong(createdAt)}</td>
            <td>
                <div className="flex items-center justify-end gap-2">
                    <CategoryForm category={category} />
                    <DeleteCategory id={_id} title={title} notRemove={postsLength > 0} />
                </div>
            </td>
        </Table.Row>
    )
}
