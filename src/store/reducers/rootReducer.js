import { combineReducers } from 'redux'
import guestScreenReducer from './guestScreenReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    allTests: guestScreenReducer,
    auth: AuthReducer
})
