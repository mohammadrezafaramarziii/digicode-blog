import BanerSlider from "@/components/BanerSlider";
import LatestPost from "@/components/LatestPost";
import NewestPosts from "@/components/NewestPosts";
import PopularsCategory from "@/components/PopularsCategory";
import RandomPosts from "@/components/RandomPosts";
import { getCategories } from "@/services/categoryService";
import { getPosts } from "@/services/postServices";
import Button from "@/ui/Button";
import Link from "next/link";

export default async function Home() {
  const { categories } = await getCategories();
  const { posts } = await getPosts();

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

      <div className="hidden w-auto md:flex justify-center mt-8">
        <ul className="text-sm text-secondary-900 flex items-center gap p-2 bg-background border border-secondary-900/10 rounded-md">
          {categories.slice(0, 5).map((category) => (
            <li className="px-3.5" key={category._id}>
              <Link href={`/blogs/category/${category.slug}`}>
                {category.title}
              </Link>
            </li>
          ))}
          <Link href={'/blogs'} className="btn btn--primary">
            مشاهده همه
          </Link>
        </ul>
      </div>

      <BanerSlider posts={posts} />
      <NewestPosts posts={posts} />
      <LatestPost post={posts[posts.length - 1]} />
      <RandomPosts posts={posts} />
      <PopularsCategory />
    </div>
  )
}
