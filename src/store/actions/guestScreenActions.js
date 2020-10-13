import axios from 'axios'

import {    FETCH_QUESTIONARE_TITLES, 
    FETCH_QUESTIONARE_TITLES_ERROR, 
    FETCH_TEST_ID,
    FETCH_ACTIVE_QUESTIONARE_TITLE_AND_QUESTIONS,
    RETRY_HANDLER, 
    ANSWER,
    IS_QUESTIONNAIRE_FINISHED,
    NEXT_QUESTION,
    REPEAT_HANDLER,
    GUEST_SCREEN_OFF,
    QUIZ_SET_STATE,
    DELETE_QUESTIONARE
} from './actionTypes'

export function fetchAllTestsTitles() {
    return async dispatch => {
        try {
            const response = await axios.get('https://quiz-316f6.firebaseio.com/quizes.json')

            const allQuestionnaireTitles = []

            Object.keys(response.data).forEach(key => {
                let t = [key, response.data[key][0].questionareTitle]
                allQuestionnaireTitles.push(t)

            })
            
            dispatch(fetchAllQuestionnaireTitles(allQuestionnaireTitles))

        } catch (e) {
            dispatch(fetchAllQuestionnaireTitlesError(e))
        }
    }

}

export function testID(testId) {
    return {
        type: FETCH_TEST_ID,
        testId: testId
    }
}

export function fetchAllQuestionnaireTitles(allQuestionnaireTitles) {
    return {
        type: FETCH_QUESTIONARE_TITLES,
        allQuestionnaireTitles
    }
}

export function fetchAllQuestionnaireTitlesError(e) {
    return {
        type: FETCH_QUESTIONARE_TITLES_ERROR,
        error: e
    }
}

export function fetchActiveTest(testId) {
    return async dispatch => {
        let Title = null
        let questions = []
        try {
            const response = await axios.get(`https://quiz-316f6.firebaseio.com/quizes/${testId}.json`)
            response.data.forEach(item => {
                Title = item.questionareTitle
                questions.push(item)
            })

            dispatch(fetchActiveTestTitleQuestions(Title, questions))
        } catch (e) {
            dispatch(fetchActiveTestTitleQuestionsError(e))
        }
    }
}

export function answerClick(answerId) {
    return (dispatch,getState)  => {
        const state = getState().allTests

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'success') {
                return
            }
        }

        const question = state.questions[state.activeQuestion]
        const result = state.results

        if (question.rightAnswerId === answerId) {
            if (!result[question.id]) {
                result[question.id] = 'success'
            }

            dispatch(Answer({ [answerId]: 'success' }, result))

            const timeout = window.setTimeout(() => {
                if (isQuestionnaireFinished(state)) {
                    dispatch(QuestionnaireFinished())
                } else {
                    dispatch(nextQuestion(state.activeQuestion + 1))
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            result[question.id] = 'error'
            dispatch(Answer({[answerId]: 'error'}, result))
            const timeout = window.setTimeout(() => {
                if (isQuestionnaireFinished(state)) {
                    dispatch(QuestionnaireFinished())
                } else {
                    dispatch(nextQuestion(state.activeQuestion + 1))
                }
                window.clearTimeout(timeout)
            }, 1000)
        }
    }
}

export function quizSetState(answerState, results) {
    return {
      type: QUIZ_SET_STATE,
      answerState, results
    }
  }

export function Answer(answerState, result) {
    return {
        type: ANSWER,
        answerState: answerState,
        results: result
    }
}


export function isQuestionnaireFinished(state) {
    return state.activeQuestion + 1 === state.questions.length
}

export function QuestionnaireFinished() {
    return {
        type: IS_QUESTIONNAIRE_FINISHED,
    }
}

export function nextQuestion(number) {
    return {
        type: NEXT_QUESTION,
        number
    }
}


export function fetchActiveTestTitleQuestions(title, questions) {
    return {
        type: FETCH_ACTIVE_QUESTIONARE_TITLE_AND_QUESTIONS,
        questionnaireTitle: title,
        questions: questions
    }
}

export function fetchActiveTestTitleQuestionsError(e) {
    return {
        type: FETCH_QUESTIONARE_TITLES_ERROR,
        error: e
    }
}

export function retryHandler() {
    return {
        type: RETRY_HANDLER
    }
}

export function repeatHandler() {
    return {
        type: REPEAT_HANDLER
    }
}

export function guestScreenOff() {
    return {
        type: GUEST_SCREEN_OFF
    }
}

export function deleteQuestionare(id) {
    

    return async (dispatch, getState) => {
        try {
            await axios.delete(`https://quiz-316f6.firebaseio.com/quizes/${id}.json`)

            dispatch(localDeleteQuestionare(getState().allTests.allQuestionnaireTitles.filter(item => item[0] !== id)))
        } catch (e) {
            console.log(e);
        }
    }
    
}

function localDeleteQuestionare (allQuestionnaireTitles){
    return {
        type: DELETE_QUESTIONARE,
        allQuestionnaireTitles
    }
}
