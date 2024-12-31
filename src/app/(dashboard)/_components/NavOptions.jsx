import { logoutApi } from "@/services/authService";
import ButtonIcon from "@/ui/ButtonIcon";
import { HomeSmileOutlineIcon, Logout3LinearIcon, NotificationIcon, SupportIcon } from "@/ui/Icons";
import Link from "next/link";

export default function NavOptions({ isAdmin = false }) {

    const logoutHandler = async () => {
        await logoutApi()
        window.location.href = "/";
    }

    return (
        <>
            <Link href={'/'}>
                <ButtonIcon variant="none">
                    <HomeSmileOutlineIcon className="!w-5 !h-5 text-secondary-900" />
                </ButtonIcon>
            </Link>
            {/* <ButtonIcon variant="none">
                <NotificationIcon className="!w-5 !h-5 text-secondary-900" />
            </ButtonIcon> */}
            {!isAdmin &&
                <Link href={'/support'}>
                    <ButtonIcon variant="none">
                        <SupportIcon className="!w-5 !h-5 text-secondary-900" />
                    </ButtonIcon>
                </Link>
            }

            <ButtonIcon onClick={logoutHandler} variant="none">
                <Logout3LinearIcon className="!w-5 !h-5 text-secondary-900" />
            </ButtonIcon>
        </>
    )
}
