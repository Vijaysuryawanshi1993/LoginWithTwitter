import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, CardSection, UserInfo} from "./common";
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import {connect} from "react-redux";
import {profileUpdate} from "../actions";

class UserDetails extends React.Component {
    onVideoButtonClick() {
        Actions.video();
    }

    state = {
        ImageSource: "https://randomuser.me/api/portraits/men/0.jpg",
    };

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log(source);
                this.setState({

                    ImageSource: response.uri

                });
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: this.state.ImageSource}}
                           style={styles.smallThumbnail}/>
                    <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
                        <Text style={{color: 'white'}}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <CardSection style={styles.cardSection}>
                        <UserInfo
                            headingText="Name"
                            placeholder='Name'
                            // value={this.props.name}
                            // onChangeText={(text) => this.props.profileUpdate({prop: 'name', value: text})}
                        />
                    </CardSection>

                    <CardSection style={styles.cardSection}>
                        <UserInfo
                            headingText="Age"
                            placeholder='24'
                            // value={this.props.age}
                            // onChangeText={text => this.props.profileUpdate({prop: 'age', value: text})}
                        />
                    </CardSection>

                    <CardSection style={styles.cardSection}>
                        <UserInfo
                            headingText="Hobbies"
                            placeholder='Hobbies'
                            // value={this.props.hobbies}
                            // onChangeText={text => this.props.profileUpdate({prop: 'hobbies', value: text})}
                        />
                    </CardSection>

                    <CardSection style={styles.cardSection}>
                        <UserInfo
                            headingText="Description"
                            placeholder='Bio'
                            // value={this.props.description}
                            // onChangeText={text => this.props.profileUpdate({prop: 'desc', value: text})}
                        />
                    </CardSection>
                </View>
                <CardSection style={styles.cardSection}>
                    <Button onPress={this.onVideoButtonClick.bind(this)}>
                        Click Here To Watch Videos
                    </Button>
                </CardSection>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        flex: 1
    },
    imageContainer: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03046d'
    },
    smallThumbnail: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    cardSection: {
        marginHorizontal: 0
    }
})


const mapStateToProps = (state) => {
    const {name, age, hobbies, description} = state.profile;
    return {
        name, age, hobbies, description
    };
};
export default connect(mapStateToProps, {profileUpdate})(UserDetails);