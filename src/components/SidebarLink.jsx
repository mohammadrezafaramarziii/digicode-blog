"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({ href = "#", text, icon }) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <li className={`${active ? "text-primary-900" : "text-secondary-900"} w-full list-none p-2.5 cursor-pointer rounded-md font-medium text-sm hover:bg-primary-800 duration-200`}>
            <Link href={href} className="w-full flex items-center gap-2">
                {icon}
                <span>
                    {text}
                </span>
            </Link>
        </li>
    )
}
