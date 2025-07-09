import Button from "@/ui/Button";
import Link from "next/link";
import HomePosts from "./_components/HomePosts";
import { Suspense } from "react";
import HeroCategories from "./_components/HeroCategories";
import SkeletonLoading from "@/ui/SkeletonLoading";
import PopularsCategory from "@/app/(site)/_components/PopularsCategory";
import { CategoryBoldDuotoneIcon } from "@/ui/Icons";
import PopularCategorySkeleton from "./_components/PopularCategorySkeleton";


export default async function Home() {
  return (
    <div className="w-full my-20 text-center">
      <div>
        <h1 className="text-3xl font-extrabold text-primary-900 mb-5">
          به دنیای دیجیتال و برنامه نویسی دیجی کد خوش آمدید
        </h1>
        <p className="text-lg md:text-2xl text-secondary-900">
          اینجا جدیدترین مطالب حوزه برنامه نویسی قرار داده می شود
        </p>
      </div>

      <div className="flex items-center gap-4 justify-center pt-4">
        <Link href={'/signup'}>
          <Button className="!text-base md:!text-lg">
            ثبت نام
          </Button>
        </Link>
        <Link href={'/about-us'}>
          <Button varint="secondary" className="!text-base md:!text-lg">
            درباره ما
          </Button>
        </Link>
      </div>

      <div className="hidden w-auto md:flex justify-center mt-8">
        <Suspense
          fallback={
            <SkeletonLoading containerClassName="!block !w-[532px] !h-14" className="!rounded-md !w-full !h-full" />
          }
        >
          <HeroCategories />
        </Suspense>
      </div>

      <HomePosts />

      <div className="pt-16 max-w-screen-lg mx-auto">
        <div className="w-full border-t-2 border-t-secondary-900/10 pt-14">
          <div className="w-full flex items-center justify-center gap-4">
            <CategoryBoldDuotoneIcon className="w-7 h-7 text-secondary-900/40" />
            <h4 className="text-2xl font-black text-secondary-900">
              پربازدید ترین دسته بندی ها
            </h4>
          </div>

          <div className="w-full max-w-md mx-auto flex items-center justify-center flex-wrap gap-4 mt-8">
            <Suspense fallback={<PopularCategorySkeleton />}>
              <PopularsCategory />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
