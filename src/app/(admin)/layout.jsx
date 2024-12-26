import yekanBakhFont from "@/constants/localFont";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import ReactQueryProviders from "@/providers/ReactQueryProviders";
import { SettingsProvider } from "@/context/SettingsContext";
import SidebarAdmin from "./_components/SidebarAdmin";
import HeaderAdmin from "./_components/HeaderAdmin";

export default function RootLayoutAdmin({ children }) {
    return (
        <html lang="fa" dir="rtl" className={`${yekanBakhFont.variable} font-sans`}>
            <body className="w-full max-w-[1440px] mx-auto flex items-center justify-center relative bg-primary-800">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <ReactQueryProviders>
                    <AuthProvider>
                        <SettingsProvider>
                            <main className="w-full h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                                <div className="w-full h-full hidden lg:block lg:col-span-3 xl:col-span-2">
                                    {/* sidebar */}
                                    <SidebarAdmin />
                                </div>
                                <div className="w-full h-full flex flex-col col-span-1 lg:col-span-9 xl:col-span-10 overflow-y-auto">
                                    <HeaderAdmin />
                                    <div className="p-6 lg:p-10 xl:p-14 flex-1 overflow-y-auto overflow-x-hidden">
                                        {children}
                                    </div>
                                </div>
                            </main>
                        </SettingsProvider>
                    </AuthProvider>
                </ReactQueryProviders>
            </body>
        </html>
    )
}
