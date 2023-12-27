import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./src/App";
const rootSelector = document.getElementById("root");
const root = createRoot(rootSelector);
root.render(<StrictMode><App /></StrictMode>);
