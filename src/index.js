//import React, { StrictMode } from "react";
//import ReactDOM from "react-dom";
//import App from "./App";
//import "./index.css";
//ReactDOM.render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//  document.getElementById("root")
//);

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
