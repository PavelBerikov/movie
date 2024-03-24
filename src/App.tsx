import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPages} from "./pages";
import {SearchPage} from "./pages/SearchPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviesPages/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};