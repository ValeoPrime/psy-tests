import {AUTH_SUCCESS, AUTH_LOGOUT} from './actionTypes'
import axios from 'axios'

export function auth(email, password, isLogin) {
    return async dispatch => {

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = ''
        if (isLogin) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyALD2dHT9lF2G6-J7nv3BtJkrMcUhk8HgI'
        } else {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyALD2dHT9lF2G6-J7nv3BtJkrMcUhk8HgI'
        }
        const response = await axios.post(url, authData)
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)

        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('userId', response.data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(response.data.idToken))
        dispatch(autoLogout(response.data.expiresIn))

        // console.log('Ответ сервера', response.data)
        // console.log('Локальное хранилище', localStorage)
    }
}

 export function authSuccess(idToken) {
    return {
        type: AUTH_SUCCESS,
        token: idToken
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin(){
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogout(expirationDate.getTime() - new Date().getTime() / 1000))
            }
        }
    }

}