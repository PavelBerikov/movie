import React, {FC} from 'react';

import css from '../General.module.css'

interface IProps{
    rating: number
}
const Rating:FC<IProps> = ({rating}) => {
    const fullStars = Math.floor(rating)
    const halfStars = (rating - fullStars) >= 0.5
    const stars = Array.from({length: 10}, (_, index) => {
        if (index < fullStars){
            return <span key={index} className={`${css.Star} ${css.StarFilled}`}/>
        }else if(index === fullStars && halfStars){
            return <span key={index} className={`${css.Star} ${css.StarHalf}`}/>
        }else {
            return <span key={index} className={css.Star}/>
        }
    })
    return (
        <div className={css.Rating}>
            {stars}
        </div>
    );
};

export {Rating};