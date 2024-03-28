import React from 'react';
import {GenresSelectorPage} from "./components/GenresSelectorPage";
import {Route, Routes} from "react-router-dom";
import {FilterOfGenres} from "./components/FilterOfGenres";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<GenresSelectorPage/>}/>
                <Route path={'genres'} element={<FilterOfGenres/>}/>
            </Routes>
        </div>
    );
};

export {App};