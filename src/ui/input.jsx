function Input({
  label,
  value,
  setValue,
  name,
  mode = "text",
  dir = "auto",
  prop,
  maxLength,
  type = "text",
  placeholder,
  autoComplete = "on",
  customStyle,
}) {
  return (
    <div className="w-full relative">
      <input
        dir={dir}
        style={customStyle}
        className="w-full text-left bg-white/15 caret-gray-300 outline-none border-2 border-solid border-transparent transition-all placeholder:text-gray-400 placeholder:select-none text-base lg:text-lg rounded-xl py-3 lg:py-3 placeholder:text-right pr-10  md:pr-12 lg:pr-18 pl-4 lg:pl-6 bg-gray-100 font-Peyda"
        placeholder={placeholder}
        inputMode={mode}
        type={type}
        value={value}
        maxLength={maxLength}
        {...prop}
        onChange={setValue && ()}
        autoComplete={autoComplete}
        id={name}
      />
      <label
        htmlFor={name}
        className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 transition-all pl-3 lg:p-1 lg:pl-3 right-3 lg:right-4"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
