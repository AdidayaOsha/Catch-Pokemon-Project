import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootReducer from "./redux/index";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
