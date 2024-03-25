import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions} from "../redux/slices/genres.slice";
import {Genre} from "./Genre";

const Genres: FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);
    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])
    return (
        <div>
            {
                genres.map(genre => <Genre genre={genre} key={genre.id}/>)
            }
        </div>
    );
};

export {Genres};