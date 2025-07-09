import { getCategories } from "@/services/categoryService";
import Link from "next/link";

const categoryStyle = {
    0: "badge--danger",
    1: "badge--primary",
    2: "badge--deep-red",
    3: "badge--warning",
    4: "badge--success",
    5: "badge--primary",
    6: "badge--danger",
}
export const revalidate = 0;

export default async function PopularsCategory() {
    const { categories } = await getCategories();

    return (
        categories.slice(0, 7).map((category, index) => (
            <CateItem key={category._id} category={category} index={index} />
        ))
    )
}

async function CateItem({ category, index }) {
    return (
        <Link key={category._id} href={`/blogs/category/${category.slug}`} className={`badge ${categoryStyle[index]}`}>
            {category.title}
        </Link>
    )
}