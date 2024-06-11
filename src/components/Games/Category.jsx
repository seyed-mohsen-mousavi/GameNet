import { Link } from "react-router-dom";
import { categories } from "../../../data/sortData";
function Category({ el }) {
  return (
    <div ref={el} className="flex flex-col gap-7">
      <div>
        <h2 className="text-2xl font-PeydaBlack text-center">دسته بندی ها</h2>
        <p className="text-center  text-gray-400 ">بازی ها جداگانه هر سبک</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 ">
        {categories.map((e) => (
          <Link
            to={e.val}
            key={e.id}
            className="p-5 bg-white text-gray-900 rounded-lg relative"
          >
            <div className="flex">
              <div className="w-20">
                <img
                  src="https://pngimg.com/d/fifa_game_PNG23.png"
                  className="absolute -top-5 right-2 w-20"
                  alt={`بازی های  ${e.text }`}
                />
              </div>
              <div>
                <h3 className=" font-PeydaMed">{e.text}</h3>
                <p className="text-xs text-gray-500">کلیک کن تا بریم سمت دنیای {e.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
