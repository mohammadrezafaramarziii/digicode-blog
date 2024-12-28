import Button from "@/ui/Button";
import { LogosInstagramIcon, LogosTelegramIcon, LogosWhatsappIcon } from "@/ui/Icons";
import Link from "next/link";
import { DigiCodeLogoLg, DigiCodeLogoSm } from "./DigiCodeLogo";

export default function Footer() {
    return (
        <div className="pt-14">
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 bg-primary-800 p-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                       <DigiCodeLogoLg customeLabel="درباره دیجی کد"/>
                        <p className="text-sm text-secondary-900 line-clamp-3 leading-6 pt-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold text-secondary-900 mb-3">
                            لینک ها
                        </h3>
                        <ul className="flex flex-col text-sm text-secondary-800 gap-3">
                            <li>
                                <Link href={'/'}>
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Link href={'/blogs'}>
                                    مقالات
                                </Link>
                            </li>
                            <li>
                                تماس با ما
                            </li>
                            <li>
                                درباره ما
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-10 items-end">
                    <div className="w-full">
                        <div className="text-secondary-900 font-bold">
                            برای اطلاع از آخرین مقالات عضو شوید
                        </div>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 pt-3">
                            <div className="h-12 flex items-center bg-background rounded-lg px-4 text-sm text-secondary-700 w-full sm:max-w-[280px]">
                                ایمیل خود را وارد کنید
                            </div>
                            <Button className={"!h-12 !rounded-xl"}>
                                عضویت
                            </Button>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center gap-5">
                            <LogosTelegramIcon className="w-8 h-8" />
                            <LogosInstagramIcon className="w-8 h-8" />
                            <LogosWhatsappIcon className="w-8 h-8" />
                        </ul>
                    </div>
                </div>

                {/* logo bg */}
                <div className="absolute top-10 right-20 md:right-40 rotate-45 opacity-15">
                    <DigiCodeLogoSm className={"!w-28 !h-28 md:!w-40 md:!h-40"}/>
                </div>
                <div className="absolute hidden md:block top-5 left-4 -rotate-45 opacity-15">
                    <DigiCodeLogoSm className={"!w-14 !h-14"}/>
                </div>
            </div>
            <div className="w-full text-white text-center flex justify-center p-4 bg-primary-900 text-sm font-medium">
                © کلیه حقوق مادی و معنوی دوره ها متعلق به این دیجی کد می باشد.
            </div>
        </div>
    )
}
