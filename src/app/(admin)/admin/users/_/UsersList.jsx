"use client"
import Title from "@/app/(dashboard)/_components/Title";
import Table from "@/ui/Table";
import Avatar from "@/ui/Avatar";
import { toPersianDateLong } from "@/utils/dateFormatter";
import useUsersList from "./useUsersList";

const typeStyle = {
    0: {
        label: "کاربر عادی",
        className: "badge--success",
    },
    1: {
        label: "کاربر ادمین",
        className: "badge--primary",
    }
}

export default function UsersList() {
    const { users, isLoading } = useUsersList();

    return (
        <div>
            <Title title={'کاربران سایت'} />

            <div className="w-full mt-6">
                {
                    !isLoading &&
                    <Table>
                        <Table.Header>
                            <th></th>
                            <th>نام و نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th>تاریخ عضویت</th>
                            <th>سمت</th>
                        </Table.Header>
                        <Table.Body>
                            {users?.map((user) => (
                                <Table.Row key={user._id}>
                                    <td>
                                        <Avatar avatar={user?.avatarUrl} name={user?.name} width={40} />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{toPersianDateLong(user.createdAt)}</td>
                                    <td>
                                        <span className={`badge ${typeStyle[user?.role === "ADMIN" ? 1 : 0].className}`}>
                                            {typeStyle[user?.role === "ADMIN" ? 1 : 0].label}
                                        </span>
                                    </td>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                }
            </div>
        </div>
    )
}
