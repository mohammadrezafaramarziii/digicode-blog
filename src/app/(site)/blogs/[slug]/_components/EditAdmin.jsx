"use client"
import { useAuth } from "@/context/AuthContext"
import { EditIcon } from "@/ui/Icons";
import Link from "next/link";

export default function EditAdmin({ postId }) {
    const { user } = useAuth();

    if (user && user?.role === "ADMIN") {
        return (
            <Link href={`/admin/posts/${postId}/edit`} className="w-full bg-primary-800 p-4 text-lg border-2 border-transparent hover:border-primary-900 duration-200 text-primary-900 rounded-lg font-semibold flex items-center gap-2 justify-center">
                ویرایش توسط ادمین
                <EditIcon className="w-7 h-7" />
            </Link>
        )
    }
}
