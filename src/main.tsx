import React from "react";
import ReactDOM from "react-dom/client";
import 'reflect-metadata';


import App from "./App";
import "./index.css";

window._pool = {};
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
