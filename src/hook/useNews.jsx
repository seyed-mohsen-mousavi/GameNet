import axios from "axios";
import { useEffect, useState } from "react";

export default function useNews() {
  const urlNews = "http://localhost:5000/news";
  const urlPopularNews = "http://localhost:5000/popularNews";
  const urlWeeklyHighlightNews = "http://localhost:5000/WeeklyHighlightNews";
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [weeklyHighlightNews, setWeeklyHighlightNews] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(urlNews);
        const { data: popularNewsData } = await axios.get(urlPopularNews);
        const { data: weeklyHighlightNews } = await axios.get(
          urlWeeklyHighlightNews
        );
        setNews(data);
        setPopularNews(popularNewsData);
        setWeeklyHighlightNews(weeklyHighlightNews);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, [urlNews, urlPopularNews, urlWeeklyHighlightNews]);
  return { news, isLoading, popularNews, weeklyHighlightNews };
}
