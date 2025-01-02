import { DigiCodeLogoLg } from "@/components/DigiCodeLogo";
import { LinkBoldIcon } from "@/ui/Icons";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="w-full py-16">
            <div className="mb-10 flex justify-center">
                <DigiCodeLogoLg classNameText={'!text-3xl'} classNameIcon={'!w-11 !h-11'} />
            </div>

            <div className="max-w-2xl mx-auto text-center text-secondary-900 font-medium ">
                <p className="pb-4 leading-7">
                    اینجا جایی است که یادگیری، الهام گرفتن و به‌روز ماندن در دنیای بی‌پایان برنامه‌نویسی در اولویت قرار دارد. هدف ما ایجاد یک منبع ارزشمند برای همه علاقه‌مندان به تکنولوژی و برنامه‌نویسی است، از تازه‌کارها گرفته تا متخصصان حرفه‌ای.
                </p>
                <p className="leading-7">
                    در این وبلاگ، تلاش می‌کنیم تا با ارائه مقالات آموزشی جامع، معرفی ابزارها و فناوری‌های جدید، و به اشتراک‌گذاری نکات کاربردی، شما را در مسیر رشد و پیشرفت همراهی کنیم. همچنین اخبار و ترندهای روز دنیای تکنولوژی را پوشش می‌دهیم تا شما همیشه به‌روز باشید.
                </p>
            </div>

            <div className="w-full flex justify-center pt-10 pb-4">
                <Image
                    src={'/images/mrflogo.svg'}
                    alt="my logo"
                    width={50}
                    height={50}
                />
            </div>

            <div className="text-lg font-bold text-primary-900 text-center">
                ساخته شده توسط محمدرضا فرامرزی
            </div>

            <div className="flex items-center gap-1 justify-center text-lg font-bold text-primary-900 text-center pt-2">
                <LinkBoldIcon className="w-5 h-5" />
                <Link href={'https://mrfaramarzi.ir'} target="_blank">
                    بازدید از وب‌سایت شخصی من
                </Link>
            </div>

        </div>
    )
}
