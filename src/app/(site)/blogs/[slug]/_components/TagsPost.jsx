import { HashtagLineDuotoneIcon } from '@/ui/Icons'
import React from 'react'

export default function TagsPost({tags}) {
    return (
        <div className="w-full bg-primary-800 p-6 rounded-xl">
            <div className="flex items-center gap-1 mb-5">
                <HashtagLineDuotoneIcon className="w-5 h-5 text-primary-900/30" />
                <h3 className="font-bold text-secondary-800">
                    برچسب
                </h3>
            </div>
            <div className="flex items-center flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div key={index} className="badge badge--primary">
                        #{tag}
                    </div>
                ))}
            </div>
        </div>
    )
}
