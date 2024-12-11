import {
  BookmarkLinearIcon,
  ChatDotsOutlineIcon,
  HeartLinearIcon,
  PostsOutlineIcon,
  SettingsLinearIcon,
  UserCircleOutlineIcon,
  Widget4OutlineIcon,
} from "@/ui/Icons";

export const menuData = [
  { text: "داشبورد", href: "/profile", icon: Widget4OutlineIcon, mobile: true },
  {
    text: "اطلاعات من",
    href: "/profile/me",
    icon: UserCircleOutlineIcon,
    mobile: true,
  },
  {
    text: "لیست مقالات",
    href: "/profile/posts",
    icon: PostsOutlineIcon,
    mobile: true,
  },
  {
    text: "ذخیره شده ها",
    href: "/profile/bookmarks",
    icon: BookmarkLinearIcon,
    mobile: true,
  },
  {
    text: "لایک شده های من",
    href: "/profile/liked",
    icon: HeartLinearIcon,
  },
  { text: "نظرات من", href: "/profile/comments", icon: ChatDotsOutlineIcon },
  {
    text: "تنظیمات",
    href: "/profile/settings",
    icon: SettingsLinearIcon,
    mobile: true,
  },
];
