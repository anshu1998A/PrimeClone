import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import LoginHeader from '../Components/LoginHeader';
import LoginBox from '../Components/LoginBox';
import LogInFooter from '../Components/LogInFooter';

export default function Login({navigation}) {
  return (
    <View style={{ backgroundColor: '#3b3737', flex:1}}>
      <LoginHeader />
      <LoginBox navigation={navigation}/>
      <LogInFooter navigation={navigation}/>
    </View>

  )
}