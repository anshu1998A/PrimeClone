import React from 'react'
import {
  Image,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import imagePath from '../constants/imagePath';
import Styles from '../Styles';

export default function MenuBar() {
  return (
    <SafeAreaView >
      <View style={Styles.MenuContainerStyle}>
      <View>
        <Image source={imagePath.home} style={Styles.menuStyle} />
        <Text style={Styles.MenuText}>Home</Text>
      </View>
      <View>
        <Image source={imagePath.menu} style={Styles.menuStyle} />
        <Text style={Styles.MenuText}>Channel</Text>
      </View>
      <View>
        <Image source={imagePath.search} style={Styles.menuStyle} />
        <Text style={Styles.MenuText}>Find</Text>
      </View>
      <View>
        <Image source={require('../ICONS/download.png')} style={Styles.menuStyle} />
        <Text style={Styles.MenuText}>Download</Text>
      </View>
      <View>
        <Image source={require('../ICONS/profile.png')} style={Styles.menuStyle} />
        <Text style={Styles.MenuText}>My Stuff</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}
