import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks";
import {searchActions} from "../../redux";

const SearchForm: FC = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    const goSearch = (data: any) => {
        dispatch(searchActions.getSearch(data.value))
    };
    return (
        <form onSubmit={handleSubmit(goSearch)}>
            <input type="text" placeholder={'key word...'} {...register('value')}/>
            <button>go!</button>
        </form>
    );
};

export {SearchForm};