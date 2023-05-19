import React from "react";
import "./App.css";
import { IssuesPage } from "./pages/IssuesPage";
import { RootStoreContext } from "./context/RootStoreContext";
import { RootStore } from "./stores/RootStore";
window._pool = {};

const rootStore = new RootStore();
function App() {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <IssuesPage />;
    </RootStoreContext.Provider>
  );
}

export default App;
