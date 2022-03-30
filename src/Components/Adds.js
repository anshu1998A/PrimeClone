import React from 'react';
import {
    SafeAreaView,
    Image,
    FlatList,
    View,
  } from 'react-native';
  import homeStyle from '../styles/homePageStyle';
  import Data from '../DataDetails/Data';
  
function Adds() {
  return (
    
      <SafeAreaView>
       
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={(element) => {
              return (
                <Image style={homeStyle.addStyles} source={element.item.uri}></Image> //render images from another file
              )
            }} />
        </View>
        </SafeAreaView>
  )
}

export default Adds;