import { Link, useSearchParams } from "react-router-dom";
import useGames from "../../hook/useGames";

function Prodocts() {
  const [searchParams] = useSearchParams();
  let games = useGames();
  let deduped = [];
  const filterPlatform = () => {
    // platform filter
    if (searchParams.get("platform")) {
      const searchp = searchParams.get("platform").split(",");
      //
      let searchFilter = [];
      searchp.map((f) => {
        games.map((g) => {
          g.platform.map((gp) => {
            if (gp.toLowerCase() === f.toLowerCase()) {
              searchFilter = [...searchFilter, g];
            }
          });
        });
      });
      //
      deduped = searchFilter.filter(function (el, i, arr) {
        return arr.indexOf(el) === i;
      });
      games = deduped;
    }
    // category filter
    if (searchParams.get("categ")) {
      const searchc = searchParams.get("categ").split(",");
      //
      let searchFilter = [];
      searchc.map((f) => {
        games.map((g) => {
          if (g.category === f) {
            searchFilter = [...searchFilter, g];
          }
        });
      });
      //
      deduped = searchFilter.filter(function (el, i, arr) {
        return arr.indexOf(el) === i;
      });
      games = deduped;
    }
  };
  filterPlatform();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {games.map((g) => (
        <div
          className="card w-72 bg-white/5 backdrop-blur shadow-xl"
          key={g.id}
        >
          <figure className="p-3">
            <Link to={g.link} className="w-full h-44">
              <img
                src={g.image_preview}
                alt="Shoes"
                className=" object-cover w-full h-full rounded-2xl"
              />
            </Link>
          </figure>
          <div className="card-body px-4 py-2 gap-5">
            <h2 className="card-title">{g.subTitle}</h2>
            <p className="text-gray-400 line-clamp-1 text-sm">{g.desc}</p>
            <div className="card-actions  flex items-center flex-nowrap justify-between text-[#9f9af5]">
              <Link
                to={g.link}
                className="btn  bg-[#5850f57c] hover:bg-[#473fce7c]  text-white  rounded-full py-0 px-5 min-h-9 h-9 w-36 border-none font-normal font-Peyda"
              >
                ادامه مطلب
              </Link>
              <p className="text-center -pl-2 pt-1 text-lg font-bold">
                {g.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Prodocts;
