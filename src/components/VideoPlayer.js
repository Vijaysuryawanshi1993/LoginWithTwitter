import React from 'react';
import YouTube from 'react-native-youtube'

export default class VideoPlayer extends React.Component {
    render() {
        return (
            <YouTube
                apiKey="110562572378-9tr7bfgcs1rhubtfu08guauv798o4f30.apps.googleusercontent.com"
                videoId={this.props.selectedVideoId}       //"_EvMYEfF_hQ"   // The YouTube video ID
                play={true}             // control playback of video with true/false
                fullscreen={true}       // control whether the video should play in fullscreen or inline
                loop={true}             // control whether the video should loop when ended

                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}

                style={{alignSelf: 'stretch', height: 300}}
            />
        );
    }
}