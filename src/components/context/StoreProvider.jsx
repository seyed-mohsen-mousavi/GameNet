import { createContext, useContext } from "react";
import useSearchSort from "../../hook/useSearchSort";
import useCheckToBe from "../../hook/useCheckToBe";

const StoreContext = createContext();
export default function StoreProvider({ children }) {
  const [hanleFilterPlatform] = useSearchSort("platform", "categ");
  const [hanleFilterCategories] = useSearchSort("categ", "platform");
  useCheckToBe();
  return (
    <StoreContext.Provider
      value={{ hanleFilterCategories, hanleFilterPlatform }}
    >
      {children}
    </StoreContext.Provider>
  );
}
export function useStoreContext() {
  return useContext(StoreContext);
}
