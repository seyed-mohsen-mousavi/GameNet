import React from "react";
import { convertToEnglishNumbers } from "../utils/convertNumbers";

function Input({
  prop,
  placeholder,
  customStyle,
  mode,
  label,
  maxLength,
  type,
  setValue,
  name,
}) {
  // Function to handle numeric input only for phoneNumber
  const handleNumericInput = (e) => {
    const value = e.target.value.replace(/[^۰-۹0-9]/g, "");
    console.log(value);
    prop.onChange({ ...e, target: { ...e.target, value } });
    setValue({ ...e, target: { ...e.target, value } });
  };

  const handleChange = (e) => {
    if (name === "phoneNumber") {
      handleNumericInput(e);
    } else {
      if (prop) {
        prop.onChange(e);
      }
      if (setValue) {
        setValue(e);
      }
    }
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="absolute top-1/2 -translate-y-1/2 right-4">
          {label}
        </label>
      )}
      <input
        {...prop}
        placeholder={placeholder}
        style={customStyle}
        inputMode={mode}
        maxLength={maxLength}
        type={type}
        onChange={handleChange}
        value={prop.value || ""}
        name={name}
        className="w-full text-left bg-white/15 caret-gray-300 outline-none border-2 border-solid border-transparent transition-all placeholder:text-gray-400 placeholder:select-none text-base lg:text-lg rounded-xl py-3 lg:py-3 placeholder:text-right pr-10 md:pr-12 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 font-Peyda"
      />
    </div>
  );
}

export default Input;
