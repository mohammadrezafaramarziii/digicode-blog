"use client"
import Avatar from "@/ui/Avatar";

export default function AuthorPost({ author }) {
    return (
        <div className="w-full bg-primary-800 p-6 rounded-xl">
            <div className="flex items-center gap-2">
                <Avatar avatar={author.avatarUrl} name={author.name} width={45}/>
                <h3 className="text-xl font-bold text-secondary-900">
                    {author.name}
                </h3>
            </div>
        </div>
    )
}
