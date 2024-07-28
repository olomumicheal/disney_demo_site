import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

import store from "./component/Store/App/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </Provider>
  </React.StrictMode>
);
