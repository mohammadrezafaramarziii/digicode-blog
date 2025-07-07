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
    default: "دیجی کد | وبلاگ برنامه نویسان",
  },
  description: "دیجی کد؛ وبلاگ تخصصی برنامه‌نویسی، فرانت‌اند، ری‌اکت، نکست‌جی‌اس و توسعه وب.",
  keywords: [
    'برنامه نویسی',
    'برنامه نویس فرانت اند',
    'توسعه دهنده وب',
    'Next.js',
    'React',
    'وبلاگ برنامه نویسی',
    'آموزش ری‌اکت',
    'آموزش نکست جی‌اس',
    'دیجی کد',
  ],
  authors: [
    { name: 'محمدرضا فرامرزی', url: 'https://mrfaramarzi.ir' },
  ],
  creator: "محمدرضا فرامرزی",
  publisher: "دیجی کد",
  metadataBase: new URL('https://digicodee.ir'),
  alternates: {
    canonical: 'https://digicodee.ir',
    languages: {
      'fa-IR': 'https://digicodee.ir',
    },
  },
  openGraph: {
    title: 'دیجی کد | وبلاگ برنامه نویسان',
    description: "دیجی کد؛ آموزش و مقالات تخصصی برنامه نویسی، ری‌اکت، نکست جی‌اس و فرانت‌اند.",
    url: 'https://digicodee.ir',
    siteName: 'دیجی کد',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://digicodee.ir/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'دیجی کد | وبلاگ برنامه نویسان',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دیجی کد | وبلاگ برنامه نویسان',
    description: "دیجی کد؛ آموزش‌های تخصصی و مقاله‌های کاربردی برای برنامه‌نویسان.",
    images: ['https://digicodee.ir/images/og-image.png'],
  },
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
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
