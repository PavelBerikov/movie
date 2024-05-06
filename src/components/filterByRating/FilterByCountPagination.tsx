import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

const FilterByCountPagination: FC = () => {
    const {prev, next} = useAppSelector(state => state.movies);
    const [query,setQuery] = useSearchParams();
    const page = parseInt(query.get('page'))

    const prevPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1}))
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    };
    const nextPage = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}))
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    };
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', color: 'black'}}>
            <button style={{backgroundColor: 'transparent'}} disabled={!prev} onClick={prevPage}>prev</button>
            {
                page > 1 &&
                <span style={{cursor: 'pointer'}} onClick={() => setQuery({page: '1'})}>1 ...</span>
            }
            <span style={{cursor: 'pointer'}} onClick={() => setQuery({page: `${page+5}`})}>{page + 5}</span> ...
            <span style={{cursor: 'pointer'}} onClick={() => setQuery({page: `${page + 10}`})}>{page + 10}</span>
            <button style={{backgroundColor: 'transparent'}} disabled={!next} onClick={nextPage}>next</button>

        </div>
    );
};

export {FilterByCountPagination};