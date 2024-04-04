import React from 'react';
import css from './header.module.css'
import {SearchForm} from "../search/SearchForm";
import {User} from "../user.info/User";
import {Menu} from "../menu/Menu";
const Header = () => {
    return (
        <div className={css.Header}>
            <User/>
            <SearchForm/>
            {/*<Menu/>*/}
        </div>
    );
};

export {Header};