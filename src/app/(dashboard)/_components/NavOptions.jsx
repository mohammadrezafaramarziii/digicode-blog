import ButtonIcon from "@/ui/ButtonIcon";
import { HomeSmileOutlineIcon, Logout3LinearIcon, NotificationIcon } from "@/ui/Icons";

export default function NavOptions() {
    return (
        <>
            <ButtonIcon variant="none">
                <HomeSmileOutlineIcon className="!w-5 !h-5" />
            </ButtonIcon>
            <ButtonIcon variant="none">
                <NotificationIcon className="!w-5 !h-5" />
            </ButtonIcon>
            <ButtonIcon variant="none">
                <Logout3LinearIcon className="!w-5 !h-5" />
            </ButtonIcon>
        </>
    )
}
