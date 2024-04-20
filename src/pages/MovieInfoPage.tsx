import React from 'react';
import {FullMovieInfo} from "../components";

import css from './page.module.css'

const MovieInfoPage = () => {
    return (
        <div className={css.InfoPage}>
            {/*<TrailerVideo/>*/}
            <FullMovieInfo/>
        </div>
    );
};

export {MovieInfoPage};