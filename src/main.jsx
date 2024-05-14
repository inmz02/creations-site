import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/index.scss";
import HomePage from "./comps/HomePage.jsx";
import CreationsPage from "./comps/ProjectsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="myWrapper w-full h-dvh p-5 flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<CreationsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
