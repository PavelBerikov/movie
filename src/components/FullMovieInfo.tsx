import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {fullMovieInfoActions} from "../redux";
import {useSearchParams} from "react-router-dom";

const FullMovieInfo = () => {
    const {movies, movieId} = useAppSelector(state => state.movies);
    const filter = movies.filter(value => value.id === movieId)
    const {movieInfo} = useAppSelector(state => state.fullMovieInfo);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        setQuery({id: filter[0]?.id + ''})
    }, [setQuery, query])
    useEffect(() => {
        dispatch(fullMovieInfoActions.getMovieInfo(parseInt(query.get('id'))))
    }, [dispatch])

    return (
        <div>
            {/*<div>{title}</div>
            <div>{overview}</div>*/}
        </div>
    );
};

export {FullMovieInfo};