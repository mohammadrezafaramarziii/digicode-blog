import Header from "@/components/Header";
import yekanBakhFont from "@/constants/localFont";
import { AuthProvider } from "@/context/AuthContext";
import { SettingsProvider } from "@/context/SettingsContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ"
  },
  description: "خوش آمدید",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanBakhFont.variable} font-sans min-h-screen`}>
      <body className="container xl:max-w-screen-xl">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <AuthProvider>
          <SettingsProvider>
            <Header />
            <div>
              {children}
            </div>
          </SettingsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
