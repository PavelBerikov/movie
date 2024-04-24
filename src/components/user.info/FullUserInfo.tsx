import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";

const FullUserInfo = () => {
    const {id, include_adult, username} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    return (
        <div onMouseEnter={() => dispatch(userActions.trueTrigger())}
            onMouseLeave={() => dispatch(userActions.resetTrigger())}
        >
            <div>Username: {username}</div>
            <div>User Id: {id}</div>
            <div>Adult Content: {include_adult ? 'yes' : 'no'}</div>
        </div>
    );
};

export {FullUserInfo};