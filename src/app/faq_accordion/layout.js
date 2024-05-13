import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function BlogPreviewLayout({ children }) {
  return (
    <main
      className={`bg-yellow text-black flex justify-center items-center w-screen h-screen text-[16px] ${work_sans.className}`}
    >
      {children}
    </main>
  );
}
