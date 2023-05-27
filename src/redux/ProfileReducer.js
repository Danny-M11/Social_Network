import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData : [
        { id: 1, message: 'Погода сегодня блеск, Кря!', likesCount: 75, repostsCount: 12, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
        { id: 2, message: 'Кто сегодня на пруд?', likesCount: 40, repostsCount: 18, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
        { id: 3, message: 'Перья совсем грязные стали', likesCount: 19, repostsCount: 2, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
        { id: 4, message: 'На завтрак овсянка', likesCount: 18, repostsCount: 5, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
    ],
    textareaValue : '',
    profileData : null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5, 
                message: action.postText,  
                likesCount: 0, 
                repostsCount: 0, 
                avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg'
            } 

            return {...state, postsData: [...state.postsData, newPost], textareaValue: ''};

        case SET_PROFILE: 
            return {...state, profileData: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};

        default: 
            return state 
    }    
}

export const addPost = (postText) => ({type : ADD_POST, postText});
export const setProfile = (profile) => ({type : SET_PROFILE, profile});
export const setStatus = (status) => ({type : SET_STATUS, status})

export const getUserProfile = (userId) => {

    return async (dispatch) => {
        let data = await usersAPI.getUserProfile(userId)
        dispatch(setProfile(data))
    }
}

export const setUserStatus = (userId) => {

    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer

/*копирование state
краткая запись return { ...state, messageData: [...state.messageData, newMessage], messageInputValue: ''}; означает:
-мы не создаём переменную stateCopy, а сразу возвращаем объект-копию => {...state}
-дальше значение вложенного объекта/массива перезаписываем на его копию, а вместо метода массива push добавляем прям в копию нужные данные => {, messageData: [...state.messageData, newMessage]}
если нужно что-то переписать, как со значением поля ввода, просто перезаписываем значение поверх другого => {, messageInputValue: ''}
пишем всё через запятую, как в обычном объекте
*/ 