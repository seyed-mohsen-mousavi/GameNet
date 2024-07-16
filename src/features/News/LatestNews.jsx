import useServer from "../../hook/useServer";
import SliderCards, { Loader } from "../../ui/SliderCards";

export default function LatestNews({ children }) {
  const [news, isLoading] = useServer("news");
  let latest = news.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  latest = latest.slice(0, 4);
  if (isLoading) return <Loader />;
  return (
    <div>
      {children}
      <SliderCards arr={latest} categ="خبر" />
    </div>
  );
}
