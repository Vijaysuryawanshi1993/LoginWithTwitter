import {LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS} from "./types";
import {Actions} from 'react-native-router-flux';
import {twitter} from "react-native-simple-auth";

export const loginUser = () => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        // twitter({
        //     appId: 'ZsdX6RfnqN9uwAwDAh79vlId7',
        //     appSecret: 'CqblUE1JQZg8f8MQb9L8QJgqMjqlJtKU7Oqcq5iM8AnWjlDSGL',
        //     callback: 'com.loginwithtwitter:/authorize',
        // }).then((info) => {
        //     loginUserSuccess(dispatch, info);
        // }).catch((error) => {
        //     loginUserFail(dispatch, error);
        // });

        //in emulator can't get data as it doesn't have twitter app installed on it
        //also it opens chrome browser instead of default in app that's why use dummy data for further operations

        Actions.main();
    };
};

export const loginUserFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: error
    })
};

export const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};