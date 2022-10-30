import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


//start store shelves
const feeling = (state = '0', action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        case 'RESET_STORE':
            return '0';
    }
    return state;
};

const understanding = (state = '0', action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        case 'RESET_STORE':
            return '0';
    }
    return state;
};

const support = (state = '0', action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        case 'RESET_STORE':
            return '0';
    }
    return state;
};

const comment = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return action.payload;
        case 'RESET_STORE':
            return '';
    }
    return state;
};
//end store shelves

//store combiner, allows for useSelector store dot operator
const reduxStore = createStore(
    combineReducers({
        //store shelves
        feeling,
        understanding,
        support,
        comment

    }), applyMiddleware(logger)
);


//Connect the store to my app
ReactDOM.render(<Provider store={reduxStore}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
