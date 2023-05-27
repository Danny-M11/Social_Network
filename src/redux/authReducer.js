import { usersAPI, profileAPI } from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE';
const SET_AUTH_ERROR_MESSAGE = 'SET_AUTH_ERROR_MESSAGE';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: false,
    authErrorMessage: ''     
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA: {
            return {...state, ...action.data, authErrorMessage : ''}
        }

        case IS_FETCHING_TOGGLE: 
            return {...state, isFetching: action.status};

        case SET_AUTH_ERROR_MESSAGE: {
            return {...state, authErrorMessage: action.message}
        }

        default: return state;
    }
}

export const setAuthUserData = (email, id, login, isAuth) => ({type : SET_AUTH_DATA, data : {email, id, login, isAuth}});
export const isFetchingToggle = (status) => ({type : IS_FETCHING_TOGGLE, status : status});
export const setAuthErrorMessage = (message) => ({type : SET_AUTH_ERROR_MESSAGE, message : message})

export const getMainUser = () => {
    return async(dispatch) => {
        dispatch(isFetchingToggle(true))
        let data = await usersAPI.getMainUser();
        let {email, id, login} = data.data
            if (data.resultCode === 0) {dispatch(setAuthUserData(email, id, login, true))}
            dispatch(isFetchingToggle(false))   
    }
}

export const login = (email, password, rememberMe) => {

    return async (dispatch) => {
        let response = await profileAPI.login(email, password, rememberMe);
        if(response.data.resultCode !== 0) {
            dispatch(setAuthErrorMessage(response.data.messages[0]))
        } 
        dispatch(getMainUser())
    }
}

export const logout = () => {

    return async(dispatch) => {
        let response = await profileAPI.logout();
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer;

//получили данные
//внутри AC упаковали их в объект data
//внутри Reducer распарсили state и перезатёрли распарсенным объектом data(id меняется на id из action и т.д.)