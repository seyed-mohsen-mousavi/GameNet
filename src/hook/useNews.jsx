import axios from "axios";
import { useEffect, useState } from "react";

export default function useNews() {
  const url = "http://localhost:5000/News";
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);
        setNews(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, [url]);
  return { news, isLoading };
}
