import { PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const hanleCharacterInput = (e) => {
    if (!isNaN(e.target.value)) {
      setInputValue(e.target.value);
    }
  };
  const checkPhoneNumber = (e) => {
    e?.preventDefault();
    if (inputValue.length > 0) {
      if (inputValue.startsWith("0")) {
        if (inputValue && inputValue.length >= 11 && inputValue.length < 12) {
          setError(false);
          setError2(false);
        } else {
          setError(false);
          setError2(true);
        }
      } else if (inputValue.startsWith("9")) {
        if (inputValue && inputValue.length >= 10 && inputValue.length < 11) {
          setError(false);
          setError2(false);
        } else {
          setError(false);
          setError2(true);
        }
      } else {
        setError(false);
        setError2(true);
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col justify-center w-full  items-center gap-5">
      <div className="bg-white/5 px-10 py-8 rounded-xl relative mt-28">
        <form className="flex flex-col gap-6" onSubmit={checkPhoneNumber}>
          <h2 className=" select-none text-center text-base font-bold  lg:text-xl">
            ورود به حساب ایران گیم نت
          </h2>
          <div className="w-full  dir-ltr  ">
            <div className="w-full relative">
              <input
                dir="auto"
                className="w-full text-left bg-white/15 caret-gray-300 outline-none border-2 border-solid border-transparent transition-all  focus:border-gray-500 placeholder:text-gray-400 placeholder:select-none text-base lg:text-lg rounded-full py-3 lg:py-3 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 font-Peyda"
                placeholder="شماره موبایل"
                inputMode="numeric"
                type="text"
                value={inputValue}
                maxLength={inputValue.startsWith("0") ? 11 : 10}
                onChange={hanleCharacterInput}
              />
              <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 lg:p-1 lg:pl-3 right-3 lg:right-4 border-l-3 ">
                <PhoneIcon className="transition-all h-5 lg:w-6 w-5 lg:h-6 fill-gray-400 text-gray-400" />
              </span>
            </div>
            {error ? <Error1 /> : ""}
            {error2 ? <Error2 /> : ""}
          </div>
          <button
            type="submit"
            className="text-sm lg:text-base text-center w-full flex bg-gradient-to-r from-[#7d77e9] to-[#8453bd] px-5 py-3 transition-transform ease-linear rounded-full shadow-[#733cb39c_0px_0px_5px] hover:scale-95 active:scale-100"
          >
            <p className="mx-auto pl-2">ارسال کد تایید</p>
          </button>
        </form>
      </div>
      <div>
        <p className="text-gray-200 text-sm">
          حساب نداری ؟{" "}
          <Link to="/Register" className="text-white font-Peyda">
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
}

function Error1() {
  return (
    <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
      افزودن شماره موبایل ضروری است.
    </span>
  );
}
function Error2() {
  return (
    <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
      لطفا از یک شماره موبایل معتبر استفاده کنید
    </span>
  );
}
