import {combineReducers} from 'redux';
import VideoReducers from './VideoReducers'
import VideoSelectionReducer from './VideoSelectionReducer'
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";

export default combineReducers({
    auth: AuthReducer,
    videos: VideoReducers,
    selectedVideoId: VideoSelectionReducer,
    profile: ProfileReducer,
})