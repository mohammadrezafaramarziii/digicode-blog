import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SupportBox from "@/components/SupportBox";
import yekanBakhFont from "@/constants/localFont";
import { AuthProvider } from "@/context/AuthContext";
import { SettingsProvider } from "@/context/SettingsContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
  title: {
    template: "%s | دیجی کد",
    default: "دیجی کد"
  },
  description: "دیجی کد، وبلاگ برنامه نویسان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanBakhFont.variable} font-sans min-h-screen`}>
      <body>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <AuthProvider>
          <SettingsProvider>
            <div className="container xl:max-w-screen-xl">
              <Header />
              <div>
                {children}
              </div>
            </div>
            <SupportBox />
            <Footer />
          </SettingsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
