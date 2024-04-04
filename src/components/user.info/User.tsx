import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux/slice/user.slice";

import css from '../General.module.css'



const User = () => {
    const {photoURL , avatar, username, } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.getUser())
    }, [dispatch])
    return (
        <div className={css.Card}>
            <img src={`${photoURL}/${avatar?.tmdb?.avatar_path}`} alt={username} className={css.Avatar}/>
            <div>{username}</div>
        </div>
    );
};

export {User};