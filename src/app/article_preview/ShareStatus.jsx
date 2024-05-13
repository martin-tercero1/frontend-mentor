import Image from 'next/image';

function ShareStatus({ handleShareClick, isDesktop }) {
  return (
    <div className="w-[336px] h-auto lg:h-[76px] px-10 pb-5 pt-4 flex justify-evenly items-center rounded-b-xl bg-very_dark_grayish_blue lg:rounded-xl lg:relative lg:-left-[14rem] lg:top-[1rem] lg:shadow-md absolute z-20">
      {/* Arrow element */}
      {isDesktop && (
        <div className="lg:absolute lg:-bottom-5 lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div className="w-0 h-0 border-[10px] border-b-transparent border-r-transparent border-l-transparent border-t-very_dark_grayish_blue"></div>
        </div>
      )}
      <span className="tracking-[0.5rem] text-grayish_blue_secondary font-medium">
        SHARE
      </span>

      <button className="relative w-5 h-5">
        <Image
          src="/article_preview/icon-facebook.svg"
          fill
          alt="Facebook icon"
        />
      </button>

      <button className="relative w-5 h-5">
        <Image
          src="/article_preview/icon-twitter.svg"
          fill
          alt="Twitter icon"
        />
      </button>

      <button className="relative w-5 h-5">
        <Image
          src="/article_preview/icon-pinterest.svg"
          fill
          alt="Pinterest icon"
        />
      </button>

      {!isDesktop && (
        <button
          onClick={handleShareClick}
          className={`flex items-center justify-center rounded-full w-10 h-10 bg-desaturated_dark_blue`}
        >
          <Image
            src="/article_preview/icon-share-white.svg"
            alt="Share icon"
            width={15}
            height={15}
          />
        </button>
      )}
    </div>
  );
}

export default ShareStatus