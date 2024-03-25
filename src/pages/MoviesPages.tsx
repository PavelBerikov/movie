import React, {FC} from 'react';
import {Movies} from "../components";
import {MoviesPagination} from "../components";

const MoviesPages: FC = () => {
    return (
        <div>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPages};