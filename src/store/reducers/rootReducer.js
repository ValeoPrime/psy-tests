import {combineReducers} from 'redux'
import guestScreenReducer from './guestScreenReducer'
// import quizCreatorReducer from './quizCreatorReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    allTests: guestScreenReducer,
    auth: AuthReducer
    // createTest: quizCreatorReducer
})