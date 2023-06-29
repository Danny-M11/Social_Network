import React from 'react';
import cls from './User.module.css';
import userAva from '../../../images/userAva.jpg';
import { NavLink } from 'react-router-dom';


const User = (props) => {


    return (
        <div className={cls.user__wrapper}>
            <NavLink to={'/userProfile/' + props.id}><img className={cls.user__avatar} src={!props.photo ? userAva : props.photo} alt="аватар пользователя" /></NavLink >
            <span className={cls.user__name}>{props.name}</span>
            <div className={cls.user__location}>
                <span className={cls.user__city}>{props.city}</span>
                <span className={cls.user__country}>{props.country}</span>
            </div>
            <div>
                {props.subscription
                    ? <button className={`${cls.user__unfollow_button} ${cls.user__button}`} disabled={props.folowingInProgress} onClick={() => {
                        props.unsubscribe(props.id)
                    }
                    }>subscribed</button>
                    : <button className={`${cls.user__follow_button} ${cls.user__button}`} disabled={props.folowingInProgress} onClick={() => {
                        props.subscribe(props.id)
                    }
                    }>subscribe</button>}
            </div>
        </div>
    )
}

export default User