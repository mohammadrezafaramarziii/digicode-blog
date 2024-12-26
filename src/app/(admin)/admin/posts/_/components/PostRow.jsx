"use client"
import Table from "@/ui/Table";
import { toPersianDateLong } from "@/utils/dateFormatter";
import truncateText from "@/utils/trancateText";
import { DeleteButton, PreviewButton, UpdateButton } from "./Buttons";
import { useState } from "react";

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
    const { title, category, author, createdAt, type, _id, slug } = post;
    const [stepDelete, setStepDelete] = useState(0);

    return (
        <Table.Row className={`${stepDelete >= 1 ? "removed-item-animate" : ""} ${stepDelete >= 2 && "hidden"} duration-200`}>
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
                    <PreviewButton slug={slug} />
                    <UpdateButton id={_id} />
                    <DeleteButton post={post} setStepDelete={(e) => setStepDelete(e)} />
                </div>
            </td>
        </Table.Row>
    )
}
