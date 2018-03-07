import {PROFILE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    age: '',
    hobbies: '',
    description: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case PROFILE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}; //key interpretation
        default:
            return state
    }
}