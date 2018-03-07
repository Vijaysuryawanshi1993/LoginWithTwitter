import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Routers from "./Routers";
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'

export default class App extends React.Component<{}> {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Routers/>
            </Provider>
        );
    }
}

