import {
  BookmarkLinearIcon,
  CategoryOutlineIcon,
  ChatDotsOutlineIcon,
  HeartLinearIcon,
  PostsOutlineIcon,
  SettingsLinearIcon,
  UserCircleOutlineIcon,
  UsersOutlineIcon,
  Widget4OutlineIcon,
} from "@/ui/Icons";

export const menuData = [
  { text: "پیشخوان", href: "/admin", icon: Widget4OutlineIcon },
  {
    text: "اطلاعات ادمین",
    href: "/admin/me",
    icon: UserCircleOutlineIcon,
  },
  {
    text: "لیست مقالات",
    href: "/admin/posts",
    icon: PostsOutlineIcon,
  },
  {
    text: "کاربران سایت",
    href: "/admin/users",
    icon: UsersOutlineIcon,
  },
  {
    text: "دسته بندی",
    href: "/admin/category",
    icon: CategoryOutlineIcon,
  },
  { text: "نظرات", href: "/admin/comments", icon: ChatDotsOutlineIcon },
  {
    text: "تنظیمات",
    href: "/admin/settings",
    icon: SettingsLinearIcon,
  },
];
