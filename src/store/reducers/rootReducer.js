import {combineReducers} from 'redux'
import guestScreenReducer from './guestScreen'

export default combineReducers({
    allTests: guestScreenReducer
})