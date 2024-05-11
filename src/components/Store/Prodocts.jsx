import { Link } from "react-router-dom";

function Prodocts() {
  const games = [
    {
      id: 1,
      subTitle: "سی اس گو 2",
      desc: "بازی اول شخص و اکشن در گروه های پنچ نفره بازی اغاز شده و",
      image_background: "/images/csgo.jpg",
      link: "csgo",
      price: "Free",
    },
    {
      id: 2,
      subTitle: "کالاف دیوتی مدرن وافای",
      desc: "بازی اول شخص و اکشن در گروه های پنچ نفره بازی اغاز شده و",
      image_background: "/images/callofduty_کالاف دیوتی.jpg",
      link: "call-of-duty",
      price: "69.99 $",
    },
    {
      id: 3,
      subTitle: "سایرپرانک",
      desc: "بازی اول شخص و اکشن در گروه های پنچ نفره بازی اغاز شده و",
      image_background: "/images/Cyberpunk2077.jpg",
      link: "cyberpunk2077",
      price: "59 $",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {games.map((g) => (
        <div
          className="card w-72 bg-white/5 backdrop-blur shadow-xl"
          key={g.id}
        >
          <figure className="p-3">
            <Link to={g.link} className="w-full h-44">
              <img
                src={g.image_background}
                alt="Shoes"
                className=" object-cover w-full h-full rounded-2xl"
              />
            </Link>
          </figure>
          <div className="card-body px-4 py-2">
            <h2 className="card-title">{g.subTitle}</h2>
            <p className="text-gray-400 line-clamp-1">{g.desc}</p>
            <div className="card-actions  flex items-center flex-nowrap justify-between text-[#9f9af5]">
              <Link
                to={g.link}
                className="btn  bg-[#5850f57c] hover:bg-[#473fce7c]  text-white  rounded-full py-0 px-5 h-10 w-44 border-none"
              >
                Buy Now
              </Link>
              <p className="text-center -pl-2 pt-1 text-lg font-bold">{g.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Prodocts;
