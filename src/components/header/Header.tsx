import React from 'react';
import css from './header.module.css'
import {SearchForm} from "../search";
import {User} from "../user.info";
import {useNavigate} from "react-router-dom";
import logo from './logo.png'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <div style={{cursor: "pointer"}} onClick={() => navigate('/home')}>
                <img style={{width: '70px', marginLeft: '10px'}} src={logo} alt="logo"/>
                <span className={css.shimmerText}>My movie project</span>
            </div>
            <SearchForm/>
            {/*<Menu/>*/}
            <User/>
        </div>
    );
};

export {Header};