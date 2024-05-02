import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../hooks";

const SearchPagination = () => {
    const [, setQuery] = useSearchParams();
    const {next, prev} = useAppSelector(state => state.search);
    const prevPage = () => {
        setQuery(prev1 => ({...prev1, keyword: prev1.get('keyword') ,page: +prev1.get('page') -1}))
    };
    const nextPage = () => {
        setQuery(prev1 => ({...prev1,keyword: prev1.get('keyword') , page: +prev1.get('page') +1}))
    };
    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {SearchPagination};