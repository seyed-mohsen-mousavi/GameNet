import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";

function Prodoct() {
  const games = [
    {
      id: 1,
      subTitle: "سی اس گو 2",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      image_background: "/images/csgo/2.webp",
      link: "csgo",
      price: "Free",
    },
    {
      id: 2,
      subTitle: "کالاف دیوتی مدرن وافای",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      image_background: "/images/callofduty/2.jpg",
      link: "call-of-duty",
      price: "69.99 $",
    },
    {
      id: 3,
      subTitle: "سایرپرانک",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      image_background: "/images/cyberpunk/1.jpg",
      link: "cyberpunk2077",
      price: "59 $",
    },
  ];

  const { id } = useParams();
  const game = games.find((g) => g.link === id);
  return (
    <div className="flex h-full my-24 gap-8 justify-center relative">
      <div className="w-[29rem] h-full bg-white/5 backdrop-blur p-5 rounded-sm">
        <img
          src={game.image_background}
          alt={game.subTitle + "-images"}
          className="w-full object-cover h-[28rem] rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-2 w-1/2 justify-around">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">2024,11,03</span>
          <div className="flex  gap-5">
            <button className="group text-red-500 transition-all ease-linear">
              <HeartIcon className="w-5 h-5 group-hover:fill-red-400/30 transition-all ease-linear" />
            </button>
            <button className="group text-gray-500 transition-all ease-linear">
              <BookmarkIcon className="w-5 h-5 group-hover:fill-gray-400/30 transition-all ease-linear" />
            </button>
          </div>
        </div>
        <h1 className="text-3xl font-Peyda font-semibold">{game.subTitle}</h1>
        <p className="w-9/12 text-gray-200">{game.desc}</p>
        <div className="flex gap-1 items-center ">
          <img
            src="/images/csgo.jpg"
            loading="lazy"
            alt=""
            className="w-9 h-9 object-cover  rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-[10px] 3xl:text-xs  text-slate-400">نویسنده</p>
            <a
              href="#"
              className="text-xs 3xl:text-sm text-slate-200 hover:underline"
            >
              علی احمدی
            </a>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img
            src="/images/Platform/windows-icon.svg"
            className="w-5 h-5 invert"
            alt=""
          />
          <img
            src="/images/Platform/playstation.png"
            className="w-5 h-7 invert"
            alt=""
          />
          <img
            src="/images/Platform/xbox.png"
            className="w-5 h-5 invert"
            alt=""
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-10">
            <button className="btn font-medium px-10 bg-[#5850f57c] hover:bg-[#5850f598] text-white">
              دیدن بازی در استیم
            </button>
            <p className="font-bold text-lg"> {game.price} </p>
          </div>
          <div className="flex gap-3 items-end">
            <button className="px-4 py-2 bg-[#5850f57c] hover:bg-[#5850f598] rounded transition ease-linear">
              <ArrowRightIcon className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 bg-[#1f1f24c5] text-gray-400 rounded">
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prodoct;
