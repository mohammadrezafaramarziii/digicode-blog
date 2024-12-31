"use client"
import { useEffect, useState } from "react"
import Button from "./Button"
import ButtonIcon from "./ButtonIcon"
import { createPortal } from "react-dom"

export default function Alert({ children }) {
    return (
        <div className="w-full flex items-center gap-3 p-5 bg-warning text-lg rounded-xl text-white font-bold">
            {children}
        </div>
    )
}

export function AlertTimer({ children, open, onClose, onCancel, setReturned }) {
    const [time, setTime] = useState(10);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    useEffect(() => {
        const timer = time > 0 && open && setInterval(() => setTime(time - 1), 1000);

        if (time === 0) {
            onClose();
            setReturned(true);
            setTime(10);
        }

        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time, open])

    return mounted && (
        createPortal(
            <div className={`${open ? "translate-y-0 bottom-6 visible" : "translate-y-full bottom-0 invisible"} duration-300 ease-in-out w-60 h-14 bg-secondary-800 rounded-lg overflow-hidden fixed right-6 z-50 shadow-xl`}>
                {open && <div className="w-full alert-time-animate__bar h-1 absolute bottom-0 right-0 bg-warning rounded-xl"></div>}
                <div className="w-full h-full flex items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-md bg-white/20 text-primary-800 text-lg font-bold flex items-center justify-center">
                            {time}
                        </div>
                        <div className="text-white font-bold">
                            {children}
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => {
                            onCancel();
                            setTime(10);
                        }}>
                            لغو
                        </Button>
                    </div>
                </div>
            </div>,
            document.body
        )
    )
}

