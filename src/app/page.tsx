"use client";
import { useEffect, useRef, useState } from "react";
import Features from "@/components/features";
import Header from "@/components/header";

import Navbar from "@/components/navbar";
import Testimoniale from "@/components/testimoniale";
import Curstomers from "@/components/curstomers";
import Stats from "@/components/Stats";
import Footer from "@/components/footer";

export default function Home() {
  const [headerIsVisible, setHeaderIsVisible] = useState<boolean>();
  const headerRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderIsVisible(entry.isIntersecting);
    });
    observer.observe(headerRef.current);
  });

  return (
    <div>
      <Navbar headerIsVisible={headerIsVisible} />
      <Header headerRef={headerRef} />
      <Curstomers />
      <Testimoniale />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

{
  /* <div className="flex flex-row lg:group-hover:backdrop-blur-[10px] lg:group-hover:bg-[#ffffff1f] duration-75 items-center justify-center gap-3 h-12 pt-2 pb-2 pr-2 pl-5 border-[1px] border-solid border-[#fff3] rounded-[100px] shadow-[0px_0.24px_0.1px_-1.25px_rgba(0,0,0,0.07),0px_2px_0.8px_-2.5px_rgba(0,0,0,0.07)]">
  <p className="text-white">Resquest a demo</p>
  <div className="h-7 w-7 text-white font-semibold rounded-full lg:group-hover:bg-[#eb5200] p-2 duration-75">
    <svg
      overflow="visible"
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      focusable="false"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</div>; */
}
