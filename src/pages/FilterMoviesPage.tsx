import React from 'react';
import {GenresSelector} from "../components/GenresSelector";
import {Outlet} from "react-router-dom";

const FilterMoviesPage = () => {
    return (
        <div>
            <GenresSelector/>
            <Outlet/>
        </div>
    );
};

export {FilterMoviesPage};