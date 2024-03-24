import React from 'react';
import {Movies} from "./components/Movies";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPages} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviesPages/>}/>
            </Route>
        </Routes>
    );
};

export {App};