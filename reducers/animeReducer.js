import { FETCH_ANIME_PENDING, FETCH_ANIME_SUCCESS, FETCH_ANIME_ERROR } from '../constants';

const initialState = {
    pending: false,
    animelist: null,
    error: null,
};

const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANIME_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ANIME_SUCCESS:
            return {
                ...state,
                pending: false,
                animelist: action.payload
            }
        case FETCH_ANIME_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default animeReducer;