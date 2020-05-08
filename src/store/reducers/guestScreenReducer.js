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
    CREATE_QUIZ,
    GUEST_SCREEN_OFF,
    QUIZ_SET_STATE
} from '../actions/actionTypes'

const intialState = {
    guestScreen: true,
    allQuestionnaireTitles: ['Тестовый заголовок', 'Тестовый заголовок 2'],
    results: {}, //{[id]: success error}
    testId: null, //||   props.location.pathname.split('/')[2],
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
            // console.log('ВЫЗВАН КЕЙС КОНЕЦ ОПРОСА', state)
            return {
                ...state,
                isFinished: true,
                answerState: []
            }
        }
        case NEXT_QUESTION: {
            // console.log('ВЫЗВАН КЕЙС СЛЕД. ВОПРОС', state, action.number)
            return {
                ...state,
                activeQuestion: action.number,
                answerState: []
            }
        }
        case RETRY_HANDLER: {
            // console.log('ВЫЗВАН КЕЙС ПОВТОРИТЬ ОПРОС', state)
            return {
                ...state,
                results: {},
                isFinished: false,
                activeQuestion: 0,
                answerState: []
            }
        }
        case REPEAT_HANDLER: {
            // console.log('ВЫЗВАН КЕЙС К СПИСКУ ВОПРОСОВ', state)
            return {
                ...state,
                guestScreen: true,
                // results: {},
                isFinished: false,
                activeQuestion: 0,
                answerState: [],
                // questionnaireTitle: null,
                // testId: null,
                
            }
        }
        case GUEST_SCREEN_OFF:
            // console.log('СРАБОТАЛ КЕЙС ОТКЛЮЧИТЬ ГОСТЯ, СТЕЙТ', state)
            return {
                ...state,
                guestScreen: true,
                allQuestionnaireTitles: ['Тестовый заголовок', 'Тестовый заголовок 2'],
                results: {}, //{[id]: success error}
                testId: null, //||   props.location.pathname.split('/')[2],
                isFinished: false,
                questionsLoad: false,
                activeQuestion: 0,
                answerState: [],// {[answerId: 'success' or 'error']}
                questionnaireTitle: '',
                key: null,
                questions: [],
                quiz: []
            }
        case FETCH_QUESTIONARE_TITLES:
            // console.log('СРАБОТАЛ КЕЙС ПОЛУЧИТЬ ВСЕ ЗАГОЛОВКИ, СТЕЙТ', state)
            return {
                ...state,
                allQuestionnaireTitles: action.allQuestionnaireTitles,
                isFinished: false,
                guestScreen: true,
                testId: null,
                questionnaireTitle: '',
                questions: [],
                questionsLoad: false
            }
        case FETCH_TEST_ID:
            // console.log('СРАБОТАЛ КЕЙС ПРИШЕЛ АЙДИ ТЕСТА, СТЕЙТ', state)
            return {
                ...state,
                testId: action.testId,
                guestScreen: false
                
            }
        case QUIZ_SET_STATE:
            return {
            ...state, answerState: action.answerState, results: action.results
            }
        case QUESTION:
            
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case CREATE_QUIZ:
            // console.log('СРАБОТАЛ КЛЕАР КЕЙС')
            return {
                ...state,
                quiz: []
            }
        case FETCH_QUESTIONARE_TITLES_ERROR:
        default:
            return state
    }
} 