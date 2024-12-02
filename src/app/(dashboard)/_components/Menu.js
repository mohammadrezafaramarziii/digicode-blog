import { BookmarkLinearIcon, ChatDotsOutlineIcon, PostsOutlineIcon, SettingsLinearIcon, UserCircleOutlineIcon, Widget4OutlineIcon } from "@/ui/Icons";

export const menuData = [
  { text: "داشبورد", href: "/profile", icon: Widget4OutlineIcon  },
  { text: "اطلاعات من", href: "/profile/me", icon: UserCircleOutlineIcon  },
  { text: "لیست مقالات", href: "/profile/posts", icon: PostsOutlineIcon  },
  { text: "ذخیره شده ها", href: "/profile/#", icon: BookmarkLinearIcon  },
  { text: "نظرات من", href: "/profile/#", icon: ChatDotsOutlineIcon  },
  { text: "تنظیمات", href: "/profile/#", icon: SettingsLinearIcon  },
];
