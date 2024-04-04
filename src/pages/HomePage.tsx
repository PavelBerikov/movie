import React from 'react';
import css from './page.module.css'
import {Carousel} from "../components/carousel/Carousel";
import {FilterByCount} from "../components/filterByRating/FilterByCount";
import {FilterByCountPagination} from "../components/filterByRating/FilterByCountPagination";
const HomePage = () => {
    return (
        <div className={css.Home}>
            <Carousel/>
            <FilterByCount/>
            <FilterByCountPagination/>


        </div>
    );
};

export {HomePage};