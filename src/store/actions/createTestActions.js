import axios from 'axios'
import { QUESTION, CREATE_QUIZ } from './actionTypes'


export function addQuestion(item) {
    return {
        type: QUESTION,
        item
    }
}

export function clearQuiz() {
    console.log('ВЫЗВАЛИ КОНЕЦ ОПРОСА')
    return {
        type: CREATE_QUIZ

    }
}

export function createQuiz() {
    return async (dispatch, getState) => {

        const response = await axios.post('https://quiz-316f6.firebaseio.com/quizes.json', getState().allTests.quiz)
        console.log('УШЕЛ ОПРОС НА СЕРВЕР', getState().allTests.quiz)
        console.log('Ответ сервера', response)
        dispatch(clearQuiz())
    }
}  
