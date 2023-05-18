import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import Quiz from "./components/Quiz";
import FormWord from "./components/FormWord";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/learn-bengali">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="vowels" element={<Vowels />} />
          <Route path="consonants" element={<Consonants />} />
          <Route path="form-word" element={<FormWord />} />
          <Route path="word-quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
