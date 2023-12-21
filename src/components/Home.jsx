import { useNavigate } from "react-router-dom";
import { useSpaceStore } from "../store/useSpaceStore";
import { useState, useEffect } from "react";

const Home = () => {
  const fetchDataSpace = useSpaceStore((state) => state.fetchDataSpace);
  const destinationLine = useState(false);
  const navegacion = useNavigate();
  useEffect(() => {
    fetchDataSpace();
  }, []);

  const handleClickExplore = () => {
    navegacion("/destination");

    destinationLine(true);
  };

  return (
    <>
      <div className="bg-[url('/img/home/background-home-mobile.jpg')] sm:bg-[url('/img/home/background-home-tablet.jpg')] lg:bg-[url('/img/home/background-home-desktop.jpg')] bg-cover bg-bottom min-h-screen w-full pt-[88px] box-border lg:pt-[120px]">
        <div className="container-home m-auto flex flex-col items-center w-full max-w-[1440px] h-[90vh] p-6 pl-7 pt-[19px] font-normal text-[#D0D6F9] md:p-[2.41rem] lg:flex-row lg:pl-[10.41rem] lg:pr-[7.41rem] lg:pb-[7.1875rem] ">
          <div className="flex flex-col w-full h-2/3 justify-start text-center md:pt-[2.20rem] lg:justify-end lg:items-start lg:mt-36 lg:mr-[4rem]">
            <h1 className="box-border flex justify-center items-start text-[0.950rem] leading-8 tracking-[.16875rem] uppercase font-fontBarlowCondense text-sm md:text-[1.18rem] lg:text-[1.65rem]">
              So, you want to travel to
            </h1>
            <h2 className="flex justify-center font-fontBelleFair font-normal text-[5rem] text-white md:text-[9rem] lg:text-[8.875rem] lg:text-start">
              SPACE
            </h2>
            <div>
              <div className="flex flex-wrap m-auto max-w-[450px] pl-3">
                <p className="box-border flex justify-center flex-wrap max-w-[50ch] font-fontBarlow text-[0.875rem] leading-[25px] md:text-[.965rem] md:max-w-[27.75rem] lg:text-start lg:leading-8 lg:text-[1.058rem] lg:maxw-[35ch] lg:h-[130px] 1xl:max-w-[50ch]">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
            </div>
          </div>
          <div className="box-border flex pb-8 pt-16 pr-8 w-full justify-center items-center h-80 lg:h-full lg:items-end lg:justify-end">
            <div
              className="flex items-center justify-center w-36 h-36 bg-white rounded-full grow-1 hover:cursor-pointer hover:shadow-[0px_0px_0px_110px_rgba(255,255,255,0.1)] md:w-[242px] md:h-[242px] lg:hover:shadow-[0px_0px_0px_80px_rgba(255,255,255,0.1)] lg:w-[274px] lg:h-[274px] transition-shadow duration-300 "
              onClick={handleClickExplore}
            >
              <span className=" text-black text-[1.170rem] leading-6 uppercase font-fontBelleFair font-thin lg:text-[2rem]">
                Explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
