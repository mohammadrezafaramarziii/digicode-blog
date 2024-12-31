"use client";
import { getCategories } from "@/services/categoryService";
import { CategoryBoldDuotoneIcon } from "@/ui/Icons";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoryListMobile() {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const { categories } = await getCategories();
                setCategories(categories);
            } catch (error) {
                setCategories([]);
            }
        }

        fetchCategory();
    }, [])

    return (

        <div>
            <button type="button" onClick={() => setOpen(true)} className="btn flex items-center gap-2 font-bold text-secondary-800 border border-secondary-800">
                <CategoryBoldDuotoneIcon className="w-5 h-5 text-secondary-800/50" />
                فیلتر دسته بندی
            </button>
            <Modal open={open} onClose={() => setOpen(false)} title="فیلتر دسته بندی" className="lg:!hidden">
                <ul className="flex flex-wrap gap-2 mt-4">
                    <li onClick={() => setOpen(false)} className="badge badge--primary">
                        <Link href={`/blogs`}>
                            همه دسته بندی ها
                        </Link>
                    </li>
                    {categories.map((category) => (
                        <li key={category._id} className="badge badge--primary" onClick={() => setOpen(false)}>
                            <Link href={`/blogs/category/${category.slug}`}>
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Modal>
        </div>
    )
}
