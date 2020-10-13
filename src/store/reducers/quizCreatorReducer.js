import { QUESTION, CREATE_QUIZ } from '../actions/actionTypes'

const initState = {
    quiz: []
}

export default function quizCreatorReducer(state = initState, action) {
    switch (action.type) {
        case QUESTION:
            console.log('Стиейт в редьюсере',action.item)
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case CREATE_QUIZ:
            console.log('вызвали создать тест');
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
