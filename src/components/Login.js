import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from "./common";
import {connect} from 'react-redux'
import {loginUser} from "../actions";

class Login extends React.Component {

    onButtonPress() {
        this.props.loginUser();
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large'/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login with Twitter
            </Button>
        )
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
                        {this.renderButton()}
                    </CardSection>


                    <CardSection style={{marginTop: 20, borderColor: 'transparent', backgroundColor: 'transparent'}}>
                        {this.renderButton()}
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

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, {loginUser})(Login);