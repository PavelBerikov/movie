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
        setQuery(prev => ({...prev, page: '1'}))
    }, [])
    useEffect(() => {
        dispatch(discoverActions.getMovies(+query.get('page')))
    }, [query])
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