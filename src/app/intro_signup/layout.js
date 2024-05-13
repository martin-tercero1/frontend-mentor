import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function IntroSignUpLayout({ children }) {
  return (
    <main
      className={`bg-yellow text-black flex justify-center items-center w-screen h-screen text-[16px] ${poppins.className}`}
    >
      {children}
    </main>
  );
}
