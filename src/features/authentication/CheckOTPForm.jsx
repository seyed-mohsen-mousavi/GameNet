import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => e?.preventDefault()}
      >
        <h2 className="select-none text-center text-base font-bold  lg:text-xl">
          کد تایید را وارد کنید
        </h2>
        <div dir="ltr">
          <OTPInput
            containerStyle="gap-5"
            inputStyle="bg-transparent border border-gray-400 min-w-11 h-12 rounded-xl font-Peyda"
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="number"
            
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <button type="submit" className="btn--primary">
          <p className="mx-auto pl-2 font-Peyda">تایید</p>
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
