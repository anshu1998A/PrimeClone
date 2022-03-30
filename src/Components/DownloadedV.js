
import { FlatList } from 'react-native';
import { Text, View, Image, ImageBackground } from 'react-native'
import DownloadData from '../DataDetails/DownloadData';
import React from 'react';
import homeStyle from '../styles/homePageStyle';
import { ScrollView } from 'react-native-gesture-handler';

export default function DownloadedV() {
  return (
      <ScrollView style={{backgroundColor:'#232F3E'}} >
  <View style={{paddingBottom:220, }}>
    <FlatList
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      data={DownloadData}
      renderItem={(element) => {
        return (
          <View style={{ backgroundColor: '#123456', marginBottom: 5, flexDirection: 'row' }}>
            <ImageBackground style={homeStyle.downloadVideo} source={element.item.uri}>
              <View style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'grey', opacity: 0.9, height: 5, width: '100%' }}>
                <View style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: '#00BFFF', opacity: 1, height: 5, width: '30%' }}>
                </View>
              </View>
            </ImageBackground>
            <View style={{ padding: 10 }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '800', paddingBottom: 7 }}>{element.item.tittle}</Text>
              <Text style={{ color: 'grey' }}>{element.item.releaseDate}</Text>
              <Text style={{ fontWeight: '800', color: '#3BB9FF' }}>prime</Text>
              </View>
              <View style={{ position: 'absolute', bottom: 10, right:10, }}>
                <Image source={require('../assets/images/MoviesImages/MenuIcons/more.png')} style={{ height: 20, width: 20 }} />
              </View>
            
          </View>
        )
      }} />
  </View>
  </ScrollView>
  )
}