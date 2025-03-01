"use client"
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useAuth } from "./AuthContext";
import { ScreenLoading } from "@/ui/DotSpinnerLoading";
import { usePathname } from "next/navigation";

const SettingsContext = createContext();

const initialState = { darkMode: false, colorTheme: "68, 75, 255" };

export function SettingsProvider({ children }) {
    const { user } = useAuth();
    const [settings, setSettings] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    const toggleDarkMode = (state) => {
        setSettings((prev) => ({ ...prev, darkMode: state }));
    }

    const changeColorHandler = (color) => {
        setSettings((prev) => ({ ...prev, colorTheme: color }));
    }

    useEffect(() => {
        if (user) {
            const getSettings = localStorage.getItem("settings");
            setSettings((prev) => (getSettings ? JSON.parse(getSettings) : initialState));
        }

        setIsLoading(false);
    }, [user]);

    useEffect(() => {
        if (user) {
            if (settings.darkMode) {
                document.documentElement.classList.add("dark-mode");
            } else {
                document.documentElement.classList.remove("dark-mode");
            }

            document.documentElement.style.setProperty('--color-primary-900', settings.colorTheme);

            localStorage.setItem("settings", JSON.stringify(settings));
        }
    }, [settings, user]);

    if (isLoading && !pathname.startsWith("/admin") && !pathname.startsWith("/profile")) {
        return <ScreenLoading />
    }

    return (
        <SettingsContext.Provider
            value={{
                toggleDarkMode,
                colorTheme: settings.colorTheme,
                darkMode: settings.darkMode,
                changeColorHandler
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}


export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) throw new Error("not found SettingsContext!");
    return context;
}