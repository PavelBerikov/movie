import React, {FC, useEffect, useState} from 'react';

import css from "../General.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ratingActions} from "../../redux";
import {IRating} from "../../interfaces/rating.interface";

const AddRating: FC = () => {
    const [message, setMessage] = useState(null);
    const [vision, setVision] = useState(false);
    const [mouseOnStar, setMouseOnStar] = useState(-1);
    const [score, setScore] = useState(null);
    const {ratingResponse} = useAppSelector(state => state.rating);
    const {movieInfo} = useAppSelector(state => state.fullMovieInfo);
    const {id} = movieInfo || {};
    const dispatch = useAppDispatch();
    const addRating: IRating = {
        value: score
    }
    const stars = Array.from({length: 10}, (_, index) => {
        return <span key={index}
                     className={`${css.Star} ${index <= mouseOnStar ? `${css.StarFilled}`: ''}`}
                     onMouseEnter={() => setMouseOnStar(index)}
                     onMouseLeave={() => setMouseOnStar(-1)}
                     onClick={() => setScore(index + 1)}
        />
    })
    useEffect(() => {
        if (ratingResponse){
            setVision(true)
            if (ratingResponse.status_code === 12){
                setMessage('The rating has been updated')
            }else if (ratingResponse.status_code === 1){
                setMessage('The rating has been added')
            }
        }
    }, [ratingResponse])
    useEffect(() => {
        const timer = setTimeout(() => {
            setVision(false)
            dispatch(ratingActions.resetRatingResponse())
        }, 3000)
        return () => clearTimeout(timer)
    }, [vision, dispatch])
    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <div style={{color: 'snow'}}>rate this movie</div>
            <div className={css.Rating}>
                {stars}
            </div>
            {score && <button onClick={() => {
                dispatch(ratingActions.addRating({addRating, id}))
                setScore(null)
            }}>send {score} ?</button>}
            {
                vision &&
                <div style={{color: "snow"}}>{message}!</div>
            }
        </div>
    );
};

export {AddRating};