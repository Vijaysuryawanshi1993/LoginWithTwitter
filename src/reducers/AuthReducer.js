import {LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER} from '../actions/types'

const INITIAL_STATE = {
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.types) {
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload};

        case LOGIN_USER:
            return {...state, loading: true, error: ''};

        case LOGIN_USER_FAIL:
            return {...state, error: 'Login Failed.', loading: false};

        default:
            return state;
    }
}