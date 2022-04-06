import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react';
import homeStyle from '../styles/homePageStyle';
import Styles from '../styles/secondStyle';
import imagePath from '../constants/imagePath';

export default function LoginHeader() {
  return (
    <SafeAreaView >
                <View >
                    <Text style={homeStyle.PMImage}>prime video</Text>
                    <Image style={homeStyle.logoStyle} source={imagePath.smile}></Image>
                </View>
            
            <Text style={Styles.tittletext}>Sign-In</Text>
            <View style={Styles.forgotView}>
            <Text style={Styles.forgotText}>Forgot pasword?</Text>
            </View>
    </SafeAreaView>
  )
}