import React from 'react';
import {
  SafeAreaView,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import HomeStyle from '../styles/homePageStyle';
import MostPopular1 from '../DataDetails/MostPopular';

export default function MostPopular() {
  return (
    <SafeAreaView>
        <View>
            <Text style={HomeStyle.textStyle}>Most Popular {`>`}</Text>
        </View>
        <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={MostPopular1}
                    renderItem={(element) => {
                        return (
                          <View style = {HomeStyle.viewStyle}>
                            <Image style={HomeStyle.WatchStyle} source={element.item.uri}>
                              </Image>
                        </View>)
                    }} />
            </View>
    </SafeAreaView>
  )
}
