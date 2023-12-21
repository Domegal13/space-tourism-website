import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpaceStore } from "../store/useSpaceStore";

const NavBar2 = () => {
  
  const [open, setOpen] = useState(false);
  const [clickHome, setClickHome] = useState(false);
  const [clickDestination, setClickDestination] = useState(false);
  const [clickCrew, setClickCrew] = useState(false);
  const [clickTechnology, setClickTechnology] = useState(false);
  const activeDestin = useSpaceStore((state) => state.activeDestin);
  const activeDestination = useSpaceStore((state) => state.activeDestination);

  const navegacion = useNavigate();

  const handleClickHamburger = () => {
    setOpen(!open);
  };

 

  const clickChekedHome = () => {
    setClickHome(true);
    setClickDestination(false);
    setClickCrew(false);
    setClickTechnology(false);
    navegacion("/home");
    setOpen(false);
    activeDestination(false);
  };
  const clickChekedDestination = () => {
    setClickHome(false);
    setClickDestination(true);
    setClickCrew(false);
    setClickTechnology(false);
    navegacion("/destination");
    setOpen(false);
    activeDestination(false);
  };
  const clickChekedCrew = () => {
    setClickHome(false);
    setClickDestination(false);
    setClickCrew(true);
    setClickTechnology(false);
    navegacion("/crew");
    setOpen(false);
    activeDestination(false);
  };
  const clickChekedTechnology = () => {
    setClickHome(false);
    setClickDestination(false);
    setClickCrew(false);
    setClickTechnology(true);
    navegacion("/technology");
    setOpen(false);
    activeDestination(false);
  };

  return (
    <div className="fixed max-w-[1440px] top-0 left-0 right-0 flex justify-between h-[5.2rem] md:h-[5.4rem] md:mt-0 lg:mt-[1.5rem] lg:h-[6.2rem] xl:mx-auto z-40">
      <div className="flex m-[1.5rem] justify-center items-center xl:pl-[3rem] ">
        <button
          className="relative left-5 w-[112px] h-[full] justify-center items-center"
          onClick={clickChekedHome}
        >
          <img
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[50px] lg:h-[50px]"
            src="/logo.svg"
          />
        </button>
      </div>

      <button
        className={`${
          open && "hidden"
        }  absolute top-[1.3rem] right-[.8rem] w-[40px] h-[40px] flex items-center justify-center z-20 md:hidden`}
        onClick={handleClickHamburger}
      >
        <img className="w-[19.1px] h-[16.5px]" src="/icon-hamburger.svg" />
      </button>

      {/* <div className="bg-slate-600/50 min-h-screen w-1/3 pt-6 pr-4 flex items-start justify-end absolute"> */}
      <div
        className={`${
          !open
            ? "translate-x-60 transition-all duration-1000"
            : "transition-all duration-1000 translate-x-0"
        } container-menu-close bg-slate-900/30 pt-1 pr-4 absolute right-0 min-h-screen w-56 backdrop-blur md:hidden`}
      >
        <button
          className="btn-close pt-5 pr-5 absolute right-0"
          onClick={handleClickHamburger}
        >
          <img className="w-[17px] pt-1" src="/icon-close.svg" />
        </button>

        <ul className="fixed text-slate-200 font-medium text-sm top-0 right-0 w-60 mt-10 pt-12 pl-8">
          <li
            className="mt-2 pb-3 tracking-widest leading-7 cursor-pointer"
            onClick={clickChekedHome}
            // onClick={handleClickHome}
          >
            <span className="font-bold pr-2 pl-3 tracking-widest ml-4">00</span>
            HOME
          </li>
          <li
            className="mt-2 pb-3 tracking-widest leading-7 cursor-pointer"
            onClick={clickChekedDestination}
          >
            <span className="font-bold pr-2 pl-3 tracking-widest ml-4">01</span>
            DESTINATION
          </li>
          <li
            className="mt-2 pb-3 tracking-widest leading-7 cursor-pointer"
            onClick={clickChekedCrew}
          >
            <span className="font-bold pr-2 pl-3 tracking-widest ml-4">02</span>
            CREW
          </li>
          <li
            className="mt-2 pb-3 tracking-widest leading-7 cursor-pointer"
            onClick={clickChekedTechnology}
          >
            <span className="font-bold pr-2 pl-3 tracking-widest ml-4">03</span>
            TECHNOLOGY
          </li>
        </ul>
      </div>
      {/* </div> */}

      <div className="hidden w-full backdrop-blur md:bg-[hsla(0,0%,100%,.04)] md:flex md:justify-between items-center text-white text-[14px] font-fontBarlowCondense px-10 min-w-[450px] h-[96px] md:text-[16px] md:max-w-[500px] lg:max-w-[800px] lg:min-w-[640px] lg:justify-between ">
        <ul className="flex justify-center items-center w-full h-full lg:gap-[3.3rem]">
          <li
            className={`${
              clickHome ? "border-b-2" : "border-b-none"
            } flex items-center tracking-[3px] font-normal h-full gap-3 hover:border-b-2 hover:cursor-pointer hover:border-slate-600 hover:trasition-colors hover:delay-150`}
            onClick={clickChekedHome}
          >
            <span className="font-bold tracking-widest h-auto md:hidden lg:flex">
              00
            </span>
            HOME
          </li>
          <li
            className={`${activeDestin ? "border-b-2" : "border-b-none"} ${
              clickDestination ? "border-b-2" : "border-b-none"
            }  flex items-center tracking-[3px] font-normal h-full gap-3 hover:border-b-2 hover:cursor-pointer hover:border-slate-600 hover:trasition-colors hover:delay-150`}
            onClick={clickChekedDestination}
          >
            <span className="font-bold tracking-widest h-auto md:hidden lg:flex">
              01
            </span>
            DESTINATION
          </li>
          <li
            className={`${
              clickCrew ? "border-b-2" : "border-b-none"
            } flex items-center tracking-[3px] font-normal h-full gap-3 hover:border-b-2 hover:cursor-pointer hover:border-slate-600 hover:trasition-colors hover:delay-150`}
            onClick={clickChekedCrew}
          >
            <span className="font-bold tracking-widest h-auto md:hidden lg:flex">
              02
            </span>
            CREW
          </li>
          <li
            className={`${
              clickTechnology ? "border-b-2" : "border-b-none"
            } flex items-center tracking-[3px] font-normal h-full gap-3 hover:border-b-2 hover:cursor-pointer hover:border-slate-600 hover:trasition-colors hover:delay-150`}
            onClick={clickChekedTechnology}
          >
            <span className="font-bold tracking-widest h-auto md:hidden lg:flex">
              03
            </span>
            TECHNOLOGY
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar2;
