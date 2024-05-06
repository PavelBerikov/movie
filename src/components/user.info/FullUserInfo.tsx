import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const FullUserInfo = () => {
    const navigate = useNavigate();
    const {id, include_adult, username} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    return (
        <div onMouseEnter={() => dispatch(userActions.trueTrigger())}
            onMouseLeave={() => dispatch(userActions.resetTrigger())}
             style={{height: '40px', color: 'black'}}
        >
            <div>Username: {username}</div>
            <div>User Id: {id}</div>
            <div>Adult Content: {include_adult ? 'yes' : 'no'}</div>
            <div style={{cursor: 'pointer'}} onClick={() => navigate('/rated_movies')}>My rated movies</div>
        </div>
    );
};

export {FullUserInfo};