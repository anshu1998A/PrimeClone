import React, { useState } from 'react'
import { Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'


import CheckBox from '@react-native-community/checkbox';
import Styles from '../styles/secondStyle';
import homeStyle from '../styles/homePageStyle';
import { color } from 'react-native-reanimated';


export default function SignUp({ navigation }) {

    const [check, unCheck] = useState(false);
    const [number, onChangeNumber] = React.useState(null);

    const handleCheckbox = () => {
        if (check === false) {
            unCheck(true)

        } else {
            unCheck(false)
        }
    }

    return (
        <View style={{ backgroundColor: '#3b3737', flex: 1 }}>
            <View >
                <Text style={homeStyle.PMImage}>prime video</Text>
                <Image style={homeStyle.logoStyle} source={require('../assets/images/MoviesImages/MenuIcons/smile.png')}></Image>
            </View>

            {/* <TextInput
                style={Styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            /> */}
            <Text style={Styles.signUpTittletext}>Sign-Up with your Mobile number</Text>
            <View style={Styles.signUpView}>
                <TextInput placeholder='Email or phone number' placeholderTextColor={'grey'} style={Styles.placeHolderStyle} ></TextInput>
            </View>
            <View style={Styles.signUpView}>
                <TextInput placeholder='Set your password' placeholderTextColor={'grey'} style={Styles.placeHolderStyle}></TextInput>
            </View>
            <View style={Styles.signUpView}>
                <TextInput placeholder='Confirm your password' placeholderTextColor={'grey'} style={Styles.placeHolderStyle}></TextInput>
            </View>
            <View style={Styles.checkView}>

                <CheckBox
                    style={Styles.checkBoxStyle}
                    boxType="square"
                    value={check}
                    onChange={handleCheckbox} />

                <Text style={Styles.showStyle}> Show password</Text>
            </View>


            <View style={Styles.signInView}>
                <Text style={Styles.signInText}>Create Account</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('LogIn') }}>
                <View style={Styles.accountView}>

                    <Text style={Styles.accountText}>Already have an account?</Text>
                </View>

            </TouchableOpacity>

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
