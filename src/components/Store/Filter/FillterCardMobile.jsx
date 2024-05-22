import { useState } from "react";
import { platform, categories } from "../../../../data/sortData";
import Categorie from "./Categorie";
import Platform from "./Platform";
import PriceFilter from "./PriceFilter";
import "animate.css";
import {
  AdjustmentsVerticalIcon,
  CurrencyDollarIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/16/solid";
import { useStoreContext } from "../../context/StoreProvider";
function FillterCardMobile() {
  const { hanleFilterCategories, hanleFilterPlatform } = useStoreContext();
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [widthC, setWidthC] = useState(0);
  const [widthP, setWidthP] = useState(0);
  const [widthPrice, setWidthPrice] = useState(0);
  // check
  const hanleOpen = (setWidth, setOpen) => {
    setOpen(true);
    let width = 0;
    const id = setInterval(() => {
      if (width === 100) {
        clearInterval(id);
      } else {
        width++;
        setWidth(width);
      }
    }, 4);
  };
  const hanleClose = (setWidth, setOpen) => {
    setOpen(false);
    let width = 100;
    const id = setInterval(() => {
      if (width === 0) {
        clearInterval(id);
      } else {
        width--;
        setWidth(width);
      }
    }, 5);
  };
  return (
    <div>
      <div className="flex  items-center gap-4  lg:hidden mb-8">
        <div
          className={`fixed left-0 w-full h-full top-0 bg-black z-20 bg-opacity-40 transition-all ease-linear duration-1000 ${
            isOpenCategory ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => hanleClose(setWidthC, setIsOpenCategory)}
        ></div>
        <button
          onClick={() => hanleOpen(setWidthC, setIsOpenCategory)}
          className="btn btn-outline btn-primary flex py-2 justify-center items-center flex-1"
        >
          <PuzzlePieceIcon className="sm:w-5 w-4  text-white" />
          <span className="text-white font-normal text-xs sm:text-base">
            ژانر
          </span>
        </button>
        <div
          className={`fixed left-0 w-full h-full top-0 bg-black z-20 bg-opacity-40 transition-all ease-linear duration-1000 ${
            isOpenPlatform ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => hanleClose(setWidthP, setIsOpenPlatform)}
        ></div>
        <button
          onClick={() => hanleOpen(setWidthP, setIsOpenPlatform)}
          className="btn btn-outline btn-primary flex py-2 justify-center items-center border flex-1 text-white"
        >
          <AdjustmentsVerticalIcon className="sm:w-5 w-4  text-white" />
          <span className="text-white font-normal text-xs sm:text-base">
            پلتفرم
          </span>
        </button>
        <div
          className={`fixed left-0 w-full h-full top-0 bg-black z-20 bg-opacity-40 transition-all ease-linear duration-1000 ${
            isOpenPrice ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => hanleClose(setWidthPrice, setIsOpenPrice)}
        ></div>
        <button
          onClick={() => hanleOpen(setWidthPrice, setIsOpenPrice)}
          className="btn btn-outline btn-primary flex py-2 justify-center items-center border flex-1 text-white"
        >
          <CurrencyDollarIcon className="sm:w-5 w-4  text-white" />
          <span className="text-white font-normal text-xs sm:text-base">
            قیمت
          </span>
        </button>
      </div>
      <div className="lg:hidden ">
        <div
          style={{ maxHeight: widthP + "vh", opacity: widthP === 0 ? 0 : 1 }}
          className={`fixed z-30  bottom-0 left-0 right-0  shadow p-5 bg-gray-700 max-w-full rounded-t-3xl overflow-hidden`}
        >
          <h2
            className={`pb-2 text-lg animate__animated  ${
              isOpenPlatform ? "animate__flipInX" : "animate__flipOutX"
            }`}
          >
            پلتفرم{" "}
          </h2>
          <hr className="py-2" />
          <Platform platform={platform} hanleFilter={hanleFilterPlatform} />
        </div>
      </div>
      <div className="lg:hidden">
        <div
          style={{ maxHeight: widthC + "vh", opacity: widthC === 0 ? 0 : 1 }}
          className="fixed z-30 bottom-0 left-0 right-0  shadow p-5 bg-gray-700 max-w-full rounded-t-3xl overflow-hidden"
        >
          <div className={` ${isOpenCategory ? "" : ""}`}>
            <h2
              className={`pb-2 text-lg animate__animated  ${
                isOpenCategory ? "animate__flipInX" : "animate__flipOutX"
              }`}
            >
              ژانر{" "}
            </h2>
            <hr className="py-2 " />
            <Categorie
              categories={categories}
              hanleFilter={hanleFilterCategories}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div
          style={{
            maxHeight: widthPrice + "vh",
            opacity: widthPrice === 0 ? 0 : 1,
          }}
          className="fixed z-30 bottom-0 left-0 right-0  shadow p-5 bg-gray-700 max-w-full rounded-t-3xl overflow-hidden"
        >
          <div className={` ${isOpenPrice ? "" : ""}`}>
            <h2
              className={`pb-2 text-lg animate__animated  ${
                isOpenPrice ? "animate__flipInX" : "animate__flipOutX"
              }`}
            >
              قیمت
            </h2>
            <hr className="py-2 " />
            <div className={`flex justify-center ${isOpenPrice ? 'animate-fade-up animate-duration-700' : ''}`}>
              <PriceFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillterCardMobile;
