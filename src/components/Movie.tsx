import React, {FC} from 'react';
import {IMovie} from "../interfaces";
import css from './General.module.css'
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {fullMovieInfoActions, moviesActions} from "../redux";
import {movieService} from "../services";
interface IProps{
    movie: IMovie
    photoURL: string
}
const Movie: FC<IProps> = ({movie, photoURL}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {title, original_language, overview, poster_path, release_date, id} = movie;
    const shortOverview = overview.length > 100 ? overview.substring(0, 100) + '...' : overview
    return (
        <div onClick={() => {navigate('/movie');movieService.setLocalStorage(`${id}`, title)}} className={css.Movie}>

            <div style={{margin: '5px'}}>
                <img src={`${photoURL}/${poster_path}`} alt={title} className={css.Poster}/>
            </div>

            <div>
                <div>{title}</div>
                <div>Language - {original_language}</div>
                <div>Release {release_date.substring(0,4)}</div>
                <div>{shortOverview}</div>
            </div>

        </div>
    );
};

export {Movie};