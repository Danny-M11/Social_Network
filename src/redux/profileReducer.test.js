import profileReducer, {addPost} from "./ProfileReducer";

// let testModule = require('./ProfileReducer');


test('new post should be added', () => {
    // 1. test start data
    let action = addPost('ma new post');
    let state = [
        { id: 1, message: 'Погода сегодня блеск, Кря!', likesCount: 75, repostsCount: 12, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
        { id: 2, message: 'Кто сегодня на пруд?', likesCount: 40, repostsCount: 18, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
        { id: 3, message: 'Перья совсем грязные стали', likesCount: 19, repostsCount: 2, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
        { id: 4, message: 'На завтрак овсянка', likesCount: 18, repostsCount: 5, avaAdress: 'https://i.pinimg.com/564x/f9/62/1e/f9621e58d75b97fd3321810704b0d383.jpg' },
    ]

    // 2. some action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(5);
  });
