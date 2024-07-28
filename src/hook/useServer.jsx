import axios from "axios";
import { useEffect, useState } from "react";

export default function useServer(url) {
  const URL = `http://localhost:8000/${url}`;
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(URL);

        setValue(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, [URL]);
  return [value, isLoading];
}
