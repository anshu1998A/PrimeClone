import React from 'react'
import { Text, Image, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import HomeStyle from '../styles/homePageStyle'
import imagePath from '../constants/imagePath';



function Downloads({ navigation }) {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
      <SafeAreaView style={HomeStyle.dMainView}>
        <View style={HomeStyle.DownloadView}>
          <Text style={HomeStyle.downloadStyle}>Downloads</Text>
        </View>
        <View style={HomeStyle.downloadImage}>
          <Image source={imagePath.downloadImg} style={HomeStyle.dImageStyle}></Image>
          <Text style={HomeStyle.subTextStyle}>No videos downloaded</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DownloadSet')}>
            <Text style={HomeStyle.downloadSettingText}>
              Downloads settings {`>`}
            </Text>
          </TouchableOpacity>
          {/* <DropDown/> */}
        </View>

      </SafeAreaView>
    </>
  )
}

export default Downloads