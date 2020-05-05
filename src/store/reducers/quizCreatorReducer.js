import { QUESTION, CREATE_QUIZ } from '../actions/actionTypes'

const initState = {
    quiz: []
}

export default function quizCreatorReducer(state = {initState}, action) {
    // console.log('ЭКШЕН ТАЙП', action.type)
     console.log('СТЕЙТ РЕДУСЕРА', state)
    switch (action.type) {
        case QUESTION:
            console.log('СРАБОТАЛ КЕЙС ДОБАВЛЕНИЯ ВОПРОСА, СТЕЙТ', state)
            // const cloneQuiz = state.state.quiz.slice()
            // cloneQuiz.push(action.item)
            // console.log('Вопрос равен', cloneQuiz)
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case CREATE_QUIZ:
            console.log('СРАБОТАЛ КЛЕАР КЕЙС')
            return {
                ...state,
                quiz: []
            }
        default: {
            console.log('ДЕФОЛТНЫЙ КЕЙС')
            return {
                ...state
            }
        }
    }
}

//  export default function createReducer(state = initialState, action) {
//     console.log('Экшен итем', action.item)
//     switch (action.type) {
//       case ADD_QUESTION:
//         console.log('КЕЙС СРАБОТАЛ')
//         return {
//           ...state,
//           quiz: [...state.quiz, action.item]
//         }
//       case CREATE_QUIZ:
//         return {
//           ...state, quiz: []
//         }
//       default:
//         console.log('ДЕФОЛТНЫЙ КЕЙС')
//         return state
//     }
//   }