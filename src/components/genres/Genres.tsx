import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

import css from '../General.module.css'
const Genres = () => {
    const {genres} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])


    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '10px'}}>
            {
                genres.map(genre => <div className={css.Yellow} key={genre.id}>{genre.name}</div>)
            }
        </div>
    );
};

export {Genres};