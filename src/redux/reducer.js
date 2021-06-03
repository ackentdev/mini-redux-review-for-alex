const initialState = {
    username:'',
    favAnimals: []
}

const LOGIN_USER = "LOGIN_USER";

export function loginUser(username){
    return {
        type: LOGIN_USER,
        payload:username
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, username: action.payload}
        default:
            return state
    }
}