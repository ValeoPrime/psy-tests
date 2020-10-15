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

export async function createQuiz(quiz, dispatch) {
    console.log('Опрос',quiz);
    await axios.post('https://quiz-316f6.firebaseio.com/quizes.json', quiz).then(res=> {console.log(res)})
}  
