import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import Styles from '../styles/secondStyle';
import Divider from 'react-native-divider';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/Actions/auth';

export default function LoginBox() {


    dispatch = useDispatch();

    const [emailEnter, SetEmailEnter] = useState('');
    const [passwordEnter, setPasswordEnter] = useState('');

    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");


    const logInFunction = () => {
        if (emailRegex.test(emailEnter)) {
            setEmail(false)
            if (strongRegex.test(passwordEnter)) {
                setPassword(false)
                dispatch(logIn())
            }
            else {
                setPassword(true)
            }

        }
        else {
            setEmail(true)
            setPassword(true)
        }
    }


    // ------------------------------------code for show or hide the password-------------------------------------------
    const [passwordVisible, setPasswordVisible] = useState(true)

    function handleCheck() {
        if (passwordVisible) {
            setPasswordVisible(false)
        } else {
            setPasswordVisible(true)
        }
    }
    // -------------------------------------------------------------------------------------------------------------------------
    return (
        <View>
            <View style={Styles.logInView}>
                <TextInput placeholder='Email or phone number' placeholderTextColor={'grey'}
                    onChangeText={
                        (value) => SetEmailEnter(value)
                    } style={Styles.placeHolderStyle}></TextInput>
            </View>
            {
                email ? <Text style={Styles.error}>Email should not be empty</Text> : null
            }



            <View style={Styles.logInView}>
                <TextInput placeholder='Amazon password' placeholderTextColor={'grey'}
                    secureTextEntry={passwordVisible}
                    onChangeText={
                        (value) => setPasswordEnter(value)
                    }
                    style={Styles.placeHolderStyle}></TextInput>
            </View>
            {
                password ? <Text style={Styles.error}>password should not be empty</Text> : null
            }



            <View style={Styles.checkView}>
                <CheckBox
                    style={Styles.checkBoxStyle}
                    boxType="square"
                    onChange={handleCheck} />

                <Text style={Styles.showStyle}> Show password</Text>
            </View>




            <TouchableOpacity onPress={() => logInFunction()}>
                <View style={Styles.signInView}>
                    <Text style={Styles.signInText}>sign-In</Text>
                </View>
            </TouchableOpacity>


            <View style={Styles.conditionView}>
                <Text style={Styles.conditonText}>By continuing, you agree to Amazon's Conditions of Use and privacy Notice.</Text>
            </View>



            <Divider orientation='center' >
                <Text style={Styles.amazonText}>  New to Amazon?</Text>
            </Divider>


        </View>
    )
}