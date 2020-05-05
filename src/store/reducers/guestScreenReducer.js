import {
    FETCH_QUESTIONARE_TITLES, FETCH_QUESTIONARE_TITLES_ERROR,
    FETCH_TEST_ID,
    FETCH_ACTIVE_QUESTIONARE_TITLE_AND_QUESTIONS,
    RETRY_HANDLER,
    ANSWER,
    IS_QUESTIONNAIRE_FINISHED,
    NEXT_QUESTION,
    REPEAT_HANDLER,
    QUESTION,
    CREATE_QUIZ
} from '../actions/actionTypes'

const intialState = {
    guestScreen: true,
    allQuestionnaireTitles: ['Тестовый заголовок', 'Тестовый заголовок 2'],
    results: {}, //{[id]: success error}
    testId: '', //||   props.location.pathname.split('/')[2],
    isFinished: false,
    questionsLoad: false,
    activeQuestion: 0,
    answerState: [],// {[answerId: 'success' or 'error']}
    questionnaireTitle: '',
    key: null,
    questions: [],
    quiz: []
}


export default function guestScreenReducer(state = intialState, action) {
    // console.log('ГОСТЕВОЙ СТЕЙТ', state)
    switch (action.type) {
        case FETCH_ACTIVE_QUESTIONARE_TITLE_AND_QUESTIONS: {
            return {
                ...state,
                questionsLoad: true,
                questionnaireTitle: action.questionnaireTitle,
                questions: action.questions
            }
        }
        case ANSWER: {
            return {
                ...state,
                answerState: state.answerState.push(action.answerState),
                results: action.results
            }
        }
        case IS_QUESTIONNAIRE_FINISHED: {
            return {
                ...state,
                isFinished: action.isFinished

            }
        }
        case NEXT_QUESTION: {
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1,
                answerState: []
            }
        }
        case RETRY_HANDLER: {
            return {
                ...state,
                results: {},
                isFinished: false,
                activeQuestion: 0,
                answerState: null
            }
        }
        case REPEAT_HANDLER: {
            return {
                ...state,
                guestScreen: true,
                questionnaireTitle: null,
                questions: []
            }
        }
        case FETCH_QUESTIONARE_TITLES:
            return {
                ...state,
                allQuestionnaireTitles: action.allQuestionnaireTitles
            }
        case FETCH_TEST_ID:
            return {
                ...state,
                guestScreen: false,
                testId: action.testId
            }
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
        case FETCH_QUESTIONARE_TITLES_ERROR:
        default:
            return state
    }
} 