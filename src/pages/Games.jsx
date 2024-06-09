import { useRef } from "react";
import Header from "../components/Games/Header";
import Main from "../components/Games/Main";

function Games() {
  const start = useRef(null);
  const scroll = () => {
    start?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <main className="flex flex-col justify-center gap-14 w-full mt-0 md:mt-5 z-10">
      <Header scroll={scroll} />
      <Main el={start} />
    </main>
  );
}

export default Games;
