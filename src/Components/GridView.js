import React from 'react';
import {
  SafeAreaView,
  Image,
  FlatList,

  Text,
  View,
} from 'react-native';
import HomeStyle from '../styles/homePageStyle';
import GridData from '../DataDetails/GridData';

export default function grid() {
  return (
    <SafeAreaView>
      <View style={{marginTop:12}}>
        <Text style={HomeStyle.textStyle}>Feel-good movies{`>`}</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={GridData}
          // numColumns = {2}

          renderItem={(element) => {
            return (
              <View>
                <View style={HomeStyle.gridViewStyle}>
                  <Image style={HomeStyle.gridImageStyle} source={element.item.uri}>

                  </Image>
                </View>
                <View style={HomeStyle.gridViewStyle}>
                  <Image style={HomeStyle.gridImageStyle} source={element.item.url}>
                  </Image>
                </View>
              </View>)
          }}
        />

      </View>
    </SafeAreaView>
  )
}
