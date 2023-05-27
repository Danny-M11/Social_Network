import React from 'react';
import User from './User/User';
import cls from './Users.module.css';
import { useState, useEffect } from 'react';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * 10;

    useEffect(() => {
        props.changePage(leftPortionNumber);
    }, [portionNumber])

    let UserElements = props.usersData.map(u => <User id={u.id} 
        name={u.name} 
        city={u.city} 
        country={u.country} 
        subscription={u.followed} 
        subscribe={props.subscribe} 
        unsubscribe={props.unsubscribe} 
        togglefollowinProgress={props.togglefollowinProgress} 
        photo={u.photos.small} />)
    let UserPages = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map( p =><button onClick={() => {props.changePage(p)}} className={props.currentPage === p ? `${cls.pages__pageNumber} ${cls.pages__selectedPage}` : `${cls.pages__pageNumber}`}>{p}</button>);

    return (
        <div className={cls.users__wrapper}>
            <div className={cls.pages__wrapper}>
                {portionNumber > 1 ? <button onClick={() => {setPortionNumber(portionNumber - 1)}} className={`${cls.pages__move_button}`}>назад</button> : null}
                {UserPages} 
                {portionCount > portionNumber ? <button onClick={() => {setPortionNumber(portionNumber + 1)}} className={`${cls.pages__move_button}`}>вперёд</button> : null}
            </div>
            {UserElements}
        </div>
    )
}

export default Users