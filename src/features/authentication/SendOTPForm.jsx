import { PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const checkPhoneNumber = (e) => {
    e?.preventDefault();
    if (phoneNumber.length > 0) {
      if (phoneNumber.startsWith("0")) {
        if (
          phoneNumber &&
          phoneNumber.length >= 11 &&
          phoneNumber.length < 12
        ) {
          setError(false);
          setError2(false);
          setStep(2);
        } else {
          setError(false);
          setError2(true);
        }
      } else if (phoneNumber.startsWith("9")) {
        if (
          phoneNumber &&
          phoneNumber.length >= 10 &&
          phoneNumber.length < 11
        ) {
          setError(false);
          setError2(false);
          setStep(2);
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
      setError2(false);
    }
  };
  return (
    <div>
      <div className="absolute inset-0 w-full h-full bg-gray-500/60 z-30"></div>

      <form className="flex flex-col gap-6" onSubmit={checkPhoneNumber}>
        <h2 className="select-none text-center text-base font-bold  lg:text-xl">
          {" "}
          حساب ایران گیم نت
        </h2>
        <div className="w-full  dir-ltr  ">
          <div className="w-full relative">
            <input
              dir="auto"
              className="w-full text-left bg-white/15 caret-gray-300 outline-none border-2 border-solid border-transparent transition-all   placeholder:text-gray-400 placeholder:select-none  text-base lg:text-lg rounded-xl py-3 lg:py-3 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 font-Peyda "
              placeholder="شماره موبایل"
              inputMode="numeric"
              type="text"
              value={phoneNumber}
              maxLength={phoneNumber.startsWith("0") ? 11 : 10}
              onChange={onChange}
              autoComplete="off"
            />
            <label
              htmlFor="input"
              className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 transition-all  pl-3 lg:p-1 lg:pl-3 right-3 lg:right-4 "
            >
              <PhoneIcon className="transition-all h-5 lg:w-6 w-5 lg:h-6 fill-gray-400 text-gray-400" />
            </label>
          </div>
          {error ? <Error1 /> : ""}
          {error2 ? <Error2 /> : ""}
        </div>
        <button type="submit" className="btn--primary">
          <p className="mx-auto pl-2 font-Peyda">ارسال کد تایید</p>
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
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
