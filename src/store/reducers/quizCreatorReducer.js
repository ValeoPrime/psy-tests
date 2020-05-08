import { QUESTION, CREATE_QUIZ } from '../actions/actionTypes'

const initState = {
    quiz: []
}

export default function quizCreatorReducer(state = {initState}, action) {
    switch (action.type) {
        case QUESTION:
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case CREATE_QUIZ:
            return {
                ...state,
                quiz: []
            }
        default: {
            return {
                ...state
            }
        }
    }
}
