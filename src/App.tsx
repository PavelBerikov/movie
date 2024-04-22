import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Header} from "./components";
import {HomePage} from "./pages/HomePage";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {SearchPage} from "./pages/SearchPage";
import {useAppSelector} from "./hooks";
import {FullMenu} from "./components/menu/FullMenu";
import css from '../src/components/General.module.css'
import {GenresPage} from "./pages/GenresPage";
const App = () => {
    const {trigger} = useAppSelector(state => state.menu);
    return (
        <div style={{display: "flex"}}>
            {
                trigger &&

                <div className={css.Menu}><FullMenu/></div>

            }
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movie'} element={<MovieInfoPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Routes>
        </div>
    );
};

export {App};