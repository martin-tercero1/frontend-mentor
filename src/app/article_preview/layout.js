import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function BlogPreviewLayout({ children }) {
  return (
    <main
      className={`bg-light_grayish_blue flex justify-center items-center w-screen h-screen text-[13px] ${manrope.className}`}
    >
      {children}
    </main>
  );
}
