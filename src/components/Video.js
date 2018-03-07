import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, ListView} from 'react-native';
import {ListItemSeparator} from "./common";
import {connect} from 'react-redux';
import VideoItem from './VideoItem';

class Video extends React.Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.videos);
    }

    renderItem(data) {
        return <VideoItem item={data}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('../img/youtube.png')} style={styles.navImageLeft}/>
                </View>
                <View style={styles.body}>
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderItem}
                    />
                    {/*<FlatList*/}
                    {/*data={Data.items}*/}
                    {/*renderItem={(video) => <VideoItem video={video.item}/>}*/}
                    {/*keyExtractor={(item) => item.id}*/}
                    {/*ItemSeparatorComponent={() => <ListItemSeparator/>}*/}
                    {/*/>*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    navImageLeft: {
        width: 98,
        height: 22,
    },
    body: {
        flex: 1
    }
});

const mapStateToProps = state => {
    return {videos: state.videos};
};

export default connect(mapStateToProps)(Video);