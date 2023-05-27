import cls from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (<>
        <header className={cls.main_header}>
            DUCK TALES
            <span className={cls.login}>
                {props.authUserData.isAuth 
                ? <div>
                    <NavLink className={cls.login_link} to={'/profile'}>{props.authUserData.login}</NavLink> 
                    <span className={cls.login_link} onClick={props.logout}>sign out</span>
                </div> 
                : <NavLink to={'/login'}>sign in</NavLink>}
            </span>
        </header>
    </>

    )
}

export default Header