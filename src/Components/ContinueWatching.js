import React from 'react'
import {
  SafeAreaView,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import HomeStyle from '../styles/homePageStyle';
import watching from '../DataDetails/watching';

export default function ContinueWatching() {
  return (
    <SafeAreaView>
      <View >
        <Text style={HomeStyle.textStyle}>Continue Watching</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={watching}
          renderItem={(element) => {
            return (
              <View style={HomeStyle.viewStyle}>
                <Image style={HomeStyle.WatchStyle} source={element.item.uri}>
                  </Image>
                <View style={HomeStyle.watchBar}/>
              </View>
            )
          }} />
      </View>
    </SafeAreaView>
  )
}
