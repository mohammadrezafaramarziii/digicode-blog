import { getPostBySlug } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkLinearIcon, ChatDotsOutlineIcon, ClockCircleOutlineIcon, HeartLinearIcon, StarBoldIcon } from "@/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Share from "./_components/Share";
import moment from "moment";
import 'moment/locale/fa';

export async function generateMetadata({ params }) {
    const post = await getPostBySlug(params.postSlug);

    if (!post) return notFound();

    return {
        title: post.title
    }
}

async function SinglePost({ params }) {
    const post = await getPostBySlug(params.postSlug);
    moment.locale("fa");
    console.log(post);

    if (!post) return notFound();

    return (
        <section className="mt-14 mb-20">
            <div className="w-full grid grid-cols-12 lg:grid-cols-24 gap-6">
                <div className="col-span-12 lg:col-span-17">
                    <div className="w-full mb-6">
                        <Image src={'/images/babner-singlepost.jpg'} alt="" width={728} height={90} className="w-full rounded-lg" />
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
                            <Link href={`/blogs/${post.category.slug}`} className="badge badge--warning !text-base">
                                {post.category.title}
                            </Link>
                            <div className="flex items-center gap-1 text-primary-900 text-sm font-medium">
                                <ClockCircleOutlineIcon className="w-5 h-5" />
                                <span>
                                    زمان مطالعه {post.readingTime} دقیقه
                                </span>
                            </div>
                        </div>

                        <p className="text-sm lg:text-base text-secondary-800 font-medium pb-6">
                            {post.text}
                        </p>

                        <div className="bg-primary-800 w-full rounded-md p-4 flex flex-col gap-3 items-center justify-center sm:flex-row sm:justify-between">
                            <span className="text-sm text-secondary-700">
                                به این پست چه امتیازی می دهید؟
                            </span>
                            <div className="flex items-center gap-px">
                                {Array(5).fill({}).map((item, index) => (
                                    <StarBoldIcon key={index} className="text-yellow-500 w-4 h-4" />
                                ))}
                            </div>
                        </div>

                        <div className="w-full pt-4 mt-4 border-t border-t-secondary-700/20">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center gap-1 text-sm text-secondary-700">
                                    <ClockCircleOutlineIcon className="w-5 h-5" />
                                    <span>
                                        {moment(post.createdAt).fromNow()}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    {post.tags.map((tag) => (
                                        <div key={tag.id} className="badge badge--primray">
                                            {tag.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-between  pt-4">
                                <div className="flex items-center gap-2 justify-end">
                                    <ButtonIcon variant="yellow" className={'!bg-transparent !gap-2 !text-base'} noHover={true}>
                                        <ChatDotsOutlineIcon className="!w-6 !h-6" />
                                        <span>
                                            {post.commentsCount}
                                        </span>
                                    </ButtonIcon>
                                    <ButtonIcon variant="red" className={'!bg-transparent !gap-2 !text-base'} noHover={true}>
                                        <HeartLinearIcon className="!w-6 !h-6" />
                                        <span>
                                            {post.likesCount}
                                        </span>
                                    </ButtonIcon>
                                    <ButtonIcon className={'!bg-transparent !gap-2 !text-base'} noHover={true}>
                                        <BookmarkLinearIcon className="!w-6 !h-6" />
                                    </ButtonIcon>
                                </div>
                                <div>
                                    <Share post={post}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                </div>
            </div>
        </section>
    )
}

export default SinglePost
