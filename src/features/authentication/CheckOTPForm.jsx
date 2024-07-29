import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import OTPInput from "react-otp-input";
import { convertToPersianNumbers } from "../../utils/convertNumbers";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loading } from "react-daisyui";

function CheckOTPForm({ phoneNumber, setStep }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm();
  const otp = watch("otp", "");

  useEffect(() => {
    if (otp.length === 6) {
      handleSubmit(onSubmit)();
    }
  }, [otp]);

  const onSubmit = (data) => {
    if (otp === "123456") {
      toast.success("کد تایید شد");
      setIsLoading(true);
      setTimeout(() => {
        setStep(3);
      }, 1500);
    } else {
      toast.error("کد تایید اشتباه است");
    }
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
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="select-none text-center text-base font-bold lg:text-xl">
          کد تایید را وارد کنید
        </h2>
        <div className="text-center">
          <p className="text-gray-400">
            کد تایید برای شماره {convertToPersianNumbers(phoneNumber)} ارسال
            گردید
          </p>
          <button
            onClick={() => setStep(1)}
            className="text-gray-300 inline-flex items-center gap-x-1"
          >
            ویرایش شماره موبایل
            <PencilSquareIcon className="size-4" />
          </button>
        </div>
        <div dir="ltr">
          <Controller
            name="otp"
            control={control}
            defaultValue=""
            rules={{
              required: "وارد کردن کد تایید الزامی است",
              minLength: {
                value: 6,
                message: "کد تایید باید شامل 6 رقم باشد",
              },
            }}
            render={({ field }) => (
              <OTPInput
                containerStyle={{ gap: "10px", margin: "10px" }}
                inputStyle="bg-transparent border border-gray-400 min-w-16 h-16 rounded-xl font-Peyda"
                value={field.value}
                onChange={(otp) => setValue("otp", otp)}
                numInputs={6}
                inputType="number"
                renderInput={(props) => <input {...props} />}
              />
            )}
          />
          {errors.otp && (
            <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
              {errors.otp.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="btn--primary"
          onClick={handleSubmit(onSubmit)}
        >
          <p className="mx-auto pl-2 font-Peyda">تایید</p>
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
