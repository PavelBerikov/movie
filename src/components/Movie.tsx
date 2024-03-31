import React, {FC} from 'react';
import {IMovie} from "../interfaces";
interface IProps{
    movie: IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const {id, title, vote_average, vote_count} = movie;
    return (
        <div>
            <div>{id} - {title}</div>
            <div>average -  {vote_average}</div>
            <div>count - {vote_count}</div>
            <button>addRating</button>
            <hr/>
        </div>
    );
};

export {Movie};