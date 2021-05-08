import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from "../actionTypes";

const initialState = {
    registerError: null,
    loginError: null,
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_FAILURE:
            return {...state, registerError: action.error};
        case CREATE_USER_SUCCESS:
            return {...state, user: action.user, registerError: null};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case LOGOUT_USER: 
            return {...state, user: null}
        default:
            return state;
    }
};

export default reducer;