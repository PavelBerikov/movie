import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux";
import {Movie} from "../Movie";

const FilterByCount: FC = () => {
    const {movies, photoURL} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
   /* useEffect(() => {
        if (query.get('page') === null) {
            setQuery({ page: '1' });
        }
    }, [setQuery, query])*/
    useEffect(() => {
        dispatch(moviesActions.filterByCount())
    }, [query, dispatch])
    return (
        <div>
            {
                movies.map(movie => <Movie movie={movie} photoURL={photoURL} key={movie.id}/>)
            }
        </div>
    );
};

export {FilterByCount};