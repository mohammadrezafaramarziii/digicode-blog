"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import PostSaveItem from "../profile/bookmarks/_components/PostSaveItem";
import "swiper/css";
import { ArrowLeftOutlineIcon } from "@/ui/Icons";
import Link from "next/link";

export default function LastLikes({ likes }) {
    return (
        <div className="flex-1">
            <Swiper
                slidesPerView={'auto'}
            >
                {likes.slice(0, 3).map((item) => (
                    <SwiperSlide key={item._id} className="ml-4 !max-w-48">
                        <PostSaveItem item={item} />
                    </SwiperSlide>
                ))}
                {
                    likes.length >= 3 &&
                    <SwiperSlide className="!max-w-48 !h-[236px] !flex !flex-col !items-center !justify-center">
                        <Link href={'/profile/liked'} className="flex gap-1 flex-col items-center justify-center">
                            <div className="p-2 rounded-full text-primary-900 border-2 border-primary-900">
                                <ArrowLeftOutlineIcon className="w-6 h-6" />
                            </div>
                            <div className="text-sm text-primary-900">
                                مشاهده همه
                            </div>
                        </Link>
                    </SwiperSlide>
                }
            </Swiper>
        </div>
    )
}
