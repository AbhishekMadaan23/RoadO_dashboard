import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./store/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

// Here Provider is used to provide the store to the entire application so that all the components can access the store
//Also as the react rerender only when its state is changed so to make the store
// state as the state of the application we use the Provider
