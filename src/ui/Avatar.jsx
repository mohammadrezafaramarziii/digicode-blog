import Image from "next/image";

export default function Avatar({ avatar, name, width = 24 }) {
    return (
        <Image
            src={avatar || ""}
            alt={name || "تصویر"}
            width={width}
            height={width}
            className="rounded-full overflow-hidden"
        />
    )
}
