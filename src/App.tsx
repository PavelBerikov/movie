import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {SearchPage} from "./pages/SearchPage";
import {SearchResult} from "./components";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'search'} element={<SearchPage/>}>
                    <Route path={'result'} element={<SearchResult/>}/>
                </Route>

            </Route>
        </Routes>
    );
};

export {App};