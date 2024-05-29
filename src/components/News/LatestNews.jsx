import { Link } from "react-router-dom";
import useNews from "../../hook/useNews";
import ReactTimeAgo from "react-time-ago";
import {
  BookOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function LatestNews({ children }) {
  const { news, isLoading } = useNews();
  const latest = news.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  const pagination = {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "bg-gray-600",
    bulletActiveClass: "!w-5 sm:w-6 !bg-gray-400",
    lockClass: "hidden",
    renderBullet: function (index, className) {
      return `<div class="w-2 h-2 sm:w-3 sm:h-3  rounded-full cursor-pointer ${className} transition-all ease-linear"></div>`;
    },
  };
  const breakpoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  };
  if (isLoading) return <Loader />;
  return (
    <div>
      {children}
      <Swiper
        breakpoints={breakpoints}
        pagination={pagination}
        spaceBetween={20}
        navigation={{
          lockClass: "hidden",
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation, Pagination]}
      >
        {latest.map((n, index) =>
          index < 4 ? (
            <SwiperSlide
              key={n.id}
              className="w-full px-5 md:px-0 md:w-[22rem]"
            >
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
                <p className="text-gray-300 text-xs line-clamp-3">
                  {n.description}
                </p>
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
            </SwiperSlide>
          ) : (
            ""
          )
        )}
        <div className="flex gap-3 w-full justify-center items-center">
          <button className="prev opacity-60 hover:opacity-80 transition-opacity ease-in-out">
            <svg
              viewBox="0 0 26 30"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:h-4 sm:w-4"
              fill="currentColor"
            >
              <path
                d="M24.577 17.8275C24.4357 17.9725 23.9023 18.5925 23.4055 19.1025C20.4927 22.31 12.8941 27.56 8.91695 29.1625C8.31296 29.42 6.78592 29.965 5.97005 30C5.18826 30 4.44301 29.82 3.73186 29.455C2.84535 28.945 2.1342 28.1425 1.74452 27.195C1.49367 26.5375 1.104 24.57 1.104 24.535C0.714324 22.3825 0.500002 18.885 0.500002 15.02C0.500002 11.3375 0.714323 7.9825 1.03337 5.7975C1.0699 5.7625 1.45957 3.3175 1.88578 2.48C2.66756 0.949999 4.1946 0 5.82879 0H5.97005C7.03434 0.0375 9.27253 0.987501 9.27253 1.0225C13.0353 2.6275 20.4586 7.62 23.442 10.9375C23.442 10.9375 24.2823 11.79 24.6476 12.3225C25.2175 13.0875 25.5 14.035 25.5 14.9825C25.5 16.04 25.181 17.025 24.577 17.8275Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div className="swiper-pagination flex gap-1 items-center"></div>
          <button className="next opacity-60 hover:opacity-80 transition-opacity ease-in-out ">
            <svg
              viewBox="0 0 26 30"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:h-4 sm:w-4"
              fill="currentColor"
            >
              <path
                d="M1.423 12.1725C1.5643 12.0275 2.0977 11.4075 2.5945 10.8975C5.5073 7.69 13.1059 2.44 17.0831 0.8375C17.687 0.58 19.2141 0.035 20.03 0C20.8117 0 21.557 0.18 22.2681 0.545C23.1547 1.055 23.8658 1.8575 24.2555 2.805C24.5063 3.4625 24.896 5.43 24.896 5.465C25.2857 7.6175 25.5 11.115 25.5 14.98C25.5 18.6625 25.2857 22.0175 24.9666 24.2025C24.9301 24.2375 24.5404 26.6825 24.1142 27.52C23.3324 29.05 21.8054 30 20.1712 30H20.03C18.9657 29.9625 16.7275 29.0125 16.7275 28.9775C12.9647 27.3725 5.5414 22.38 2.558 19.0625C2.558 19.0625 1.7177 18.21 1.3524 17.6775C0.782502 16.9125 0.500002 15.965 0.500002 15.0175C0.500002 13.96 0.819002 12.975 1.423 12.1725Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </Swiper>
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
      <div className="flex gap-5">
        <LoaderCard />
        <LoaderCard c="md:block" />
        <LoaderCard c="lg:block" />
        <LoaderCard c="2xl:block" />
      </div>
    </div>
  );
}
function LoaderCard({ c }) {
  return (
    <div className={`w-full px-5 md:px-0 ${c ? "hidden" : ""} ${c}`}>
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
