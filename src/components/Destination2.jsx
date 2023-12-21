import React, { useState } from "react";

// let planet = "";
const Destination2 = () => {
  const [planet, setPlanet] = useState("moon");
  const [active, setActive] = useState(0);

  const [findDescript, setFindDescript] = useState({
    name: "moon",
    text: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    avg: "384,400 km",
    time: "3 days",
  });
  let descript = findDescript;
  const descriptions = [
    {
      name: "moon",
      text: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      avg: "384,400 km",
      time: "3 days",
    },
    {
      name: "mars",
      text: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      avg: "225 mil. km",
      time: "9 months",
    },
    {
      name: "europa",
      text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      avg: "628 mil. km",
      time: "3 years",
    },
    {
      name: "titan",
      text: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      avg: "1.6 bil. km",
      time: "7 years",
    },
  ];

  const handleClickDestinations = (name) => {
    setPlanet(name);
    descript = descriptions.find((item) => item.name === name);
    setFindDescript(descript);
    // console.log(descript.text);
  };

  // console.log(descript);
  return (
    <>
      <div className=" pt-[6rem] md:pt-[5.6rem] bg-[url('/img/destination/background-destination-mobile.jpg')] sm:bg-[url('/img/destination/background-destination-tablet.jpg')] lg:bg-[url('/img/destination/background-destination-desktop.jpg')] w-full h-full bg-cover">
        <main className="m-auto w-full max-w-[1440px] h-full flex flex-col items-center px-[1.5rem] py-[1.5rem] md:px-[2.41rem] md:py-[2.5rem] lg:pt-[4.75rem] lg:gap-[3rem]  ">
          <div className="w-full text-center md:text-left">
            <h1 className="h1 text-white md:text-[1.15rem] uppercase font-fontBarlowCondense tracking-[.16875rem]">
              <span className="text-[rgba(255,255,255,0.25)] ">01</span> Pick
              your destination
            </h1>
          </div>
          <div className="w-full">
            <div className="grid grid-rows-[auto,1fr] grid-cols-1 place-items-center gap-y-6 mt-[2.44rem] md:gap-y-1 lg:grid-rows-[auto] lg:grid-cols-2 lg:mt-0 lg:gap-x-[7rem] lg:w-[701px] lg:h-[601px] ">
              <div className="relative w-[10.375rem] h-[10.375rem] md:w-[18.8rem] md:h-[18.8rem] lg:col-start-1 lg:col-span-1 1xl:w-[27.8rem] 1xl:h-[27.8rem] lg:w-[300.8px] lg:h-[300.8px] ">
                <img
                  src={`/img/destination/image-${planet}.png`}
                  className="w-[166px] h-[166px] md:w-[300.8px] md:h-[300.8px] xl:w-[444.8px] xl:h-[444.8px] "
                />
              </div>
              <div className="grid grid-cols-1 grid-rows-[max-content, 1fr, auto] justify-items-center items-center lg:justify-self-end">
                <div className="flex justify-center text-[16px] space-x-3 md:gap-[2.25rem] lg:justify-self-start lg:gap-[2.19rem] font-fontBarlowCondense">
                  <button
                    className="cursor-pointer py-[0.94rem] tracking-[0.16875rem] border-b-[0.1875rem] uppercase font-fontBarlowCondense text-[rgba(255,255,255,0.5)]  hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.5)]  border-transparent  transition-border duration-300 ease-in-out"
                    onClick={() => handleClickDestinations("moon")}
                  >
                    Moon
                  </button>
                  <button
                    className="cursor-pointer py-[0.94rem] tracking-[0.16875rem] border-b-[0.1875rem] uppercase font-fontBarlowCondense text-[rgba(255,255,255,0.5)]  hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.5)]  active:text-[rgba(255,255,255,1)] transition-border duration-300 ease-in-out"
                    onClick={() => handleClickDestinations("mars")}
                  >
                    Mars
                  </button>
                  <button
                    className="cursor-pointer py-[0.94rem] tracking-[0.16875rem] border-b-[0.1875rem] uppercase font-fontBarlowCondense text-[rgba(255,255,255,0.5)]  hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.5)]  focus:text-[rgba(255,255,255,1)] border-headline transition-border duration-300 ease-in-out"
                    onClick={() => handleClickDestinations("europa")}
                  >
                    Europa
                  </button>
                  <button
                    className="cursor-pointer py-[0.94rem] tracking-[0.16875rem] border-b-[0.1875rem] uppercase font-fontBarlowCondense text-[rgba(255,255,255,0.5)]  hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.5)]  focus:text-[rgba(255,255,255,1)] border-headline transition-border duration-300 ease-in-out"
                    onClick={() => handleClickDestinations("titan")}
                  >
                    Titan
                  </button>
                </div>
                <h2 className="text-[56px] text-[rgba(255,255,255,1)] uppercase font-fontBelleFair md:text-[4.7rem] lg:justify-self-start lg:text-[100px]">
                  {descript.name}
                </h2>
                <p className="text-[#D6D0F9] text-center text-[0.8675rem] font-fontBarlow leading-[1.5625rem] h-[7.8rem] md:w-[34.8125rem] md:h-max md:leading-[1.75rem] lg:text-[1.05rem] lg:leading-[1.9rem] lg:w-[295px] lg:max-w-[27.75rem] lg:text-left">
                  {descript.text}
                </p>
                <div className="flex flex-col w-full justify-evenly items-center py-[2rem] mt-[2rem] gap-8 border-t-[0.0625rem] border-[#D6D0F9] md:flex-row lg:justify-start lg:gap-[3.25rem] ">
                  <div className="flex flex-col text-white justify-center items-center uppercase lg:items-start">
                    <h5 className="font-fontBarlowCondense text-[#D6D0F9] text-[0.8rem] tracking-[0.14763rem] text-text">
                      Avg. Distance
                    </h5>
                    <span className=" font-fontBelleFair text-[1.6rem] leading-12 flex">
                      {descript.avg}
                    </span>
                  </div>
                  <div className="flex flex-col text-white justify-center items-center uppercase lg:items-start">
                    <h5 className="font-fontBarlowCondense text-[#D6D0F9] text-[0.8rem] tracking-[0.14763rem] text-text">
                      Est. Travel Time
                    </h5>
                    <span className="flex font-fontBelleFair text-[1.6rem] leading-12 w-[120px]">
                      {descript.time}
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

export default Destination2;
