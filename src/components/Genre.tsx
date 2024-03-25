import React, {FC} from 'react';
import {IGenre} from "../interfaces/genre.interface";

interface IProps{
    genre: IGenre
}
const Genre: FC<IProps> = ({genre}) => {
    const {name, id} = genre;
    return (
        <div>
            <div>{id} - {name}</div>
        </div>
    );
};

export {Genre};