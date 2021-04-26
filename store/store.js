import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import animeReducer from '../reducers/animeReducer';
import quizReducer from '../reducers/quizReducer';

const rootReducer = combineReducers({ animeReducer, quizReducer });


export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store
}