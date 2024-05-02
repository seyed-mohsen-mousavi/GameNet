import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EyeIcon } from "@heroicons/react/24/outline";
function MainHeader() {
  const cards = [
    {
      id: 1,
      title: "به آفتاب نگاه کن که همچون",
      image:
        "https://img.freepik.com/free-photo/mom-spending-time-with-kid-beach_23-2150924964.jpg?w=740&t=st=1714654911~exp=1714655511~hmac=dd195c7e2561bafa05344f83ff702e4999dfb00398e6bca5e3626dca00f093ab",
      view: "665",
      score: "4",
      creatorName: "Ali Ahmadi",
      creatorImage:
        "https://inkforall.com/wp-content/uploads/2022/09/ca4d4ab1-7090-1506-9bfc-d65f4b44e955-714x476.png",
    },
    {
      id: 2,
      title: "به آفتاب نگاه کن که همچون",
      image:
        "https://img.freepik.com/free-photo/mom-spending-time-with-kid-beach_23-2150924964.jpg?w=740&t=st=1714654911~exp=1714655511~hmac=dd195c7e2561bafa05344f83ff702e4999dfb00398e6bca5e3626dca00f093ab",
      view: "75",
      score: "5",
      creatorName: "Ali Ahmadi",
      creatorImage:
        "https://inkforall.com/wp-content/uploads/2022/09/ca4d4ab1-7090-1506-9bfc-d65f4b44e955-714x476.png",
    },
    {
      id: 3,
      title: "به آفتاب نگاه کن که همچون",
      image:
        "https://img.freepik.com/free-photo/mom-spending-time-with-kid-beach_23-2150924964.jpg?w=740&t=st=1714654911~exp=1714655511~hmac=dd195c7e2561bafa05344f83ff702e4999dfb00398e6bca5e3626dca00f093ab",
      view: "46",
      score: "4.5",
      creatorName: "Ali Ahmadi",
      creatorImage:
        "https://inkforall.com/wp-content/uploads/2022/09/ca4d4ab1-7090-1506-9bfc-d65f4b44e955-714x476.png",
    },
  ];
  return (
    <div className="flex w-full h-full">
      <GameTexts />
      <GameCardPreview cards={cards} />
    </div>
  );
}

export default MainHeader;

function GameCardPreview({ cards }) {
  return (
    <div className="flex items-center w-full">
      <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="felx flex-col w-64 bg-white/10 backdrop-blur-xl rounded-lg p-3 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <img
                className="rounded-md h-52 aspect-video object-cover"
                src={card.image}
                alt=""
              />
              <div className="flex flex-col gap-3 pt-2 ">
                <p className="text-sm">{card.title}</p>
                <div className="flex justify-between text-[11px] text-gray-200 ">
                  <span className="flex items-center gap-1">
                    {card.view}
                    <EyeIcon className="w-4 h-4" />
                  </span>
                  <div className="flex items-center gap-1">
                    {card.creatorName}
                    <img
                      src={card.creatorImage}
                      className="w-5 h-5 rounded-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
    </div>
  );
}
function GameTexts() {
  return <div className="w-1/2"></div>;
}
