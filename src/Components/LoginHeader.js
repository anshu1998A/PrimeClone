import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react';
import homeStyle from '../styles/homePageStyle';
import Styles from '../styles/secondStyle';
import imagePath from '../constants/imagePath';

export default function LoginHeader() {
  return (
    <SafeAreaView style={{ backgroundColor: '#3b3737'}}>
                <View >
                    <Text style={homeStyle.PMImage}>prime video</Text>
                    <Image style={homeStyle.logoStyle} source={require('../assets/images/MoviesImages/MenuIcons/smile.png')}></Image>
                </View>
            
            <Text style={Styles.tittletext}>Sign-In</Text>
            <View style={Styles.forgotView}>
            <Text style={Styles.forgotText}>Forgot pasword?</Text>
            </View>
    </SafeAreaView>
  )
}