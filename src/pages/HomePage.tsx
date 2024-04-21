import React from 'react';
import css from './page.module.css'
import {FilterByCount} from "../components";
import {FilterByCountPagination} from "../components";
const HomePage = () => {
    return (
        <div className={css.Home}>
            <FilterByCount/>
            <FilterByCountPagination/>


        </div>
    );
};

export {HomePage};