"use client"
import Title from "@/app/(dashboard)/_components/Title";
import { getCategories } from "@/services/categoryService";
import Table from "@/ui/Table";
import CategoryRow from "./_/components/CategoryRow";
import Link from "next/link";
import Button from "@/ui/Button";
import CategoryForm from "./_/components/CategoryForm";
import useCategories from "@/hooks/useCategories";

export default function CategoryPage() {
    const { rawCategories, isLoading } = useCategories();

    if (isLoading && rawCategories && rawCategories.length > 0) return null

    return (
        <div>
            <Title title={'دسته بندی'} />
            <div className="w-full pt-4 flex justify-end">
                <CategoryForm />
            </div>
            <div className="w-full mt-6">
                <Table>
                    <Table.Header>
                        <th>#</th>
                        <th>عنوان</th>
                        <th>عنوان انگلیسی</th>
                        <th>تاریخ ایجاد</th>
                        <th></th>
                    </Table.Header>
                    <Table.Body>
                        {rawCategories.map((category, index) => (
                            <CategoryRow key={category._id} index={index} category={category} />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
