import React, {FC} from 'react';
import {IMovie} from "../../interfaces";



interface IProps {
    result: IMovie
}
const Results: FC<IProps> = ({result}) => {
    const {id, title} = result;
    return (
        <div>
            <div>{id} - {title}</div>
        </div>
    );
};

export {Results};