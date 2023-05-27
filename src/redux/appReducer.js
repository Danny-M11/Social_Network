import { getMainUser } from "./authReducer";

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY';


let initialState = {
    initialized: false, 
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY: {
            return {...state, initialized: true}
        }

        default: return state;
    }
}

export const initializedSuccessfully = () => ({type : INITIALIZED_SUCCESSFULLY})

export const initializeApp = () => {
    return async (dispatch) => {
        await dispatch(getMainUser())
        dispatch(initializedSuccessfully())
    }
}

export default appReducer;

//получили данные
//внутри AC упаковали их в объект data
//внутри Reducer распарсили state и перезатёрли распарсенным объектом data(id меняется на id из action и т.д.)