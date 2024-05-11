import { useState } from "react";

function useGames() {
  // const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);
  // useEffect(() => {
  //   async function FetchData() {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get(
  //         "https://api.rawg.io/api/platforms?key=a1a226afe7ee4e3d8106ab9601b5cece"
  //       );
  //       setGames(data.results);
  //     } catch (err) {
  //       console.log(err);
  //       setGames([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   FetchData();
  // }, []);

  return { games };
}

export default useGames;
