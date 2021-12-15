import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage.js/LoginPage";

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
