import axios from 'axios'
import { QUESTION, CREATE_QUIZ } from './actionTypes'

export function addQuestion(item) {
    return {
        type: QUESTION,
        item
    }
}

export function clearQuiz() {
    return {
        type: CREATE_QUIZ
    }
}

export function createQuiz() {
    return async (dispatch, getState) => {

        await axios.post('https://quiz-316f6.firebaseio.com/quizes.json', getState().allTests.quiz)
        dispatch(clearQuiz())
    }
}  
