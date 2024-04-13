import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux";
import {Movie} from "../Movie";
import {movieService} from "../../services";

const FilterByCount: FC = () => {
    const {movies, photoURL} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        movieService.deleteStorage()
        if (query.get('page') === null) {
            setQuery({ page: '1' });
        }else {
            dispatch(moviesActions.filterByCount(+query.get('page')))
        }
    }, [setQuery, query, dispatch])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
            {
                movies.map(movie => <Movie movie={movie} photoURL={photoURL} key={movie.id}/>)
            }
        </div>
    );
};

export {FilterByCount};