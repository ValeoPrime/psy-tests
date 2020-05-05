import axios from 'axios'
export function auth (email, password, isLogin) {
    return async () => {

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        
        let url = ''
        if(isLogin){
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyALD2dHT9lF2G6-J7nv3BtJkrMcUhk8HgI'
        } else {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyALD2dHT9lF2G6-J7nv3BtJkrMcUhk8HgI'
        }
            const response = await axios.post(url, authData)

            console.log('Ответ сервера',response.data)
    }
}