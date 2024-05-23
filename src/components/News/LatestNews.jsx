import { Link } from "react-router-dom";
import useNews from "../../hook/useNews";
import ReactTimeAgo from "react-time-ago";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function LatestNews({ children }) {
  const { news, isLoading } = useNews();
  const latest = news.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  if (isLoading) return <Loader />;
  return (
    <div>
      {children}
      <div className="flex gap-5 flex-wrap items-center justify-center">
        {latest.map((n, index) =>
          index < 4 ? (
            <div key={n.id} className="w-[22rem]">
              <Link to={n.id}>
                <img
                  loading="lazy"
                  src={n.image}
                  className="w-full h-60 object-cover rounded-xl hover:brightness-[.8] transition-all ease-linear bg-gray-400"
                  alt={`خبر ${n.title} `}
                />
              </Link>
              <div className="flex flex-col gap-1 pt-3">
                <div className="inline-flex gap-2 items-center text-sm pr-1">
                  <Link className="inline-flex gap-1 items-center">
                    <img
                      loading="lazy"
                      src="/images/icon/header/Grand-Theft-Auto-San-Andreas.jpg"
                      className="w-7 h-7 rounded-full object-cover"
                      alt={`${n.author} سازنده خبر `}
                    />
                    <p className="hover:underline">{n.author}</p>
                  </Link>
                  <p className="text-gray-400">
                    <ReactTimeAgo
                      date={new Date(n.date)}
                      locale="fa-IR"
                      timeStyle="round"
                    />
                  </p>
                </div>
                <h2 className="text-lg font-PeydaMed w-11/12 ">
                  <Link to={n.id}>{n.title}</Link>
                </h2>
                <p className="text-gray-300 text-xs line-clamp-3">{n.description}</p>
                <div className="pt-2">
                  <p className="text-gray-400 inline-flex items-center text-xs gap-1">
                    <Link to="action" className="text-red-500 pl-2">
                      اکشن
                    </Link>
                    <BookOpenIcon className="w-4" />
                    {n.views.toLocaleString()} نفر خوندن
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
function Loader() {
  return (
    <div>
      <div>
        <div key="1" className="flex justify-between pb-5">
          <h2 className="text-2xl font-PeydaBlack w-40 h-7 bg-gray-400 animate-pulse rounded mr-4"></h2>
          <div className="group text-[#bb80ff] font-PeydaMed flex items-center  gap-2 ml-3 w-20 h-5 bg-gray-400 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
      </div>
    </div>
  );
}
function LoaderCard() {
  return (
    <div className="w-[21rem]">
      <div>
        <div className="w-full h-60 rounded-xl bg-gray-400 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-1 pt-3">
        <div className="inline-flex gap-2 items-center text-sm pr-1">
          <div className="inline-flex gap-1 items-center">
            <div className="w-7 h-7 rounded-full object-cover bg-gray-400"></div>
            <p className="hover:underline w-12 h-3 bg-gray-400 animate-pulse rounded-sm"></p>
          </div>
          <p className="text-gray-400 w-16 h-3 bg-gray-400 rounded-sm animate-pulse"></p>
        </div>
        <h2 className="text-lg font-PeydaMed w-11/12 h-3 bg-gray-400 animate-pulse rounded-sm mb-1"></h2>
        <h2 className="text-lg font-PeydaMed w-11/12 h-3 bg-gray-400 animate-pulse rounded-sm"></h2>
        <div className="w-full pt-2 flex flex-col gap-1">
          <p className="w-full h-2 bg-gray-400 animate-pulse rounded-sm"></p>
          <p className="w-full h-2 bg-gray-400 animate-pulse rounded-sm"></p>
          <p className="w-3/4 h-2 bg-gray-400 animate-pulse rounded-sm"></p>
        </div>
        <div className="pt-2">
          <p className="text-gray-400 inline-flex items-center text-xs gap-1">
            <p
              to="action"
              className="text-red-500 ml-2 bg-gray-400 w-7 h-3 animate-pulse rounded-sm"
            ></p>
            <BookOpenIcon className="w-4 text-gray-400 animate-pulse" />
            <p className="bg-gray-400 w-16 h-3 animate-pulse rounded-sm"></p>
          </p>
        </div>
      </div>
    </div>
  );
}
