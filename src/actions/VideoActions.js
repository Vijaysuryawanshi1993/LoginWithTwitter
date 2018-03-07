import {SELECTED_VIDEO_ID} from './types'

export const selectVideo = (videoId) => {
    return {
        type: SELECTED_VIDEO_ID,
        payload: videoId
    };
};