import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { EyeIcon, EyeSlashIcon, KeyIcon, UserIcon } from "@heroicons/react/24/outline";
import Input from "../../ui/input";

function CompleteProfile() {
  const [show, setShow] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      password: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Add your form submission logic here
  };

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="select-none text-center text-base font-bold lg:text-xl">
          حساب ایران گیم نت
        </h2>
        <div className="w-full flex gap-y-3 flex-col">
          <Controller
            name="firstname"
            control={control}
            rules={{ required: "نام الزامی است." }}
            render={({ field }) => (
              <Input
                prop={field}
                placeholder="نام"
                customStyle={{ textAlign: "right" }}
                mode="text"
                label={
                  <UserIcon className="transition-all h-5 lg:w-6 w-5 lg:h-6 text-gray-400" />
                }
                maxLength={25}
              />
            )}
          />
          {errors.firstname && (
            <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
              {errors.firstname.message}
            </span>
          )}
          <Controller
            name="lastname"
            control={control}
            rules={{ required: "نام خانوادگی الزامی است." }}
            render={({ field }) => (
              <Input
                prop={field}
                placeholder="نام خانوادگی"
                customStyle={{ textAlign: "right" }}
                mode="text"
                label={
                  <UserIcon className="transition-all h-5 lg:w-6 w-5 lg:h-6 text-gray-400" />
                }
                maxLength={25}
              />
            )}
          />
          {errors.lastname && (
            <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
              {errors.lastname.message}
            </span>
          )}
          <div className="relative">
            <Controller
              name="password"
              control={control}
              rules={{ required: "رمز عبور الزامی است." }}
              render={({ field }) => (
                <Input
                  prop={field}
                  placeholder="رمز دلخواه"
                  customStyle={{ textAlign: "right" }}
                  mode="text"
                  label={
                    <KeyIcon className="transition-all h-5 lg:w-6 w-5 lg:h-6 text-gray-400" />
                  }
                  maxLength={25}
                  type={show ? "text" : "password"}
                />
              )}
            />
            {errors.password && (
              <span className="text-red-500 inline-block px-4 pt-2 text-sm lg:text-base w-full text-right dir-rtl">
                {errors.password.message}
              </span>
            )}
            {show ? (
              <EyeSlashIcon
                className="size-5 absolute left-4 top-4 text-gray-300 cursor-pointer"
                onClick={() => setShow(!show)}
              />
            ) : (
              <EyeIcon
                className="size-5 absolute left-4 top-4 text-gray-300 cursor-pointer"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
        </div>
        <button type="submit" className="btn--primary">
          <p className="mx-auto pl-2 font-Peyda">ارسال کد تایید</p>
        </button>
      </form>
    </div>
  );
}

export default CompleteProfile;
