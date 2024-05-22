import HeaderNews from "../components/News/HeaderNews";

function News() {
  return (
    <div className="flex flex-col gap-2 w-full mt-5">
      <HeaderNews />
      <LatestNews />
      <MustReadNews />
      <WeeklyHighlightNews />
      <TopCreatorNews />
    </div>
  );
}

export default News;

function LatestNews() {
  return <div></div>;
}
function MustReadNews() {
  return <div></div>;
}
function WeeklyHighlightNews() {
  return <div></div>;
}
function TopCreatorNews() {
  return <div></div>;
}
