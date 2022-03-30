import { View, Text } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/secondStyle';

export default function LogInFooter() {
  return (
    <View>
      <LinearGradient
            
            colors={['#706e6b','#242322']}
            style={Styles.footerGradient}>
                <View style={Styles.newAccount}>
                <Text style={Styles.newTextStyle}> create a new Amazon account</Text>
                </View>
      </LinearGradient>
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