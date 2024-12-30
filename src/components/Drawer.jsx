"use client"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Drawer({ open, onClose, children, onlyMobile = false }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return mounted && createPortal(
        <>
            <div onClick={onClose} className={`${onlyMobile && "lg:!hidden"} z-50 w-full h-screen fixed inset-0 bg-secondary-900/30 ${open ? "block" : "pointer-events-none hidden"}`}></div>

            <div className={`${onlyMobile && "lg:!hidden"} z-50 fixed top-0 right-0 w-full max-w-[300px] h-full duration-300 transition-transform transform ${open ? "translate-x-0" : "translate-x-full"}`}>
                {children}
            </div>
        </>,
        document.body
    )
}
