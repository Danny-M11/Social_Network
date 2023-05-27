import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profileState : profileReducer,
    dialogsState : dialogsReducer,
    usersState : usersReducer,
    auth : authReducer,
    app : appReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
