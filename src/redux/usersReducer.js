import { usersAPI } from "../api/api";
import { updateState } from "./utils/objectHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE';
const IS_FOLLOWING_PROGRESS = 'IS_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUserCount: 20000,
    currentPage: 1,
    portionSize: 10,
    isFetching: true,
    folowingInProgress: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {...state, usersData: [...state.usersData.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })]}


        case UNFOLLOW: 
            return {...state, usersData: [...state.usersData.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })]};
               
        case SET_USERS: 
            return {...state, usersData: action.users};

        case SET_TOTAL_COUNT: 
            return {...state, totalUserCount: action.totalCount};

        case CHANGE_PAGE: 
            return {...state, currentPage: action.pageNumber};

        case IS_FETCHING_TOGGLE: 
            return {...state, isFetching: action.status};

        case IS_FOLLOWING_PROGRESS: 
            return {...state, folowingInProgress: action.status};
        default: 
            return state
    }
}

export const follow = (userId) => ({type : FOLLOW, userId});
export const unfollow = (userId) => ({type : UNFOLLOW, userId});
export const setUsers = (users) => ({type : SET_USERS, users});
export const setTotalCount = (totalCount) => ({type : SET_TOTAL_COUNT, totalCount});
export const changePage = (pageNumber) => ({type: CHANGE_PAGE, pageNumber});
export const isFetchingToggle = (status) => ({type: IS_FETCHING_TOGGLE, status});
export const togglefollowinProgress = (status) => ({type: IS_FOLLOWING_PROGRESS, status});

export const getUsers = (currentPage, pageSize) => {
    
    return async (dispatch) => {
        dispatch(isFetchingToggle(true));
        dispatch(changePage(currentPage))

        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(isFetchingToggle(false));
        dispatch(setUsers(data.items));
        //this.props.setTotalCount(response.data.totalCount)

    } 
}

//общий метод для subscribe/unsubscribe
let subscribeUnsubscribeFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(togglefollowinProgress(true));

    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(togglefollowinProgress(false));


}

export const subscribe = (userId) => {
    return async (dispatch) => {
        subscribeUnsubscribeFlow(dispatch, userId, usersAPI.addSubscription, follow)
    }
}

export const unsubscribe = (userId) => {
    
    return async (dispatch) => {
        subscribeUnsubscribeFlow(dispatch, userId, usersAPI.deleteSubscription, unfollow)
    }
}

export default usersReducer