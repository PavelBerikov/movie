import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {genreActions} from "../../redux";
import {Movie} from "../Movie";

const FilterByGenres = () => {
    const {photoURL} = useAppSelector(state => state.movies);
    const {movies, genresId} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        if (query.get('page') === null){
            setQuery({page: '1'})
        }else {
            if (genresId.length !== 0){
                dispatch(genreActions.getFilterMovies({page:query.get('page'), with_genres: genresId.join(',')}))
            }
        }

    }, [dispatch, genresId, query, setQuery])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
            {
                movies.map(movie => <Movie movie={movie} photoURL={photoURL} key={movie.id}/>)
            }
        </div>
    );
};

export {FilterByGenres};