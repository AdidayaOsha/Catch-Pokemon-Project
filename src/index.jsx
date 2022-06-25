import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import combineReducers from "./redux/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: combineReducers,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
