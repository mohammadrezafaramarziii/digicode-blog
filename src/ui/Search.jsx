"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchLinearIcon } from "./Icons";
import { Suspense } from "react";

function SearchInput({ inputClassName, btnClassName }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const formSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search
        const searchValue = search.value;

        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("page", "1");

        if (searchValue) {
            newParams.set("search", searchValue);
        } else {
            newParams.delete("search");
        }

        router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    }

    return (
        <form onSubmit={formSubmit} className="w-full flex justify-center">
            <div className={`w-full h-14 p-2 bg-primary-800 flex items-center justify-between rounded-xl ${inputClassName}`}>
                <input
                    type="text"
                    placeholder="جستجو..."
                    name="search"
                    autoComplete="off"
                    className="appearance-none px-2 outline-none border-none flex-1 h-full bg-transparent text-sm text-secondary-900"
                />
                <button type="submit" className={`h-full w-10 bg-background text-primary-900 rounded-lg flex items-center justify-center ${btnClassName}`}>
                    <SearchLinearIcon className={'w-5 h-5'} />
                </button>
            </div>
        </form>
    )
}


export default function Search({ inputClassName, btnClassName }) {
    return (
        <Suspense>
            <SearchInput btnClassName={btnClassName} inputClassName={inputClassName} />
        </Suspense>
    )
}
