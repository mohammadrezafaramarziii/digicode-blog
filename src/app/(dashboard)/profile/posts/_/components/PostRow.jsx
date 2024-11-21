import Table from "@/ui/Table";
import { toPersianDateLong } from "@/utils/dateFormatter";
import truncateText from "@/utils/trancateText";
import { DeleteButton, UpdateButton } from "./Buttons";

const typeStyle = {
    free: {
        label: "رایگان",
        className: "badge--success",
    },
    premium: {
        label: "پولی",
        className: "badge--primary",
    }
}

export default function PostRow({ index, post }) {
    const { title, category, author, createdAt, type, _id } = post;

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(title, 20)}</td>
            <td>{category.title}</td>
            <td>{author.name}</td>
            <td>{toPersianDateLong(createdAt)}</td>
            <td>
                <span className={`badge ${typeStyle[type].className}`}>
                    {typeStyle[type].label}
                </span>
            </td>
            <td>
                <div className="flex items-center gap-2">
                    <UpdateButton id={_id} />
                    <DeleteButton id={_id} />
                </div>
            </td>
        </Table.Row>
    )
}
