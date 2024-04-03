import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Header} from "./components/header/Header";

const App = () => {
    return (
        <div style={{display: "flex"}}>
            {/*<Header/>*/}
            <Routes>
            <Route path={'/'} element={<MainLayout/>}/>
        </Routes>
        </div>
    );
};

export {App};