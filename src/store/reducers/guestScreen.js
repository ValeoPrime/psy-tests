import {FETCH_QUESTIONARE_TITLES, FETCH_QUESTIONARE_TITLES_ERROR, FETCH_TEST_ID} from '../actions/actionTypes'

const intialState = {
    guestScreen: true,
    allQuestionnaireTitles: ['Тестовый заголовок', 'Тестовый заголовок 2'],
    testId: ''
}

export default function guestScreenReducer(state = intialState, action){
    switch (action.type) {
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
        case FETCH_QUESTIONARE_TITLES_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
} 