import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage.js/LoginPage";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='signup' element={<SignUp />}/>
                <Route path='home' element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
