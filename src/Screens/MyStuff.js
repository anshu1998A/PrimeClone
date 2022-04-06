import React from 'react'
import { Text, View, SafeAreaView, Image, ImageBackground } from 'react-native'

import Header from '../Components/Header';
import DownloadedV from '../Components/DownloadedV';

function MyStuff({navigation}) {
  return (
    
<View>
  <Header navigation={navigation}/>
  <DownloadedV/>
</View>
      
    
  )
}

export default MyStuff
