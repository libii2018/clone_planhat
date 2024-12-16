export default function Navbar() {
  return (
    <>
      <nav className="left-0 right-0 top-0 order-1 h-16 fixed z-10 lg:absolute">
        <div className="lg:px-10 lg:pt-6 lg:backdrop-blur-0 lg:bg-none lg:border-none lg:shadow-none lg:h-fit flex items-center flex-row gap-2 justify-center overflow-hidden pl-4 pr-1 backdrop-blur-[10px] bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(0,0,0,0.18)] h-full w-full shadow-[0px_0.602187px_2.04744px_rgba(0,0,0,0.008),_0px_2.28853px_7.78101px_rgba(0,0,0,0.035),_0px_10px_34px_rgba(0,0,0,0.16)] opacity-100">
          <div className="flex items-center justify-between flex-[1_0_0px] flex-row flex-nowrap h-min overflow-visible p-0 relative w-full">
            <a
              href="#"
              className="aspect-[1.7777777777777777/1] flex-none h-[var(--framer-aspect-ratio-supported,16px)] overflow-visible relative no-underline w-[30px] flex flex-row items-center"
            >
              <div className="lg:hidden absolute rounded-inherit inset-0">
                <img
                  src="https://framerusercontent.com/images/cRwxt4UyXGFIsKUWMrnMNyPzs4s.svg"
                  alt=""
                  className="block w-full h-full rounded-inherit object-center object-cover"
                />
              </div>
              <div className="hidden lg:block text-white text-2xl font-extrabold">
                planhat
              </div>
            </a>
            <div className="flex items-center justify-center flex-none flex-row flex-nowrap gap-3 h-min w-min overflow-visible p-0 relative">
              <a
                href="#"
                className="px-4 py-2 text-sm whitespace-nowrap text-white font-bold lg:border-[1px] lg:rounded-[50px] lg:hover:backdrop-blur-[10px] lg:hover:bg-[#ffffff1f]"
              >
                Log in
              </a>
              <a
                href="#"
                className="px-4 py-2 text-white  text-sm font-bold whitespace-nowrap rounded-[100px] bg-[#eb5200] shadow-[0px_0.241451px_0.0965802px_-1.25px_rgba(0,0,0,0.07),_0px_2px_0.8px_-2.5px_rgba(0,0,0,0.07)]"
              >
                Request demo
              </a>
              <div className="lg:hidden flex flex-col justify-between h-9 w-10 relative p-3">
                <div className="w-full h-[2px] bg-[rgba(255,255,255,0.7)]"></div>
                <div className="w-full h-[2px] bg-[rgba(255,255,255,0.7)]"></div>
                <div className="w-full h-[2px] bg-[rgba(255,255,255,0.7)]"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed hidden z-20 top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5 gap-3 lg:flex flex-row items-center justify-between backdrop-blur-[10px] bg-gradient-to-r from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.05)] rounded-[400px] shadow-[rgba(0,0,0,0.027)_0px_0.637px_2.166px_-0.25px,rgba(0,0,0,0.03)_0px_1.932px_6.568px_-0.5px,rgba(0,0,0,0.047)_0px_5.106px_17.361px_-0.75px,rgba(0,0,0,0.094)_0px_16px_54.4px_-1px]">
        <div className="flex flex-row items-center justify-start">
          <a href="#" className="text-white text-sm px-1 py-2">
            Home
          </a>
        </div>
        <div className="flex flex-row items-center justify-start rounded-[10px] hover:bg-[#00000029]">
          <a href="#" className="text-white text-sm px-1 py-2">
            Solutions
          </a>
          <div className="flex flex-row items-center justify-center relative aspect-[1/1] transform-none w-3 h-3">
            {/* Barre verticale */}
            <div className="bg-white rounded-full transform-none origin-center h-full w-[1px] absolute top-0 left-1/2 -translate-x-1/2 overflow-visible"></div>

            {/* Barre horizontale */}
            <div className="bg-white rounded-full transform-none origin-center h-[1px] w-full absolute top-1/2 left-0 -translate-y-1/2 overflow-visible"></div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start rounded-[10px] hover:bg-[#00000029]">
          <a href="#" className="text-white text-sm px-1 py-2">
            Platform
          </a>
        </div>
        <div className="flex flex-row items-center justify-start rounded-[10px] hover:bg-[#00000029]">
          <a href="#" className="text-white text-sm px-1 py-2">
            Customers
          </a>
        </div>
        <div className="flex flex-row items-center justify-start rounded-[10px] hover:bg-[#00000029]">
          <a href="#" className="text-white text-sm px-1 py-2">
            Pricing
          </a>
        </div>
        <div className="flex flex-row items-center justify-start rounded-[10px] hover:bg-[#00000029]">
          <a href="#" className="text-white text-sm px-1 py-2">
            Studio
          </a>
        </div>
        <div className="flex flex-row items-center justify-start rounded-[10px] hover:bg-[#00000029]">
          <a href="#" className="text-white text-sm px-1 py-2">
            Explore
          </a>
        </div>
      </div>
    </>
  );
}
