import { getPostBySlug, getPosts } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkLinearIcon, ChatDotsOutlineIcon, ClockCircleOutlineIcon, HeartLinearIcon, StarBoldIcon } from "@/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Share from "./_components/Share";
import moment from "moment";
import 'moment/locale/fa';
import RelatedPost from "../_components/RelatedPost";
import SinglePostIntraction from "./_components/SinglePostIntraction";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostComment from "./_components/PostComment";
import AuthorPost from "./_components/AuthorPost";
import TagsPost from "./_components/TagsPost";
import EditAdmin from "./_components/EditAdmin";


export async function generateMetadata({ params }) {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) return notFound();

    const url = `https://digicodee.ir/blogs/${post.slug}`;
    const imageUrl = post.coverImageUrl || 'https://digicodee.ir/images/og-image.jpg';

    return {
        title: post.title,
        description: post.briefText || 'مطالب جذاب و کاربردی برنامه‌نویسی در دیجی کد',
        keywords: post.tags || ['برنامه نویسی', 'فرانت‌اند', 'ری‌اکت', 'Next.js'],
        metadataBase: new URL('https://digicodee.ir'),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.briefText,
            url,
            siteName: 'دیجی کد',
            locale: 'fa_IR',
            type: 'article',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.briefText,
            images: [imageUrl],
        },
        authors: [
            { name: 'محمدرضا فرامرزی', url: 'https://mrfaramarzi.ir' },
        ],
        creator: 'محمدرضا فرامرزی',
        publisher: 'دیجی کد',
        category: 'Technology',
        robots: {
            index: true,
            follow: true,
        },
    };
}


export async function generateStaticParams() {
    const { posts } = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

async function SinglePost({ params }) {
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
    const { slug } = await params;
    const post = await getPostBySlug(slug, options);
    moment.locale("fa");

    if (!post) return notFound();

    return (
        <section className="mt-14 mb-20">
            <div className="w-full grid grid-cols-12 xl:grid-cols-24 gap-6">
                <div className="col-span-12 xl:col-span-17 flex flex-col gap-6">
                    <div className="w-full mb-6">
                        <Image src={'/images/baner1.jpg'} alt="" width={1270} height={265} className="w-full rounded-lg" />
                    </div>
                    <div className="w-full">
                        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                            <Image
                                src={post.coverImageUrl}
                                alt={post.title}
                                // width={400}
                                // height={400}
                                fill
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <h1 className="text-secondary-900 font-bold text-2xl lg:text-3xl py-6">
                            {post.title}
                        </h1>

                        <div className="pb-7 flex items-center gap-7">
                            <Link href={`/blogs/category/${post.category.slug}`} className="badge badge--warning !text-base">
                                {post.category.title}
                            </Link>
                            <div className="flex items-center gap-1 text-primary-900 text-sm font-medium">
                                <ClockCircleOutlineIcon className="w-5 h-5" />
                                <span>
                                    زمان مطالعه {post.readingTime} دقیقه
                                </span>
                            </div>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: post.text }} className="pb-6 prose max-w-full prose-headings:text-secondary-900 prose-p:text-secondary-900" />


                        <div className="bg-primary-800 w-full rounded-md p-4 flex gap-2 items-start">
                            <div>
                                <StarBoldIcon className="text-yellow-500 w-4 h-4" />
                            </div>
                            <span className="text-sm text-secondary-700">
                                اگر نظری درباره موضوعات مقاله دارید یا پیشنهادی برای مقالات بعدی دارید، لطفاً آن را در کامنت‌ها یا در پشتیبانی با ما به اشتراک بگذارید. منتظر نظرات شما هستیم!
                            </span>
                        </div>

                        <div className="w-full pt-4 mt-4 border-t border-t-secondary-700/20">
                            <div className="w-full flex flex-col gap-4 md:flex-row md:items-center justify-between">
                                <div className="flex items-center gap-1 text-sm text-secondary-700">
                                    <ClockCircleOutlineIcon className="w-5 h-5" />
                                    <span>
                                        {moment(post.createdAt).fromNow()}
                                    </span>
                                </div>

                                <div className="flex items-center flex-wrap gap-2">
                                    {post.tags.slice(0, 5).map((tag, index) => (
                                        <div key={index} className="badge badge--primary">
                                            #{tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-between  pt-4">
                                <SinglePostIntraction post={post} />
                                <Share post={post} />
                            </div>
                        </div>

                    </div>

                    <PostComment post={post} />
                </div>


                <div className="col-span-12 xl:col-span-7 space-y-6">
                    <EditAdmin postId={post._id} />
                    <AuthorPost author={post.author} />
                    {post.tags.length > 0 && <TagsPost tags={post.tags} />}
                    {post.related.length > 0 && <RelatedPost posts={post.related} />}
                    <Link href={'https://youtu.be/RFGm-nBbyg4'} target="_blank" className="w-full block">
                        <Image
                            src={'/images/banerRocket.jpg'}
                            alt="rocket"
                            width={1400}
                            height={760}
                            priority
                            className="rounded-xl"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SinglePost
