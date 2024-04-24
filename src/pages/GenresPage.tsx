import React, {useEffect} from 'react';

import {Genres} from "../components/genres";
import css from './page.module.css'
import {FilterByGenres} from "../components/genres";
import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions, menuActions} from "../redux";
import {FilterByGenresPagination} from "../components/genres";
const GenresPage = () => {
    const {trigger, genresId} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(menuActions.resetTrigger())
    }, [dispatch])
    return (
        <div className={css.Genres}>
            <Genres/>
            {
                trigger &&
                    <button  onClick={() => {
                        dispatch(genreActions.clearGenresId())
                        dispatch(genreActions.clearTrigger())
                    }}>Clear filter</button>
            }
            {
                !trigger &&
                    <button disabled={!genresId.length} onClick={() => dispatch(genreActions.changeTrigger())}>Apply filter</button>
            }
            {
                trigger &&
                <FilterByGenres/>
            }
            {
                trigger &&
                <FilterByGenresPagination/>
            }

        </div>
    );
};

export {GenresPage};