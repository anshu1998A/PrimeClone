import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ChannelAddData from '../DataDetails/ChannelAddData';
import homeStyle from '../styles/homePageStyle';

function Channel() {
  return (
    <SafeAreaView style={homeStyle.channelAdd}>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={ChannelAddData}
          renderItem={(element) => {
            return (
              <Image style={homeStyle.addStyles} source={element.item.uri}></Image> //render images from another file
            )
          }} />
      </View>
    </SafeAreaView>
  )
}

export default Channel