"use client"
import { useSettings } from "@/context/SettingsContext";
import Title from "../../_components/Title";
import TitleDot from "../../_components/TitleDot";
import { CheckCircleBoldIcon } from "@/ui/Icons";

export default function SettingPage() {
    const { darkMode, toggleDarkMode, changeColorHandler, colorTheme } = useSettings();
    const colors = [
        { hex: "#444bff", codeRGB: "68, 75, 255", label: "پیش فرض" },
        { hex: "#16a34a", codeRGB: "22, 163, 74", label: "سبز" },
        { hex: "#7e22ce", codeRGB: "126, 34, 206", label: "بنفش" },
        { hex: "#eab308", codeRGB: "234, 179, 8", label: "زرد" },
        { hex: "#e11d48", codeRGB: "225, 29, 72", label: "رز" },
    ]

    return (
        <div className="flex flex-col gap-4">
            <Title title={'تنظیمات'} />

            <div className="w-full bg-background p-6 rounded-lg">
                <TitleDot title={"تم سایت"} />

                <div className="w-full flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <div onClick={() => toggleDarkMode(false)} className={`flex flex-col gap-2 cursor-pointer`}>
                        <div className={`w-[200px] h-[130px] relative rounded-xl bg-slate-200 ${!darkMode && "outline-2 outline outline-primary-900 outline-offset-2"}`}>
                            {!darkMode && <CheckCircleBoldIcon className="w-6 h-6 absolute bottom-2 left-2 text-primary-900" />}
                        </div>
                        <div className={`${!darkMode ? "text-primary-900" : "text-secondary-900"} text-sm font-medium`}>
                            تم روشن
                        </div>
                    </div>
                    <div onClick={() => toggleDarkMode(true)} className={`flex flex-col gap-2 cursor-pointer`}>

                        <div className={`w-[200px] h-[130px] relative rounded-xl bg-black/80 ${darkMode && "outline-2 outline outline-primary-900 outline-offset-2"}`}>
                            {darkMode && <CheckCircleBoldIcon className="w-6 h-6 absolute bottom-2 left-2 text-primary-900" />}
                        </div>

                        <div className={`${darkMode ? "text-primary-900" : "text-secondary-900"} text-sm font-medium`}>
                            تم تیره
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-background p-6 rounded-lg">
                <TitleDot title={"رنگ"} />

                <div className="flex items-center gap-3 pt-6">
                    {colors.map((color, index) => (
                        <div key={index} onClick={() => changeColorHandler(color.codeRGB)} className="flex flex-col items-center gap-2 cursor-pointer">
                            <div style={{ background: color.hex }} className={`${color.codeRGB === colorTheme && "outline-2 outline outline-primary-900 outline-offset-2"} w-8 h-8 rounded-full`}>
                            </div>
                            <span className="text-secondary-900 text-xs font-semibold">
                                {color.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
