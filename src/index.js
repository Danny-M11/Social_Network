import './index.css';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.PUBLIC_URL)
root.render(
    <HashRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </HashRouter>
);








// rerenderEntiretree(store.getState());

// store.subscribe(() => { 
//     let state = store.getState()
//     rerenderEntiretree(state)
// }); 