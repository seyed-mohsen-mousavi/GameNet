import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { LiaTelegram } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { Image } from "@nextui-org/image";
import Modal from "react-modal";
import Comments from "./Comments";
import useServer from "../../hook/useServer";

function SinglePage() {
  const { id } = useParams();
  const [game, isLoading] = useServer(`games/${id}`);
  const trialer = useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    language: "fa",
    poster: game.details?.images.poster,
    sources: [
      {
        src: game.trialer,
        type: "video/mp4",
        label: "360p",
        res: 360,
      },
    ],
    playbackRates: [0.5, 1, 1.5, 2.5],
  };
  const desc = useRef();
  const prdc = useRef();
  const gallery = useRef();
  const comments = useRef();
  console.log(game.details?.images.gallery);
  if (isLoading) return <div>Loading</div>;
  return (
    <div className="w-full flex gap-7 flex-col  px-5 mt-6 ">
      <div className="flex gap-5 flex-col md:flex-row p-5   rounded-lg">
        <div className="xl:w-3/4 w-full h-96 bg-black/15 backdrop-blur p-4 rounded-lg">
          <p
            ref={trialer}
            className="z-10 absolute border-2 border-gray-400 backdrop-blur-lg bg-black/50 px-5 py-1 rounded-full animate-fade shadow-xl  text-white  top-7 right-10 text-lg font-PeydaMed"
          >
            تریلر بازی
          </p>
          <VideoPlayer options={videoJsOptions} el={trialer} />
        </div>
        <AboutGame
          title={game.title}
          desc={game.description}
          categ={game.category}
          date={game.date}
          like={game.like}
          save={game.save}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 z-10 w-full mt-2">
        <div className="flex flex-col gap-7">
          <Description el={desc} />
          <Producer el={prdc} />
          <Gallery
            el={gallery}
            images={game.details?.images.gallery}
            title="sss"
          />
          <Comments el={comments} />
          <br />
          <br />
        </div>
        <div className="flex flex-col gap-5">
          <AboutPage />
          <Timeline
            desc={desc}
            prdc={prdc}
            gallery={gallery}
            comments={comments}
          />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

function AboutGame({ title, desc, categ, date, like, save }) {
  return (
    <div className="md:w-1/2 z-10">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{date}</span>
        <div className="flex  gap-5">
          <button className=" text-red-500 text-sm flex gap-1 items-center bg-red-500/30 hover:bg-red-500/50 transition-colors ease-linear px-2 py-1 rounded">
            <p className="mt-1">{like}</p>
            <HeartIcon className="w-5 h-5" />
          </button>
          <button className=" text-gray-500 text-sm flex gap-1 items-center bg-gray-500/30 hover:bg-gray-500/50 transition-colors ease-linear px-2 py-1 rounded">
            <p className="mt-1">{save}</p>
            <BookmarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl font-PeydaBlack pt-5 pb-2">{title}</h2>
        <Link to="" className="px-2 py-0.5 rounded-lg bg-black/20 text-sm">
          {categ}
        </Link>
        <p className="text-gray-300 line-clamp-[10] pt-3">{desc}</p>
      </div>
    </div>
  );
}
function AboutPage() {
  return (
    <>
      <div className="flex flex-col gap-7 border-y bg-black/10 border-y-green-400 rounded-lg border-gray-400">
        <div className=" text-white p-5 rounded-xl flex flex-col gap-6 max-h-full  ">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full border-4 border-gray-600  object-cover w-16 h-16"
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

function Timeline({ desc, prdc, gallery, comments }) {
  const [isDesc, setIsDesc] = useState(false);
  const [isPrdc, setIsPrdc] = useState(false);
  const [isgallery, setIsgallery] = useState(false);
  const [iscomments, setIscomments] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > desc.current.offsetTop) {
        setIsDesc(true);
      } else {
        setIsDesc(false);
      }
      if (window.pageYOffset > prdc.current.offsetTop) {
        setIsPrdc(true);
      } else {
        setIsPrdc(false);
      }
      if (window.pageYOffset > gallery.current.offsetTop) {
        setIsgallery(true);
      } else {
        setIsgallery(false);
      }
      if (window.pageYOffset > comments.current.offsetTop + 20) {
        setIscomments(true);
      } else {
        setIscomments(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (el) =>
    el.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <ul className="timeline timeline-vertical   rounded-lg p-3 font-Peyda sticky top-6">
      <li>
        <div className="timeline-start timeline-box bg-transparent border-none shadow-none">
          <Button
            onClick={() => handleScroll(desc)}
            variant="text"
            className="!text-white !font-Peyda"
          >
            توضیحات
          </Button>
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5  transition-colors ease-linear ${
              isDesc ? "text-primary" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr
          className={`transition-colors ease-linear ${
            isDesc ? "bg-primary " : ""
          }`}
        />
      </li>
      <li>
        <hr
          className={`transition-colors ease-linear ${
            isPrdc ? "bg-primary " : ""
          }`}
        />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5  transition-colors ease-linear ${
              isPrdc ? "text-primary" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box bg-transparent border-none shadow-none">
          <Button
            onClick={() => handleScroll(prdc)}
            variant="text"
            className="!text-white !font-Peyda"
          >
            سازنده بازی
          </Button>
        </div>
        <hr
          className={`transition-colors ease-linear ${
            isgallery ? "bg-primary " : ""
          }`}
        />
      </li>
      <li>
        <hr
          className={`transition-colors ease-linear ${
            iscomments ? "bg-primary" : ""
          }`}
        />
        <div className="timeline-start timeline-box bg-transparent border-none shadow-none">
          <Button
            onClick={() => handleScroll(gallery)}
            variant="text"
            className="!text-white !font-Peyda"
          >
            گالری تصاویر
          </Button>
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5  transition-colors ease-linear ${
              iscomments ? "text-primary" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr
          className={`transition-colors ease-linear ${
            iscomments ? "bg-primary" : ""
          }`}
        />
      </li>
      <li>
        <hr
          className={`transition-colors ease-linear ${
            iscomments ? "bg-primary" : ""
          }`}
        />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box bg-transparent border-none shadow-none">
          <Button
            variant="text"
            className="!text-white !font-Peyda"
            onClick={() => handleScroll(comments)}
          >
            نظرات
          </Button>
        </div>
      </li>
    </ul>
  );
}
// ------------------
function Description({ el }) {
  const [open, setOpen] = useState(false);
  const hanleClick = () => {
    setOpen((e) => (e = !e));
  };

  return (
    <div
      ref={el}
      className="text-white flex flex-col items-center w-full relative h-full rounded-xl rounded-b-3xl overflow-hidden p-5"
    >
      <div>
        <div
          className="flex flex-col  w-full p-4 gap-8  mb-1 overflow-hidden"
          style={{ maxHeight: open ? "100%" : "22.5rem" }}
        >
          <TitleHeader title="توضیحات" />
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-4">ویژگی‌های اصلی Warzone</h2>
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
              Warzone به طور مداوم با آپدیت‌های جدید و محتواهای فصلی به‌روزرسانی
              می‌شود که شامل نقشه‌های جدید، سلاح‌ها، حالت‌های بازی و رویدادهای
              ویژه می‌شود.
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
                <li>سیستم‌عامل: Windows 7 64-bit (SP1) or Windows 10 64-bit</li>
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
        className="py-2 text-lg font-PeydaMed hover:text-gray-400 transition-colors text-[#6365f7] z-10"
      >
        {open ? "بستن" : "ادامه"}
      </button>
    </div>
  );
}

function Producer({ el }) {
  const [open, setOpen] = useState(false);
  const hanleClick = () => {
    setOpen((e) => (e = !e));
  };
  return (
    <div
      ref={el}
      className="relative text-white p-5 rounded-xl  flex flex-col gap-6 "
    >
      <TitleHeader title="سازنده بازی" />
      <div className=" text-white flex flex-col items-center">
        <div className=" w-full py-4">
          <h1 className="text-3xl font-bold">سازندگان Call of Duty: Warzone</h1>
        </div>
        <div
          className="flex flex-col gap-6 items-center w-full p-4 overflow-hidden"
          style={{ maxHeight: open ? "100%" : "14.5rem" }}
        >
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-4">Activision</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>تاریخ تأسیس:</strong> 1 اکتبر 1979
              </li>
              <li>
                <strong>مؤسسان:</strong> دیوید کرین، آلن میلر، باب وایت‌هد، و
                لری کاپلان
              </li>
              <li>
                <strong>دفتر مرکزی:</strong> سانتا مونیکا، کالیفرنیا، ایالات
                متحده
              </li>
              <li>
                <strong>وب‌سایت:</strong>{" "}
                <a href="https://www.activision.com" className="text-blue-400">
                  activision.com
                </a>
              </li>
            </ul>
          </section>
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-4">Infinity Ward</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>تاریخ تأسیس:</strong> 2002
              </li>
              <li>
                <strong>مؤسسان:</strong> وینس زامپلا، گرانت کالیر، و جیسون وست
              </li>
              <li>
                <strong>دفتر مرکزی:</strong> وودلند هیلز، کالیفرنیا، ایالات
                متحده
              </li>
              <li>
                <strong>وب‌سایت:</strong>{" "}
                <a
                  href="https://www.infinityward.com"
                  className="text-blue-400"
                >
                  infinityward.com
                </a>
              </li>
            </ul>
          </section>
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-4">Raven Software</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>تاریخ تأسیس:</strong> 1990
              </li>
              <li>
                <strong>مؤسسان:</strong> برایان رافل و استیو رافل
              </li>
              <li>
                <strong>دفتر مرکزی:</strong> مدیسون، ویسکانسین، ایالات متحده
              </li>
              <li>
                <strong>وب‌سایت:</strong>{" "}
                <a
                  href="https://www.ravensoftware.com"
                  className="text-blue-400"
                >
                  ravensoftware.com
                </a>
              </li>
            </ul>
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
        className="py-2 text-lg z-10 font-PeydaMed hover:text-gray-400 transition-colors text-[#6365f7]"
      >
        {open ? "بستن" : "ادامه"}
      </button>
    </div>
  );
}

function Gallery({ el, images, title }) {
  return (
    <div
      ref={el}
      className="text-white p-5 rounded-xl flex flex-col gap-6 max-h-full "
    >
      <TitleHeader title="گالری تصاویر" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-5 w-full mt-5">
        {images?.map((image, index) => (
          <div key={index}>
            <FullScreenImage src={image} alt={`عکس ${index} ${title}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

const FullScreenImage = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="flex justify-center items-center">
      <Image
        onClick={openModal}
        alt={alt}
        src={src}
        className="cursor-pointer w-[40rem] object-cover object-center  h-72"
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 border-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-full" />
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");

export function TitleHeader({ title }) {
  return (
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
        {title}
      </h1>
    </div>
  );
}
