const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.messageInputValue,
                avaUrl: 'https://i.pinimg.com/564x/66/98/f4/6698f4bc1eee901ff9d379878b59f32c.jpg'
            }

            return { ...state, messageData: [...state.messageData, newMessage]};
        }

        default: return state;
    }
}

export const addMessage = (messageInputValue) => ({ type: ADD_MESSAGE, messageInputValue });

export default dialogsReducer;



/*копирование state
краткая запись return { ...state, messageData: [...state.messageData, newMessage], messageInputValue: ''}; означает:
-мы не создаём переменную stateCopy, а сразу возвращаем объект-копию => {...state}
-дальше значение вложенного объекта/массива перезаписываем на его копию, а вместо метода массива push добавляем прям в копию нужные данные => {, messageData: [...state.messageData, newMessage]}
если нужно что-то переписать, как со значением поля ввода, просто перезаписываем значение поверх другого => {, messageInputValue: ''}
пишем всё через запятую, как в обычном объекте
*/ 