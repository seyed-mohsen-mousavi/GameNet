import FillterCard from "../components/Store/Filter/FillterCard";
import FillterCardMobile from "../components/Store/Filter/FillterCardMobile";
import HeaderImage from "../components/Store/HeaderImage";
import Prodocts from "../components/Store/Prodocts";
import StoreProvider from "../components/context/StoreProvider";
import useCheckToBe from "../hook/useCheckToBe";

function Store() {
  return (
    <main className="pb-10 flex gap-10 mt-5">
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
