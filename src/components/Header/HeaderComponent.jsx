import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    render() {
        return (<>
                <Header {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authUserData : state.auth,
    }
}

const HeaderComponent = connect(mapStateToProps, {logout})(HeaderContainer);

export default HeaderComponent;


//auth-reducer 
//{userId, email, login, isFetching}
//сетаем данные 
//перезатираем => ...state, ...action.data
//
//in actionCreator приходят данные отдельно, а мы их упаковываем в data : {данные}
//
//mapState... 
//
//В ответе делаем проверку на код ответа атворизации, если не ноль выводим загрузку
//переписываем дату в переменную {userId, email, login}
//
//при успешной логинизации меняем значение из аус 

