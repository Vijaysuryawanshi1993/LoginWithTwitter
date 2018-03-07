import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import * as actions from '../actions';

class VideoItem extends React.Component {
    onThumbnailClick() {
        const {item, selectedId} = this.props;
        if (selectedId) {
            return Actions.videoPlay({selectedVideoId:item.id});
        }

    };

    render() {
        const items = this.props.item;
        return (
            <TouchableHighlight onPress={() => this.props.selectVideo(items.id)}>
                <View style={styles.container}>
                    {this.onThumbnailClick()}
                    <Image source={{uri: items.snippet.thumbnails.medium.url}}
                           style={{height: 200}}
                    />
                    <View style={styles.descContainer}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/men/0.jpg'}}
                               style={styles.smallThumbnail}/>
                        <View style={styles.videoStatContainer}>
                            <Text numberOfLines={2} style={styles.statTitle}>
                                {items.snippet.title}
                            </Text>
                            <Text style={styles.statChannelTitle}>
                                {items.snippet.channelTitle + ' · ' + formatter(items.statistics.viewCount, 1) + ' views'}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

function formatter(num, digits) {
    var si = [
        {value: 1, symbol: ""},
        {value: 1E3, symbol: "k"},
        {value: 1E6, symbol: "M"},
        {value: 1E9, symbol: "G"},
        {value: 1E12, symbol: "T"},
        {value: 1E15, symbol: "P"},
        {value: 1E18, symbol: "E"}
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15
    },
    smallThumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    videoStatContainer: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        flex: 1
    },
    statTitle: {
        fontSize: 16,
        color: '#3c3c3c',
    },
    statChannelTitle: {}
});

const mapStateToProps = (state, ownProps) => {
    const selectedId = state.selectedVideoId === ownProps.item.id;
    return {selectedId};
}

export default connect(mapStateToProps, actions)(VideoItem);