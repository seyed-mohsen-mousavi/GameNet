import { useRef } from "react";
import Header from "../components/Games/Header";
import Main from "../components/Games/Main";
import LatestGames from "../components/Games/LatestGames";
import { SeeAll } from "../pages/News";
import Category from "../components/Games/Category";
function Games() {
  const around = useRef(null);
  const categ = useRef(null);
  const scroll = () => {
    around?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollCateg = () => {
    categ?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <main className="flex flex-col justify-center gap-14 w-full mt-0 md:mt-5 z-10">
      <Header scroll={scroll} />
      <Main el={around} />
      <LatestGames scroll={scrollCateg}>
        <SeeAll title="جدیدترین بازی ها " link="latest" color="#d42222" />
      </LatestGames>

      <Category el={categ} />
    </main>
  );
}

export default Games;
