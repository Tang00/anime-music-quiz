import { START_QUIZ, ADD_POINT, ADD_CHOICE } from '../constants';

const initialState = {
    quiz: "",
    score: 0,
    choices: [],
};

const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_QUIZ:
            return {
                ...state,
                quiz: action.payload,
                score: 0,
                choices: [],
            }
        case ADD_POINT:
            return {
                ...state,
                score: state.score + 1
            }
        case ADD_CHOICE:
            return {
                ...state,
                choices: [...state.choices, action.payload],
            }
        default:
            return state;
    }
}

export default quizReducer;