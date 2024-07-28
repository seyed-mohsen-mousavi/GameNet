import { PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { Loading } from "react-daisyui";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const persianToEnglish = (str) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const englishDigits = "0123456789";
    return str.replace(
      /[۰-۹]/g,
      (w) => englishDigits[persianDigits.indexOf(w)]
    );
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const englishPhoneNumber = persianToEnglish(data.phoneNumber);
    // setTimeout(() => {
    //   setStep(2);
    // }, 1500);
  };

  const handleChange = (e) => {
    const value = persianToEnglish(e.target.value);
    setValue("phoneNumber", value);
    onChange(e);
  };

  return (
    <div>
      <div
        className={`absolute inset-0 w-full h-full bg-gray-500/5 backdrop-blur-sm z-20 flex flex-col justify-center items-center transition-all ease-linear ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="z-30 ml-5">
          <Loading className="mr-2" />
        </div>
      </div>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="select-none text-center text-base font-bold lg:text-xl">
          حساب ایران گیم نت
        </h2>
        <div className="w-full dir-ltr">
          <div className="w-full relative">
            <input
              dir="auto"
              className="w-full text-left bg-white/15 caret-gray-300 outline-none border-2 border-solid border-transparent transition-all placeholder:text-gray-400 placeholder:select-none text-base lg:text-lg rounded-xl py-3 lg:py-3 placeholder:text-right pr-14 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 font-Peyda"
              placeholder="شماره موبایل"
              inputMode="numeric"
              type="text"
              value={phoneNumber}
              maxLength={phoneNumber.startsWith("0") ? 11 : 10}
              {...register("phoneNumber", {
                required: "افزودن شماره موبایل ضروری است.",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "لطفا از یک شماره موبایل معتبر استفاده کنید",
                },
              })}
              onChange={handleChange}
              autoComplete="off"
            />
            <label
              htmlFor="input"
              className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 transition-all pl-3 lg:p-1 lg:pl-3 right-3 lg:right-4"
            >
              <PhoneIcon className="transition-all h-5 lg:w-6 w-5 lg:h-6 fill-gray-400 text-gray-400" />
            </label>
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>
        <button type="submit" className="btn--primary">
          <p className="mx-auto pl-2 font-Peyda">ارسال کد تایید</p>
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
