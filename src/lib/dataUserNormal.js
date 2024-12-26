import { getUserApi } from "@/services/authService";
import { getAllCommentsApi } from "@/services/commentService";
import flattenComments from "@/utils/flattenComments";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export async function fetchCardUserNormal() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getUserApi(options),
      getAllCommentsApi(options),
    ]);
    
    const flattenedComments = flattenComments(data[1].comments);
    const commentsData = flattenedComments.filter(
      (c) => c.user._id === data[0].user?._id
    );

    const numberOfLikes = Number(data[0].user.likedPosts.length ?? "0");
    const numberOfComments = Number(commentsData.length ?? "0");
    const numberOfBookmarks = Number(data[0].user.bookmarkedPosts.length ?? "0");

    return {
      numberOfLikes,
      numberOfBookmarks,
      numberOfComments,
    };
  } catch (error) {
    throw new Error("خطا در داده ها");
  }
}
