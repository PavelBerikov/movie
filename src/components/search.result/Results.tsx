import React, {FC} from 'react';
import {IResults} from "../../interfaces";

interface IProps {
    result: IResults
}
const Results: FC<IProps> = ({result}) => {
    const {id, name} = result;
    return (
        <div>
            <div>{id} - {name}</div>
        </div>
    );
};

export {Results};