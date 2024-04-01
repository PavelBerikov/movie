import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div style={{display: "flex"}}>
            <Routes>
            <Route path={'/'} element={<MainLayout/>}/>
        </Routes>
        </div>
    );
};

export {App};