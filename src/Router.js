import React from "react";
import  { Scene, Router, Actions } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";


const RouterComponet = () => {
    return (
        <Router>
            <Scene key = "root" hideNavBar>
                <Scene key = "login" component = {LoginForm} title = "Please Login" initial />
               
                <Scene key = "main" >
                     <Scene
                         key = "employeeList"
                         component = {EmployeeList} 
                         title = "Employees" initial 
                         rightTitle = "Add"
                         onRight = {() => { Actions.employeeCreate();}}   
                      />
                      <Scene
                         key = "employeeCreate"
                         component = {EmployeeCreate} 
                         title = "Add Employee"  
                      />
                </Scene>
            </Scene>

        </Router>
    );
};

export default RouterComponet;