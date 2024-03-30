import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions} from "../redux";
import {useNavigate} from "react-router-dom";
import css from './button.module.css'

const GenresSelector = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);
    const navigate = useNavigate();
    console.log(genres)
    return (
        <div>
            <div className={css.But} style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(28))}>Action</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(12))}>Adventure</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(16))}>Animation</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(35))}>Comedy</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(80))}>Crime</div>
            <button onClick={() => navigate('/filter')}>Go!</button>
        </div>
    );
};

export {GenresSelector};