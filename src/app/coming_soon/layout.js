import { Libre_Franklin } from "next/font/google";

const libre_franklin = Libre_Franklin({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
});

export default function BlogPreviewLayout({ children }) {
  return (
    <main
      className={`bg-yellow text-black flex justify-center items-center w-screen h-screen text-[16px] ${figtree.className}`}
    >
      {children}
    </main>
  );
}
