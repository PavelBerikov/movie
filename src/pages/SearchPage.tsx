import React from 'react';
import {SearchForm} from "../components";
import {Outlet} from "react-router-dom";

const SearchPage = () => {
    return (
        <div>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};

export {SearchPage};