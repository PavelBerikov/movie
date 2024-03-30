import React, {FC} from 'react';
import {IMovie} from "../interfaces";
interface IProps{
    movie: IMovie
}
const Movie: FC<IProps> = ({movie}) => {
    const {id, title} = movie;
    return (
        <div>
            <div>{id} - {title}</div>
        </div>
    );
};

export {Movie};