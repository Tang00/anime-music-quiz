import { START_QUIZ, ADD_POINT, ADD_CHOICE } from '../constants';


export const startQuiz = (quiz) => ({
    type: START_QUIZ,
    payload: quiz,
})

export const addPoint = () => ({
    type: ADD_POINT,
})

export const addChoice = (title) => ({
    type: ADD_CHOICE,
    payload: title,
})