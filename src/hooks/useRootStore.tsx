import { useContext } from "react";
import { RootStoreContext } from "../context/RootStoreContext";

export const useRootStore = () => {
  return useContext(RootStoreContext);
};
