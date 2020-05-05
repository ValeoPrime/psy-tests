

const initialState = {
    token: null
}

export default function AuthReducer(state = initialState, action){
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}