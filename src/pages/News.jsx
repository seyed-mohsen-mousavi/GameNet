import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import HeaderNews from "../components/News/HeaderNews";
import LatestNews from "../components/News/LatestNews";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import fa from "javascript-time-ago/locale/fa";
import { Link } from "react-router-dom";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(fa);
function News() {
  return (
    <div className="flex flex-col gap-14 w-full mt-5">
      <HeaderNews />
      <LatestNews>
        <SeeAll title="جدیدترین اخبار " link="latest" />
      </LatestNews>
      <MostViewed>
        <SeeAll title="بیشترین تعداد خوندن" link="mostRead" />
      </MostViewed>
      <WeeklyHighlightNews>
        <SeeAll title="برترین های هفته" link="weeklyHighlight" />
      </WeeklyHighlightNews>
      <TopCreatorNews />
    </div>
  );
}

export default News;

function MostViewed({ children }) {
  return <div>{children}</div>;
}
function WeeklyHighlightNews({ children }) {
  return <div>{children}</div>;
}
function TopCreatorNews() {
  return <div></div>;
}
function SeeAll({ title, link }) {
  return (
    <div key="1" className="flex justify-between pb-5">
      <h2 className="text-2xl font-PeydaBlack ">{title}</h2>
      <Link
        to={link}
        className="group text-[#bb80ff] font-PeydaMed flex items-center  gap-2 pl-3"
      >
        دیدن همه
        <ChevronLeftIcon className="w-5 group-hover:translate-x-0 translate-x-1 transition-all ease-in-out" />
      </Link>
    </div>
  );
}
