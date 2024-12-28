import { InstagramFillIcon, MailIcon, TelegramFillIcon } from "@/ui/Icons";
import Link from "next/link";

export const metadata = {
    title: "ارتباط با ما و پشتیبانی"
}

export default function SupprotPage() {
    return (
        <div className="w-full py-16">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold text-secondary-900 text-center">
                    ارتباط با ما و پشتیبانی
                </h1>
                <p className="text-sm md:text-base text-center text-secondary-800 pt-4 max-w-lg mx-auto">
                    شما می‌توانید در صورت بروز هرگونه مشکل در حساب کاربری، مشاهده باگ، ارائه انتقاد یا پیشنهاد، از طریق موارد زیر با ما در ارتباط باشید
                </p>
            </div>

            <div className="w-full flex items-center justify-center gap-4 mt-10">
                <Link href={'mailto:mf575583@gmail.com'} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-800 text-primary-900 hover:bg-primary-900 hover:text-primary-800 duration-200">
                    <MailIcon className="w-6 h-6" />
                </Link>
                <Link href={'https://t.me/mohammadrezafaramarziii'} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-800 text-primary-900 hover:bg-primary-900 hover:text-primary-800 duration-200">
                    <TelegramFillIcon className="w-6 h-6" />
                </Link>
                <Link href={'https://instagram.com/mohammadrezafaramarziii'} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-800 text-primary-900 hover:bg-primary-900 hover:text-primary-800 duration-200">
                    <InstagramFillIcon className="w-6 h-6" />
                </Link>
            </div>
        </div>
    )
}
