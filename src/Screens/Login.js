import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import LoginHeader from '../Components/LoginHeader';
import LoginBox from '../Components/LoginBox';
import LogInFooter from '../Components/LogInFooter';
import Styles from '../styles/secondStyle';

export default function Login({navigation}) {
  return (
    <View style={Styles.logInPage}>
      <LoginHeader />
      <LoginBox navigation={navigation}/>
      <LogInFooter navigation={navigation}/>
    </View>

  )
}