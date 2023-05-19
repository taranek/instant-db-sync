import { createContext } from "react";
import { RootStore } from "../stores/RootStore";

export const RootStoreContext = createContext<RootStore>(new RootStore());

