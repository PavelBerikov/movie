import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {fullMovieInfoActions, youtubeActions} from "../../redux";
import YouTube from "react-youtube";
import css from '../General.module.css'

const TrailerVideo = () => {
    const dispatch = useAppDispatch();
    const {response} = useAppSelector(state => state.youtube);
    const opts = {
        height: '550',
        width: '1100',
        playerVars: {
            autoplay: 1/*,
            controls: 0,
            modestbranding: 1,
            fs: 0*/
        }
    }
    const title = localStorage.getItem('title') + localStorage.getItem('release_date') + 'Official Trailer'
    useEffect(() => {
        dispatch(youtubeActions.getVideoId(title))
    }, [title, dispatch])
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '90%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <button className={css.CloseButton} onClick={() => dispatch(fullMovieInfoActions.resetTrigger())}>
                X
            </button>
            <YouTube videoId={response&& response.items[0].id.videoId} opts={opts}/>

        </div>
    );
};

export {TrailerVideo};