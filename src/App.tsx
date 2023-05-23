import React, { useMemo } from "react";
import "./App.css";
import { IssuesPage } from "./pages/IssuesPage";
import { RootStoreContext } from "./context/RootStoreContext";
import { RootStore } from "./stores/RootStore";
import { useColorScheme } from "./hooks/useColorScheme";
window._pool = {};

const rootStore = new RootStore();
function App() {
  useColorScheme();
  return (
    <RootStoreContext.Provider value={rootStore}>
      <IssuesPage />;
    </RootStoreContext.Provider>
  );
}

export default App;
