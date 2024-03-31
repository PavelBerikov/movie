import React, {FC} from 'react';
import {IMovie} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {ratingActions} from "../redux";
interface IProps{
    movie: IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const dispatch = useAppDispatch();
    const rating = {
        value: 8.5
    }
    const {id, title, vote_average, vote_count} = movie;
    return (
        <div>
            <div>{id} - {title}</div>
            <div>average -  {vote_average}</div>
            <div>count - {vote_count}</div>
            <button onClick={() => dispatch(ratingActions.add(rating))}>addRating</button>
            <hr/>
        </div>
    );
};

export {Movie};