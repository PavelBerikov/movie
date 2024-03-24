import React from 'react';
import {Movies} from "../components/Movies";
import {MoviesPagination} from "../components/MoviesPagination";

const MoviesPages = () => {
    return (
        <div>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPages};