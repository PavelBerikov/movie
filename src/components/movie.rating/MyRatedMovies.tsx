import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ratingActions} from "../../redux";
import {Movie} from "../movie.info";
import {useSearchParams} from "react-router-dom";

const MyRatedMovies: FC = () => {
    const {photoURL} = useAppSelector(state => state.movies);
    const {movies} = useAppSelector(state => state.rating);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    console.log(movies)
    useEffect(() => {
        if (query.get('page') === null){
            setQuery({page: '1'})
        }else {
            dispatch(ratingActions.getRatedMovies(query.get('page')))
        }
    }, [dispatch, query, setQuery])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
            {
                movies.map(movie => <Movie movie={movie} photoURL={photoURL} key={movie.id}/>)
            }
        </div>
    );
};

export {MyRatedMovies};