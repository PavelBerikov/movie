import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fullMovieInfoActions, ratingActions} from "../../redux";

import css from '../General.module.css'
import {TrailerVideo} from "./TrailerVideo";
import {log} from "util";
import {IRating} from "../../interfaces/rating.interface";


const FullMovieInfo = () => {
    const [mouseOnStar, setMouseOnStar] = useState(-1);
    const [score, setScore] = useState(null);
    const {movieInfo, fullMovieInfoTrigger} = useAppSelector(state => state.fullMovieInfo);
    const {photoURL} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const index = localStorage.getItem('id')
    const {poster_path, id, title, vote_average, tagline, runtime, budget, genres, production_companies, production_countries, release_date} = movieInfo || {};
    const stars = Array.from({length: 10}, (_, index) => {
        return <span key={index}
                     className={`${css.Star} ${index <= mouseOnStar ? `${css.StarFilled}`: ''}`}
                     onMouseEnter={() => setMouseOnStar(index)}
                     onMouseLeave={() => setMouseOnStar(-1)}
                     onClick={() => setScore(index + 1)}
            />
    })
    const addRating: IRating = {
        value: score
    }
    useEffect(() => {
        dispatch(ratingActions.getRatedMovies())
    }, [dispatch])
    useEffect(() => {
        dispatch(fullMovieInfoActions.getMovieInfo(index))
    }, [dispatch, index])
    return (
        <>
            {
                movieInfo &&
                <div className={css.MovieInfo}>
                    <div className={css.PosterButtonRating}>
                        <img src={`${photoURL}/${poster_path}`} alt={title} style={{width: "188px", height: '282px'}}/>
                        <button style={{width: '188px'}} onClick={() => dispatch(fullMovieInfoActions.changeTrigger())}>watch</button>
                        <div style={{color: 'snow'}}>rate this movie</div>
                        <div className={css.Rating}>
                            {stars}
                        </div>
                        {score && <button onClick={() => {
                            dispatch(ratingActions.addRating({addRating, id}))
                            setScore(null)
                        }}>send {score} ?</button>}

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