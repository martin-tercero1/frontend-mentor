import { Figtree } from "next/font/google";

const figtree = Figtree({ weight: ["500", "800"], subsets: ["latin"] });

export default function BlogPreviewLayout({ children }) {
  return (
    <main
      className={`bg-yellow text-black flex justify-center items-center w-screen h-screen text-[16px] ${figtree.className}`}
    >
      {children}
    </main>
  );
}
