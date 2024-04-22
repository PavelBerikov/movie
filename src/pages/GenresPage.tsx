import React from 'react';
import {Genres} from "../components/genres/Genres";

import css from './page.module.css'
const GenresPage = () => {
    return (
        <div className={css.Genres}>
            <Genres/>
        </div>
    );
};

export {GenresPage};