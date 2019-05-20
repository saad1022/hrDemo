import React, {Component} from "react";
import {Card , CardSection, Input, CustomButton} from "./common";

import {connect} from "react-redux";
import { emailChanged } from "../actions/";
import { passwordChanged } from "../actions";


const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};
  


class LoginForm extends Component {
   
    
    // Event Handler for email text Changed
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    // Event Handler for password text Changed
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    {/* For input control for email ( onChangeText={this.onEmailChange.bind(this)} ) */}
                    <Input 
                        label="Email" 
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value = {this.props.email}
                        />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                   />
                </CardSection>

                <CardSection>   
                     <CustomButton >
                    Sign In
                    </CustomButton>
                </CardSection>     
            </Card>
        );
    }
}

export default connect(mapStateToProps,emailChanged,passwordChanged)(LoginForm);