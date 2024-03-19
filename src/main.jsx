import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@preact/signals-react/auto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
