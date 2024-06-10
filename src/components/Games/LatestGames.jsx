import useServer from "../../hook/useServer";
import SliderCards, { Loader } from "../SliderCards";
function LatestGames({ children, scroll }) {
  const [Games, isLoading] = useServer("Games");
  if (isLoading) return <Loader />;
  return (
    <div>
      {children}
      <div>
        <SliderCards arr={Games} categ="ایران گی نت " />
        <img
          onClick={scroll}
          src="/images/games/88221.png"
          className="w-6 invert mx-auto cursor-pointer animate-bounce animate-infinite animate-ease-linear animate-duration-[2000ms] mb-32 mt-16"
        />
      </div>
    </div>
  );
}

export default LatestGames;
