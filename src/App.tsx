import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Header} from "./components/header/Header";
import {HomePage} from "./pages/HomePage";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export {App};