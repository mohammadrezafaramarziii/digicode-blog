import LocalFont from "next/font/local";

const yekanBakhFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/yekanBakh/Yekan-Bakh-FaNum-Regular.woff",
      weight: "400",
      style: "normal",
      display:"block",
    },
    {
      path: "../../public/fonts/yekanBakh/Yekan-Bakh-FaNum-Medium.woff",
      weight: "500",
      style: "normal",
      display:"block",
    },
    {
      path: "../../public/fonts/yekanBakh/Yekan-Bakh-FaNum-Heavy.woff",
      weight: "600",
      style: "normal",
      display:"block",
    },
    {
      path: "../../public/fonts/yekanBakh/Yekan-Bakh-FaNum-Bold.woff",
      weight: "700",
      style: "normal",
      display:"block",
    },
    {
      path: "../../public/fonts/yekanBakh/Yekan-Bakh-FaNum-Fat.woff",
      weight: "800",
      style: "normal",
      display:"block",
    },
  ],
  variable: "--font-yekan-bakh",
  style: "normal",
  display: "block",
});

export default yekanBakhFont;
