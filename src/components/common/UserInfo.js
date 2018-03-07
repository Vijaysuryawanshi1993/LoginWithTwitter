import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export class UserInfo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.props.headingText}
                </Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    underlineColorAndroid='transparent'
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={styles.inputStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        fontSize: 18,
    },
});
