import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
function MainApplication() {
  return (
    <div>
      <div className="text-xs leading-loose">
        <p>دانلود اپلیکیشن ایران گیم نت</p>
        <p className="text-gray-400">
          با اپلیکیشن ایرن گیم نت خیلی راحت میتونی مقالات رو بخونی
        </p>
        <AblitWebsite />
      </div>
      <div className="flex justify-center gap-5 py-5">
        <button className=" text-xs font-thin bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-6 py-2 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 ">
          <img src="" alt="" />
          <div>
            <p>اندروید</p>
            <p>دانلود برای سیستم عامل اندروید</p>
          </div>
        </button>
        <button className=" text-xs font-thin bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-6 py-2 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 ">
          <img src="" alt="" />
          <div>
            <p>IOS</p>
            <p>دانلود برای سیستم عامل IOS</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default MainApplication;
function AblitWebsite() {
  return (
    <div className="flex justify-center items-center gap-14 text-[10px] text-gray-300 pt-5">
      <div className="flex flex-col gap-1 items-center">
        <ShieldCheckIcon className="w-11 h-11 stroke-1" />
        <span> بازار امن</span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <VideoCameraIcon className="w-11 h-11 stroke-1" />
        <span>استریمر های محبوب</span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <UserGroupIcon className="w-11 h-11 stroke-1" />
        <span>پشتیبانی قوی </span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <RocketLaunchIcon className="w-11 h-11 stroke-1" />
        <span>بروز بودن </span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <PresentationChartBarIcon className="w-11 h-11 stroke-1" />
        <span>ساده و کاربردی</span>
      </div>
    </div>
  );
}
