export default function Header({ headerRef }: any) {
  console.log(headerRef);
  return (
    <section
      ref={headerRef}
      className="flex items-center flex-col gap-3 min-h-fit overflow-hidden p-0 relative w-full order-3 h-screen mb-16"
    >
      <div className="w-full h-full flex items-center flex-col justify-center overflow-hidden p-5 relative">
        <div className="flex items-center flex-col gap-0 justify-start inset-0 overflow-hidden p-0 absolute">
          <div className="flex items-center flex-[1_0_0px] flex-col gap-3 h-[1px] justify-center overflow-visible p-0 relative w-full">
            <div className="flex-none inset-0 overflow-hidden absolute z-[1] bg-gradient-to-r from-black to-[rgba(39,45,51,0)] opacity-85"></div>
            <div className="inset-0 absolute flex-none">
              <div className="h-full w-full bg-white overflow-hidden relative">
                <div className="inset-0 absolute overflow-visible">
                  <div className="inset-0 absolute">
                    <img
                      src="https://framerusercontent.com/images/NYGM3NlEq1PdsxeWzJxJsWwkyRI.png"
                      alt=""
                      className="block w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-gradient-to-t from-[rgb(18,18,17)] to-[rgba(18,18,17,0)] opacity-60 h-32 left-0 overflow-hidden absolute right-0 top-0 z-[1]"></div> */}
        </div>
        <div className="flex items-start flex-col gap-8 min-h-fit justify-center pt-12 pb-0 relative w-full z-[3] max-w-6xl">
          <div className="opacity-100 transform perspective-[1200px] transform-origin-[50%_50%_0px] flex-none h-10 left-0 absolute -top-3 w-full z-[1] max-w-fit">
            <a
              href=""
              className="flex items-center cursor-pointer flex-row gap-3 justify-start overflow-visible p-1 relative w-full no-underline backdrop-blur-[10px] h-full rounded-[400px] transform-none transform-origin-[50%_50%_0px] opacity-100 pr-3"
            >
              <div className="flex inset-0 overflow-hidden absolute backdrop-blur-[10px] bg-gradient-to-t from-[rgba(87,85,81,0.2)] to-[rgba(87,85,81,0.4)] rounded-[400px] shadow-[rgba(0,0,0,0.027)_0px_0.72262px_0.72262px_-0.33333px,_rgba(0,0,0,0.04)_0px_2.74624px_2.74624px_-0.66667px,_rgba(0,0,0,0.094)_0px_12px_12px_-1px] opacity-100 will-change-[transform] transform-none transform-origin-[50%_50%_0px] border-[1px_solid_rgba(255,255,255,0.1)]"></div>
              <div className="flex items-center flex-none flex-row gap-4 h-8 justify-start overflow-visible pl-0 pt-0 pr-0 pb-0 relative w-auto z-[5] bg-gradient-to-r from-[rgba(87,85,81,0)] to-[rgba(38,37,35,0)] rounded-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                <div className="flex items-center flex-none flex-row gap-3 h-8 justify-start overflow-hidden px-3 py-2 relative min-w-fit z-[5] bg-gradient-to-t from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)] rounded-full shadow-[rgba(0,0,0,0.004)_0px_0.602187px_0.602187px_0px,_rgba(0,0,0,0.016)_0px_2.28853px_2.28853px_0px,_rgba(0,0,0,0.06)_0px_10px_10px_0px,_rgba(255,255,255,0.1)_0px_0px_0px_1px_inset] opacity-100 transform-none transform-origin-[50%_50%_0px] will-change-[transform]">
                  <div className="flex-none h-auto relative w-auto outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none will-change-[transform] transform-origin-[50%_50%_0px]">
                    <p className="text-[#ffffffb3] text-[13px] lg:text-base font-normal tracking[-0.03em] leading-[16px] space-y-[20px]">
                      Highlight
                    </p>
                  </div>
                </div>
                <div className="flex-none h-auto relative w-auto outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none will-change-[transform] transform-origin-[50%_50%_0px] text-[#ffffffb3]  ">
                  <p className="text-[#ffffffb3] text-[13px] lg:text-base font-normal tracking[-0.03em] leading-[16px] space-y-[20px]">
                    Planhat is named a Leader by Gartner
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 min-h-fit overflow-visible p-0 relative">
            <div className="max-w-[650px]">
              <h1 className="text-white text-5xl lg:text-[115px] font-normal">
                Know them. Grow them.
              </h1>
            </div>
            <div className="max-w-[320px] lg:max-w-[360px]">
              <p className="text-white text-sm lg:text-lg font-normal">
                The customer platform built to acquire, service and grow
                lifelong customers.
              </p>
            </div>
            <a
              href="#"
              className="flex h-12 relative w-auto items-center cursor-pointer gap-1 justify-start overflow-visible p-0 no-underline min-w-fit lg:mb-4"
            >
              <p className="text-white text-base lg:text-lg font-normal">
                Discover the Planthouse
              </p>
              <div className="h-4 w-4 text-white font-semibold">
                <svg
                  overflow="visible"
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-width="1"
                    d="M11.3099 8.49756L6.62244 13.1851C6.49035 13.3171 6.31119 13.3914 6.12439 13.3914C5.93758 13.3914 5.75843 13.3171 5.62634 13.1851C5.49425 13.053 5.42004 12.8738 5.42004 12.687C5.42004 12.5002 5.49425 12.3211 5.62634 12.189L9.81638 8.0001L5.62751 3.81006C5.56211 3.74465 5.51023 3.66701 5.47483 3.58155C5.43943 3.4961 5.42122 3.40451 5.42122 3.31201C5.42122 3.21951 5.43943 3.12792 5.47483 3.04247C5.51023 2.95701 5.56211 2.87937 5.62751 2.81396C5.69292 2.74856 5.77056 2.69668 5.85602 2.66128C5.94147 2.62588 6.03306 2.60767 6.12556 2.60767C6.21806 2.60767 6.30965 2.62588 6.3951 2.66128C6.48056 2.69668 6.5582 2.74856 6.62361 2.81396L11.3111 7.50146C11.3766 7.56686 11.4285 7.64454 11.4639 7.73005C11.4993 7.81556 11.5174 7.90721 11.5173 7.99975C11.5172 8.09229 11.4988 8.1839 11.4633 8.26933C11.4277 8.35475 11.3756 8.43231 11.3099 8.49756Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="#"
              className="px-4 py-3 lg:px-5 lg:py-4 font-bold  text-white text-sm whitespace-nowrap  rounded-[100px] bg-[#d44a00] shadow-[0px_0.241451px_0.0965802px_-1.25px_rgba(0,0,0,0.07),_0px_2px_0.8px_-2.5px_rgba(0,0,0,0.07)]"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
