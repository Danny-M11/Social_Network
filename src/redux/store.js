import profileReducer from "./ProfileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state : {
        profileState: {
            postsData : [
                { id: 1, message: 'Погода сегодня блеск, Кря!', likesCount: 75, repostsCount: 12, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
                { id: 2, message: 'Кто сегодня на пруд?', likesCount: 40, repostsCount: 18, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
                { id: 3, message: 'Перья совсем грязные стали', likesCount: 19, repostsCount: 2, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
                { id: 4, message: 'На завтрак овсянка', likesCount: 18, repostsCount: 5, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
            ],
            textareaValue : ''
        },
        dialogsState: {
            dialogsData : [
                {id: 1, user: 'Donald', avaUrl: 'https://i.pinimg.com/564x/c4/98/c2/c498c247738c9e7f3451d27229121a9c.jpg'},
                {id: 2, user: 'Duffy', avaUrl: 'https://i.pinimg.com/564x/66/98/f4/6698f4bc1eee901ff9d379878b59f32c.jpg'},
                {id: 3, user: 'McDuck', avaUrl: 'https://i.pinimg.com/564x/6f/06/f2/6f06f290ae293e22c7ace744c458076b.jpg'},
                {id: 4, user: 'Darkwing', avaUrl: 'https://i.pinimg.com/564x/2b/65/67/2b6567d1d0220928c12b11b35b00e776.jpg'},
                {id: 5, user: 'Dodgers', avaUrl: 'https://i.pinimg.com/564x/35/2f/02/352f02bfa07377dceb1d659357ee42ee.jpg'},
            ],    
            messageData : [
                { id: 1, message: 'Привет', avaUrl: 'https://i.pinimg.com/564x/66/98/f4/6698f4bc1eee901ff9d379878b59f32c.jpg'},
                { id: 2, message: 'Как дела?', avaUrl: 'https://i.pinimg.com/564x/66/98/f4/6698f4bc1eee901ff9d379878b59f32c.jpg'},
                { id: 3, message: 'Что делаешь??', avaUrl: 'https://i.pinimg.com/564x/66/98/f4/6698f4bc1eee901ff9d379878b59f32c.jpg'},
            ],
            messageInputValue : ''
        }
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profileState = profileReducer(this._state.profileState, action);
        this._state.dialogsState = dialogsReducer(this._state.dialogsState, action);

        this._callSubscriber(this._state)
    }
}

export default store;
