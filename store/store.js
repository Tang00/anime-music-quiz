import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import animeReducer from '../reducers/animeReducer';


export default function configureStore() {
    const store = createStore(animeReducer, applyMiddleware(thunk));
    return store
}