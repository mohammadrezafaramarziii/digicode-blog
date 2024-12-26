import { logoutUser } from "@/lib/logoutUser";
import ButtonIcon from "@/ui/ButtonIcon";
import { HomeSmileOutlineIcon, Logout3LinearIcon, NotificationIcon } from "@/ui/Icons";

export default function NavOptions() {

    return (
        <>
            <ButtonIcon variant="none">
                <HomeSmileOutlineIcon className="!w-5 !h-5 text-secondary-900" />
            </ButtonIcon>
            <ButtonIcon variant="none">
                <NotificationIcon className="!w-5 !h-5 text-secondary-900" />
            </ButtonIcon>
            <form action={async () => {
                const { res } = await logoutUser();
                if (res) {
                    window.location.reload();
                }
            }}>
                <ButtonIcon type="submit" variant="none">
                    <Logout3LinearIcon className="!w-5 !h-5 text-secondary-900" />
                </ButtonIcon>
            </form>
        </>
    )
}
