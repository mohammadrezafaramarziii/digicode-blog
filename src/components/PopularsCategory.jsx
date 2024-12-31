import { getCategories } from "@/services/categoryService";
import { getPosts } from "@/services/postServices";
import { CategoryBoldDuotoneIcon } from "@/ui/Icons";
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

export default async function PopularsCategory() {
    const { categories } = await getCategories();

    return (
        <div className="pt-16 max-w-screen-lg mx-auto">
            <div className="w-full border-t-2 border-t-secondary-900/10 pt-14">
                <div className="w-full flex items-center justify-center gap-4">
                    <CategoryBoldDuotoneIcon className="w-7 h-7 text-secondary-900/40" />
                    <h4 className="text-2xl font-black text-secondary-900">
                        پربازدید ترین دسته بندی ها
                    </h4>
                </div>

                <div className="w-full max-w-md mx-auto flex items-center justify-center flex-wrap gap-4 mt-8">
                    {categories.slice(0, 7).map((category, index) => (
                        <CateItem key={category._id} category={category} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

async function CateItem({ category, index }) {
    const { posts } = await getPosts(`&categorySlug=${category.englishTitle}`);

    if (posts.length < 3) return null

    return (
        <Link key={category._id} href={`/blogs/${category.slug}`} className={`badge ${categoryStyle[index]}`}>
            {category.title}
        </Link>
    )
}