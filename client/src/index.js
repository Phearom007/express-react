import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Axios from "axios";
import { configure } from "axios-hooks";

import "./index.css";
import App from "./App";

// import './function';

const { REACT_APP_PORT, REACT_APP_API_URL } = process.env;

console.log(REACT_APP_PORT);
console.log(REACT_APP_API_URL);

const axios = Axios.create({
  baseURL: REACT_APP_API_URL,
});

configure({ axios, cache: false });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
