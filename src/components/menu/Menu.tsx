import React from 'react';
import {useAppDispatch} from "../../hooks";
import {menuActions} from "../../redux";


const Menu = () => {
    const dispatch = useAppDispatch();
    return (
        <div onClick={() => dispatch(menuActions.changeTrigger())} style={{margin: '10px', fontSize: '40px', color: 'salmon', cursor: 'pointer'}}>
            ≡
        </div>
    );
};

export {Menu};