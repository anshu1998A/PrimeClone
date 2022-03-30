import { View, Text, Image,SafeAreaView, FlatList } from 'react-native'
import React from 'react';
import HomeStyle from '../styles/homePageStyle';
import TopRatedData from '../DataDetails/TopRatedData';


export default function TopRated() {
  return (
    
        <SafeAreaView > 
    <View>
      <Text style={HomeStyle.textStyle}>Top TV {`>`}</Text>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={TopRatedData}
      renderItem={(element) =>{
        return (
            <View style={HomeStyle.languageViewStyle}>
              <Image style={HomeStyle.LanguageStyle} source={element.item.uri}>
                </Image>
            </View>
          )
        }}/>
    </View>
    </SafeAreaView>
    
  )
}