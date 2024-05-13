'use client'
import Image from "next/image";
import { useState } from "react";
import CardFooter from "./CardFooter";
import ShareStatus from "./ShareStatus";

function Card() {
    const [displayShare, setDisplayShare] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const handleShareClick = () => {
        setDisplayShare((prevValue) => !prevValue);
    };

  return (
    <>
      <div className="flex flex-col lg:flex-row w-[21rem] lg:w-auto h-auto">
        <div className="w-[336px] h-[269px] relative">
          <Image
            className="rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
            src="/article_preview/drawers.jpg"
            fill
            alt="Drawers picture"
            priority
          />
        </div>

        <div className="w-[336px] lg:w-[30rem] h-auto">
          <div className="bg-white w-full h-auto lg:h-[calc(100%-77px)] px-10 pb-3 pt-8 lg:rounded-tr-xl">
            <h4 className="font-bold text-very_dark_grayish_blue mb-3 text-base">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h4>
            <p className="text-grayish_blue_secondary">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <CardFooter
            setIsDesktop={setIsDesktop}
            displayShare={displayShare}
            handleShareClick={handleShareClick}
            isDesktop={isDesktop}
          />
        </div>
      </div>

      {displayShare && isDesktop && (
        <>
          <ShareStatus
            isDesktop={isDesktop}
            handleShareClick={handleShareClick}
          />
        </>
      )}
    </>
  );
}

export default Card