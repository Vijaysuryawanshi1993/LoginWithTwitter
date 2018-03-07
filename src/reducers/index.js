import {combineReducers} from 'redux';
import VideoReducers from './VideoReducers'
import VideoSelectionReducer from './VideoSelectionReducer'

export default combineReducers({
    videos: VideoReducers,
    selectedVideoId: VideoSelectionReducer
})