"use client"
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import { CalendarLinearIcon, CloseIcon } from "@/ui/Icons";
import Link from "next/link";
import { toPersianDateWeek } from "@/utils/dateFormatter";
import NavOptions from "@/app/(dashboard)/_components/NavOptions";
import SidebarLink from "@/components/SidebarLink";
import { menuData } from "./Menu";
import { DigiCodeLogoLg } from "@/components/DigiCodeLogo";

export default function SidebarAdmin({ onClose }) {
    const { user } = useAuth();

    return (
        <aside className="w-full min-h-full flex flex-col bg-background border-l border-l-secondary-900/10">
            <div className="w-full flex-1 p-4 flex flex-col gap-8">
                <div className="flex items-center justify-between pt-4">
                    <DigiCodeLogoLg customeLabel="پنل ادمین" />
                    <ButtonIcon variant="none" onClick={onClose} className={`lg:hidden`}>
                        <CloseIcon className="!w-6 !h-6 !text-secondary-900" />
                    </ButtonIcon>
                </div>


                <ul className="flex flex-col gap-2">
                    {menuData.map((item, index) => (
                        <SidebarLink key={index} href={item.href} text={item.text} icon={<item.icon className="w-5 h-5" />} />
                    ))}
                </ul>

                <div className="w-full flex flex-1 lg:!hidden items-end justify-between p-4">
                    <div className="items-center gap-2 flex">
                        <NavOptions isAdmin={true} />
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-secondary-800">
                        <span>
                            {toPersianDateWeek(new Date())}
                        </span>
                        <CalendarLinearIcon className="w-4 h-4" />
                    </div>
                </div>

            </div>
        </aside>
    )
}
