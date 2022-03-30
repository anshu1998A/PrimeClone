import { View, 
    Text, 
    SafeAreaView,
    Image,
    FlatList } from 'react-native'
import React from 'react';
import HomeStyle from '../styles/homePageStyle';
import LanguageData from '../DataDetails/LanguageData';

export default function SelectLanguage() {
  return (
     <SafeAreaView> 
    <View>
      <Text style={HomeStyle.textStyle}>Watch in your Language</Text>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={LanguageData}
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