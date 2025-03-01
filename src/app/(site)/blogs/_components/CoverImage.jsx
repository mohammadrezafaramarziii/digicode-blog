import Image from "next/image";

export default function CoverImage({ title, coverImageUrl, className }) {
    return (
        <div className={`aspect-w-16 aspect-h-11 rounded-3xl overflow-hidden ${className}`}>
            <Image
                src={coverImageUrl}
                alt={title}
                // width={400}
                // height={400}
                fill
                priority
                className="w-full h-full object-cover object-center hover:scale-110 duration-200 ease-in-out"
            />
        </div>
    )
}
