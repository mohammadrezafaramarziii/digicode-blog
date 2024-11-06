import Header from "@/components/Header";
import yekanBakhFont from "@/constants/localFont";
import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
  title: {
    template:"%s | بلاگ اپ",
    default:"بلاگ اپ"
  },
  description: "خوش آمدید",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanBakhFont.variable} font-sans min-h-screen`}>
      <body className="container xl:max-w-screen-xl">
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
