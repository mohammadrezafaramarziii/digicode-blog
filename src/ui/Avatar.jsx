import Image from "next/image";

export default function Avatar({ avatar, name, width = 24 }) {
    return (
        <div style={{ width, height: width }}>
            <Image
                src={avatar || "/images/userDefault.png"}
                alt={name || "تصویر"}
                width={width}
                height={width}
                className="rounded-full overflow-hidden object-cover object-center w-full h-full"
            />
        </div>
    )
}
