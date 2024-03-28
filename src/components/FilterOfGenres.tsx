import React, {FC} from 'react';
interface IProps{
    array: number[]
}
const FilterOfGenres: FC<IProps> = ({array}) => {
    const string = array.join(',');
    return (
        <div>
            {string}
        </div>
    );
};

export {FilterOfGenres};