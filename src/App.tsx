import React from 'react';
import {FilterMoviesPage} from "./pages/FilterMoviesPage";
import {Route, Routes} from "react-router-dom";
import {MoviesByGenres} from "./components/MoviesByGenres";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<FilterMoviesPage/>}>
                    <Route path={'/filter'} element={<MoviesByGenres/>}/>
                </Route>

            </Routes>

        </div>
    );
};

export {App};