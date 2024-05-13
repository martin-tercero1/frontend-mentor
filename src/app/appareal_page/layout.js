import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export default function BlogPreviewLayout({ children }) {
  return (
    <main
      className={`text-black flex w-screen h-screen text-[16px] ${josefin_sans.className}`}
    >
      {children}
    </main>
  );
}
