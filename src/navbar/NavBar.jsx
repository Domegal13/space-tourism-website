import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClickButtonHamburger = (e) => {
    setClicked(!clicked);
  };
  return (
    <>
      <header className="w-full z-40 max-w-[1440px] relative flex justify-between lg:mt-6 ]">
        <div className="w-9 bg-slate-300">
          <img src="./logo.svg" />
        </div>

        <nav
          className="relative h-auto md:hidden"
          onClick={handleClickButtonHamburger}
        >
          <div className="container-menu">
            {clicked ? (
              <div className="container-btn-hamburger lg:hidden transition">
                <button
                  type="button"
                  id="btn-hamburger"
                  className="border-2 absolute top-6 right-4 w-10 h-10 flex items-center justify-center z-20 "
                  // onClick={handleClickButtonHamburger}
                >
                  <img id="hamburger" src="/icon-hamburger.svg" />
                </button>
              </div>
            ) : (
              <div className="menu bg-slate-900 ">
                <button className="absolute top-6 right-4 w-10 h-10 flex items-center justify-center z-20">
                  <img src="/icon-close.svg" />
                </button>

                {/* <div className="pl-8 min-h-screen bg-red-200 w-full"> */}
                <ul className="fixed top-0 right-0 min-h-screen pt-[7rem] pl-8 w-60 flex flex-col gap-7 bg-slate-500/50 backdrop-blur-sm ">
                  <li>
                    <Link to="/" className="flex gap-3">
                      <span className="font-bold">00</span>HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination" className="flex gap-3">
                      <span className="font-bold">01</span>DESTINATION
                    </Link>
                  </li>
                  <li>
                    <Link to="/crew" className="flex gap-3">
                      <span className="font-bold">02</span>CREW
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="flex gap-3">
                      <span className="font-bold">03</span>TECHNOLOGY
                    </Link>
                  </li>
                </ul>
                {/* </div> */}
              </div>
            )}
            {/* <nav className="relative w-[40px] h-auto md:hidden">
            <div className="container-btn-hamburger lg:hidden">
              <button
                type="button"
                id="btn-hamburger"
                className="border-2 absolute top-6 right-4 w-10 h-10 flex items-center justify-center z-20 "
                onClick={handleClickButtonHamburger}
              >
                <img id="hamburger" src="/icon-hamburger.svg" />
              </button>
            </div>

            <div id="menu" className="menu hidden">
              <button className="absolute top-6 right-4 w-10 h-10 flex items-center justify-center z-20">
                <img src="/icon-close.svg" />
              </button>

              <ul className="fixed top-0 right-0 pt-[7rem] pl-8 w-60 flex flex-col gap-7">
                <li>
                  <Link to="/" className="flex gap-3">
                    <span className="font-bold">00</span>HOME
                  </Link>
                </li>
                <li>
                  <Link to="/destination" className="flex gap-3">
                    <span className="font-bold">01</span>DESTINATION
                  </Link>
                </li>
                <li>
                  <Link to="/crew" className="flex gap-3">
                    <span className="font-bold">02</span>CREW
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="flex gap-3">
                    <span className="font-bold">03</span>TECHNOLOGY
                  </Link>
                </li>
              </ul>
            </div>
          </nav> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
