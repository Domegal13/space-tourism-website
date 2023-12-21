import React, { useState } from "react";
import { useSpaceStore } from "../store/useSpaceStore";

const Crew = () => {
  // const slidesCrew = useSpaceStore((state) => state.slidesCrew);
  // const findSlidesCrew = useSpaceStore((state) => state.findSlidesCrew);
  const crew = useSpaceStore((state) => state.crew);
  const [findElem, setFindElem] = useState(crew[0]);
  const [active, setActive] = useState(0);
  const [endImg, setEndImg] = useState([crew[0].images.png]);

  const handleClickSlides = (index) => {
    setFindElem(crew[index]);

    setEndImg(crew[index].images.png);

    setActive(index);
  };

  return (
    <div className="pt-[5.2rem] bg-[url('/img/crew/background-crew-mobile.jpg')] sm:bg-[url('/img/crew/background-crew-tablet.jpg')] lg:bg-[url('/img/crew/background-crew-desktop.jpg')] w-full h-[100vh] bg-cover lg:pt-[7.3rem]">
      <main className="w-full lg:w-[1440px] h-full flex flex-col items-center px-[1.5rem] pt-[1.5rem]  md:px-[2.41rem] md:pt-[2.5rem] lg:px-[9.85rem] lg:pt-[4.35rem] lg:items-start xl:mx-auto">
        <div className="w-full text-center md:text-left  ">
          <h1 className="h1 font-fontBarlowCondense uppercase text-[16px] text-white tracking-[.16875rem] md:text-[20px] lg:text-[1.65rem]">
            <span className="text-[rgba(255,255,255,0.25)] ">02</span> Meet your
            crew
          </h1>
        </div>
        <div className="relative w-full h-full max-w-[87vw] pt-[2.30rem] ">
          <div className=" flex flex-nowrap overflow-hidden w-full h-full flex-1   cursor-pointer user-select-none">
            <div className="min-w-full w-full h-full flex flex-col items-center gap-[5rem] justify-start py-transition-all duration-1000 ease-custom  md:flex-col-reverse md:justify-between lg:flex-row-reverse lg:items-start lg:gap-0">
              {/* <div> */}
              <div className="relative h-[13.875rem]  w-full border-line border-b-[1px] md:h-[33.25rem] md:border-none lg:h-full">
                <img
                  src={endImg}
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <div className="text-center text-[16px] lg:flex-1 lg:text-left lg:mt-[9.62rem]">
                <h2 className=" font-fontBelleFair uppercase opacity-[0.5] md:text-[24px] lg:text-[1.9rem] text-[rgb(255_255_255/1)]">
                  {findElem.role}
                </h2>
                <h1 className="font-fontBelleFair uppercase text-[24px] text-white md:text-[2.353rem] lg:text-[3.3rem] lg:whitespace-nowrap">
                  {findElem.name}
                </h1>
                <p className="mt-[16px] leading-[1.5625rem] text-[0.883rem] text-white font-fontBarlow md:text-[16px] md:w-[35rem] lg:text-[1.059rem] lg:leading-[1.8rem] lg:w-[26.2rem]">
                  {findElem.bio}
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="absolute top-[19rem] left-[50%] translate-x-[-50%] flex justify-center space-x-3 Z-10 md:top-[17rem] lg:left-[5%] lg:top-[85%] lg:space-x-5 cursor-pointer">
            {crew.map((item, index) => (
              <div
                key={index}
                className={`
                ${
                  index === active ? "bg-white" : "bg-slate-500 opacity-[0.17]"
                } 
                } h-3 w-3 rounded-full bg-[rgb(255_255_255/.9)] `}
                onClick={() => handleClickSlides(index)}
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
