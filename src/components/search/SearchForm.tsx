import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks";
import {searchActions} from "../../redux";
import css from './search.module.css'

const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const [,setQuery] = useSearchParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const goSearch = (data: any) => {
        setQuery(prev => ({...prev, keyword: data.value ,page: '1'}))
        dispatch(searchActions.getKeyWord(data.value))
        reset()

    };
    return (
        <form onSubmit={handleSubmit(goSearch)} style={{display: 'flex', marginRight: '10px'}}>
            <input style={{backgroundColor: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', color: "black"}} type="text" placeholder={'search...'} {...register('value')}/>
            <button className={css.SearchButton} onClick={() => navigate('/search')}>🔍</button>
        </form>
    );
};

export {SearchForm};