import React, {Component} from "react";
import {Card , CardSection, Input, CustomButton} from "./common";
import  { Picker } from "react-native";
import  { connect } from "react-redux";

import  { employeeUpdate } from "../actions";


const mapStateToProps = state => {
    const { name,phone,shift}= state.employeeForm;
    return {name,phone,shift};
};


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                 <CardSection>
                    <Input 
                        label = "Name" 
                        placeholder = "John"
                        onChangeText={text => this.props.employeeUpdate({ prop: "name",value: text })}

                        />
                </CardSection>

                <CardSection>
                    <Input 
                        label = "Phone" 
                        placeholder = "+55-555-5555"
                        onChangeText={text => this.props.employeeUpdate({ prop: "phone",value: text })}

                        />
                </CardSection>

                <CardSection />

                <CardSection>
                    <CustomButton>Add Employee</CustomButton>
                </CardSection>
            </Card>
        );

    }
}

export default connect ( mapStateToProps, {employeeUpdate})(EmployeeCreate);
