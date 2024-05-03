function MainTopProducers({ producers }) {
  return (
    <div className=" relative">
      <h3 className="pr-5">بهترین سازنده های بازیIGN</h3>
      <svg
        viewBox="0 0 39 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute right-56 -top-5 md:w-6 hidden md:block text-white [transform:rotateZ(45deg);] xl:right-24 xl:top-10 xl:[transform:rotateY(180deg);]"
      >
        <path
          d="M9.96 92.03c3.946 3.092 9.307 7.14 13.43 9.493m0 0c.474.271.204-3.913.177-4.109-.581-4.301-1.625-8.535-2.764-12.848m2.586 16.957C4.44 80.457-2.175 53.037 5.481 38.907c.758-1.4 1.586-2.924 2.55-4.313m0 0c1.537-2.213 3.422-4.087 5.935-4.59 2.318-.463 5.784.17 7.94 2.607 4.027 4.553 2.166 11.094-2.429 11.22-4.037.112-9.76-4.42-11.445-9.237Zm0 0a9.684 9.684 0 0 1-.1-.305C.23 9.709 19.54-1.921 36.868 3.657"
          stroke="currentColor"
          strokeWidth="3"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <div className="flex felx-col flex-wrap gap-12 lg:px-44 justify-center divide-y-2 divide-gray-600">
        {producers.map((producer) => (
          <div
            key={producer.id}
            className={`flex gap-10  pt-5 items-center ${
              producer.id < 3 ? "xl:border-none" : ""
            }`}
          >
            <div className="flex gap-2 ">
              <a href="">
                <img
                  src={producer.icon}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </a>
              <div>
                <a
                  href="#"
                  className="text-xs pb-2 hover:underline  underline-offset-2"
                >
                  {producer.name}
                </a>
                <p className="text-[11px] text-gray-400">{producer.Founded}</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] pb-2">
                <span className="text-gray-200">کارکنان</span>&nbsp; : &nbsp;{" "}
                {producer.employees}
              </p>
              <p className="text-[10px] tracking-widest">
                <span className="text-gray-200">درامد</span>&nbsp; : &nbsp;{" "}
                {producer.Revenue}
              </p>
            </div>
            <div>
              <div className="text-[9px] px-2 py-1 rounded-md bg-green-700 mb-1">
                0.555%
              </div>
              <div className="text-[9px] px-2 py-1 rounded-md bg-red-700">
                0.555%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainTopProducers;
