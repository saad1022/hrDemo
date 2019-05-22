export * from "./AuthActions";
export * from "./EmployeeActions";

import { EMAIL_CHANGED } from "./types";
import { PASSWORD_CHANGED } from "./types";

import  { Actions } from "react-native-router-flux";
import firebase from "firebase";

//action creator---jo text input ae return Action with type defined , 
//reducer will read type and change state against it

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};


export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};


export const loginUser = ({ email , password }) => {
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(  user => this.loginUserSuccess(dispatch,user))
            .catch(() => {
                //Sign Up user
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email,password)
                    .then(user => this.loginUserSuccess(dispatch,user));
            });


            const loginUserSuccess = (dispatch , user) => {
                dispatch ({
                    type : LOGIN_USER_SUCCESS,
                    payload: user
                });
                Actions.employeeList();
                Actions.main();
            };
    };
};



