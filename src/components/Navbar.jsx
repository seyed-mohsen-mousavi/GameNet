import {
  BookOpenIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  InformationCircleIcon,
  PuzzlePieceIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <button
        className="flex sm:hidden hover:bg-white/10 active:bg-white/10 rounded-full p-2 transition-colors ease-linear"
        onClick={() => setIsOpen(true)}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="h-7 w-7 [transform:rotateY(180deg)]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <NavLinks />
      <NavLink
        to="/login"
        className="text-xs hidden sm:flex bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-5 py-1 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 "
      >
        ورود
      </NavLink>
      <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[35] transition-all duration-300 bg-black/30 dark:bg-black/70  ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </nav>
  );
}

export default Navbar;

function NavLinks() {
  return (
    <ul className="gap-3 text-xs pt-1.5 hidden sm:flex">
      <li>
        <NavLink
          className={`text-gray-500 aria-[current=page]:text-white`}
          to="/"
        >
          خانه
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-gray-500 aria-[current=page]:text-white`}
          to="/store"
        >
          بازار
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-gray-500 aria-[current=page]:text-white`}
          to="/news"
        >
          اخبار{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-gray-500 aria-[current=page]:text-white`}
          to="/games"
        >
          {" "}
          بازی ها
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-gray-500 aria-[current=page]:text-white`}
          to="/stream"
        >
          {" "}
          استریمر ها
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-gray-500 aria-[current=page]:text-white`}
          to="/about"
        >
          {" "}
          درباره ما
        </NavLink>
      </li>
    </ul>
  );
}

function Aside({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`fixed bottom-0 right-0 top-0 z-40 flex flex-col justify-between sm:hidden w-60 overflow-auto bg-[#27273db4] backdrop-blur-xl  p-4 transition-all duration-300 dark:bg-cnDarkBlue-20 mq500:w-1/2 visible ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <section className="flex items-center justify-between py-5">
          <Link className="flex cursor-pointer" to="/">
            <h2 className="bg-gradient-to-l from-[#FFF] to-[#757579] bg-clip-text text-transparent font-bold text-xl">
              ایران گیم نت | IGN
            </h2>
          </Link>
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 transition-colors text-gray-300"
          />
        </section>
        <hr />
        <nav className="pt-7">
          <ul className="flex w-full flex-col justify-center gap-4 text-base  xl:text-lg pl-10">
            <li className="flex">
              <NavLink
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 transition-all ease-linear shadow-[#67d0e3] aria-[current=page]:border aria-[current=page]:border-[#67d0e3] aria-[current=page]:text-[#67d0e3] py-2 rounded-xl w-full  pr-2 text-sm"
                to="/"
              >
                <HomeIcon className="inline-block h-5 w-5 " />
                خانه
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => setIsOpen(false)}
                className=" flex items-center gap-4 transition-all ease-linear aria-[current=page]:border aria-[current=page]:border-[#67e390] aria-[current=page]:text-[#67e390] py-2 rounded-xl w-full  pr-2 text-sm"
                to="/store"
              >
                <BuildingStorefrontIcon className="inline-block h-5 w-5 " />
                بازار
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 transition-all ease-linear aria-[current=page]:border aria-[current=page]:border-[#e36767] aria-[current=page]:text-[#e36767] py-2 rounded-xl w-full  pr-2 text-sm"
                to="/news"
              >
                <BookOpenIcon className="inline-block h-5 w-5 " />
                اخبار
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 transition-all ease-linear aria-[current=page]:border aria-[current=page]:border-[#b067e3] aria-[current=page]:text-[#c999eb] py-2 rounded-xl w-full  pr-2 text-sm"
                to="/games"
              >
                <PuzzlePieceIcon className="inline-block h-5 w-5 " />
                بازی ها
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 transition-all ease-linear aria-[current=page]:border aria-[current=page]:border-yellow-500 aria-[current=page]:text-yellow-500 py-2 rounded-xl w-full  pr-2 text-sm"
                to="/stream"
              >
                <VideoCameraIcon className="inline-block h-5 w-5 " />
                استریمر ها
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 transition-all ease-linear aria-[current=page]:border aria-[current=page]:border-[#fff] aria-[current=page]:text-[#fff] py-2 rounded-xl w-full  pr-2 text-sm"
                to="/about"
              >
                <InformationCircleIcon className="inline-block h-5 w-5 " />
                درباره ما
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-around">
        <Link
          onClick={() => setIsOpen(false)}
          to="/login"
          className="text-xs w-full text-center font-thin bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-8  py-2 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] active:scale-95 "
        >
          ورود
        </Link>
      </div>
    </aside>
  );
}
