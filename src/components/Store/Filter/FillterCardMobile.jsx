import { useRef, useState } from "react";
import { platform, categories } from "../../../../data/sortData";
import useSearchSort from "../../../hook/useSearchSort";
import Categorie from "./Categorie";
import Platform from "./Platform";
import { AdjustmentsVerticalIcon } from "@heroicons/react/16/solid";
function FillterCardMobile() {
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [hanleFilterPlatform] = useSearchSort("platform", "categ");
  const [hanleFilterCategories] = useSearchSort("categ", "platform");
  const [width, setWidth] = useState(0);
  console.log(width);
  //   // for price
  //   function separate(Number) {
  //     Number += "";
  //     Number = Number.replace(",", "");
  //     let x = Number.split(".");
  //     let y = x[0];
  //     let z = x.length > 1 ? "." + x[1] : "";
  //     let rgx = /(\d+)(\d{3})/;
  //     while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  //     return y + z;
  //   }
  // check
  return (
    <div>
      <div className="flex gap-x-4  lg:hidden mb-8">
        <div
          className="fixed left-0 w-full h-full top-0 bg-gray-800 z-20 bg-opacity-40"
          style={{ display: isOpenCategory ? "block" : "none" }}
          onClick={() => setIsOpenCategory(false)}
        ></div>
        <button
          onClick={() => {
            setIsOpenCategory(true);
            let width = 0;
            const id = setInterval(() => {
              if (width === 100) {
                clearInterval(id);
              } else {
                width++;
                setWidth(width);
              }
            }, 5);
          }}
          className="btn btn-outline btn-primary flex py-2 justify-center items-center flex-1"
        >
          <AdjustmentsVerticalIcon className="w-5 h-5  ml-2 text-white" />
          <span className="text-white font-normal">فیلتر بر اساس ژانر</span>
        </button>
        <button
          onClick={() => setIsOpenPlatform(true)}
          className="btn btn-outline btn-primary flex py-2 justify-center items-center border flex-1 text-white"
        >
          <AdjustmentsVerticalIcon className="w-5 h-5  ml-2 text-white" />
          <span className="text-white font-normal">فیلتر بر اساس پلتفرم</span>
        </button>
      </div>
      <div className="lg:hidden ">
        <div
          className={`fixed z-50 ${
            isOpenPlatform ? "block" : "hidden"
          } bottom-0 left-0 right-0  shadow p-5 bg-gray-700 max-w-full rounded-t-3xl overflow-y-auto`}
        >
          <h2 className="pb-2 text-lg">فیلتر بر اساس پلتفرم </h2>
          <hr className="py-2" />
          <Platform platform={platform} hanleFilter={hanleFilterPlatform} />
        </div>
      </div>
      <div className="lg:hidden">
        <div
          style={{ maxHeight: width + "vh" }}
          className="fixed z-50 bottom-0 left-0 right-0  shadow p-5 bg-gray-700 max-w-full rounded-t-3xl"
        >
          <div>
            <h2 className="pb-2 text-lg">فیلتر بر اساس ژانر </h2>
            <hr className="py-2 " />
            <Categorie
              categories={categories}
              hanleFilter={hanleFilterCategories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillterCardMobile;
