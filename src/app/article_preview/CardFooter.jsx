'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import ShareStatus from './ShareStatus'

function CardFooter({ setIsDesktop, displayShare, handleShareClick, isDesktop }) {
   useEffect(() => {
     // Check if the viewport width is greater than or equal to the desktop width threshold
     const handleResize = () => {
       setIsDesktop(window.innerWidth >= 1024); // Adjust this threshold as needed
     };

     // Initial check on component mount
     handleResize();

     // Add resize event listener
     window.addEventListener("resize", handleResize);

     // Remove event listener on component unmount
     return () => window.removeEventListener("resize", handleResize);
   }, []);

  return (
    <>
      {displayShare && !isDesktop && (
        <>
          <ShareStatus isDesktop={isDesktop} handleShareClick={handleShareClick} />
        </>
      )}
        <div className="w-[336px] lg:w-[30rem] h-auto px-10 pb-5 pt-3 flex justify-evenly items-center rounded-b-xl lg:rounded-b-none lg:rounded-br-xl bg-white absolute z-10">
          <Image
            className="rounded-full"
            src="/article_preview/avatar-michelle.jpg"
            alt="Michelle avatar"
            width={45}
            height={45}
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-very_dark_grayish_blue">
              Michelle Appleton
            </span>
            <span className="text-grayish_blue_secondary">28 Jun 2020</span>
          </div>
          
          <button
            onClick={handleShareClick}
            className={`flex items-center justify-center rounded-full w-10 h-10 bg-light_grayish_blue`}
        >
            <Image
            src="/article_preview/icon-share.svg"
            alt="Share icon"
            width={15}
            height={15}
            />
          </button>
        </div>
    </>
  );
}

export default CardFooter;
