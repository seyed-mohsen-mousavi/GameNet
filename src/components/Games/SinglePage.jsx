import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { LiaTelegram } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

function SinglePage() {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    language: "fa",
    sources: [
      {
        src: "/video/trailer/warzoneTrailer.mp4",
        type: "video/mp4",
        label: "360p",
        res: 360,
      },
      {
        src: "/video/trailer/warzoneTrailer.mp4",
        type: "video/mp4",
        label: "720p",
        res: 720,
      },
      {
        src: "/video/trailer/warzoneTrailer.mp4",
        type: "video/mp4",
        label: "1080p",
        res: 1080,
      },
    ],
    playbackRates: [0.5, 1, 1.5, 2.5],
  };

  return (
    <div className="w-full   px-5 mt-6">
      <div className="flex flex-row p-5  bg-gray-700 rounded-lg">
        <div className=" w-1/2 h-72">
          <VideoPlayer options={videoJsOptions} />
        </div>
        <AboutGame />
      </div>
      <div className="w-1/2">
        <AboutPage />
        <MoreAboutGame />
      </div>
    </div>
  );
}

export default SinglePage;

function AboutPage() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="bg-gray-700 text-white p-5 rounded-lg flex flex-col gap-6 max-h-full  ">
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
        <div className="bg-gray-700 text-white p-5 rounded-lg flex flex-col gap-6 max-h-full ">
          <h3 className="text-lg font-PeydaMed">اطلاعات سازنده ی بازی </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
            itaque eligendi ad vero qui nemo in sed debitis vel voluptate,
            nostrum ab aut, ipsam architecto vitae veritatis velit animi?
          </p>
        </div>
      </div>
    </>
  );
}
