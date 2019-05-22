import React, { Component } from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import  { Scene, Router ,Actions} from "react-native-router-flux";


import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

import Routes from "./Router";
class App extends Component {

    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAkEVIvnGmDuX4_qs65mAIoYhZr9TP3aY4",
            authDomain: "fbdemo-1863b.firebaseapp.com",
            databaseURL: "https://fbdemo-1863b.firebaseio.com",
            projectId: "fbdemo-1863b",
            storageBucket: "fbdemo-1863b.appspot.com",
            messagingSenderId: "169160486519",
            appId: "1:169160486519:web:38268a7ee1edd786"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render(){
        const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));
        
        return(
            <Provider store={store}>
                <Routes />
                    
                {/* <View>
                    <LoginForm />
                </View> */}
            </Provider>
        );
    }
}

export default App;