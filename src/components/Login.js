import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Button, Card, CardSection, Input} from "./common";
import {Actions} from 'react-native-router-flux';
import {twitter} from 'react-native-simple-auth';

class Login extends React.Component {

    onButtonPress() {
        Actions.main();
        twitter({
            appId: 'ZsdX6RfnqN9uwAwDAh79vlId7',
            appSecret: 'CqblUE1JQZg8f8MQb9L8QJgqMjqlJtKU7Oqcq5iM8AnWjlDSGL',
            callback: 'com.loginwithtwitter:/authorize',
        }).then((info) => {
            console.log("DATAAAASSSSSA" + info);
            alert(JSON.stringify(info));

            // info.user - user details from the provider
            // info.credentials - tokens from the provider
        }).catch((error) => {
            alert(JSON.stringify(error));
            Actions.main();
            console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEE" + error);
            // error.code
            // error.description
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.imageContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../img/blurred_back.png')}
                    />
                </View>
                <View style={styles.mainContainer}>
                    <Image
                        style={styles.twitterImageStyle}
                        source={require('../img/twitter.png')}
                    />
                    <View style={{marginTop: 20}}/>
                    <CardSection>
                        <Input
                            label='Username'
                            placeholder='email@gmail.com'
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label='password'
                            placeholder='password'
                            secureTextEntry
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Login
                        </Button>
                    </CardSection>


                    <CardSection style={{marginTop: 20, borderColor: 'transparent', backgroundColor: 'transparent'}}>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Login with Twitter
                        </Button>
                    </CardSection>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    imageStyle: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    twitterImageStyle: {
        width: 48,
        height: 48
    },
    twitterTextStyle: {
        margin: 24,
        fontSize: 22,
        color: 'white'
    }

});


export default Login;