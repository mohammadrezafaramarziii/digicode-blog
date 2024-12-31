import { getCategories } from "@/services/categoryService";
import { CategoryBoldDuotoneIcon } from "@/ui/Icons";
import Link from "next/link";

export const revalidate = 0;

async function CategoryList() {
    const { categories } = await getCategories();

    return (
        <div className="w-full bg-primary-800 p-6 rounded-xl">
            <div className="w-full flex flex-col gap-5">
                <div className="flex items-center gap-1">
                    <CategoryBoldDuotoneIcon className="w-5 h-5 text-primary-900/30" />
                    <h3 className="font-bold text-secondary-800">
                        دسته بندی ها
                    </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                    <li className="badge badge--primary">
                        <Link href={`/blogs`}>
                            همه دسته بندی ها
                        </Link>
                    </li>
                    {categories.map((category) => (
                        <li key={category._id} className="badge badge--primary">
                            <Link href={`/blogs/category/${category.slug}`}>
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoryList
