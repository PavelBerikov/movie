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
    const {title, poster_path, id} = movie;
    return (
        <div onClick={() => {navigate('/movie');movieService.setLocalStorage(`${id}`, title)}} className={css.Movie}>
            <div style={{margin: '5px'}}>
                <img src={`${photoURL}/${poster_path}`} alt={title} className={css.Poster}/>
            </div>
            <div>{title}</div>
        </div>
    );
};

export {Movie};