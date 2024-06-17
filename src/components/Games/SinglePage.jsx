import { Link, useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { LiaTelegram } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

function SinglePage() {
  console.log(location.pathname.split("/games/page/")[1]);
  const trialer = useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    language: "fa",
    poster: "/images/callofduty/warzone.jpg",
    sources: [
      {
        src: "/video/trailer/warzoneTrailer.mp4",
        type: "video/mp4",
        label: "360p",
        res: 360,
      },
    ],
    playbackRates: [0.5, 1, 1.5, 2.5],
  };

  return (
    <div className="w-full flex gap-7 flex-col  px-5 mt-6">
      <div className="flex gap-5 flex-col md:flex-row p-5 bg-gray-700  rounded-lg">
        <div className="xl:w-3/4 w-full h-96 bg-black/15 backdrop-blur p-4 rounded-lg">
          <p
            ref={trialer}
            className="z-10 absolute border-2 border-gray-400 backdrop-blur-lg bg-black/50 px-5 py-1 rounded-full animate-fade shadow-xl  text-white  top-7 right-10 text-lg font-PeydaMed"
          >
            تریلر بازی
          </p>
          <VideoPlayer options={videoJsOptions} el={trialer} />
        </div>
        <AboutGame />
      </div>
      <div className="flex flex-col md:flex-row gap-10 z-10 w-full mt-2">
        <div className="flex flex-col gap-5">
          <MoreAboutGame />
          <AboutProdoucer />
        </div>
        <AboutPage />
      </div>
    </div>
  );
}

export default SinglePage;

function AboutGame() {
  return (
    <div className="md:w-1/2 z-10">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">2024,11,03</span>
        <div className="flex  gap-5">
          <button className=" text-red-500 text-sm flex gap-1 items-center bg-red-500/30 hover:bg-red-500/50 transition-colors ease-linear px-2 py-1 rounded">
            <p className="mt-1">20</p>
            <HeartIcon className="w-5 h-5" />
          </button>
          <button className=" text-gray-500 text-sm flex gap-1 items-center bg-gray-500/30 hover:bg-gray-500/50 transition-colors ease-linear px-2 py-1 rounded">
            <p className="mt-1">36</p>
            <BookmarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl font-PeydaBlack pt-5 pb-2">کالاف دیوتی وارزون</h2>
        <Link to="" className="px-2 py-0.5 rounded-lg bg-black/20 text-sm">اکشن</Link>
        <p className="text-sm 2xl:text-base text-gray-300 line-clamp-[10] pt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
}
function MoreAboutGame() {
  const el = useRef();
  const [open, setOpen] = useState(false);
  const hanleClick = () => {
    if (open) {
      scrollTo(el);
    }
    setOpen((e) => (e = !e));
  };

  return (
    <>
      <div
        ref={el}
        className="text-white bg-gray-700  flex flex-col items-center w-full relative h-full rounded-xl rounded-b-3xl overflow-hidden"
      >
        <div>
          <div
            className="flex flex-col  w-full p-4 gap-8  mb-1 overflow-hidden"
            style={{ maxHeight: open ? "100%" : "24rem" }}
          >
            <div className="flex items-center gap-2 -mb-5">
              <div
                style={{
                  boxShadow: `0px 0px 15px 0px #5254d4`,
                  backgroundColor: "#5254d4",
                }}
                className="  w-4 h-4 rounded-full"
              ></div>
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#5254d4] opacity-75"></span>
              <h1 className="text-xl font-PeydaBlack text-[#7577ff] cursor-default select-none">
                توضیحات
              </h1>
            </div>
            <section className="w-full">
              <h2 className="text-2xl font-bold mb-4">
                ویژگی‌های اصلی Warzone
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>نقشه بزرگ و جزئیات آن</li>
                <li>حالت‌های بازی</li>
                <li>گولاگ (Gulag)</li>
                <li>Loadouts</li>
                <li>Cross-Platform Play</li>
              </ul>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold mb-4">
                آپدیت‌ها و محتواهای جدید
              </h2>
              <p>
                Warzone به طور مداوم با آپدیت‌های جدید و محتواهای فصلی
                به‌روزرسانی می‌شود که شامل نقشه‌های جدید، سلاح‌ها، حالت‌های بازی
                و رویدادهای ویژه می‌شود.
              </p>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold mb-4">رقابت و eSports</h2>
              <p>
                Warzone به عنوان یک بازی محبوب در دنیای eSports نیز شناخته شده
                است. مسابقات و تورنمنت‌های مختلفی در سراسر جهان برگزار می‌شود که
                بازیکنان حرفه‌ای و تیم‌ها در آن به رقابت می‌پردازند.
              </p>
            </section>
            <section className="w-full">
              <h2 className="text-2xl font-bold mb-4">
                سیستم مورد نیاز برای اجرا
              </h2>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  حداقل سیستم مورد نیاز:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    سیستم‌عامل: Windows 7 64-bit (SP1) or Windows 10 64-bit
                  </li>
                  <li>پردازنده: Intel Core i3-4340 or AMD FX-6300</li>
                  <li>حافظه رم: 8 GB</li>
                  <li>
                    کارت گرافیک: NVIDIA GeForce GTX 670 / GeForce GTX 1650 or
                    Radeon HD 7950
                  </li>
                  <li>فضای ذخیره‌سازی: 175 GB</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">سیستم پیشنهادی:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>سیستم‌عامل: Windows 10 64-bit</li>
                  <li>پردازنده: Intel Core i5-2500K or AMD Ryzen R5 1600X</li>
                  <li>حافظه رم: 12 GB</li>
                  <li>
                    کارت گرافیک: NVIDIA GeForce GTX 970 / GTX 1660 or Radeon R9
                    390 / RX 580
                  </li>
                  <li>فضای ذخیره‌سازی: 175 GB</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div
          className={`absolute left-0 right-0 bottom-7 h-1/2 bg-gradient-to-t from-cnDarkBlue-27 to-white/0 transition-all ${
            open ? "invisible opacity-0" : "visible opacity-100"
          }`}
        ></div>
        <button
          onClick={hanleClick}
          className="py-2 text-lg font-PeydaMed hover:text-gray-400 transition-colors text-[#6365f7]"
        >
          {open ? "بستن" : "ادامه"}
        </button>
      </div>
    </>
  );
}

function AboutProdoucer() {
  return (
    <div className=" text-white p-5 rounded-xl flex flex-col gap-6 max-h-full bg-gray-700">
      <h2 className="text-2xl font-bold">اطلاعات سازنده ی بازی </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
        itaque eligendi ad vero qui nemo in sed debitis vel voluptate, nostrum
        ab aut, ipsam architecto vitae veritatis velit animi?
      </p>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <div className="flex flex-col gap-7 w-2/6">
        <div className=" text-white p-5 rounded-xl flex flex-col gap-6 max-h-full bg-gray-700 ">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full border-4 border-gray-600 shadow-lg object-cover w-16 h-16"
              src="/images/icon/header/Grand-Theft-Auto-San-Andreas.jpg"
              alt=""
            />
            <div>
              <Link to="">
                <h3 className="text-lg font-PeydaMed">تیم ایران گیم نت</h3>
              </Link>
              <p className="text-sm text-gray-300 pt-1">بازی های IGN</p>
            </div>
          </div>
          <div className=" h-[1px] w-full bg-gray-600" />
          <div>
            <h3 className="text-xs text-gray-200 font-PeydaMed">
              اشتراک گذاری در شبکه های اجتماعی
            </h3>
            <div className="flex gap-3 pt-4 px-1">
              <FaWhatsapp className="w-10 h-5 cursor-pointer transition-all hover:scale-110 hover:text-green-400" />
              <FaInstagram className="w-10 h-5 cursor-pointer transition-all hover:scale-110 hover:text-red-400" />
              <LiaTelegram className="w-10 h-5 cursor-pointer transition-all hover:scale-110 hover:text-blue-300" />
              <FaFacebookF className="w-10 h-5 cursor-pointer transition-all hover:scale-110 hover:text-blue-500" />
              <BsTwitterX className="w-10 h-5 cursor-pointer transition-all hover:scale-110 hover:text-black" />
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-200 font-PeydaMed">
              کپی لینک بازی
            </h3>
            <div className="flex text-gray-400 gap-3 items-center w-full mt-3 rounded-md bg-gray-400/10 p-2 cursor-text select-all">
              <IoMdLink />
              <p className="text-xs">
                http://localhost:5173/games/page/63456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
