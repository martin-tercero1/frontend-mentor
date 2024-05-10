import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function SocialLinksLayout({ children }) {
  return (
    <main
      className={`bg-off_black text-white text-[14px] flex justify-center items-center w-screen h-screen ${inter.className}`}
    >
      {children}
    </main>
  );
}
