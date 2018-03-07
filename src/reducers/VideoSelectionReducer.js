import {SELECTED_VIDEO_ID} from '../actions/types'

export default (state = null, action) => {
    switch (action.type) {
        case SELECTED_VIDEO_ID:
            return action.payload;

        default:
            return state;
    }
};
