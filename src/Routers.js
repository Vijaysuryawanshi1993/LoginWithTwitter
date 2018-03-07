import React from 'react';
import {Scene, Actions, Router} from 'react-native-router-flux';
import Login from './components/Login';
import UserDetails from './components/UserDetails'
import Video from "./components/Video";
import VideoPlayer from './components/VideoPlayer';

export default class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar>
                    <Scene key='auth' hideNavBar>
                        <Scene key='login' component={Login} title="Please Login" initial></Scene>
                    </Scene>
                    <Scene key='main' hideNavBar>
                        <Scene
                            key="userDetails"
                            component={UserDetails}
                            title="UserData"
                        >
                        </Scene>
                    </Scene>
                    <Scene key='video' hideNavBar>
                        <Scene
                            key="videoDetails"
                            component={Video}
                            title="Videos"
                        >
                        </Scene>

                        <Scene
                            key="videoPlay"
                            component={VideoPlayer}
                            title="Youtube Player"
                        >
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}