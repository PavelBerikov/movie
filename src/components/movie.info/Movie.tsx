import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import css from '../General.module.css'
import {movieService} from "../../services";
import {Rating} from "../movie.rating";
interface IProps{
    movie: IMovie
    photoURL: string
}
const Movie: FC<IProps> = ({movie, photoURL}) => {
    const navigate = useNavigate();
    const {title, poster_path, id, release_date, vote_average} = movie;
    return (
        <div onClick={() => {navigate('/movie');movieService.setLocalStorage(`${id}`, title, release_date)}} className={css.Movie}>
            <div style={{margin: '5px'}}>
                <img src={`${photoURL}/${poster_path}`} alt={title} className={css.Poster}/>
            </div>
            <div>{title}</div>
            <Rating rating={vote_average}/>
            {/*<div className={css.Rating}>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
                <span className={css.Star}></span>
            </div>*/}
        </div>
    );
};

export {Movie};