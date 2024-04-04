import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux";
import {Movie} from "./Movie";

const FilterByCount: FC = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        dispatch(moviesActions.filterByRating(+query.get('page')))
    }, [query, dispatch])
    return (
        <div>
            {
                movies.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export {FilterByCount};