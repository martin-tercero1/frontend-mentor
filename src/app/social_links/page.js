import Image from "next/image";

export const metadata = {
  title: "Social Links Profile | Frontend Mentor",
  description: "Generated by create next app",
};

export default function page() {
  // - Mobile: 375px
  // - Desktop: 1440px

  return (
    <address className="not-italic w-[21rem] lg:w-[24rem] h-[35rem] lg:h-[38rem] bg-grey flex flex-col items-center justify-around rounded-xl p-10 mx-4 lg:m-none">
      <figure className="flex flex-col items-center">
        <Image
          src="/social_links/avatar-jessica.jpeg"
          width={100}
          height={100}
          className="rounded-full mb-3"
          alt="User picture"
        />
        <figcaption className="text-3xl mb-2">Jessica Randall</figcaption>
        <span className="font-semibold text-green">London, United Kingdom</span>
      </figure>

      <p className="font-normal">&quot;Front-end developer and avid reader.&quot;</p>

      <a
        className="w-full text-center font-bold shadow-md bg-drak_grey py-3 px-10 rounded-lg active:bg-green hover:bg-green hover:text-off_black"
        href="#"
      >
        GitHub
      </a>
      <a
        className="w-full text-center font-bold shadow-md bg-drak_grey py-3 px-10 rounded-lg active:bg-green hover:bg-green hover:text-off_black"
        href="#"
      >
        Frontend Mentor
      </a>
      <a
        className="w-full text-center font-bold shadow-md bg-drak_grey py-3 px-10 rounded-lg active:bg-green hover:bg-green hover:text-off_black"
        href="#"
      >
        LinkedIn
      </a>
      <a
        className="w-full text-center font-bold shadow-md bg-drak_grey py-3 px-10 rounded-lg active:bg-green hover:bg-green hover:text-off_black"
        href="#"
      >
        Twitter
      </a>
      <a
        className="w-full text-center font-bold shadow-md bg-drak_grey py-3 px-10 rounded-lg active:bg-green hover:bg-green hover:text-off_black"
        href="#"
      >
        Instagram
      </a>

      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </address>
  );
}
