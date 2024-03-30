import React from 'react';
import {FilterMoviesPage} from "./pages/FilterMoviesPage";
import {Route, Routes} from "react-router-dom";
import {MoviesByGenres} from "./components/MoviesByGenres";

const App = () => {
    return (
        <div>
            <FilterMoviesPage/>
            <Routes>

                <Route path={'/filter'} element={<MoviesByGenres/>}/>
            </Routes>

        </div>
    );
};

export {App};