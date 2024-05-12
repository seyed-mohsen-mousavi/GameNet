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
      <button className="flex sm:hidden " onClick={() => setIsOpen(true)}>
        <Bars3Icon className="w-7 h-7 " />
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
        className={`fixed inset-0 z-10 transition-all duration-300 bg-black/30 dark:bg-black/70  ${
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
          to="/blog"
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
      className={`fixed bottom-0 right-0 top-0 z-20 flex flex-col justify-between sm:hidden w-3/4 overflow-auto bg-[#2a2a38]  p-4 transition-all duration-300 dark:bg-cnDarkBlue-20 mq500:w-1/2 visible ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <section className="flex items-center justify-between py-5">
          <Link className="flex cursor-pointer" to="/">
            <h2 className="bg-gradient-to-l from-[#FFF] to-[#757579] bg-clip-text text-transparent font-bold text-2xl">
              ایران گیم نت | IGN
            </h2>
          </Link>
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 transition-colors text-gray-300"
          />
        </section>
        <nav className="pt-7">
          <ul className="flex w-full flex-col justify-center gap-8 text-base  xl:text-lg">
            <li className="flex">
              <NavLink
                className="flex items-center justify-center gap-4 aria-[current=page]:font-bold aria-[current=page]:border-r-2 pr-2  "
                to="/"
              >
                <HomeIcon className="inline-block h-5 w-5 " />
                <span className="pt-1">خانه</span>
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className=" flex items-center justify-center gap-4 aria-[current=page]:font-bold aria-[current=page]:border-r-2 pr-2 "
                to="/store"
              >
                <BuildingStorefrontIcon className="inline-block h-5 w-5 " />
                بازار
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className="flex items-center justify-center gap-4 aria-[current=page]:font-bold aria-[current=page]:border-r-2 pr-2 "
                to="/blog"
              >
                <BookOpenIcon className="inline-block h-5 w-5 " />
                اخبار
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className="flex items-center justify-center gap-4 aria-[current=page]:font-bold aria-[current=page]:border-r-2 pr-2 "
                to="/games"
              >
                <PuzzlePieceIcon className="inline-block h-5 w-5 " />
                بازی ها
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className="flex items-center justify-center gap-4 aria-[current=page]:font-bold aria-[current=page]:border-r-2 pr-2 "
                to="/stream"
              >
                <VideoCameraIcon className="inline-block h-5 w-5 " />
                استریمر ها
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className="flex items-center justify-center gap-4 aria-[current=page]:font-bold aria-[current=page]:border-r-2 pr-2 "
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
        <NavLink
          to="/login"
          className="text-xs font-thin bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-8  py-2 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 "
        >
          ورود
        </NavLink>
        <NavLink
          to="/register"
          className="text-xs px-7 py-2 transition-transform ease-linear rounded-md border-2 border-[#733cb3] hover:scale-95 "
        >
          ثبت نام
        </NavLink>
      </div>
    </aside>
  );
}
