import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EyeIcon } from "@heroicons/react/24/outline";

function MainHeader() {
  const cards = [
    {
      id: 1,
      title: "سایبرپانک همچنین یکی از زیرسبک‌های داستان‌های پادآرمان‌شهری",
      image: "/images/Cyberpunk2077.jpg",
      view: "665",
      score: "4",
      creatorName: "Ali Ahmadi",
      creatorImage: "",
    },
    {
      id: 2,
      title: " یک بازی اول شخص از مجموعه بازی‌های ندای وظیفه است",
      image: "/images/callofduty_کالاف دیوتی.jpg",
      view: "46",
      score: "4.5",
      creatorName: "Ali Ahmadi",
      creatorImage: "",
    },
    {
      id: 3,
      title:
        "این بازی پنجمین قسمت اصلی در مجموعهٔ کانتر استرایک به‌شمار می‌رود.",
      image: "/images/csgo.jpeg",
      view: "775",
      score: "5",
      creatorName: "Ali Ahmadi",
      creatorImage: "",
    },
  ];
  return (
    <div className="flex flex-col xl:flex-row w-full h-full mt-28">
      <GameTexts />
      <GameCardPreview cards={cards} />
    </div>
  );
}

export default MainHeader;

function GameCardPreview({ cards }) {
  return (
    <div className="relative flex items-center w-full">
      <div className="gradient"></div>
      <GameCardSlider cards={cards} />
    </div>
  );
}

function GameCardSlider({ cards }) {
  const pagination = {
    el: ".swiper-pagination",
    bulletClass:
      " bg-white/50 w-1.5 h-1.5 rounded-full transition-all ease-linear cursor-pointer hover: bg-white/10",
    bulletActiveClass: "!bg-white !w-3",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}"></div>`;
    },
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      initialSlide={1}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={pagination}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper w-[35rem] px-6"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="felx flex-col w-full bg-white/10 backdrop-blur-lg rounded-lg p-3 ">
            <img
              className="rounded-md h-52 aspect-video object-cover"
              src={card.image}
              alt=""
            />
            <div className="flex flex-col gap-3 pt-2 ">
              <p className="text-sm line-clamp-2">{card.title}</p>
              <div className="flex justify-between text-[11px] text-gray-200 ">
                <span className="flex items-center gap-1">
                  {card.view}
                  <EyeIcon className="w-4 h-4" />
                </span>
                <div className="flex items-center gap-1">
                  {card.creatorName}
                  <img
                    src={card.creatorImage}
                    className="w-5 h-5 rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="relative swiper-pagination flex justify-center gap-1 mt-4 "></div>
    </Swiper>
  );
}

function GameTexts() {
  return (
    <div className="w-full flex flex-col gap-7">
      <h1 className="text-4xl font-bold xl:w-3/4 line-clamp-2 first-letter:text-lg leading-snug">
        تماشای بازی و و دیدن بروز ترین اخبار بازی ها فقط تو{" "}
        <span className="bg-gradient-to-r from-[#655fd8] to-[#8856c0] bg-clip-text text-transparent font-extrabold ">
          ایران گیم نت&nbsp;
        </span>
        که حال میده ارعععع
      </h1>
      <p className="text-gray-400 text-xs">
        خیلی راحت با ایران گیم نت به تمام اخبار بازی های جهان اگاه باش .
      </p>
      <div className="flex gap-3">
        <button className=" text-xs font-thin bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-6 py-1 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 ">
          بریم برای شروع
        </button>
        <button className="text-xs  px-5 py-1 transition-transform ease-linear rounded-md border-2 border-[#733cb3] hover:scale-95 ">
          ثبت نام
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex -space-x-2 space-x-reverse">
          <img
            className="w-12 h-12 border-2 bg-gray-800 border-[#733cb3] rounded-full  object-cover aspect-video"
            src="/images/csgo.jpeg"
            alt=""
          />
          <img
            className="w-12 h-12 border-2 bg-gray-800 border-gray-600 rounded-full  object-cover aspect-video"
            src="/images/csgo.jpeg"
            alt=""
          />
          <img
            className="w-12 h-12 border-2 bg-gray-800 border-[#50297e] rounded-full  object-cover aspect-video"
            src="/images/csgo.jpeg"
            alt=""
          />
        </div>
        <p className="text-xs w-[6.5rem]">بیش از 1000 سازنده بازی در ایران گیم نت ...</p>
      </div>
    </div>
  );
}
