import useNews from "../../hook/useNews";

export default function MostViewed({ children }) {
  const { news, isLoading } = useNews();
  news.sort(function (a, b) {
    return b.views - a.views;
  });
  console.log(news);
  return (
    <div>
      {children}
      <div></div>
    </div>
  );
}
