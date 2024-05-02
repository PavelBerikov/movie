import React, {FC} from 'react';

import {MyRatedMovies} from "../components/movie.rating";
import {MyRatedMoviesPagination} from "../components/movie.rating/MyRatedMoviesPagination";
import css from './page.module.css'
const MyRatedMoviesPage: FC = () => {
    return (
        <div className={css.Home}>
            <MyRatedMovies/>
            <MyRatedMoviesPagination/>
        </div>
    );
};

export {MyRatedMoviesPage};