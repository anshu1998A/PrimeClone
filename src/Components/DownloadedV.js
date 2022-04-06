
import { FlatList } from 'react-native';
import { Text, View, Image, ImageBackground } from 'react-native'
import DownloadData from '../DataDetails/DownloadData';
import React from 'react';
import homeStyle from '../styles/homePageStyle';
import { ScrollView } from 'react-native-gesture-handler';
import imagePath from '../constants/imagePath';

export default function DownloadedV() {
  return (
      <ScrollView style={{backgroundColor:'#232F3E'}} >
  <View style={{paddingBottom:250, }}>
    <FlatList
      data={DownloadData}
      renderItem={(element) => {
        return (
          <View style={homeStyle.downloadMain}>
            <ImageBackground style={homeStyle.downloadVideo} source={element.item.uri}>
              <View style={homeStyle.subViewStyle}>
                <View style={homeStyle.childView}>
                </View>
              </View>
            </ImageBackground>
            <View style={{ padding: 10 }}>
              <Text style={homeStyle.flatListstyle}>{element.item.tittle}</Text>
              <Text style={{ color: 'grey' }}>{element.item.releaseDate}</Text>
              <Text style={homeStyle.primeText}>prime</Text>
              </View>
              <View style={homeStyle.seeMore}>
                <Image source={imagePath.seeMore} style={homeStyle.seeMoreStyle} />
              </View>
            
          </View>
        )
      }} />
  </View>
  </ScrollView>
  )
}