import React from 'react';
import css from './header.module.css'
import {SearchForm} from "../search";
import {User} from "../user.info";
import {Menu} from "../menu";
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <User/>
            <button onClick={() => navigate('/home')}>Home</button>
            <SearchForm/>
            <Menu/>
        </div>
    );
};

export {Header};