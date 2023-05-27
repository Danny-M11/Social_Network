import cls from './Post.module.css';
import React from 'react';

const Post = (props) => {

    return (
        <div className={cls.post__wrapper}>
            <div className={cls.post__content}>
                <img src={props.avaAdress} alt="аватар" className={cls.post__avatar} />
                <span className={cls.post__text}>{props.message}</span>
            </div>
            <button className={`${cls.post__like} ${cls.button}`}>like {props.likes}</button>
            <button className={`${cls.post__repost} ${cls.button}`}>repost {props.reposts}</button>
        </div>
    )
}

export default Post