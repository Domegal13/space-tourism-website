import React, { useState } from "react";
import { useSpaceStore } from "../store/useSpaceStore";

const Technology = () => {
  const technology = useSpaceStore((state) => state.technology);
  const [techno, setTechno] = useState(technology[0]);
  const [active, setActive] = useState(0);

  const handleClicTech = (index) => {
    setTechno(technology[index]);
    setActive(index);
  };

  return (
    <div className="pt-[5.2rem] bg-[url('/img/technology/background-technology-mobile.jpg')] sm:bg-[url('/img/technology/background-technology-tablet.jpg')] lg:bg-[url('/img/technology/background-technology-desktop.jpg')] w-full h-[100vh] bg-cover">
      <main className="w-full lg:max-w-[1440px] h-full flex flex-col items-center pt-[1.5rem]  md:pt-[2.5rem]  lg:pl-[10.41rem] lg:pt-[4.75rem] lg:pb-[7rem] box-border">
        <div className="w-full text-center md:text-left md:px-[2.41rem] lg:md:px-0">
          <h1 className=" text-[#fff] text-[16px] uppercase font-fontBarlowCondense  tracking-[0.16875rem]  md:text-[1.25rem] lg:text-[1.75rem]">
            <span className="text-[rgba(255,255,255,0.25)]">03 </span>
            Spacelaunch 101
          </h1>
        </div>

        <div className="relative w-full h-full  md:max-w-[100vw] lg:pl-[10rem] mx-auto pt-[3rem] ">
          <div className=" flex flex-nowrap overflow-hidden w-full h-full flex-1   cursor-pointer user-select-none">
            <div className="min-w-full w-full h-full flex flex-col items-center gap-[5rem] justify-start py-transition-all duration-1000 ease-custom   lg:flex-row-reverse lg:items-start lg:gap-0 md:gap-[11rem] ">
              <div className="relative h-[10.625rem] max-w-screen-sm w-full border-line border-b-[1px] md:h-[19.375rem] md:max-w-screen-md md:border-none lg:w-[32.1875rem] lg:h-full">
                <img
                  className="absolute w-full h-full object-cover"
                  src={techno.images.landscape}
                />
              </div>

              <div className="text-center text-[#fff] max-w-[87vw]  lg:flex-1 lg:text-left lg:mt-[9.62rem] ">
                <h2 className="font-fontBarlowCondense uppercase opacity-[0.5] md:text-[1.5rem] lg:text-[1rem] lg:tracking-[0.16875rem]">
                  The terminology...
                </h2>

                <h1 className="font-fontBelleFair uppercase text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] lg:whitespace-nowrap">
                  {techno.name}
                </h1>

                <p className="mt-[1rem] leading-[1.5625rem] text-[0.9375rem] font-fontBarlow md:text-[1rem] md:w-[28.625rem] lg:text-[1.125rem] lg:leading-[2rem] lg:w-[27.75rem] lg:mt-0">
                  {techno.description}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[15rem] left-[50%] translate-x-[-50%] flex justify-center space-x-3 Z-10 md:top-[26rem] lg:left-[5%] lg:top-[37%] lg:space-y-[2rem] lg:space-x-0 lg:flex-col lg:items-center lg:justify-center cursor-pointer">
            {technology.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClicTech(index)}
                className={`${
                  index === active
                    ? "bg-white text-slate-950"
                    : "bg-transparent"
                } 
                   active:bg-slate-400  flex justify-center items-center h-[2.5rem] w-[2.5rem] rounded-full font-bellefair md:w-[3.75rem] md:h-[3.75rem] md:text-[1.5rem] lg:text-[2rem] lg:w-[5rem] lg:h-[5rem] bg-transparent text-[#FFF] border-[1px] border-opacity-[0.25] border-[#e5e7eb] `}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;

// <font style="vertical-align: inherit;">
//   <font style="vertical-align: inherit;">
//     animate-fade-left animate-duration-200 animate-delay-100 animate-ease-lineal
//   </font>
// </font>;
