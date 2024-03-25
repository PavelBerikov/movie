import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks";
import {searchActions} from "../../redux";
import {useNavigate, useSearchParams} from "react-router-dom";

const SearchForm: FC = () => {
    const {register, handleSubmit} = useForm();
    const [query,setQuery] = useSearchParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const goSearch = (data: any) => {
        setQuery(prev => ({...prev, keyword: data.value ,page: '1'}))
        dispatch(searchActions.getKeyWord(data.value))

    };
    return (
        <form onSubmit={handleSubmit(goSearch)}>
            <input type="text" placeholder={'key word...'} {...register('value')}/>
            <button onClick={() => navigate('/search/result')}>go!</button>
        </form>
    );
};

export {SearchForm};