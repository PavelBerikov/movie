import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {fullMovieInfoActions} from "../redux";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../services";

const FullMovieInfo = () => {
    const {movieInfo} = useAppSelector(state => state.fullMovieInfo);
    const [query, setQuery] = useSearchParams();
    const dispatch = useAppDispatch();
    const index = localStorage.getItem('id')
    useEffect(() => {
        dispatch(fullMovieInfoActions.getMovieInfo(index))
    }, [dispatch])
    console.log(movieInfo)
    /*useEffect(() => {
        setQuery({title: movieTitle, id: `${movieId}`})
    }, [movieId, movieTitle])

    useEffect(() => {
        dispatch(fullMovieInfoActions.getMovieInfo(parseInt(query.get('id'))))
        if (movieInfo){
            setQuery({title: movieInfo.title, id: `${movieInfo.id}`})
        }
    }, [dispatch, movieInfo])*/


    return (
        <div>
        </div>
    );
};

export {FullMovieInfo};