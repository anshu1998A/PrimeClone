import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
// import { useState } from "react";
import Styles from '../styles/secondStyle';
import Divider from 'react-native-divider';

export default function LoginBox({navigation}) {
    // const [checked, setChecked] = React.useState(false);
    return (
        <View>
            <View style={Styles.logInView}>
                <TextInput placeholder='Email or phone number' placeholderTextColor={'grey'} style={Styles.placeHolderStyle}></TextInput>
            </View>
            <View style={Styles.logInView}>
                <TextInput placeholder='Amazon password' placeholderTextColor={'grey'} style={Styles.placeHolderStyle}></TextInput>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
            <View style={Styles.signInView}>
                <Text style={Styles.signInText}>sign-In</Text>
            </View>
            </TouchableOpacity>
            <View style={Styles.conditionView}>
            <Text style={Styles.conditonText}>By continuing, you agree to Amazon's Conditions of Use and privacy Notice.</Text>
            </View>
            <Divider orientation="middle" >
              <Text style={{color:"grey", fontSize:18}}>  New to Amazon?</Text>
                </Divider>
        </View>
    )
}