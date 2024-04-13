import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {fullMovieInfoActions} from "../redux";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../services";
import css from "./General.module.css";

const FullMovieInfo = () => {
    const {movieInfo} = useAppSelector(state => state.fullMovieInfo);
    const {photoURL} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams();
    const dispatch = useAppDispatch();
    const index = localStorage.getItem('id')
    const {poster_path, title} = movieInfo;
    useEffect(() => {
        dispatch(fullMovieInfoActions.getMovieInfo(index))
    }, [dispatch])
    return (
        <>
            {
                movieInfo &&
                <div style={{display: "flex", justifyContent: "start"}}>
                    <div style={{margin: '5px'}}>
                        <img src={`${photoURL}/${poster_path}`} alt={title} style={{width: "280px", height: '400px'}}/>
                    </div>
                    <div>
                        d
                    </div>

                </div>
            }
        </>
    );
};

export {FullMovieInfo};