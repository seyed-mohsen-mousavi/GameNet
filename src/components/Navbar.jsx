import {
  Bars3Icon,
  BookOpenIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  InformationCircleIcon,
  PuzzlePieceIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = "text-white";
  const acivated = "home";

  isOpen
    ? document.body.classList.add("overflow-hidden")
    : document.body.classList.remove("overflow-hidden");

  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  return (
    <nav className="flex justify-between items-center text-sm py-5 sm:py-2 px-5 font-Peyda">
      <h2 className="bg-gradient-to-r from-[#3b35b2] to-[#733cb3] bg-clip-text text-transparent font-bold text-lg">
        ایران گیم نت
      </h2>
      <button className="flex sm:hidden " onClick={() => setIsOpen(true)}>
        <Bars3Icon className="w-7 h-7 " />
      </button>
      <NavLinks active={active} acivated={acivated} />
      <button className="text-xs hidden sm:flex bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-5 py-1 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 ">
        ورود
      </button>
      <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-10 transition-all duration-300 bg-black/30 dark:bg-black/70  ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </nav>
  );
}

export default Navbar;

function NavLinks({ active, acivated }) {
  return (
    <ul className="gap-3 text-xs pt-1.5 hidden sm:flex">
      <li className={`text-gray-500${acivated === "home" ? active : ""}`}>
        <a href="#">خانه</a>
      </li>
      <li className={`text-gray-500${acivated === "store" ? active : ""}`}>
        <a href="#">بازار</a>
      </li>
      <li className={`text-gray-500${acivated === "drop" ? active : ""}`}>
        <a href="#">مقالات </a>
      </li>
      <li className={`text-gray-500${acivated === "game" ? active : ""}`}>
        <a href="#"> بازی ها</a>
      </li>
      <li className={`text-gray-500${acivated === "strimer" ? active : ""}`}>
        <a href="#"> استریمر ها</a>
      </li>
      <li className={`text-gray-500${acivated === "about" ? active : ""}`}>
        <a href="#"> درباره ما</a>
      </li>
    </ul>
  );
}

function Aside({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`fixed bottom-0 right-0 top-0 z-20 flex flex-col justify-between sm:hidden w-3/4 overflow-auto bg-[#2a2a38]  p-4 transition-all duration-300 dark:bg-cnDarkBlue-20 mq500:w-1/2 visible ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <section className="flex items-center justify-between py-5">
          <a className="flex" href="/">
            <h2 className="bg-gradient-to-l from-[#FFF] to-[#757579] bg-clip-text text-transparent font-bold text-2xl">
              ایران گیم نت | IGN
            </h2>
          </a>
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 transition-colors text-gray-300"
          />
        </section>
        <nav className="pt-7">
          <ul className="flex w-full flex-col justify-center gap-4 text-base  xl:text-lg">
            <li className="flex">
              <a className="flex items-center justify-center gap-4" href="/">
                <HomeIcon className="inline-block h-5 w-5" />
                <span className="relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-sm after:bg-cnBlack-20 after:transition-all dark:after:bg-gray-300 font-bold after:w-1/2 after:opacity-100">
                  خانه
                </span>
              </a>
            </li>
            <li className="flex">
              <a
                className="flex items-center justify-center gap-4"
                href="/podcasts"
              >
                <BuildingStorefrontIcon className="inline-block h-5 w-5" />
                <span className="relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-sm after:bg-cnBlack-20 after:opacity-0 after:transition-all dark:after:bg-gray-300 hover:after:w-1/2 hover:after:opacity-50">
                  بازار
                </span>
              </a>
            </li>
            <li className="flex">
              <a
                className="flex items-center justify-center gap-4"
                href="/blogs"
              >
                <BookOpenIcon className="inline-block h-5 w-5" />
                <span className="relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-sm after:bg-cnBlack-20 after:opacity-0 after:transition-all dark:after:bg-gray-300 hover:after:w-1/2 hover:after:opacity-50">
                  مقالات
                </span>
              </a>
            </li>
            <li className="flex">
              <a
                className="flex items-center justify-center gap-4"
                href="/coming-soon"
              >
                <PuzzlePieceIcon className="inline-block h-5 w-5" />
                <span className="relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-sm after:bg-cnBlack-20 after:opacity-0 after:transition-all dark:after:bg-gray-300 hover:after:w-1/2 hover:after:opacity-50">
                  بازی ها
                </span>
              </a>
            </li>
            <li className="flex">
              <a
                className="flex items-center justify-center gap-4"
                href="/resume"
              >
                <VideoCameraIcon className="inline-block h-5 w-5" />
                <span className="relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-sm after:bg-cnBlack-20 after:opacity-0 after:transition-all dark:after:bg-gray-300 hover:after:w-1/2 hover:after:opacity-50">
                  استریمر ها
                </span>
              </a>
            </li>
            <li className="flex">
              <a
                className="flex items-center justify-center gap-4"
                href="/coming-soon"
              >
                <InformationCircleIcon className="inline-block h-5 w-5" />
                <span className="relative p-2 text-center after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-sm after:bg-cnBlack-20 after:opacity-0 after:transition-all dark:after:bg-gray-300 hover:after:w-1/2 hover:after:opacity-50">
                  درباره ما
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-around">
      <button className="text-xs font-thin bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-8  py-2 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 ">
          ورود
        </button>
        <button className="text-xs px-7 py-2 transition-transform ease-linear rounded-md border-2 border-[#733cb3] hover:scale-95 ">
          ثبت نام
        </button>
      </div>
    </aside>
  );
}
