import React from 'react';
import {View} from 'react-native';

export class ListItemSeparator extends React.Component {
    render() {
        return (
            <View style={{height: 0.5, backgroundColor: '#cccccc'}}/>
        );
    }
}