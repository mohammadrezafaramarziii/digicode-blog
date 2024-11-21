import ButtonIcon from "@/ui/ButtonIcon";
import { EditIcon, TrashBoldIcon } from "@/ui/Icons";
import Link from "next/link";

export function UpdateButton({ id }) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <ButtonIcon>
                <EditIcon className="!w-6 !h-6" />
            </ButtonIcon>
        </Link>
    )
}

export function DeleteButton({ id }) {
    return (
        <ButtonIcon variant="red">
            <TrashBoldIcon className="!w-6 !h-6" />
        </ButtonIcon>
    )
}
