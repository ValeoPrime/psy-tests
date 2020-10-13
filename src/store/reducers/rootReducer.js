import { combineReducers } from 'redux'
import guestScreenReducer from './guestScreenReducer'
import AuthReducer from './AuthReducer'
import quizCreatorReducer from './quizCreatorReducer'

export default combineReducers({
    allTests: guestScreenReducer,
    auth: AuthReducer, 
    createQuizi: quizCreatorReducer
})
