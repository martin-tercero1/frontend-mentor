import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function RecipeLayout({ children }) {
  return (
    <main
      className={`bg-white text-dark_charchoal  text-[16px] ${outfit.className}`}
    >
      {children}
    </main>
  );
}
