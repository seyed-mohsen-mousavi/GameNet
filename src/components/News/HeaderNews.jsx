import "animate.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
function HeaderNews() {

  return (
    <div className="flex gap-1 ">
      <div className="relative w-2/3 pr-28">
        <img
          src="/images/need-for-speed-heat_back.avif"
          className="w-full h-full object-cover rounded-xl animate-fade"
          alt=""
        />
        <div className="bg-white w-96 max-h-[30rem] absolute top-20 right-0 rounded flex  text-black">
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
            className="mySwiper relative"
          >
            <SwiperSlide className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/icon/header/Grand-Theft-Auto-San-Andreas.jpg"
                  className="rounded-full"
                  alt=""
                />
                <p className="text-black flex">
                  اخبار IGN
                  <span className="text-gray-500 pr-1"> • 1 ماه پیش</span>
                </p>
              </div>
              <p className=" line-clamp-4 font-Peyda text-2xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p>
                <p className="text-gray-600 text-sm line-clamp-5 pt-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <span className="text-xs font-PeydaBlack text-gray-500">
                  <Link>ادامه مطلب</Link>
                </span>
              </p>
              <div>
                <p className="text-xs text-gray-500 inline-flex items-center gap-1">
                  <PencilIcon className="w-3" />
                  فرودین 3 و 1402
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <ChevronRightIcon
              
              className="prev z-50 absolute bottom-5 left-16 w-5 cursor-pointer"
            />

            <ChevronLeftIcon
              
              className="next z-50 absolute bottom-5 left-10 w-5 cursor-pointer"
            />
          </Swiper>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 p-5">
        <RandomCard />
        <RandomCard />
        <RandomCard />
        <RandomCard />
      </div>
    </div>
  );
}
function RandomCard() {
  return (
    <div className="flex gap-2 hover:bg-white/5 backdrop-blur p-2 rounded-lg transition-colors ease-in-out animate-fade animate-duration-1000">
      <Link to="" className="w-56 h-28">
        <img
          src="/images/resident-evil-4.webp"
          className="w-full h-full object-cover rounded-lg "
          alt=""
        />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <span className="text-red-500">ON</span>
          <p className="text-white"> اخبار IGN </p>
          <p className="text-gray-400 text-sm">1 ساعت پیش</p>
        </div>
        <div>
          <Link className="line-clamp-2 hover:underline underline-offset-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </Link>
        </div>
        <div>
          <p className="text-gray-300 text-sm ">
            <Link className="text-red-500 pl-2 hover:underline ">اکشن</Link> 20
            نفر خوندن
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeaderNews;
