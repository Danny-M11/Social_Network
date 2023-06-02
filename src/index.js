import './index.css';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/Social_Network">
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>
);








// rerenderEntiretree(store.getState());

// store.subscribe(() => { 
//     let state = store.getState()
//     rerenderEntiretree(state)
// }); 