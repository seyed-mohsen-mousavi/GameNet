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
            className="p-5 bg-gray-500  rounded-2xl relative w-72 group active:scale-95 transition-transform"
          >
            <div className="flex">
              <div className="w-20">
                <img
                  src={e.image}
                  className="absolute -top-5 right-2 w-20 group-hover:-top-6 transition-all"
                  alt={`بازی های  ${e.text}`}
                />
              </div>
              <div>
                <h3 className=" font-PeydaMed">{e.text}</h3>
                <p className="text-xs text-gray-300 line-clamp-1">
                  پیش به سوی  بازی های {e.text}
                </p>
              </div>
            </div>

          </Link>
        ))}
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Category;
