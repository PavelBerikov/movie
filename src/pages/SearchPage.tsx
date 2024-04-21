import React from 'react';
import {SearchResults} from "../components/search/SearchResults";
import {SearchPagination} from "../components/search/SearchPagination";

import css from './page.module.css'
const SearchPage = () => {
    return (
        <div className={css.Home}>
            <SearchResults/>
            <SearchPagination/>
        </div>
    );
};

export {SearchPage};