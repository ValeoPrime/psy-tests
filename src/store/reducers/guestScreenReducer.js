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
                isFinished: true,
                answerState: []
            }
        }
        case NEXT_QUESTION: {
            return {
                ...state,
                activeQuestion: action.number,
                answerState: []
            }
        }
        case RETRY_HANDLER: {
            return {
                ...state,
                results: {},
                isFinished: false,
                activeQuestion: 0,
                answerState: []
            }
        }
        case REPEAT_HANDLER: {
            return {
                ...state,
                guestScreen: true,
                isFinished: false,
                activeQuestion: 0,
                answerState: [],
            }
        }
        case GUEST_SCREEN_OFF:
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
            return {
                ...state,
                quiz: []
            }
        case FETCH_QUESTIONARE_TITLES_ERROR:
        default:
            return state
    }
} 