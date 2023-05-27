import { NavLink } from 'react-router-dom'
import cls from './Dialog.module.css'

const Dialog = (props) => {
    const path = '/dialogs/' + props.id
    
    return (
        <div className={cls.dialog__wrapper}>
            <img src={props.avatar} alt="" className={cls.dialog__avatar} />
            <NavLink to={path} className={cls.dialog__name}>{props.user}</NavLink>
        </div>
    )
}

export default Dialog