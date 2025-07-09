import { getCategories } from "@/services/categoryService";
import Link from "next/link";

export default async function HeroCategories() {
    const { categories } = await getCategories();

    return (
        <ul className="text-sm text-secondary-900 flex items-center gap p-2 bg-background border border-secondary-900/10 rounded-md">
            {categories.slice(0, 5).map((category) => (
                <li className="px-3.5" key={category._id}>
                    {category.title}
                </li>
            ))}
            <Link href={'/blogs'} className="btn btn--primary">
                مشاهده همه
            </Link>
        </ul>
    )
}
