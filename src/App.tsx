import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Header} from "./components";
import {HomePage} from "./pages/HomePage";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {SearchPage} from "./pages/SearchPage";
import {useAppSelector} from "./hooks";
import {FullMenu} from "./components/menu/FullMenu";

const App = () => {
    const {trigger} = useAppSelector(state => state.menu);
    return (
        <div>
            {
                trigger &&
                <FullMenu/>
            }
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movie'} element={<MovieInfoPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
            </Routes>
        </div>
    );
};

export {App};