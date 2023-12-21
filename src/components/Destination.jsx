import React, { useEffect, useState } from "react";
import { useSpaceStore } from "../store/useSpaceStore";

const Destination = () => {
  const destinations = useSpaceStore((state) => state.destinations);
  const [planet, setPlanet] = useState(destinations[0]);
  const [active, setActive] = useState(0);
  const activeDestination = useSpaceStore((state) => state.activeDestination);

  useEffect(() => {
    activeDestination(true);
  }, []);

  const handleClickDestinations = (index) => {
    setPlanet(destinations[index]);
    setActive(index);
  };

  console.log(planet);

  return (
    <>
      <div className="w-full h-full bg-cover pt-[5.2rem] md:pt-[5.6rem] lg:pt-[7.2rem] bg-[url('/img/destination/background-destination-mobile.jpg')] sm:bg-[url('/img/destination/background-destination-tablet.jpg')] lg:bg-[url('/img/destination/background-destination-desktop.jpg')] ">
        <main className="w-full max-w-[1440px] h-full flex flex-col items-center px-[1.5rem] py-[1.5rem] md:px-[2.41rem] md:py-[2.5rem] lg:pl-[9.40rem] lg:pr-[7rem] lg:pt-[4.75rem] lg:gap-[3rem] xl:mx-auto xl:pt-[4rem]">
          <div className="w-full text-center md:text-left">
            <h1 className="h1 text-white text-[.942rem] md:text-[1.177rem] lg:text-[1.65rem] uppercase font-fontBarlowCondense tracking-[.15875rem]">
              <span className="text-[rgba(255,255,255,0.25)] ">01</span> Pick
              your destination
            </h1>
          </div>
          <div className="w-full">
            <div className="grid grid-rows-[auto,1fr] grid-cols-1 place-items-center gap-y-4 mt-[2.44rem] md:gap-y-1 lg:grid-rows-[auto] lg:grid-cols-2 lg:mt-0 lg:gap-x-[7rem] ">
              <div className="relative w-[10.375rem] h-[10.375rem] md:w-[18.8rem] md:h-[18.8rem] lg:col-start-1 lg:col-span-1 1xl:w-[27.8rem] 1xl:h-[27.8rem] lg:w-[300.8px] lg:h-[300.8px] xl:w-[444.8px] xl:h-[444.8px] ">
                <img
                  src={planet.images.png}
                  alt={planet.name}
                  className="w-[166px] h-[166px] md:w-[300.8px] md:h-[300.8px] lg:w-[300.8px] lg:h-[300.8px] xl:w-[444.8px] xl:h-[444.8px] "
                />
              </div>
              <div className="grid grid-cols-1 grid-rows-[max-content, 1fr, auto] justify-items-center items-center lg:justify-self-start">
                <div className="flex justify-center text-[16px] space-x-3 md:gap-[2.25rem] lg:justify-self-start lg:gap-[2.19rem] font-fontBarlowCondense">
                  {destinations.map((item, index) => (
                    <button
                      key={index}
                      className={`${
                        index === active
                          ? "border-white text-white"
                          : "border-transparent"
                      } cursor-pointer py-[0.885rem] tracking-[0.16875rem] border-b-[0.1875rem] uppercase font-fontBarlowCondense text-[rgba(255,255,255,0.5)]  hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.5)]  border-transparent  transition-border duration-100 ease-in`}
                      onClick={() => handleClickDestinations(index)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <h2 className="text-[56px] text-[rgba(255,255,255,1)] uppercase font-fontBelleFair md:text-[4.7rem] lg:justify-self-start lg:text-[100px]">
                  {planet.name}
                </h2>
                <p className="text-center flex  text-[#D6D0F9] text-[0.9375rem] font-fontBarlow leading-[1.5625rem] h-[7.8rem] md:w-[35.8125rem] md:h-max md:leading-[1.75rem] lg:text-[1.06rem] lg:leading-[2rem] lg:w-full  lg:pr-[38px] lg:max-w-[27.75rem] lg:text-left">
                  {planet.description}
                </p>
                <div className="flex flex-col w-full justify-evenly items-center py-[2rem] mt-[2rem] gap-8 border-t-[0.0625rem] border-[#D6D0F9] md:flex-row lg:justify-start lg:gap-[3.25rem] ">
                  <div className="flex flex-col text-white justify-center items-center uppercase lg:items-start">
                    <h5 className="font-fontBarlowCondense text-[#D6D0F9] text-[0.8rem] tracking-[0.14763rem] text-text">
                      Avg. Distance
                    </h5>
                    <span className=" font-fontBelleFair text-[1.6rem] leading-12 flex">
                      {planet.distance}
                    </span>
                  </div>
                  <div className="flex flex-col text-white justify-center items-center uppercase lg:items-start">
                    <h5 className="font-fontBarlowCondense text-[#D6D0F9] text-[0.8rem] tracking-[0.14763rem] text-text">
                      Est. Travel Time
                    </h5>
                    <span className="flex font-fontBelleFair text-[1.6rem] leading-12 w-[120px]">
                      {planet.travel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Destination;
