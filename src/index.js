import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


//store shelves
const uppershelf = (state='',action)=>{
    switch(action.type){
        case 'SET_IT':
            return action.payload;
    }
    return state;
};

//store itself
const reduxStore = createStore(
    combineReducers({
        //store shelves
        uppershelf
    }), applyMiddleware(logger)
);


//Connect the store to my app
ReactDOM.render(<Provider store={reduxStore}>
                    <App />
               </Provider>, document.getElementById('root'));
registerServiceWorker();
