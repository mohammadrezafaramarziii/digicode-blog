"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import { ArrowLeftOutlineIcon, CalendarLinearIcon, ClockCircleOutlineIcon } from "@/ui/Icons";
import { toPersianDateShort } from "@/utils/dateFormatter";
import ButtonIcon from "@/ui/ButtonIcon";

export default function BanerSlider({ posts }) {

    return (
        <div className="mt-10 lg:mt-16 max-w-screen-lg mx-auto">
            <Swiper
                spaceBetween={8}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{ nextEl: ".baner-arrow-left", prevEl: ".baner-arrow-right" }}
                loop={true}
                modules={[Navigation, Autoplay]}
                className="overflow-visible"
            >
                {posts.slice(0, 3).map((post, index) => {
                    return (
                        <SwiperSlide key={index} className="relative">
                            <div className="w-full relative aspect-w-10 aspect-h-5 shadow-xl rounded-3xl overflow-hidden">
                                <Image
                                    src={post.coverImageUrl}
                                    alt=""
                                    fill
                                    className="w-full h-full object-cover object-center"
                                    priority
                                />
                            </div>
                            <div className="w-full hidden md:flex items-center justify-between p-8 absolute top-0 right-0">
                                <div className="text-sm text-white flex items-center gap-1">
                                    <CalendarLinearIcon className="w-5 h-5" />
                                    <div>
                                        تاریخ انتشار : {toPersianDateShort(post.createdAt)}
                                    </div>
                                </div>
                                <div className="text-sm text-white flex items-center gap-1">
                                    <ClockCircleOutlineIcon className="w-5 h-5" />
                                    <div>
                                        زمان مطالعه : {post.readingTime} دقیقه
                                    </div>
                                </div>
                            </div>
                            <div className="hidden w-full md:flex justify-center sticky bottom-[60px] right-0">
                                <div className="w-8/12 py-6 px-14 h-full bg-primary-900/50 backdrop-blur rounded-3xl border border-white shadow-xl">
                                    <div className="flex flex-col items-center gap-2 text-white">
                                        <h3 className="text-2xl font-bold line-clamp-1">
                                            {post.title}
                                        </h3>
                                        <p className="text-lg line-clamp-1">
                                            {post.briefText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

                <div className="hidden md:flex w-full absolute top-[175px] lg:top-[240px] px-6 right-0 items-center justify-between gap-2 z-20">
                    <ButtonIcon className="baner-arrow-right !bg-white/60 !text-white" noHover={true}>
                        <ArrowLeftOutlineIcon className={'!w-5 !h-5 rotate-180'} />
                    </ButtonIcon>
                    <ButtonIcon className="baner-arrow-left !bg-white/60 !text-white" noHover={true}>
                        <ArrowLeftOutlineIcon className={'!w-5 !h-5'} />
                    </ButtonIcon>
                </div>
            </Swiper>
        </div>
    )
}
