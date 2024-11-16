import yekanBakhFont from "@/constants/localFont";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import Image from "next/image";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" className={`${yekanBakhFont.variable} font-sans`}>
            <body className="w-full max-w-[1440px] mx-auto flex items-center justify-center relative">
                <AuthProvider>
                    <div>
                        <Image
                            src={'/images/sq2.svg'}
                            alt=""
                            width={1000}
                            height={150}
                            className="absolute w-full !h-auto !bottom-0 right-0"
                        />
                    </div>
                    <div>
                        <Image
                            src={'/images/sq2.svg'}
                            alt=""
                            width={1000}
                            height={150}
                            className="absolute w-full !h-auto !top-0 rotate-180 right-0 xl:opacity-60"
                        />
                    </div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <div className="w-full rounded-3xl relative z-10">
                        <div className="w-full px-10">
                            {children}
                        </div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    )
}
