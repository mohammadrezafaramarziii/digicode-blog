"use client"
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import { CalendarLinearIcon, ClockCircleOutlineIcon, ClockSquareLinearIcon, HamburgerMenuLinearIcon, HomeSmileOutlineIcon, Logout3LinearIcon, MenuDotsBoldIcon, NotificationIcon } from "@/ui/Icons";
import { toPersianDateLong, toPersianDateWeek } from "@/utils/dateFormatter";
import MobileNav from "./MobileNav";
import Drawer from "@/components/Drawer";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import NavOptions from "./NavOptions";

export default function Header() {
    const { user } = useAuth();
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="w-full p-4 bg-background border-b border-b-secondary-900/10 flex items-center justify-between">
            <div className="justify-between lg:justify-start flex items-center gap-3 lg:gap-12">
                <div className="lg:hidden">
                    <ButtonIcon variant="none" onClick={() => setSidebar(true)}>
                        <HamburgerMenuLinearIcon className="!w-6 !h-6" />
                    </ButtonIcon>
                </div>
                <div className="items-center gap-2 hidden lg:flex">
                    <NavOptions />
                </div>
                <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-secondary-800">
                    <span>
                        {toPersianDateWeek(new Date())}
                    </span>
                    <CalendarLinearIcon className="w-4 h-4" />
                </div>
            </div>
            <div className="flex items-center gap-1">
                <div className="font-bold text-secondary-900">
                    {user?.name}
                </div>
                <Avatar
                    name={user?.name}
                    avatar={user?.avatarUrl}
                    width={35}
                />
            </div>

            <MobileNav />
            <Drawer open={sidebar} onClose={() => setSidebar(false)} onlyMobile>
                <Sidebar onClose={() => setSidebar(false)}>

                </Sidebar>
            </Drawer>
        </div>
    )
}
