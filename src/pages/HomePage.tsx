import React from 'react';
import css from './page.module.css'
import {Carousel} from "../components/carousel/Carousel";
const HomePage = () => {
    return (
        <div className={css.Home}>
            <Carousel/>



        </div>
    );
};

export {HomePage};