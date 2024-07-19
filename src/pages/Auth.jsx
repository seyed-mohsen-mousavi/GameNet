// import CheckOTPForm from "../features/authentication/CheckOTPForm";

import AuthContainer from "../features/authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="flex flex-col justify-center w-full  items-center gap-5 z-10 h-full">
      <AuthContainer />
    </div>
  );
}
