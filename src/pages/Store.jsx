import FillterCard from "../components/Store/FillterCard";
import HeaderImage from "../components/Store/HeaderImage";
import Prodocts from "../components/Store/Prodocts";

function Store() {
  console.log("s");
  return (
    <main className="pb-10 flex gap-10 mt-5">
      <FillterCard />
      <div className="flex flex-col gap-3 w-10/12">
        <HeaderImage />
        <Prodocts />
      </div>
    </main>
  );
}

export default Store;
