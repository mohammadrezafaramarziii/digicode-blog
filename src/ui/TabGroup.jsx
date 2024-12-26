"use client"
import React, { useEffect, useState } from "react"

export default function TabGroup({ tabs = [], children, handler, onIndex, className }) {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (handler) {
            handler();
        }

        if (onIndex) {
            onIndex(activeTab);
        }
    }, [activeTab])

    return (
        <div className={`w-full flex flex-col gap-6 ${className}`}>
            <div className={`w-full flex items-end overflow-x-auto no-scrollbar`}>
                {[...tabs, ""].map((tab, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => {
                            if (index !== [...tabs, ""].length - 1) {
                                setActiveTab(index);
                            }
                        }}
                        className={`${index === [...tabs, ""].length - 1 && "flex-1 cursor-default"} ${index === activeTab ? "border-b-primary-900 text-primary-900" : "border-b-secondary-900/10 text-secondary-900"} border-b-2  text-sm font-medium whitespace-nowrap px-3 py-2 relative`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="w-full">
                {React.Children.toArray(children)[activeTab]}
            </div>
        </div>
    )
}

function TabItem({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

TabGroup.Item = TabItem;