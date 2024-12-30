"use client"
import { createPortal } from "react-dom";
import ButtonIcon from "./ButtonIcon";
import { CloseIcon } from "./Icons";
import { useEffect, useState } from "react";

export default function Modal({ open, onClose, title, children }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return mounted && createPortal(
        <>
            <div onClick={onClose} className={`${open ? "block" : "hidden"} w-full h-full bg-secondary-900/40 fixed top-0 right-0 z-50`}></div>

            <div className={`${open ? "translate-y-0 lg:opacity-100 lg:visible" : "translate-y-full lg:opacity-0 lg:invisible"} duration-300 transition-all transform w-full lg:max-w-md fixed bottom-0 right-0 lg:top-1/2 lg:right-1/2 lg:bottom-auto lg:translate-x-1/2 lg:-translate-y-1/2 z-[60]`}>
                <div className="w-full bg-background p-4 rounded-t-xl lg:rounded-xl">
                    <div className="w-full flex justify-center">
                        <div onClick={onClose} className="w-9 h-1.5 inline-block lg:hidden bg-secondary-900/10 rounded-full"></div>
                    </div>

                    <div className="p-4">
                        <div className="w-full flex items-center justify-between lg:pb-4 lg:border-b lg:border-b-secondary-900/10">
                            <h2 className="font-bold text-secondary-900">
                                {title}
                            </h2>
                            <div className="hidden lg:block">
                                <ButtonIcon variant="red" onClick={onClose}>
                                    <CloseIcon className="!w-5 !h-5" />
                                </ButtonIcon>
                            </div>
                        </div>

                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    )
}
