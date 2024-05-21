import { platform, categories } from "../../../../data/sortData";
import Platform from "./Platform";
import Categorie from "./Categorie";
import { useStoreContext } from "../../context/StoreProvider";
import { Slider } from "@mui/material";
import PriceFilter from "./PriceFilter";
function FillterCard() {
  // hook
  const { hanleFilterCategories, hanleFilterPlatform } = useStoreContext();

  return (
    <div className="">
      <div className="p-2 rounded-lg bg-white/5 backdrop-blur hidden lg:inline-block !sticky top-7 transition-all ease-linear animate-fade">
        <h2 className="text-lg py-3 font-semibold">دسته بندی ( ژانر )</h2>
        <Categorie
          categories={categories}
          hanleFilter={hanleFilterCategories}
        />
        <h2 className="text-lg py-3 font-bold">پلتفرم</h2>
        <Platform hanleFilter={hanleFilterPlatform} platform={platform} />
        <h2 className="text-lg py-3 font-bold">قیمت</h2>
        <PriceFilter />
      </div>
    </div>
  );
}

export default FillterCard;


