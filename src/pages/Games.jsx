import { useRef } from "react";
import Header from "../components/Games/Header";

function Games() {
  const start = useRef(null);
  const scroll = () => {
    start?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <main className="flex flex-col justify-center gap-14 w-full mt-0 md:mt-5 ">
      <Header scroll={scroll} />
      <div ref={start}></div>
    </main>
  );
}

export default Games;
