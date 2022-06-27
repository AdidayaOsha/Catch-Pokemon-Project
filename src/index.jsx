import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import combineReducers from "./redux/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer: combineReducers,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
