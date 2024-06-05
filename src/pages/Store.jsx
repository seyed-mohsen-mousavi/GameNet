import FillterCard from "../components/Store/Filter/FillterCard";
import FillterCardMobile from "../components/Store/Filter/FillterCardMobile";
import HeaderImage from "../components/Store/HeaderImage";
import Prodocts from "../components/Store/Prodocts";
import StoreProvider from "../components/context/StoreProvider";

function Store() {
  return (
    <main className="pb-10 flex md:flex-row flex-col md:items-stretch  items-center gap-10 mt-5">
      <StoreProvider>
        <FillterCard />
        <div className="flex flex-col gap-3 w-10/12">
          <HeaderImage />
          <FillterCardMobile />
          <Prodocts />
        </div>
      </StoreProvider>
    </main>
  );
}

export default Store;
