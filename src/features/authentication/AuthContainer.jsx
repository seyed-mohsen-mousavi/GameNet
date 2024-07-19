import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) =>
              !isNaN(e.target.value) ? setPhoneNumber(e.target.value) : ""
            }
          />
        );
      case 2:
        console.log(phoneNumber);
        return <CheckOTPForm />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-white/5 px-10 py-8 rounded-xl relative overflow-hidden">
      {renderStep()}
    </div>
  );
}

export default AuthContainer;
