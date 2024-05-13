import { Overpass } from "next/font/google";

const overpass = Overpass({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function BlogPreviewLayout({ children }) {
  return (
    <main
      className={`bg-yellow text-black flex justify-center items-center w-screen h-screen text-[15px] ${overpass.className}`}
    >
      {children}
    </main>
  );
}
