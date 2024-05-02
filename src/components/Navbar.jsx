function Navbar() {
  const active = "text-white";
  const acivated = "home";
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  return (
    <nav className="flex justify-between items-center text-sm py-2">
      <h2 className="bg-gradient-to-r from-[#3b35b2] to-[#733cb3] bg-clip-text text-transparent font-bold text-lg">
        ایران گیم نت
      </h2>
      <NavLinks active={active} acivated={acivated} />
      <button className="text-xs bg-gradient-to-r from-[#3b35b2] to-[#733cb3] px-5 py-1 transition-transform ease-linear rounded-md shadow-[#733cb39c_0px_0px_5px] hover:scale-95 ">
        ورود
      </button>
    </nav>
  );
}

export default Navbar;

function NavLinks({ active, acivated }) {
  return (
    <ul className="flex gap-3 text-xs pt-1.5">
      <li className={`text-gray-500${acivated === "home" ? active : ""}`}>
        <a href="#">خانه</a>
      </li>
      <li className={`text-gray-500${acivated === "store" ? active : ""}`}>
        <a href="#">بازار</a>
      </li>
      <li className={`text-gray-500${acivated === "drop" ? active : ""}`}>
        <a href="#">دراپ ها</a>
      </li>
      <li className={`text-gray-500${acivated === "game" ? active : ""}`}>
        <a href="#"> بازی ها</a>
      </li>
      <li className={`text-gray-500${acivated === "strimer" ? active : ""}`}>
        <a href="#"> استریمر ها</a>
      </li>
      <li className={`text-gray-500${acivated === "about" ? active : ""}`}>
        <a href="#"> درباره ما</a>
      </li>
    </ul>
  );
}
