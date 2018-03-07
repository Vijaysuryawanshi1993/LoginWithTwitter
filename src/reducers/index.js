import {combineReducers} from 'redux';
import VideoReducers from './VideoReducers'
import VideoSelectionReducer from './VideoSelectionReducer'
import AuthReducer from "./AuthReducer";

export default combineReducers({
    auth: AuthReducer,
    videos: VideoReducers,
    selectedVideoId: VideoSelectionReducer
})