"use client"
import Link from "next/link";
import { menuData } from "./Menu";
import { usePathname } from "next/navigation";

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="w-full lg:hidden fixed bottom-0 right-0 p-5 z-40 rounded-t-3xl bg-background shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">
            <ul className="w-full flex items-center gap-4 justify-around">
                {menuData.map((item, index) => (
                    item.mobile ?
                        <Link key={index} href={item.href} className={`${pathname === item.href ? "text-primary-900" : "text-secondary-900"} flex flex-col items-center gap-1 text-xs font-medium`}>
                            {<item.icon className={`w-5 h-5`} />}
                            <span className="truncate">{item.text}</span>
                        </Link>
                        : null
                ))}
            </ul>
        </div>
    )
}
