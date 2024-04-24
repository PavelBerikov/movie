import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {fullMovieInfoActions} from "../redux";

import css from './General.module.css'
import {TrailerVideo} from "./TrailerVideo";


const FullMovieInfo = () => {
    const {movieInfo, fullMovieInfoTrigger} = useAppSelector(state => state.fullMovieInfo);
    const {photoURL} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const index = localStorage.getItem('id')
    const {poster_path, title, vote_average, tagline, runtime, budget, genres, production_companies, production_countries, release_date} = movieInfo || {};
    console.log(movieInfo)
    useEffect(() => {
        dispatch(fullMovieInfoActions.getMovieInfo(index))
    }, [dispatch, index])
    return (
        <>
            {
                movieInfo &&
                <div style={{display: "flex", width: "100%", margin: '15px'}}>
                    <div style={{margin: '5px', display: "flex", flexDirection: 'column'}}>
                        <img src={`${photoURL}/${poster_path}`} alt={title} style={{width: "188px", height: '282px'}}/>
                        <button onClick={() => dispatch(fullMovieInfoActions.changeTrigger())}>watch</button>
                    </div>
                    <div style={{marginLeft: '30px', color: 'snow'}}>
                        <div className={css.Info}>
                            <div>
                                <strong>Rating:</strong>
                            </div>
                            <div>
                                {vote_average}
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Tagline:</strong>
                            </div>
                            <div>
                                {tagline}
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Budget:</strong>
                            </div>
                            <div>
                                {budget}$
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Genres:</strong>
                            </div>
                            <div>
                                {genres.map(value => <div key={value.id}>{value.name}</div>)}
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Production companies:</strong>
                            </div>
                            <div>
                                {production_companies.map(value => <div key={value.id}>{value.name}</div>)}
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Production countries:</strong>
                            </div>
                            <div>
                                {production_countries.map((value, index) => <div key={index}>{value.name}</div>)}
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Release:</strong>
                            </div>
                            <div>
                                {release_date}
                            </div>
                        </div>
                        <div className={css.Info}>
                            <div>
                                <strong>Runtime:</strong>
                            </div>
                            <div>
                                {runtime} min
                            </div>
                        </div>
                    </div>


                </div>
            }
            {
                fullMovieInfoTrigger &&
                <TrailerVideo/>
            }
        </>
    );
};

export {FullMovieInfo};