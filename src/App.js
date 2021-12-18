import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage.js/LoginPage";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='signup' element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
