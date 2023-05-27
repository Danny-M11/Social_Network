import { NavLink } from 'react-router-dom'
import cls from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <div className={cls.sidebar__wrapper}>
                <div className={`${cls.sidebar__nav} ${cls.nav}`}>
                    <ul className={cls.nav__list}>
                        <li className={cls.nav__item}>
                            <NavLink to="/profile" className={({isActive}) => (isActive? cls.active : cls.nav__link)}>Profile</NavLink>
                        </li>
                        <li className={cls.nav__item}>
                            <NavLink to="/dialogs" className={({isActive}) => (isActive? cls.active : cls.nav__link)}>Dialogs</NavLink>
                        </li>
                        <li className={cls.nav__item}>
                            <NavLink to="/users" className={({isActive}) => (isActive? cls.active : cls.nav__link)}>Users</NavLink>
                        </li>
                        <li className={cls.nav__item}>
                            <NavLink to="/photo" className={({isActive}) => (isActive? cls.active : cls.nav__link)}>Photo</NavLink>
                        </li>
                        <li className={cls.nav__item}>
                            <NavLink to="/news" className={({isActive}) => (isActive? cls.active : cls.nav__link)}>News</NavLink>
                        </li>
                        <li className={cls.nav__item}>
                            <NavLink to="/settings" className={({isActive}) => (isActive? cls.active : cls.nav__link)}>Settings</NavLink>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Sidebar

// {`${cls.nav__item} ${({isActive}) => isActive? cls.active : cls.nav__item}`}