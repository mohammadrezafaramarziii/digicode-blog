"use client"
import { SortFromTopToBottomLineDuotoneIcon } from "@/ui/Icons";
import Modal from "@/ui/Modal";
import RadioInput from "@/ui/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";


const sortOptions = [
    {
        label: "تاریخ ایجاد (جدید ترین)",
        value: "latest",
    },
    {
        label: "تاریخ ایجاد (قدیمی ترین)",
        value: "earliest",
    },
    {
        label: "محبوبیت",
        value: "popular",
    },
    {
        label: "زمان مطالعه (نزولی)",
        value: "time_desc",
    },
    {
        label: "زمان مطالعه (صعودی)",
        value: "time_asc",
    },
];

export default function SortFilter() {
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState(searchParams.get("sort") || "latest");

    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const changeSortHandler = (value) => {
        setSort(value);
        router.push(pathname + "?" + createQueryString("sort", value));
    }

    return (
        <>
            <div className="w-full bg-primary-800 p-6 rounded-xl hidden lg:block">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex items-center gap-1">
                        <SortFromTopToBottomLineDuotoneIcon className="w-5 h-5 text-primary-900/30" />
                        <h3 className="font-bold text-secondary-800">
                            مرتب سازی
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {sortOptions.map((sortItem, index) => (
                            <RadioInput
                                key={index}
                                label={sortItem.label}
                                onClick={() => changeSortHandler(sortItem.value)}
                                checked={sort === sortItem.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <button type="button" onClick={() => setOpen(true)} className="btn flex items-center gap-2 font-bold text-secondary-800 border border-secondary-800">
                    <SortFromTopToBottomLineDuotoneIcon className="w-5 h-5 text-secondary-800/50" />
                    مرتب سازی
                </button>
                <Modal open={open} onClose={() => setOpen(false)} title="مرتب سازی" className="lg:!hidden">
                    <div className="flex flex-col gap-4 mt-4">
                        {sortOptions.map((sortItem, index) => (
                            <RadioInput
                                key={index}
                                label={sortItem.label}
                                onClick={() => changeSortHandler(sortItem.value)}
                                checked={sort === sortItem.value}
                            />
                        ))}
                    </div>
                </Modal>
            </div>
        </>
    )
}
