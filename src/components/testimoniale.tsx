import React from "react";

export default function Testimoniale() {
  return (
    <section className="h-fit lg:max-w-[1200px] relative w-full lg:p-0 mx-auto lg:h-[550px] lg:mb-20">
      <div className="flex flex-col w-full h-full gap-2 min-h-fit justify-start items-end overflow-hidden relative lg:p-0 bg-[#b3ab9c] lg:bg-transparent p-[7px] rounded-2xl">
        <div className="w-full h-full rounded-2xl overflow-hidden relative mb-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full aspect-[1.7655172413793103]">
            <iframe
              src="https://player.vimeo.com/video/913358090?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              __idm_id__="2433029"
              data-ready="true"
              className="absolute inset-0 w-[1200px] h-full"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center items-center w-12 h-12 backdrop-blur-[10px] absolute left-[15px] bottom-[15px] rounded-[100px] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.5),_0px_0px_0px_1px_rgba(158,157,155,0.08),_0px_2px_4px_0px_rgba(0,0,0,0.06)]">
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className="text-white fill-white"
              >
                <g color="#fff">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-start justify-start gap-10 px-3 mb-6 lg:hidden">
          <div className="h-[48px] w-[155px] flex flex-row items-center justify-center">
            <img
              src="https://framerusercontent.com/images/eZ3FspEGgsVaRu5x4MVKqwLVbo.svg"
              alt=""
              className="w-full h-full object-left-center object-contain aspect-[1.25 / 1]"
            />
          </div>
          <h6 className="text-white text-[16px] font-normal leading-[20px]">
            “I'm already getting calls from people all around the world in
            different functions who have heard about Planhat and want to get
            onboard.”
          </h6>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 w-full px-3 mb-4 lg:hidden">
          <p className="text-white text-[16px] font-normal">Tracy Shouldice</p>
          <p className="text-white text-[12px] font-normal opacity-80">
            Director of Customer Success
          </p>
        </div>
        <div className="lg:flex max-w-[350px] p-6 hidden bottom-[40px] right-[20px] absolute flex-col items-start justify-start backdrop-blur-[50px] bg-gradient-to-br from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] rounded-[12px]">
          <h6 className="text-white text-[25px] mb-14">
            “I'm already getting calls from people all around the world in
            different functions who have heard about Planhat and want to get
            onboard.”
          </h6>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-white">Tracy Shouldice</p>
            <p className="text-white">
              Director of Customer Success, Trend Micro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
