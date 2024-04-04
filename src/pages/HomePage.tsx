import React from 'react';
import css from './page.module.css'
import {Carousel} from "../components/carousel/Carousel";
import {FilterByRating} from "../components/filterByRating/FilterByCount";
const HomePage = () => {
    return (
        <div className={css.Home}>
            <Carousel/>
            <FilterByRating/>


        </div>
    );
};

export {HomePage};