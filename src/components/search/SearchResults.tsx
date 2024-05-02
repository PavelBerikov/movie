import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {searchActions} from "../../redux";
import {Movie} from "../movie.info";

const SearchResults = () => {
    const {photoURL} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.search);
    const [query] = useSearchParams();
    useEffect(() => {
        dispatch(searchActions.getResult({query: query.get('keyword'), page: query.get('page')}))
    }, [query, dispatch])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
            {
                movies.map(movie => <Movie movie={movie} photoURL={photoURL} key={movie.id}/>)
            }


        </div>
    );
};

export {SearchResults};