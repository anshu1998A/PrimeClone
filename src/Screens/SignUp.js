import React, { useState } from 'react'
import { Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Styles from '../styles/secondStyle';
import homeStyle from '../styles/homePageStyle';

export default function SignUp({ navigation }) {
    const [emailEnter, SetEmailEnter] = useState('');
    const [passwordEnter, setPasswordEnter] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    // const [check, unCheck] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [cPass, SetcPass] = useState(false);
    const [errorPass, setErrorPass] = useState(false)

    const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
    // const phoneRegex = /^ [0-9]{10}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");

    const Details = () => {
        if (emailRegex.test(emailEnter)) {
            setEmail(false)
            
            if (strongRegex.test(passwordEnter)) {
                setPassword(false)
                SetcPass(false)


                if (passwordEnter === confirmPass) {
                    setErrorPass(false)
                    navigation.navigate('LogIn')
                }

                else {
                    setErrorPass(true)
                }
            }
            else {
                setPassword(true)
            }
        }
        else 
        {
            setEmail(true)
            // setPassword(true)
            // SetcPass(true)
        }

    }


    const [passwordVisible, setPasswordVisible] = useState(true)

    function handleCheck() {
        if (passwordVisible) {
            setPasswordVisible(false)
        } else {
            setPasswordVisible(true)
        }
    }

    return (
        <View style={{ backgroundColor: '#3b3737', flex: 1 }}>
            <View >
                <Text style={homeStyle.PMImage}>prime video</Text>
                <Image style={homeStyle.logoStyle} source={require('../assets/images/MoviesImages/MenuIcons/smile.png')}></Image>
            </View>

            <Text style={Styles.signUpTittletext}>Sign-Up with your Mobile number</Text>

            <View style={Styles.signUpView}>
                <TextInput
                    placeholder='Email or phone number'
                    placeholderTextColor={'grey'}
                    style={Styles.placeHolderStyle}
                    onChangeText={
                        (value) => SetEmailEnter(value)
                    } ></TextInput>
            </View>
            {
                email ? <Text style={{ textAlign: 'center', color: 'red' }}>Email should not be empty</Text> : null
            }
            <View style={Styles.signUpView}>
                <TextInput placeholder='Set your password' placeholderTextColor={'grey'}
                    secureTextEntry={passwordVisible}
                    onChangeText={
                        (value) => setPasswordEnter(value)
                    } style={Styles.placeHolderStyle}></TextInput>
            </View>
            {
                password ? <Text style={{ textAlign: 'center', color: 'red' }}>password should not be empty</Text> : null
            }
            <View style={Styles.signUpView}>
                <TextInput placeholder='Confirm your password' placeholderTextColor={'grey'}
                    secureTextEntry={passwordVisible} onChangeText={
                        (value) => setConfirmPass(value)} style={Styles.placeHolderStyle}></TextInput>
            </View>
            {
                cPass ? <Text style={{ textAlign: 'center', color: 'red' }}>password should not be empty</Text> : null
            }


            {

                errorPass ? <Text style={{ textAlign: 'center', color: 'red' }}> password does not match</Text> : null
            }
            <View style={Styles.checkView}>

                <CheckBox
                    // onPress={handleCheck}
                    style={Styles.checkBoxStyle}
                    boxType="square"
                    // value={check}
                    onChange={handleCheck} />

                <Text style={Styles.showStyle}> Show password</Text>
            </View>




            <TouchableOpacity onPress={Details}>
                <View style={Styles.signInView}>
                    <Text style={Styles.signInText}>Create Account</Text>
                </View>
            </TouchableOpacity>

            
                <View style={Styles.accountView}>
                <TouchableOpacity >
                    <Text style={Styles.accountText} onPress={() => { navigation.navigate('LogIn') }}>Already have an account?</Text>
                    </TouchableOpacity>
                </View>

         

            <View>
                <Text style={Styles.messageText}>
                    Message and Data raetes may apply.
                </Text>
            </View>
            <View style={Styles.conditionView}>
                <Text style={Styles.conditonText}>By continuing, you agree to Amazon's Conditions of Use and privacy Notice.</Text>
            </View>
            <View style={Styles.footerViewStyle}>
                <Text style={Styles.footerTextStyle}>Conditions of Use</Text>
                <Text style={Styles.footerTextStyle}> privacy</Text>
                <Text style={Styles.footerTextStyle}>Help</Text>
            </View>
            <View style={Styles.copyRightView}>
                <Text style={Styles.copyRight}> © 1996-2022, Amazon.com, Inc. or its affiliates</Text>
            </View>

        </View>

    )
}
