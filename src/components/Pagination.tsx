import React from 'react';
import {useAppSelector} from "../hooks";
import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const {prev, next, page} = useAppSelector(state => state.genres);
    const [,setQuery] = useSearchParams();
    const nextPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1, with_genres: prev1.get('with_genres')}))
    }
    const prevPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1, with_genres: prev1.get('with_genres')}))
    }
    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>
        </div>
    );
};

export {Pagination};