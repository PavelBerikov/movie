import React from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

const MyRatedMoviesPagination = () => {
    const {prev, next} = useAppSelector(state => state.rating);
    const [,setQuery] = useSearchParams();
    const prevPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1}))
    };
    const nextPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}))
    };
    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {MyRatedMoviesPagination};