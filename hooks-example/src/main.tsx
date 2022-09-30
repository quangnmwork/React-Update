import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RouterRoot from "./routes/RouterRoot";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterRoot />
    <App />
  </React.StrictMode>
);

