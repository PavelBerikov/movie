import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {discoverActions} from "../redux";
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";

const Movies: FC = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.discover);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        if (query.get('page') === null) {
            setQuery({ page: '1' });
        }
    }, [setQuery, query])
    useEffect(() => {
        dispatch(discoverActions.getMovies(+query.get('page')))
    }, [query, dispatch])
    return (
        <div>
            {/*<button onClick={() => dispatch(discoverActions.getMovies())}>Get</button>*/}
            {
                movies.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export {Movies};