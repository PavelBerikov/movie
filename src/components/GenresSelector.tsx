import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions} from "../redux";

const GenresSelector = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);
    console.log(genres)
    return (
        <div>

            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(28))}>Action</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(12))}>Adventure</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(16))}>Animation</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(35))}>Comedy</div>
            <div style={{cursor: 'pointer'}}
                 onClick={() => dispatch(genresActions.createQuery(80))}>Crime</div>



        </div>
    );
};

export {GenresSelector};