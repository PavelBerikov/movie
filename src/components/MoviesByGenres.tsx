import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions} from "../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";
import {Pagination} from "./Pagination";

const MoviesByGenres = () => {
    const {genres, movies} = useAppSelector(state => state.genres);
    const [query, setQuery] = useSearchParams();
    const dispatch = useAppDispatch();
    const with_genres = genres.join(',')
    const qp = query.get('page')
    useEffect(() => {
        if (query.get('page') === null){
            setQuery({page: '1', with_genres: with_genres})
        }
    }, [setQuery, query])
    useEffect(() => {
        dispatch(genresActions.getFilterMovies({page: qp, with_genres}))
    }, [dispatch, query])
    return (
        <div>
            {
                movies.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
            <Pagination/>

        </div>
    );
};

export {MoviesByGenres};